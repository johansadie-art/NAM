// ============================================================
// NAM CMS 2.0 — Home Dashboard (PI Case Manager view)
// ============================================================

function Dashboard({ onOpenCase, onNav }) {
  const D = window.NAM_DATA;

  const myTasks = D.tasks.filter(t => t.owner === D.users.me.id);
  const overdueTasks = myTasks.filter(t => t.status === 'overdue');
  const todayTasks = myTasks.filter(t => {
    if (t.status === 'overdue') return false;
    const due = new Date(t.due);
    const today = new Date('2026-05-07');
    return due.toDateString() === today.toDateString();
  });
  const upcomingTasks = myTasks.filter(t => {
    if (t.status === 'overdue') return false;
    const due = new Date(t.due);
    const today = new Date('2026-05-07');
    return due > today && due.toDateString() !== today.toDateString();
  });

  const flaggedNY = D.cases.filter(c => c.flags.includes('ny') && c.status !== 'closed' && c.status !== 'settled');
  const unactioned = D.cases.filter(c => c.flags.includes('unactioned-48h'));
  const slaRisk = D.cases.filter(c => c.flags.includes('sla-risk'));

  const newToday = D.cases.filter(c => c.status === 'new').length;
  const todayHearings = D.hearings.filter(h => h.status === 'today').length;
  const pendingInvoices = D.invoices.filter(i => i.status === 'pending-review' || i.status === 'flagged').length;

  return (
    <div style={{ padding: '24px 28px 48px', maxWidth: 1320, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 22 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 6 }}>
            Thursday · 7 May 2026 · {D.users.me.role}
          </div>
          <h1 className="title-serif" style={{ fontSize: 36 }}>Good morning, Jordan.</h1>
          <div style={{ marginTop: 6, color: 'var(--fg-2)', fontSize: 14, maxWidth: '60ch' }}>
            {overdueTasks.length} overdue · {todayTasks.length} due today · {newToday} new {newToday === 1 ? 'case' : 'cases'} waiting on first action.
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button variant="outline" icon="search" onClick={() => onNav('cases')}>Search a case</Button>
          <Button variant="outline" icon="calendar" onClick={() => onNav('scheduling')}>Schedule hearing</Button>
          <Button variant="primary" icon="plus" onClick={() => onNav('intake')}>New case</Button>
        </div>
      </div>

      {/* Stat row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14, marginBottom: 24 }}>
        <div className="stat-card">
          <div className="stat-label">My queue</div>
          <div className="stat-num">{myTasks.length}</div>
          <div style={{ fontSize: 12, color: 'var(--fg-2)' }}>
            <span style={{ color: 'var(--destructive)', fontWeight: 500 }}>{overdueTasks.length} overdue</span> · {todayTasks.length} today
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">New cases</div>
          <div className="stat-num">{newToday}</div>
          <div style={{ fontSize: 12, color: 'var(--fg-2)' }}>{unactioned.length} unactioned 48h+</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Hearings today</div>
          <div className="stat-num">{todayHearings}</div>
          <div style={{ fontSize: 12, color: 'var(--fg-2)' }}>{D.hearings.filter(h => h.status === 'pending-confirmation').length} awaiting confirmation</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Open invoices</div>
          <div className="stat-num">{pendingInvoices}</div>
          <div style={{ fontSize: 12, color: 'var(--fg-2)' }}>{D.invoices.filter(i => i.status === 'overdue').length} past due</div>
        </div>
        <div className="stat-card" style={{ background: 'var(--accent)', borderColor: '#e8d27a' }}>
          <div className="stat-label" style={{ color: '#7f201f' }}>Cases on hold</div>
          <div className="stat-num" style={{ color: '#7f201f' }}>{slaRisk.length}</div>
          <div style={{ fontSize: 12, color: '#7f201f' }}>SLA at risk — review</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24 }}>
        {/* My queue */}
        <div className="card">
          <div style={{ padding: '16px 20px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--stroke-1)' }}>
            <div>
              <div className="title-serif" style={{ fontSize: 18 }}>My queue</div>
              <div style={{ fontSize: 12, color: 'var(--fg-2)', marginTop: 2 }}>Tasks owned by you, ordered by SLA. Overdue items auto-roll until resolved.</div>
            </div>
            <Button variant="ghost" size="sm" iconRight="arrowRight" onClick={() => onNav('tasks')}>All tasks</Button>
          </div>
          <div>
            {overdueTasks.length > 0 && (
              <>
                <div style={{ padding: '10px 20px 6px', fontSize: 11, fontFamily: 'IBM Plex Mono, monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--destructive)', fontWeight: 500 }}>
                  Overdue · {overdueTasks.length}
                </div>
                {overdueTasks.map(t => <TaskRow key={t.id} task={t} onOpenCase={onOpenCase} />)}
              </>
            )}
            <div style={{ padding: '10px 20px 6px', fontSize: 11, fontFamily: 'IBM Plex Mono, monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-2)', fontWeight: 500 }}>
              Today · {todayTasks.length}
            </div>
            {todayTasks.map(t => <TaskRow key={t.id} task={t} onOpenCase={onOpenCase} />)}

            <div style={{ padding: '10px 20px 6px', fontSize: 11, fontFamily: 'IBM Plex Mono, monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-2)', fontWeight: 500 }}>
              Upcoming · {upcomingTasks.length}
            </div>
            {upcomingTasks.slice(0, 3).map(t => <TaskRow key={t.id} task={t} onOpenCase={onOpenCase} />)}
          </div>
        </div>

        {/* Right column */}
        <div className="col gap-5">
          {/* Flagged */}
          <div className="card">
            <div style={{ padding: '14px 18px 10px', borderBottom: '1px solid var(--stroke-1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className="row gap-2">
                <Icon name="flag" size={14} style={{ color: 'var(--primary)' }} />
                <span style={{ fontWeight: 600, fontSize: 14 }}>Flagged cases</span>
              </div>
              <span style={{ fontSize: 11, color: 'var(--fg-2)', fontFamily: 'IBM Plex Mono, monospace' }}>NY · admin rule</span>
            </div>
            <div>
              {flaggedNY.slice(0, 4).map(c => (
                <div key={c.id} className="hover-row row-flag" style={{ padding: '10px 18px', borderBottom: '1px solid var(--stroke-1)' }} onClick={() => onOpenCase(c.id)}>
                  <div className="row gap-3" style={{ alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 500 }}>{c.claimant}</div>
                      <div style={{ fontSize: 11.5, color: 'var(--fg-2)', marginTop: 2, fontFamily: 'IBM Plex Mono, monospace' }}>
                        {c.id} · {c.county}
                      </div>
                    </div>
                    <StatusPill status={c.status} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity */}
          <div className="card">
            <div style={{ padding: '14px 18px 10px', borderBottom: '1px solid var(--stroke-1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: 600, fontSize: 14 }}>Recent activity</span>
              <span style={{ fontSize: 11, color: 'var(--fg-2)', fontFamily: 'IBM Plex Mono, monospace' }}>Last 24h</span>
            </div>
            <div style={{ padding: '4px 18px 10px', maxHeight: 320, overflowY: 'auto' }}>
              {D.activity.slice(0, 6).map(a => (
                <div key={a.id} className="feed-item" onClick={() => onOpenCase(a.case)} style={{ cursor: 'pointer' }}>
                  <div className="feed-icon" style={{
                    background: a.type === 'intake' ? '#fef2c5' : a.type === 'hearing' ? '#fde2c8' : a.type === 'docusign' ? '#e1edd8' : a.type === 'finance' ? '#f8e3e3' : 'var(--muted)',
                    color: a.type === 'intake' ? '#7f201f' : a.type === 'hearing' ? '#8f4113' : a.type === 'docusign' ? '#4a6b2a' : a.type === 'finance' ? '#7a1f1f' : 'var(--fg-2)',
                  }}>
                    <Icon name={a.type === 'intake' ? 'inbox' : a.type === 'hearing' ? 'calendar' : a.type === 'docusign' ? 'check' : a.type === 'finance' ? 'dollar' : a.type === 'email' ? 'mail' : a.type === 'doc' ? 'fileText' : 'refresh'} size={14} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, lineHeight: 1.4 }}>{a.text}</div>
                    <div style={{ fontSize: 11, color: 'var(--fg-2)', marginTop: 3, fontFamily: 'IBM Plex Mono, monospace' }}>
                      {a.case.replace('NAM-PI-','PI · ')} · {fmtTimeAgo(a.at)} · {a.by}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TaskRow({ task, onOpenCase }) {
  const D = window.NAM_DATA;
  const c = D.cases.find(x => x.id === task.case);
  const overdue = task.status === 'overdue';
  return (
    <div className={`hover-row ${overdue ? 'row-flag' : ''}`}
         style={{ padding: '12px 20px', borderBottom: '1px solid var(--stroke-1)', display: 'flex', alignItems: 'center', gap: 12 }}
         onClick={() => onOpenCase(task.case)}>
      <div style={{
        width: 18, height: 18, borderRadius: 4, border: `1.5px solid ${overdue ? 'var(--destructive)' : 'var(--stroke-2)'}`,
        flexShrink: 0,
      }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13.5, fontWeight: 500 }}>{task.title}</div>
        <div style={{ fontSize: 11.5, color: 'var(--fg-2)', marginTop: 2, fontFamily: 'IBM Plex Mono, monospace' }}>
          {c ? c.claimant : '—'} · {task.case.replace('NAM-PI-','PI · ')} · {task.source}
        </div>
      </div>
      <Pill tone={overdue ? 'danger' : task.sla.includes('h') ? 'amber' : 'muted'}>
        {overdue ? 'Overdue' : `Due ${fmtDate(task.due)}`}
      </Pill>
    </div>
  );
}

Object.assign(window, { Dashboard });
