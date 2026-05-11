// Authenticated portal screens: Dashboard, Case View, Notifications, Invoices

// ---------------- Demo data ----------------
const CASES = [
  { id: 'NAM-2026-04183', parties: 'Hartwell v. Cordova Logistics', type: 'Personal Injury', status: 'awaiting-response', activity: 'Today, 9:14 AM', hearing: 'Jun 14, 2026', actionLabel: 'Awaiting respondent confirmation' },
  { id: 'NAM-2026-04102', parties: 'Mercer Industrial Arbitration', type: 'Commercial', status: 'hearing-scheduled', activity: 'Yesterday', hearing: 'Jun 22, 2026', actionLabel: null },
  { id: 'NAM-2026-03987', parties: 'Driggs Insurance Carrier #4471', type: 'No-Fault', status: 'invoice-due', activity: '2 days ago', hearing: '—', actionLabel: 'Invoice $2,450 due May 24' },
  { id: 'NAM-2026-03945', parties: 'Vasquez v. Sunridge Apartments', type: 'Consumer', status: 'neutral-selection', activity: '3 days ago', hearing: 'TBD', actionLabel: 'Submit neutral selection by May 30' },
  { id: 'NAM-2026-03812', parties: 'Pacific Mutual Healthcare', type: 'Healthcare', status: 'decision-released', activity: 'May 1, 2026', hearing: '—', actionLabel: null },
  { id: 'NAM-2026-03788', parties: 'Reynolds v. Beacon Capital LLC', type: 'Employment', status: 'in-progress', activity: 'Apr 28, 2026', hearing: 'Jul 8, 2026', actionLabel: null },
  { id: 'NAM-2026-03654', parties: 'Foley Trucking Demand', type: 'Personal Injury', status: 'docs-needed', activity: 'Apr 22, 2026', hearing: 'TBD', actionLabel: 'Upload proof of service' },
  { id: 'NAM-2026-03402', parties: 'Whitfield v. Atlantic Re', type: 'No-Fault', status: 'decision-pending', activity: 'Apr 14, 2026', hearing: 'Heard Apr 9', actionLabel: null },
  { id: 'NAM-2026-02981', parties: 'Bayfront Properties Mediation', type: 'Commercial', status: 'closed', activity: 'Mar 28, 2026', hearing: '—', actionLabel: null },
];

// ---------------- Dashboard ----------------
function Dashboard({ navigate }) {
  const [filter, setFilter] = React.useState('all');
  const [search, setSearch] = React.useState('');

  const filtered = CASES.filter(c => {
    if (filter === 'action' && !c.actionLabel) return false;
    if (filter === 'open' && c.status === 'closed') return false;
    if (filter === 'closed' && c.status !== 'closed') return false;
    if (search && !(`${c.id} ${c.parties} ${c.type}`).toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const actionCount = CASES.filter(c => c.actionLabel).length;

  return (
    <>
      <SubNav crumbs={[{ label: 'My cases' }]} />
      <div className="page page-wide fade-in">
        <div className="page-header">
          <div>
            <div className="eyebrow" style={{ marginBottom: 6 }}>Morgan & Pell LLP — Plaintiff PI practice</div>
            <h1 className="page-title">Good afternoon, Rachel.</h1>
            <p className="page-sub">You have <strong style={{ color: 'var(--warning)' }}>{actionCount} cases requiring action</strong> and 2 hearings this week.</p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn btn-outline" onClick={() => navigate('intake')}>
              <Icon name="upload" size={15} /> Mass filing
            </button>
            <button className="btn btn-primary" onClick={() => navigate('intake')}>
              <Icon name="plus" size={15} /> Submit a case
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 28 }}>
          {[
            { label: 'Active cases', val: '37', delta: '+4 this month', icon: 'briefcase', tint: 'var(--navy-50)', tintFg: 'var(--navy)' },
            { label: 'Action required', val: '5', delta: '2 due this week', icon: 'alert', tint: 'var(--warning-bg)', tintFg: 'var(--warning)' },
            { label: 'Hearings this month', val: '8', delta: '3 virtual · 5 in-person', icon: 'calendar', tint: 'var(--gold-soft)', tintFg: '#6F541F' },
            { label: 'Outstanding balance', val: '$8,920', delta: '3 invoices unpaid', icon: 'card', tint: 'var(--danger-bg)', tintFg: 'var(--danger)' },
          ].map(s => (
            <div key={s.label} className="card" style={{ padding: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <div className="eyebrow">{s.label}</div>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: s.tint, color: s.tintFg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={s.icon} size={16} />
                </div>
              </div>
              <div className="serif" style={{ fontSize: 32, fontWeight: 700, lineHeight: 1, marginBottom: 6 }}>{s.val}</div>
              <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{s.delta}</div>
            </div>
          ))}
        </div>

        {/* Action callout strip */}
        <div className="card" style={{ padding: 0, marginBottom: 24, overflow: 'hidden', borderColor: 'var(--gold)' }}>
          <div style={{ background: 'linear-gradient(90deg, var(--gold-soft), #fff)', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 16, borderBottom: '1px solid var(--stroke-1)' }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--gold)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="alert" size={18} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600 }}>Submit your neutral selection for Vasquez v. Sunridge Apartments</div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Selections are due May 30 — 5 days remaining. Eliminate up to three candidates from the slate.</div>
            </div>
            <button className="btn btn-primary btn-sm" onClick={() => navigate('case:NAM-2026-03945')}>
              Open case <Icon name="arrowRight" size={14} />
            </button>
          </div>
        </div>

        {/* Tabs + table */}
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid var(--stroke-1)' }}>
            {[
              { id: 'all', label: 'All cases', count: CASES.length },
              { id: 'action', label: 'Action required', count: actionCount },
              { id: 'open', label: 'Open', count: CASES.filter(c => c.status !== 'closed').length },
              { id: 'closed', label: 'Closed', count: CASES.filter(c => c.status === 'closed').length },
            ].map(t => (
              <div key={t.id} className={`tab ${filter === t.id ? 'active' : ''}`} style={{ padding: '8px 14px', borderBottom: 'none', marginBottom: 0, borderRadius: 6, background: filter === t.id ? 'var(--navy-50)' : 'transparent' }}
                   onClick={() => setFilter(t.id)}>
                {t.label} <span className="tab-count">{t.count}</span>
              </div>
            ))}
            <div style={{ flex: 1 }} />
            <div style={{ position: 'relative' }}>
              <Icon name="search" size={14} color="var(--ink-3)" style={{ position: 'absolute', left: 10, top: 9 }} />
              <input className="input" placeholder="Search by case #, party…" value={search} onChange={(e) => setSearch(e.target.value)}
                     style={{ width: 260, paddingLeft: 32, height: 34, padding: '6px 12px 6px 32px' }} />
            </div>
            <button className="btn btn-outline btn-sm">
              <Icon name="filter" size={14} /> Filter
            </button>
          </div>

          <table className="data">
            <thead>
              <tr>
                <th style={{ width: 160 }}>Case #</th>
                <th>Parties</th>
                <th style={{ width: 130 }}>Type</th>
                <th style={{ width: 200 }}>Status</th>
                <th style={{ width: 130 }}>Hearing</th>
                <th style={{ width: 130 }}>Last activity</th>
                <th style={{ width: 60 }}></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(c => (
                <tr key={c.id} className="clickable" onClick={() => navigate(`case:${c.id}`)}>
                  <td className="mono" style={{ color: 'var(--ink-2)', fontSize: 12.5 }}>{c.id}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 500 }}>{c.parties}</div>
                        {c.actionLabel && (
                          <div style={{ fontSize: 12, color: 'var(--warning)', marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
                            <Icon name="alert" size={11} /> {c.actionLabel}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td><span className="badge badge-muted">{c.type}</span></td>
                  <td><StatusBadge status={c.status} /></td>
                  <td style={{ fontSize: 13, color: 'var(--ink-2)' }}>{c.hearing}</td>
                  <td style={{ fontSize: 13, color: 'var(--ink-3)' }}>{c.activity}</td>
                  <td><Icon name="chevronRight" size={16} color="var(--ink-4)" /></td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div style={{ padding: 64, textAlign: 'center', color: 'var(--ink-3)' }}>
              No cases match your filters.
            </div>
          )}
        </div>

        {/* Two column: hearings + recent activity */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 24 }}>
          <div className="card" style={{ padding: 0 }}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--stroke-1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3>Upcoming hearings</h3>
              <a className="btn-link" style={{ fontSize: 13 }}>View calendar</a>
            </div>
            {[
              { date: 'Jun 14', time: '10:00 AM EST', case: 'Hartwell v. Cordova Logistics', type: 'Virtual · Zoom', icon: 'zoom' },
              { date: 'Jun 22', time: '2:30 PM EST', case: 'Mercer Industrial Arbitration', type: '101 Park Ave, NY · Room 1402', icon: 'building' },
              { date: 'Jul 08', time: '9:00 AM EST', case: 'Reynolds v. Beacon Capital LLC', type: 'Virtual · Zoom', icon: 'zoom' },
            ].map((h, i) => (
              <div key={i} style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 16, borderBottom: i < 2 ? '1px solid var(--stroke-1)' : 'none' }}>
                <div style={{ minWidth: 48, textAlign: 'center', borderRight: '1px solid var(--stroke-1)', paddingRight: 12 }}>
                  <div className="serif" style={{ fontSize: 20, fontWeight: 700, color: 'var(--navy)' }}>{h.date.split(' ')[1]}</div>
                  <div className="eyebrow" style={{ fontSize: 10 }}>{h.date.split(' ')[0]}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>{h.case}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-3)', display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
                    <Icon name="clock" size={11} /> {h.time} · <Icon name={h.icon} size={11} /> {h.type}
                  </div>
                </div>
                <button className="btn btn-ghost btn-sm">
                  <Icon name="externalLink" size={13} /> Join
                </button>
              </div>
            ))}
          </div>

          <div className="card" style={{ padding: 0 }}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--stroke-1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3>Recent activity</h3>
              <a className="btn-link" style={{ fontSize: 13 }} onClick={() => navigate('notifications')}>View all</a>
            </div>
            {[
              { ic: 'check', tint: 'var(--success)', t: 'Decision released — Pacific Mutual Healthcare', sub: 'Final award available in your documents folder', time: '2 hours ago' },
              { ic: 'mail', tint: 'var(--navy)', t: 'Cordova Logistics confirmed participation', sub: 'NAM-2026-04183 has moved to neutral selection', time: 'Yesterday' },
              { ic: 'card', tint: 'var(--warning)', t: 'Invoice issued — Driggs Insurance #4471', sub: '$2,450 due May 24, 2026', time: '2 days ago' },
              { ic: 'calendar', tint: 'var(--navy)', t: 'Hearing scheduled — Mercer Industrial', sub: 'Jun 22 at 2:30 PM, 101 Park Ave Room 1402', time: '3 days ago' },
            ].map((a, i) => (
              <div key={i} style={{ padding: '14px 20px', display: 'flex', alignItems: 'flex-start', gap: 12, borderBottom: i < 3 ? '1px solid var(--stroke-1)' : 'none' }}>
                <div style={{ width: 32, height: 32, borderRadius: 999, background: 'var(--bg-muted)', color: a.tint, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={a.ic} size={14} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 500 }}>{a.t}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>{a.sub}</div>
                </div>
                <div style={{ fontSize: 11.5, color: 'var(--ink-4)', whiteSpace: 'nowrap' }}>{a.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// ---------------- Case View ----------------
function CaseView({ caseId, navigate }) {
  const [tab, setTab] = React.useState('overview');
  const c = CASES.find(c => c.id === caseId) || CASES[0];

  return (
    <>
      <SubNav crumbs={[
        { label: 'My cases', onClick: () => navigate('dashboard') },
        { label: c.id },
      ]} right={
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn btn-ghost btn-sm"><Icon name="send" size={13} /> Message case manager</button>
          <button className="btn btn-outline btn-sm"><Icon name="download" size={13} /> Export case file</button>
        </div>
      } />

      <div className="page fade-in">
        {/* Case header */}
        <div className="card" style={{ padding: 0, marginBottom: 24, overflow: 'hidden' }}>
          <div style={{ padding: '24px 28px', display: 'flex', alignItems: 'flex-start', gap: 24 }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <div className="mono" style={{ fontSize: 12, color: 'var(--ink-3)' }}>{c.id}</div>
                <span className="badge badge-muted">{c.type}</span>
                <StatusBadge status={c.status} />
              </div>
              <h1 className="page-title">{c.parties}</h1>
              <p className="page-sub">Filed May 6, 2026 — Voluntary arbitration · Case manager: <a className="btn-link">Sharon Liu</a></p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, paddingLeft: 24, borderLeft: '1px solid var(--stroke-1)' }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 4 }}>Next hearing</div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{c.hearing !== '—' && c.hearing !== 'TBD' ? c.hearing : '—'}</div>
                <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>10:00 AM EST · Virtual</div>
              </div>
              <div>
                <div className="eyebrow" style={{ marginBottom: 4 }}>Filed amount</div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>$185,000</div>
                <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>Disputed</div>
              </div>
              <div>
                <div className="eyebrow" style={{ marginBottom: 4 }}>Outstanding</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: c.status === 'invoice-due' ? 'var(--danger)' : 'var(--ink-1)' }}>{c.status === 'invoice-due' ? '$2,450' : '$0.00'}</div>
                <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{c.status === 'invoice-due' ? 'Due May 24' : 'Up to date'}</div>
              </div>
            </div>
          </div>

          {/* Action banner */}
          {c.actionLabel && (
            <div style={{ background: 'var(--warning-bg)', borderTop: '1px solid var(--warning)', padding: '14px 28px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <Icon name="alert" size={18} color="var(--warning)" />
              <div style={{ flex: 1, fontSize: 13.5 }}>
                <strong>Action required:</strong> {c.actionLabel}.
              </div>
              <button className="btn btn-sm" style={{ background: 'var(--warning)', color: '#fff' }}>Take action <Icon name="arrowRight" size={13} /></button>
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="tabs">
          {[
            { id: 'overview',  label: 'Overview' },
            { id: 'documents', label: 'Documents', count: 14 },
            { id: 'hearings',  label: 'Hearings', count: 2 },
            { id: 'neutral',   label: 'Neutral selection' },
            { id: 'invoices',  label: 'Invoices', count: 3 },
            { id: 'messages',  label: 'Messages', count: 6 },
          ].map(t => (
            <div key={t.id} className={`tab ${tab === t.id ? 'active' : ''}`} onClick={() => setTab(t.id)}>
              {t.label}
              {t.count !== undefined && <span className="tab-count">{t.count}</span>}
            </div>
          ))}
        </div>

        {tab === 'overview' && <CaseOverview c={c} />}
        {tab === 'documents' && <CaseDocuments />}
        {tab === 'hearings' && <CaseHearings />}
        {tab === 'neutral' && <CaseNeutral />}
        {tab === 'invoices' && <CaseInvoices navigate={navigate} caseId={caseId} />}
        {tab === 'messages' && <CaseMessages />}
      </div>
    </>
  );
}

function CaseOverview({ c }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 24 }} className="fade-in">
      {/* Timeline */}
      <div className="card" style={{ padding: 28 }}>
        <h3 style={{ marginBottom: 24 }}>Case timeline</h3>
        <div style={{ position: 'relative', paddingLeft: 28 }}>
          <div style={{ position: 'absolute', left: 8, top: 4, bottom: 4, width: 2, background: 'var(--stroke-1)' }} />
          {[
            { d: 'May 6', t: 'Case filed', body: 'Demand for arbitration submitted by Morgan & Pell LLP. Case reference NAM-2026-04183 issued.', done: true },
            { d: 'May 7', t: 'Respondent notified', body: 'Email response link sent to Cordova Logistics legal department.', done: true },
            { d: 'May 9', t: 'Respondent confirmed', body: 'Cordova Logistics confirmed participation. DRA signed via DocuSign.', done: true },
            { d: 'May 12', t: 'Filing fee paid', body: '$1,200 paid by Visa ending 4429.', done: true },
            { d: 'In progress', t: 'Neutral selection', body: 'NAM publishing slate of three arbitrator candidates. You\'ll be invited to submit preferences within 5 business days.', done: false, current: true },
            { d: 'Pending', t: 'Hearing scheduled', body: 'Once a neutral is assigned, NAM will coordinate hearing dates with all parties.', done: false },
            { d: 'Pending', t: 'Decision released', body: 'After hearing concludes and any payment-hold clears, the award will be available here.', done: false },
          ].map((e, i) => (
            <div key={i} style={{ marginBottom: 20, position: 'relative' }}>
              <div style={{
                position: 'absolute', left: -28, top: 4,
                width: 18, height: 18, borderRadius: 999,
                background: e.done ? 'var(--success)' : (e.current ? '#fff' : 'var(--bg-muted)'),
                border: e.current ? '2px solid var(--navy)' : (e.done ? 'none' : '1px solid var(--stroke-2)'),
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff',
              }}>
                {e.done && <Icon name="check" size={11} />}
                {e.current && <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--navy)' }} />}
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 4 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: e.done ? 'var(--ink-1)' : (e.current ? 'var(--navy)' : 'var(--ink-3)') }}>{e.t}</span>
                <span style={{ fontSize: 12, color: 'var(--ink-4)' }}>{e.d}</span>
                {e.current && <span className="badge badge-navy">In progress</span>}
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{e.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right column */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div className="card" style={{ padding: 20 }}>
          <h4 style={{ marginBottom: 14 }}>Parties</h4>
          {[
            { name: 'Karen Hartwell', role: 'Claimant', sub: 'Represented by Morgan & Pell LLP' },
            { name: 'Cordova Logistics, Inc.', role: 'Respondent', sub: 'Represented by Linley & Associates' },
            { name: 'GEICO (claim #C-44129)', role: 'Carrier', sub: 'Adjuster: Marcus Tan' },
          ].map((p, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderTop: i > 0 ? '1px solid var(--stroke-1)' : 'none' }}>
              <Avatar name={p.name} size={32} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{p.name}</div>
                <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{p.sub}</div>
              </div>
              <span className="badge badge-muted" style={{ fontSize: 10 }}>{p.role}</span>
            </div>
          ))}
        </div>

        <div className="card" style={{ padding: 20 }}>
          <h4 style={{ marginBottom: 14 }}>Case manager</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <Avatar name="Sharon Liu" size={44} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 500 }}>Sharon Liu</div>
              <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>Senior CM · PI division</div>
            </div>
          </div>
          <button className="btn btn-outline btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
            <Icon name="send" size={13} /> Send a message
          </button>
        </div>

        <div className="card" style={{ padding: 20, background: 'var(--navy-50)', borderColor: 'var(--navy-100)' }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <Icon name="info" size={16} color="var(--navy)" style={{ marginTop: 2 }} />
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--navy)', marginBottom: 4 }}>About this status</div>
              <div style={{ fontSize: 12.5, color: 'var(--ink-2)' }}>Neutral selection is open. NAM has published a slate of arbitrator candidates. Submit your preferences (eliminate up to 3) by the deadline. Your selections are kept confidential — the opposing party never sees them.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseDocuments() {
  const docs = [
    { name: 'Demand for arbitration.pdf', folder: 'Intake', size: '2.4 MB', uploaded: 'May 6 by Rachel Morgan', shared: 'You + NAM' },
    { name: 'Proof of service — certified mail receipt.pdf', folder: 'Intake', size: '480 KB', uploaded: 'May 6 by Rachel Morgan', shared: 'You + NAM' },
    { name: 'Police report — incident 2025-082.pdf', folder: 'Evidence', size: '1.1 MB', uploaded: 'May 6 by Rachel Morgan', shared: 'You + NAM' },
    { name: 'Medical records bundle (Dr. Hauer).pdf', folder: 'Evidence', size: '12.6 MB', uploaded: 'May 8 by Rachel Morgan', shared: 'You + NAM' },
    { name: 'Signed DRA — Cordova Logistics.pdf', folder: 'Agreements', size: '320 KB', uploaded: 'May 9 by NAM', shared: 'All parties + NAM', highlight: true },
    { name: 'Rules of procedure (PI 2024).pdf', folder: 'Reference', size: '780 KB', uploaded: 'May 7 by NAM', shared: 'All parties + NAM' },
  ];
  return (
    <div className="fade-in">
      <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
        <div style={{ width: 220, flexShrink: 0 }}>
          <div className="card" style={{ padding: 12 }}>
            <div className="eyebrow" style={{ padding: '4px 8px 8px' }}>Folders</div>
            {[
              { id: 'all', label: 'All documents', count: 14, icon: 'folder', active: true },
              { id: 'intake', label: 'Intake', count: 3, icon: 'folder' },
              { id: 'evidence', label: 'Evidence', count: 6, icon: 'folder' },
              { id: 'agreements', label: 'Agreements', count: 2, icon: 'folder' },
              { id: 'hearings', label: 'Hearing materials', count: 1, icon: 'folder' },
              { id: 'reference', label: 'Reference', count: 2, icon: 'folder' },
            ].map(f => (
              <div key={f.id} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '8px 10px', borderRadius: 6,
                background: f.active ? 'var(--navy-50)' : 'transparent',
                color: f.active ? 'var(--navy)' : 'var(--ink-2)',
                fontSize: 13, fontWeight: f.active ? 600 : 400,
                cursor: 'pointer',
              }}>
                <Icon name={f.icon} size={14} />
                <span style={{ flex: 1 }}>{f.label}</span>
                <span style={{ fontSize: 11, color: 'var(--ink-4)' }}>{f.count}</span>
              </div>
            ))}
          </div>
          <div style={{ background: 'var(--bg-muted)', padding: 12, borderRadius: 8, marginTop: 16, fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.5 }}>
            <Icon name="lock" size={14} color="var(--ink-3)" style={{ verticalAlign: '-2px', marginRight: 4 }} />
            You see only your own folder and documents NAM has shared with all parties. The opposing party's submissions are not visible.
          </div>
        </div>

        <div style={{ flex: 1 }}>
          {/* Upload zone */}
          <div style={{
            border: '2px dashed var(--stroke-2)', borderRadius: 10, padding: 24,
            display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16,
            background: '#fff',
          }}>
            <div style={{ width: 48, height: 48, borderRadius: 10, background: 'var(--navy-50)', color: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="upload" size={20} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 14 }}>Drop documents here, or click to browse</div>
              <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>PDF, Word, Excel, JPG, PNG · 50 MB max per file. You'll be asked to label each document.</div>
            </div>
            <button className="btn btn-primary btn-sm">Choose files</button>
          </div>

          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <table className="data">
              <thead>
                <tr>
                  <th style={{ width: 30 }}></th>
                  <th>Document</th>
                  <th style={{ width: 130 }}>Folder</th>
                  <th style={{ width: 100 }}>Size</th>
                  <th style={{ width: 240 }}>Uploaded</th>
                  <th style={{ width: 130 }}>Visibility</th>
                  <th style={{ width: 60 }}></th>
                </tr>
              </thead>
              <tbody>
                {docs.map((d, i) => (
                  <tr key={i} className="clickable">
                    <td><Icon name="file" size={16} color={d.highlight ? 'var(--gold)' : 'var(--ink-3)'} /></td>
                    <td>
                      <div style={{ fontWeight: 500, fontSize: 13.5 }}>{d.name}</div>
                      {d.highlight && <div style={{ fontSize: 11.5, color: 'var(--gold)', marginTop: 2 }}>★ Released document</div>}
                    </td>
                    <td><span className="badge badge-muted">{d.folder}</span></td>
                    <td style={{ fontSize: 12.5, color: 'var(--ink-3)' }}>{d.size}</td>
                    <td style={{ fontSize: 12.5, color: 'var(--ink-3)' }}>{d.uploaded}</td>
                    <td style={{ fontSize: 12.5, color: 'var(--ink-3)' }}>{d.shared}</td>
                    <td>
                      <div style={{ display: 'flex', gap: 4 }}>
                        <button className="btn btn-ghost btn-sm" style={{ padding: 6 }}><Icon name="eye" size={14} /></button>
                        <button className="btn btn-ghost btn-sm" style={{ padding: 6 }}><Icon name="download" size={14} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseHearings() {
  return (
    <div className="fade-in" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
      {/* Upcoming */}
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ background: 'var(--navy)', color: '#fff', padding: '20px 28px', display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ minWidth: 64, textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.15)', paddingRight: 20 }}>
            <div className="serif" style={{ fontSize: 32, fontWeight: 700, lineHeight: 1 }}>14</div>
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>Jun 2026</div>
          </div>
          <div style={{ flex: 1 }}>
            <span className="badge badge-gold">Upcoming · 37 days</span>
            <div className="serif" style={{ fontSize: 22, fontWeight: 700, marginTop: 8 }}>Preliminary arbitration hearing</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', marginTop: 4 }}>10:00 AM EST · Estimated 2 hours · Virtual via Zoom</div>
          </div>
          <button className="btn btn-gold btn-lg">
            <Icon name="zoom" size={16} /> Join Zoom hearing
          </button>
        </div>
        <div style={{ padding: '20px 28px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 6 }}>Assigned neutral</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Avatar name="Hon. Robert Velez" size={32} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 500 }}>Hon. Robert Velez (ret.)</div>
                <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>Arbitrator · 18 yrs</div>
              </div>
            </div>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 6 }}>Confirmed attendees</div>
            <div style={{ fontSize: 13 }}>3 of 4 confirmed</div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>Awaiting Linley & Associates</div>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 6 }}>Actions</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn btn-outline btn-sm"><Icon name="calendar" size={13} /> Add to calendar</button>
              <button className="btn btn-outline btn-sm"><Icon name="refresh" size={13} /> Adjourn</button>
            </div>
          </div>
        </div>
      </div>

      {/* Past hearings */}
      <div className="card" style={{ padding: 0 }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--stroke-1)' }}>
          <h3>Past hearings</h3>
        </div>
        <div style={{ padding: 24, color: 'var(--ink-3)', fontSize: 13.5 }}>
          No past hearings on this case yet.
        </div>
      </div>
    </div>
  );
}

function CaseNeutral() {
  const [eliminated, setEliminated] = React.useState([]);
  const candidates = [
    { id: 'velez',    name: 'Hon. Robert Velez (ret.)',  spec: 'Personal injury · auto liability', juris: 'NY, NJ, CT', exp: '18 years · 412 cases', flag: false },
    { id: 'desai',    name: 'Anita Desai, Esq.',           spec: 'Personal injury · medical malpractice', juris: 'NY, PA',     exp: '12 years · 287 cases', flag: false },
    { id: 'okafor',   name: 'Charles Okafor, JD',          spec: 'Insurance disputes',              juris: 'NY, NJ',     exp: '22 years · 540 cases', flag: false },
    { id: 'mendez',   name: 'Hon. Linda Mendez (ret.)',     spec: 'Civil litigation',                juris: 'NY, MA',     exp: '15 years · 320 cases', flag: false },
    { id: 'patel',    name: 'Vikram Patel, Esq.',           spec: 'Tort & negligence',                juris: 'NY, NJ, FL', exp: '10 years · 198 cases', flag: false },
  ];

  function toggle(id) {
    if (eliminated.includes(id)) setEliminated(eliminated.filter(x => x !== id));
    else if (eliminated.length < 3) setEliminated([...eliminated, id]);
  }

  return (
    <div className="fade-in" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24 }}>
      <div>
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--stroke-1)', display: 'flex', alignItems: 'center', gap: 16 }}>
            <div>
              <h3>Eliminate up to 3 candidates</h3>
              <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 4 }}>Submission deadline: <strong>May 30, 2026 (5 days remaining)</strong></div>
            </div>
            <div style={{ flex: 1 }} />
            <span className="badge badge-navy">{eliminated.length} of 3 eliminated</span>
          </div>
          {candidates.map((p, i) => {
            const elim = eliminated.includes(p.id);
            return (
              <div key={p.id} style={{
                padding: '18px 24px',
                display: 'flex', alignItems: 'center', gap: 16,
                borderBottom: i < candidates.length - 1 ? '1px solid var(--stroke-1)' : 'none',
                opacity: elim ? 0.5 : 1,
              }}>
                <Avatar name={p.name} size={44} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, textDecoration: elim ? 'line-through' : 'none' }}>{p.name}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 2 }}>{p.spec}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-4)', marginTop: 4, display: 'flex', gap: 14 }}>
                    <span><Icon name="building" size={11} style={{ verticalAlign: '-1px', marginRight: 4 }} />{p.juris}</span>
                    <span><Icon name="briefcase" size={11} style={{ verticalAlign: '-1px', marginRight: 4 }} />{p.exp}</span>
                  </div>
                </div>
                <button className="btn btn-ghost btn-sm">View bio</button>
                <button
                  className={`btn btn-sm ${elim ? 'btn-secondary' : 'btn-outline'}`}
                  onClick={() => toggle(p.id)}
                  disabled={!elim && eliminated.length >= 3}>
                  {elim ? <><Icon name="refresh" size={13} /> Restore</> : <><Icon name="x" size={13} /> Eliminate</>}
                </button>
              </div>
            );
          })}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 20 }}>
          <button className="btn btn-outline">Save draft</button>
          <button className="btn btn-primary" disabled={eliminated.length === 0} style={{ opacity: eliminated.length ? 1 : 0.5 }}>
            Submit selections <Icon name="arrowRight" size={14} />
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div className="card" style={{ padding: 20, background: 'var(--gold-soft)', borderColor: '#E8DBB0' }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <Icon name="lock" size={16} color="#6F541F" style={{ marginTop: 2 }} />
            <div>
              <div style={{ fontWeight: 600, color: '#6F541F', marginBottom: 4 }}>Confidential to you</div>
              <div style={{ fontSize: 13, color: '#6F541F' }}>
                Your eliminations are not visible to Cordova Logistics. NAM enforces confidentiality automatically — even our case managers handle selections through this portal.
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: 20 }}>
          <h4 style={{ marginBottom: 12 }}>How NAM picks the neutral</h4>
          <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.6 }}>
            <p style={{ margin: '0 0 10px' }}>1. Both parties eliminate up to 3 candidates by the deadline.</p>
            <p style={{ margin: '0 0 10px' }}>2. NAM crosses out anyone eliminated by either side.</p>
            <p style={{ margin: '0 0 10px' }}>3. From the remaining candidates, NAM appoints one based on availability, jurisdiction match, and case-type expertise.</p>
            <p style={{ margin: 0 }}>4. Both parties are notified at the same time once the appointment is made.</p>
          </div>
        </div>

        <div className="card" style={{ padding: 20 }}>
          <h4 style={{ marginBottom: 12 }}>Conflict to disclose?</h4>
          <p style={{ fontSize: 13, color: 'var(--ink-3)', margin: '0 0 12px' }}>If you have a known conflict with any candidate, flag it here so NAM can review.</p>
          <button className="btn btn-outline btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
            <Icon name="alert" size={13} /> Flag a conflict
          </button>
        </div>
      </div>
    </div>
  );
}

function CaseInvoices({ navigate, caseId }) {
  const invoices = [
    { id: 'INV-2026-09128', desc: 'Initial filing fee — Voluntary PI', amount: '$1,200.00', date: 'May 6, 2026', status: 'paid' },
    { id: 'INV-2026-09244', desc: 'Hearing fee — preliminary session', amount: '$2,450.00', date: 'May 24, 2026 (due)', status: 'due' },
    { id: 'INV-2026-09501', desc: 'Document handling fee', amount: '$340.00', date: 'Jun 1, 2026 (due)', status: 'pending' },
  ];
  return (
    <div className="fade-in">
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <table className="data">
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Description</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {invoices.map(i => (
              <tr key={i.id}>
                <td className="mono" style={{ fontSize: 12.5 }}>{i.id}</td>
                <td style={{ fontWeight: 500 }}>{i.desc}</td>
                <td style={{ fontSize: 13, color: 'var(--ink-3)' }}>{i.date}</td>
                <td style={{ fontWeight: 600 }}>{i.amount}</td>
                <td>
                  {i.status === 'paid' && <span className="badge badge-success"><span className="badge-dot" />Paid</span>}
                  {i.status === 'due' && <span className="badge badge-danger"><span className="badge-dot" />Due in 14 days</span>}
                  {i.status === 'pending' && <span className="badge badge-muted"><span className="badge-dot" />Issued</span>}
                </td>
                <td style={{ textAlign: 'right' }}>
                  {i.status === 'paid'
                    ? <button className="btn btn-ghost btn-sm"><Icon name="download" size={13} /> Receipt</button>
                    : <button className="btn btn-primary btn-sm" onClick={() => navigate(`pay:${caseId}:${i.id}`)}>Pay now</button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CaseMessages() {
  const messages = [
    { from: 'Sharon Liu', role: 'NAM Case Manager', avatar: 'SL', time: 'May 9, 11:24 AM', body: 'Thanks for getting the DRA back so quickly. We\'re publishing the neutral slate today — you\'ll get a notification when selections open.', mine: false },
    { from: 'Rachel Morgan', role: 'You', avatar: 'RM', time: 'May 9, 11:48 AM', body: 'Perfect. Quick question — Cordova\'s counsel asked about the discovery schedule. Should I direct that to you or to the assigned arbitrator once selected?', mine: true },
    { from: 'Sharon Liu', role: 'NAM Case Manager', avatar: 'SL', time: 'May 9, 12:02 PM', body: 'Direct procedural questions to me until the arbitrator is appointed. After that, scheduling matters go through the arbitrator\'s office. I\'ll send a routing note when that happens.', mine: false },
  ];
  return (
    <div className="fade-in" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16, maxWidth: 760 }}>
      <div className="card" style={{ padding: 0 }}>
        <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--stroke-1)', display: 'flex', alignItems: 'center', gap: 12 }}>
          <Avatar name="Sharon Liu" size={36} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>Sharon Liu</div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>NAM Case Manager · usually responds within 4 hours</div>
          </div>
          <span className="badge badge-success"><span className="badge-dot" />Online</span>
        </div>
        <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {messages.map((m, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, flexDirection: m.mine ? 'row-reverse' : 'row' }}>
              <Avatar name={m.from} size={32} />
              <div style={{ maxWidth: '70%' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4, justifyContent: m.mine ? 'flex-end' : 'flex-start' }}>
                  <span style={{ fontSize: 12.5, fontWeight: 600 }}>{m.from}</span>
                  <span style={{ fontSize: 11, color: 'var(--ink-4)' }}>{m.time}</span>
                </div>
                <div style={{
                  padding: '12px 14px', borderRadius: 12,
                  background: m.mine ? 'var(--navy)' : 'var(--bg-muted)',
                  color: m.mine ? '#fff' : 'var(--ink-1)',
                  fontSize: 13.5, lineHeight: 1.55,
                }}>{m.body}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding: 16, borderTop: '1px solid var(--stroke-1)', display: 'flex', gap: 12, alignItems: 'flex-end' }}>
          <textarea className="input" rows={2} placeholder="Send a structured message — Sharon will respond within 4 business hours…" style={{ resize: 'none' }} />
          <button className="btn btn-primary"><Icon name="send" size={14} /> Send</button>
        </div>
      </div>
    </div>
  );
}

// ---------------- Notifications ----------------
function NotificationsPage({ navigate }) {
  const items = [
    { unread: true, ic: 'check', tint: 'var(--success)', t: 'Decision released — Pacific Mutual Healthcare', sub: 'Your final award is now available in the documents folder for case NAM-2026-03812.', case: 'NAM-2026-03812', time: '2 hours ago' },
    { unread: true, ic: 'mail', tint: 'var(--navy)', t: 'Cordova Logistics confirmed participation', sub: 'NAM-2026-04183 has moved to neutral selection. Watch for the slate in 1–2 days.', case: 'NAM-2026-04183', time: 'Yesterday' },
    { unread: true, ic: 'card', tint: 'var(--warning)', t: 'Invoice issued — Driggs Insurance #4471', sub: '$2,450 due May 24, 2026.', case: 'NAM-2026-03987', time: '2 days ago' },
    { unread: false, ic: 'calendar', tint: 'var(--navy)', t: 'Hearing scheduled — Mercer Industrial', sub: 'Jun 22 at 2:30 PM EST · 101 Park Ave Room 1402.', case: 'NAM-2026-04102', time: '3 days ago' },
    { unread: false, ic: 'document', tint: 'var(--navy)', t: 'Document released — PMA available', sub: 'Bayfront Properties Mediation Resolution Document is available in your folder.', case: 'NAM-2026-02981', time: 'Mar 28' },
  ];
  return (
    <>
      <SubNav crumbs={[{ label: 'Notifications' }]} />
      <div className="page page-narrow fade-in">
        <div className="page-header">
          <div>
            <h1 className="page-title">Notifications</h1>
            <p className="page-sub">Case events that need your attention. Email copies sent automatically.</p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn btn-outline btn-sm"><Icon name="check" size={13} /> Mark all read</button>
            <button className="btn btn-outline btn-sm"><Icon name="settings" size={13} /> Preferences</button>
          </div>
        </div>

        <div className="tabs">
          <div className="tab active">All <span className="tab-count">{items.length}</span></div>
          <div className="tab">Unread <span className="tab-count">{items.filter(i => i.unread).length}</span></div>
          <div className="tab">Action required <span className="tab-count">2</span></div>
        </div>

        <div className="card" style={{ padding: 0 }}>
          {items.map((n, i) => (
            <div key={i} style={{
              padding: '16px 20px',
              display: 'flex', alignItems: 'flex-start', gap: 14,
              borderBottom: i < items.length - 1 ? '1px solid var(--stroke-1)' : 'none',
              background: n.unread ? 'var(--navy-50)' : 'transparent',
              cursor: 'pointer',
            }} onClick={() => navigate(`case:${n.case}`)}>
              <div style={{ width: 36, height: 36, borderRadius: 999, background: '#fff', color: n.tint, border: '1px solid var(--stroke-1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name={n.ic} size={16} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <span style={{ fontSize: 14, fontWeight: n.unread ? 600 : 500 }}>{n.t}</span>
                  {n.unread && <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--gold)' }} />}
                </div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 4 }}>{n.sub}</div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--ink-4)', marginTop: 6 }}>{n.case}</div>
              </div>
              <div style={{ fontSize: 11.5, color: 'var(--ink-4)', whiteSpace: 'nowrap' }}>{n.time}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

Object.assign(window, { Dashboard, CaseView, NotificationsPage, CASES });
