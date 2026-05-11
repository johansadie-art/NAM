// ============================================================
// NAM CMS 2.0 — Case Detail (master workspace)
// Tabs: Overview, Parties, Documents, Hearings, Finance, Diary, Communications
// ============================================================

function CaseDetail({ caseId, onBack, onOpenStatusModal, openTab, setOpenTab, onShowToast }) {
  const D = window.NAM_DATA;
  const c = D.cases.find(x => x.id === caseId);
  if (!c) return null;

  const tab = openTab || 'overview';

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'home' },
    { id: 'parties', label: 'Parties', icon: 'users', count: 4 },
    { id: 'documents', label: 'Documents', icon: 'fileText', count: (D.documents[caseId] || []).length },
    { id: 'hearings', label: 'Hearings', icon: 'calendar', count: D.hearings.filter(h => h.case === caseId).length },
    { id: 'finance', label: 'Finance', icon: 'dollar', count: D.invoices.filter(i => i.case === caseId).length },
    { id: 'diary', label: 'Diary & tasks', icon: 'check', count: D.tasks.filter(t => t.case === caseId).length },
    { id: 'communications', label: 'Communications', icon: 'mail', count: 7 },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      {/* Sticky case header */}
      <div style={{ background: '#fafaf8', borderBottom: '1px solid var(--stroke-1)', padding: '14px 28px 0', flexShrink: 0 }}>
        <div className="row gap-3" style={{ marginBottom: 10 }}>
          <button className="btn btn-ghost btn-sm" onClick={onBack}><Icon name="arrowLeft" size={13} />Back to cases</button>
        </div>
        <div className="row gap-4" style={{ alignItems: 'flex-start' }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="row gap-3" style={{ marginBottom: 4 }}>
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 12, color: 'var(--fg-2)', letterSpacing: '0.04em' }}>
                {c.id}
              </span>
              <Pill tone="muted">{c.matter}</Pill>
              <Pill tone="muted">{c.voluntary ? 'Voluntary' : 'Contractual'}</Pill>
              {c.flags.includes('ny') && <Pill tone="primary" dot>NY · flagged</Pill>}
              {c.flags.includes('unactioned-48h') && <Pill tone="amber" dot>Unactioned 48h+</Pill>}
              {c.flags.includes('sla-risk') && <Pill tone="danger" dot>SLA at risk</Pill>}
            </div>
            <h1 className="title-serif" style={{ fontSize: 26, marginBottom: 4 }}>
              {c.claimant} <span style={{ color: 'var(--fg-2)', fontWeight: 400 }}>vs.</span> {c.respondent}
            </h1>
            <div style={{ fontSize: 13, color: 'var(--fg-2)' }}>
              Claim # <span style={{ fontFamily: 'IBM Plex Mono, monospace', color: 'var(--fg-1)' }}>{c.claimNumber}</span>
              {' · '}Adjuster {c.adjuster}
              {' · '}Opened {fmtDate(c.opened)}
              {' · '}{c.county}, {c.state}
            </div>
          </div>
          <div className="row gap-2">
            <StatusPill status={c.status} />
            <Button variant="outline" size="sm" icon="edit" onClick={onOpenStatusModal}>Change status</Button>
          </div>
        </div>

        {/* Quick actions strip */}
        <div className="row gap-2" style={{ padding: '14px 0 12px' }}>
          <Button variant="primary" size="sm" icon="calendar" onClick={() => setOpenTab('hearings')}>Schedule hearing</Button>
          <Button variant="outline" size="sm" icon="check">Add task</Button>
          <Button variant="outline" size="sm" icon="upload">Upload doc</Button>
          <Button variant="outline" size="sm" icon="dollar">New invoice</Button>
          <Button variant="outline" size="sm" icon="mail">Send email</Button>
          <div style={{ flex: 1 }} />
          <Button variant="ghost" size="sm" icon="more" />
        </div>

        {/* Tabs */}
        <div className="tabs">
          {tabs.map(t => (
            <div key={t.id} className={`tab ${tab === t.id ? 'active' : ''}`} onClick={() => setOpenTab(t.id)}>
              <Icon name={t.icon} size={13} />
              {t.label}
              {t.count != null && <span className="tab-count">{t.count}</span>}
            </div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        {tab === 'overview' && <OverviewTab caseObj={c} setOpenTab={setOpenTab} />}
        {tab === 'parties' && <PartiesTab caseObj={c} />}
        {tab === 'documents' && <DocumentsTab caseObj={c} onShowToast={onShowToast} />}
        {tab === 'hearings' && <HearingsTab caseObj={c} onShowToast={onShowToast} />}
        {tab === 'finance' && <FinanceTab caseObj={c} />}
        {tab === 'diary' && <DiaryTab caseObj={c} onShowToast={onShowToast} />}
        {tab === 'communications' && <CommunicationsTab caseObj={c} />}
      </div>
    </div>
  );
}

// ---------------- Overview tab ----------------
function OverviewTab({ caseObj, setOpenTab }) {
  const D = window.NAM_DATA;
  const tasks = D.tasks.filter(t => t.case === caseObj.id);
  const activity = D.activity.filter(a => a.case === caseObj.id);
  const hearings = D.hearings.filter(h => h.case === caseObj.id);
  const invoices = D.invoices.filter(i => i.case === caseObj.id);

  const completePct = Math.round((caseObj.intakeComplete || 1) * 100);
  const incomplete = caseObj.intakeComplete && caseObj.intakeComplete < 1;

  const timeline = [
    { date: caseObj.opened, label: 'Case opened', type: 'intake', detail: 'Intake submitted via web form' },
    incomplete && { date: caseObj.opened, label: 'Completeness gate · ' + completePct + '%', type: 'alert', detail: `Missing: ${(caseObj.missing || []).join(', ')}` },
    hearings.length > 0 && { date: hearings[0].date, label: 'Hearing scheduled', type: 'hearing', detail: `${hearings[0].neutral} · ${hearings[0].location}` },
    invoices.length > 0 && { date: invoices[0].issued, label: invoices[0].id + ' issued', type: 'finance', detail: fmtMoney(invoices[0].amount) + ' · ' + invoices[0].client },
  ].filter(Boolean);

  return (
    <div style={{ padding: '24px 28px 60px', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 24 }}>
      <div className="col gap-5">
        {/* Completeness panel */}
        {incomplete && (
          <div className="card" style={{ background: '#fef2c5', border: '1px solid #e8d27a' }}>
            <div style={{ padding: 18 }}>
              <div className="row gap-3" style={{ marginBottom: 10 }}>
                <Icon name="alertTriangle" size={18} style={{ color: '#7f201f' }} />
                <div style={{ fontWeight: 600, fontSize: 14, color: '#7f201f' }}>Intake incomplete · {completePct}%</div>
                <div style={{ flex: 1 }} />
                <Button variant="primary" size="sm" icon="edit">Complete intake</Button>
              </div>
              <div style={{ fontSize: 13, color: '#7f201f', marginBottom: 12 }}>
                The completeness gate is blocking certain downstream actions until these fields are captured.
              </div>
              <div style={{ height: 6, background: 'rgba(127,32,31,0.15)', borderRadius: 999, overflow: 'hidden', marginBottom: 12 }}>
                <div style={{ height: '100%', width: completePct + '%', background: '#9e2c2c' }} />
              </div>
              <ul className="clean" style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {(caseObj.missing || []).map(m => (
                  <li key={m} className="pill pill-primary" style={{ fontSize: 11.5 }}>
                    <Icon name="alertCircle" size={11} /> {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Timeline */}
        <div className="card">
          <div style={{ padding: '16px 20px 12px', borderBottom: '1px solid var(--stroke-1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="title-serif" style={{ fontSize: 18 }}>Timeline</div>
            <Button variant="ghost" size="sm" iconRight="arrowRight">Full history</Button>
          </div>
          <div style={{ padding: '8px 24px 18px', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 36, top: 22, bottom: 22, width: 1, background: 'var(--stroke-1)' }} />
            {timeline.map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, padding: '12px 0', position: 'relative' }}>
                <div style={{
                  width: 24, height: 24, borderRadius: 999, background: '#fff',
                  border: `2px solid ${t.type === 'alert' ? 'var(--destructive)' : t.type === 'hearing' ? '#b75301' : t.type === 'finance' ? '#9e2c2c' : 'var(--stroke-2)'}`,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, marginLeft: 0, zIndex: 1,
                }}>
                  <Icon name={t.type === 'alert' ? 'alertCircle' : t.type === 'hearing' ? 'calendar' : t.type === 'finance' ? 'dollar' : 'inbox'} size={11} style={{ color: t.type === 'alert' ? 'var(--destructive)' : t.type === 'hearing' ? '#b75301' : t.type === 'finance' ? '#9e2c2c' : 'var(--fg-2)' }} />
                </div>
                <div style={{ flex: 1, paddingTop: 1 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 500 }}>{t.label}</div>
                  <div style={{ fontSize: 12, color: 'var(--fg-2)', marginTop: 2 }}>{t.detail}</div>
                  <div style={{ fontSize: 11, color: 'var(--fg-2)', marginTop: 2, fontFamily: 'IBM Plex Mono, monospace' }}>{fmtDate(t.date)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending tasks */}
        <div className="card">
          <div style={{ padding: '16px 20px 12px', borderBottom: '1px solid var(--stroke-1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="title-serif" style={{ fontSize: 18 }}>Pending tasks · {tasks.length}</div>
            <Button variant="ghost" size="sm" icon="plus">Add task</Button>
          </div>
          <div>
            {tasks.length > 0 ? tasks.map(t => (
              <div key={t.id} className="hover-row" style={{ padding: '12px 20px', borderBottom: '1px solid var(--stroke-1)', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 16, height: 16, borderRadius: 4, border: `1.5px solid ${t.status === 'overdue' ? 'var(--destructive)' : 'var(--stroke-2)'}`, flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13.5 }}>{t.title}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--fg-2)', marginTop: 2 }}>{t.source} · SLA {t.sla}</div>
                </div>
                <Pill tone={t.status === 'overdue' ? 'danger' : 'muted'}>
                  {t.status === 'overdue' ? 'Overdue' : 'Due ' + fmtDate(t.due)}
                </Pill>
              </div>
            )) : <EmptyState icon="check" title="No pending tasks" body="Tasks auto-create when source events fire." />}
          </div>
        </div>
      </div>

      {/* Right column */}
      <div className="col gap-5">
        {/* Snapshot */}
        <div className="card card-pad">
          <div className="title-serif" style={{ fontSize: 18, marginBottom: 14 }}>Snapshot</div>
          <SnapRow label="Case manager" value={D.users.me.name} />
          <SnapRow label="AE" value={D.users.ae.name} />
          <SnapRow label="Amount in dispute" value={caseObj.amountInDispute ? fmtMoney(caseObj.amountInDispute) : '—'} />
          <SnapRow label="Next hearing" value={caseObj.nextHearing ? fmtDateTime(caseObj.nextHearing) : <span style={{ color: 'var(--fg-2)' }}>None scheduled</span>} />
          <SnapRow label="Last activity" value={fmtTimeAgo(caseObj.lastActivity) + ' · ' + fmtDate(caseObj.lastActivity)} last />
        </div>

        {/* Activity feed */}
        <div className="card">
          <div style={{ padding: '14px 18px 8px', borderBottom: '1px solid var(--stroke-1)' }}>
            <div style={{ fontWeight: 600, fontSize: 14 }}>Activity</div>
          </div>
          <div style={{ padding: '4px 18px 12px' }}>
            {activity.length > 0 ? activity.map(a => (
              <div key={a.id} className="feed-item">
                <div className="feed-icon"><Icon name={a.type === 'intake' ? 'inbox' : a.type === 'hearing' ? 'calendar' : a.type === 'docusign' ? 'check' : a.type === 'email' ? 'mail' : a.type === 'finance' ? 'dollar' : 'refresh'} size={13} /></div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12.5 }}>{a.text}</div>
                  <div style={{ fontSize: 11, color: 'var(--fg-2)', marginTop: 3, fontFamily: 'IBM Plex Mono, monospace' }}>{fmtTimeAgo(a.at)} · {a.by}</div>
                </div>
              </div>
            )) : <div style={{ padding: '14px 0', fontSize: 12.5, color: 'var(--fg-2)' }}>No activity yet.</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

function SnapRow({ label, value, last }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '7px 0', borderBottom: last ? 0 : '1px dashed var(--stroke-1)', fontSize: 13 }}>
      <span style={{ color: 'var(--fg-2)' }}>{label}</span>
      <span style={{ fontWeight: 500, textAlign: 'right' }}>{value}</span>
    </div>
  );
}

// ---------------- Parties tab ----------------
function PartiesTab({ caseObj }) {
  const [editing, setEditing] = React.useState(null);

  const parties = [
    { role: 'Claimant', name: caseObj.claimant, type: 'firm',
      contact: 'Daniel R. Whitaker', email: 'dwhitaker@quincyreed.com', phone: '+1 (212) 555-0142',
      address: '410 Park Avenue, 14th Fl, New York, NY 10022' },
    { role: 'Claimant counsel', name: 'Quincy & Reed PC', type: 'firm', merge: true,
      contact: 'Lena Quincy', email: 'lquincy@quincyreed.com', phone: '+1 (212) 555-0177',
      address: '410 Park Avenue, 14th Fl, New York, NY 10022' },
    { role: 'Respondent', name: caseObj.respondent, type: 'carrier',
      contact: caseObj.adjuster, email: 'm.calderon@pinecrest.example', phone: '+1 (516) 555-0188',
      address: '85 Broad Street, Melville, NY 11747',
      claimNumber: caseObj.claimNumber },
    { role: 'Respondent counsel', name: 'Hartman, Loomis & Gao LLP', type: 'firm',
      contact: 'Robin Hartman', email: 'rhartman@hl-gao.com', phone: '+1 (212) 555-0199',
      address: '230 W 41st Street, New York, NY 10036' },
  ];

  return (
    <div style={{ padding: '24px 28px 60px' }}>
      <div className="row" style={{ marginBottom: 14 }}>
        <div>
          <h2 className="title-serif" style={{ fontSize: 22 }}>Parties · {parties.length}</h2>
          <div style={{ fontSize: 13, color: 'var(--fg-2)' }}>Single-record entities. Edits propagate across all related cases.</div>
        </div>
        <div style={{ flex: 1 }} />
        <Button variant="outline" size="sm" icon="plus">Add party</Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {parties.map((p, i) => (
          <div key={i} className="card card-pad" style={{ position: 'relative' }}>
            <div className="row" style={{ marginBottom: 10 }}>
              <Pill tone={p.role.includes('Claimant') ? 'cream' : p.role.includes('Respondent') ? 'rust' : 'muted'}>{p.role}</Pill>
              {p.merge && <Pill tone="amber" dot>3 records linked</Pill>}
              <div style={{ flex: 1 }} />
              <button className="btn btn-ghost btn-sm" style={{ padding: 5 }} onClick={() => setEditing(editing === i ? null : i)}>
                <Icon name="edit" size={13} />
              </button>
            </div>

            <div className="row gap-3" style={{ marginBottom: 10 }}>
              <Avatar initials={p.name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()} size={36} color={p.type === 'carrier' ? 'rust' : 'primary'} />
              <div style={{ flex: 1, minWidth: 0 }}>
                {editing === i ? (
                  <input className="input" defaultValue={p.name} style={{ fontSize: 14, fontWeight: 500, padding: '5px 8px' }} />
                ) : (
                  <div style={{ fontSize: 15, fontWeight: 600, fontFamily: 'Libre Baskerville, serif' }}>{p.name}</div>
                )}
                <div style={{ fontSize: 12, color: 'var(--fg-2)', marginTop: 2 }}>
                  {p.type === 'carrier' ? 'Insurance carrier' : 'Law firm'}
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '92px 1fr', rowGap: 6, columnGap: 12, fontSize: 12.5 }}>
              <span style={{ color: 'var(--fg-2)' }}>Primary</span><span>{p.contact}</span>
              <span style={{ color: 'var(--fg-2)' }}>Email</span>
              {editing === i ? <input className="input" defaultValue={p.email} style={{ padding: '3px 6px', fontSize: 12.5 }} /> : <span style={{ color: 'var(--primary)', textDecoration: 'underline' }}>{p.email}</span>}
              <span style={{ color: 'var(--fg-2)' }}>Phone</span><span style={{ fontFamily: 'IBM Plex Mono, monospace' }}>{p.phone}</span>
              <span style={{ color: 'var(--fg-2)' }}>Address</span><span style={{ color: 'var(--fg-2)' }}>{p.address}</span>
              {p.claimNumber && (<><span style={{ color: 'var(--fg-2)' }}>Claim #</span><span style={{ fontFamily: 'IBM Plex Mono, monospace' }}>{p.claimNumber}</span></>)}
            </div>

            {editing === i && (
              <div className="row" style={{ marginTop: 12, justifyContent: 'flex-end', gap: 6 }}>
                <Button variant="ghost" size="sm" onClick={() => setEditing(null)}>Cancel</Button>
                <Button variant="primary" size="sm" icon="check" onClick={() => setEditing(null)}>Save changes</Button>
              </div>
            )}

            {p.merge && (
              <div style={{ marginTop: 12, padding: '8px 12px', background: '#fef2c5', borderRadius: 6, border: '1px solid #e8d27a', fontSize: 12, color: '#7f201f', display: 'flex', gap: 8, alignItems: 'center' }}>
                <Icon name="alertCircle" size={13} />
                3 firm records were merged here. <a href="#" style={{ color: '#7f201f', textDecoration: 'underline' }}>View merge history</a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------- Documents tab ----------------
function DocumentsTab({ caseObj, onShowToast }) {
  const D = window.NAM_DATA;
  const [folder, setFolder] = React.useState('all');
  const [showUpload, setShowUpload] = React.useState(false);
  const docs = D.documents[caseObj.id] || [];
  const filtered = folder === 'all' ? docs : docs.filter(d => d.folder === folder);

  const folders = [
    { id: 'all', label: 'All documents', count: docs.length },
    { id: 'submitting', label: 'Submitting party', count: docs.filter(d => d.folder === 'submitting').length },
    { id: 'opposing', label: 'Opposing party', count: docs.filter(d => d.folder === 'opposing').length },
    { id: 'neutral', label: 'Neutral', count: docs.filter(d => d.folder === 'neutral').length },
  ];

  return (
    <div style={{ padding: '24px 28px 60px' }}>
      <div className="row" style={{ marginBottom: 14 }}>
        <div>
          <h2 className="title-serif" style={{ fontSize: 22 }}>Documents · {docs.length}</h2>
          <div style={{ fontSize: 13, color: 'var(--fg-2)' }}>Three-folder model with per-folder access. DocuSign envelopes update document status automatically.</div>
        </div>
        <div style={{ flex: 1 }} />
        <Button variant="outline" size="sm" icon="link">DocuSign</Button>
        <Button variant="primary" size="sm" icon="upload" onClick={() => setShowUpload(true)} style={{ marginLeft: 8 }}>Upload</Button>
      </div>

      <div className="row gap-2" style={{ marginBottom: 14 }}>
        {folders.map(f => (
          <button key={f.id} className={`btn ${folder === f.id ? 'btn-outline' : 'btn-ghost'} btn-sm`}
            onClick={() => setFolder(f.id)}
            style={{ borderColor: folder === f.id ? 'var(--primary)' : 'transparent', color: folder === f.id ? 'var(--primary)' : 'inherit' }}>
            {f.label}
            <span className="nav-count" style={{ marginLeft: 6 }}>{f.count}</span>
          </button>
        ))}
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <table className="data">
          <thead>
            <tr>
              <th style={{ paddingLeft: 18 }}>Name</th>
              <th>Type</th>
              <th>Folder</th>
              <th>Size</th>
              <th>Uploaded</th>
              <th>By</th>
              <th style={{ textAlign: 'right', paddingRight: 18 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(d => (
              <tr key={d.id} onClick={(e) => e.preventDefault()}>
                <td style={{ paddingLeft: 18 }}>
                  <div className="row gap-3">
                    <Icon name="fileText" size={16} style={{ color: 'var(--fg-2)' }} />
                    <span style={{ fontSize: 13, fontWeight: 500 }}>{d.name}</span>
                    {d.docusign === 'completed' && <Pill tone="success" dot>Signed</Pill>}
                  </div>
                </td>
                <td><Pill tone="muted">{d.type}</Pill></td>
                <td style={{ fontSize: 12.5, color: 'var(--fg-2)', textTransform: 'capitalize' }}>{d.folder}</td>
                <td style={{ fontSize: 12, color: 'var(--fg-2)', fontFamily: 'IBM Plex Mono, monospace' }}>{d.size}</td>
                <td style={{ fontSize: 12.5, color: 'var(--fg-2)' }}>{fmtDate(d.uploaded)}</td>
                <td><Avatar initials={d.by.length > 2 ? d.by.split(' ').map(w => w[0]).join('') : d.by} size={22} color={d.by === 'system' ? 'muted' : 'primary'} /></td>
                <td style={{ textAlign: 'right', paddingRight: 18 }}>
                  <button className="btn btn-ghost btn-sm" style={{ padding: 4 }}><Icon name="eye" size={13} /></button>
                  <button className="btn btn-ghost btn-sm" style={{ padding: 4 }}><Icon name="download" size={13} /></button>
                  <button className="btn btn-ghost btn-sm" style={{ padding: 4 }}><Icon name="more" size={13} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && <EmptyState icon="fileText" title="No documents in this folder" />}
      </div>

      <Modal open={showUpload} onClose={() => setShowUpload(false)} title="Upload document"
        subtitle="Files attach to this case. Optionally link to a hearing, PMA, or intake step."
        footer={<>
          <Button variant="ghost" onClick={() => setShowUpload(false)}>Cancel</Button>
          <Button variant="primary" icon="upload" onClick={() => { setShowUpload(false); onShowToast('Document uploaded · linked to case'); }}>Upload</Button>
        </>}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ border: '2px dashed var(--stroke-2)', borderRadius: 8, padding: '32px 20px', textAlign: 'center', background: '#faf6ee' }}>
            <Icon name="upload" size={26} style={{ color: 'var(--fg-2)' }} />
            <div style={{ marginTop: 8, fontSize: 14, fontWeight: 500 }}>Drop files here or click to browse</div>
            <div style={{ fontSize: 12, color: 'var(--fg-2)', marginTop: 4 }}>PDF, Word, Excel, image, video — up to 50 MB per file</div>
          </div>
          <Field label="Document type">
            <select className="select"><option>Intake submission</option><option>Hearing document</option><option>PMA / Decision</option><option>Signed DRA</option><option>Billing</option><option>Evidence</option></select>
          </Field>
          <Field label="Folder">
            <select className="select"><option>Submitting party</option><option>Opposing party</option><option>Neutral</option></select>
          </Field>
          <Field label="Link to case event (optional)">
            <select className="select"><option>— No link —</option><option>Hearing · 21 May 2026</option><option>Intake step</option><option>PMA</option></select>
          </Field>
        </div>
      </Modal>
    </div>
  );
}

// ---------------- Hearings tab ----------------
function HearingsTab({ caseObj, onShowToast }) {
  const D = window.NAM_DATA;
  const hearings = D.hearings.filter(h => h.case === caseObj.id);
  const [confirmModal, setConfirmModal] = React.useState(null);
  const [statusModal, setStatusModal] = React.useState(null);

  return (
    <div style={{ padding: '24px 28px 60px' }}>
      <div className="row" style={{ marginBottom: 14 }}>
        <div>
          <h2 className="title-serif" style={{ fontSize: 22 }}>Hearings · {hearings.length}</h2>
          <div style={{ fontSize: 13, color: 'var(--fg-2)' }}>Past and future hearings with neutral, location, and confirmations.</div>
        </div>
        <div style={{ flex: 1 }} />
        <Button variant="primary" size="sm" icon="calendar">Schedule new</Button>
      </div>

      {hearings.length === 0 ? (
        <EmptyState icon="calendar" title="No hearings scheduled" body="Open the scheduling module to find availability across neutrals and parties."
          action={<Button variant="primary" icon="calendar">Schedule hearing</Button>} />
      ) : hearings.map(h => (
        <div key={h.id} className="card" style={{ marginBottom: 14 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 18, padding: 20, alignItems: 'center' }}>
            <div style={{ width: 64, textAlign: 'center', padding: '10px 8px', background: 'var(--accent)', borderRadius: 8 }}>
              <div style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', color: '#7f201f', letterSpacing: '0.08em' }}>{new Date(h.date).toLocaleDateString('en-US', { month: 'short' })}</div>
              <div style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 26, fontWeight: 700, color: '#7f201f', lineHeight: 1.05 }}>{new Date(h.date).getDate()}</div>
              <div style={{ fontSize: 10.5, color: '#7f201f', fontFamily: 'IBM Plex Mono, monospace' }}>{new Date(h.date).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</div>
            </div>
            <div style={{ minWidth: 0 }}>
              <div className="row gap-2" style={{ marginBottom: 6 }}>
                <Pill tone="muted">{h.type}</Pill>
                {h.status === 'today' && <Pill tone="primary" dot>Today</Pill>}
                {h.status === 'confirmed' && <Pill tone="success" dot>All confirmed</Pill>}
                {h.status === 'pending-confirmation' && <Pill tone="amber" dot>Awaiting confirmations</Pill>}
              </div>
              <div style={{ fontSize: 16, fontWeight: 600, fontFamily: 'Libre Baskerville, serif' }}>{h.neutral}</div>
              <div className="row gap-3" style={{ fontSize: 12.5, color: 'var(--fg-2)', marginTop: 4 }}>
                <span className="row gap-1"><Icon name={h.location === 'Zoom' ? 'video' : 'mapPin'} size={12} />{h.location}</span>
                <span>·</span>
                <span>{h.confirmations.sent}/{h.confirmations.total} confirmations sent</span>
              </div>
            </div>
            <div className="row gap-2">
              {h.confirmations.sent < h.confirmations.total && (
                <Button variant="primary" size="sm" icon="send" onClick={() => setConfirmModal(h)}>Send confirmations</Button>
              )}
              <Button variant="outline" size="sm" icon="edit" onClick={() => setStatusModal(h)}>Update</Button>
              <Button variant="ghost" size="sm" icon="more" />
            </div>
          </div>
        </div>
      ))}

      {/* Bulk confirmation modal */}
      <Modal open={!!confirmModal} onClose={() => setConfirmModal(null)} width={620}
        title="Send hearing confirmations"
        subtitle={confirmModal ? `${confirmModal.neutral} · ${fmtDateTime(confirmModal.date)}` : ''}
        footer={<>
          <Button variant="ghost" onClick={() => setConfirmModal(null)}>Cancel</Button>
          <Button variant="primary" icon="send" onClick={() => {
            const total = confirmModal.confirmations.total;
            setConfirmModal(null);
            onShowToast(`${total} confirmations sent in 1 batch`);
          }}>Send to all 4 parties</Button>
        </>}>
        <div style={{ fontSize: 13, color: 'var(--fg-2)', marginBottom: 12 }}>
          One click — all parties receive the same confirmation. Replaces 10–15 individual sends per hearing.
        </div>
        <div className="card card-pad-sm" style={{ background: '#faf6ee', marginBottom: 14 }}>
          {[
            { name: 'Daniel R. Whitaker · Quincy & Reed PC', role: 'Claimant counsel', email: 'dwhitaker@quincyreed.com' },
            { name: 'Robin Hartman · Hartman, Loomis & Gao LLP', role: 'Respondent counsel', email: 'rhartman@hl-gao.com' },
            { name: 'M. Calderón · Pinecrest Insurance Co.', role: 'Adjuster', email: 'm.calderon@pinecrest.example' },
            { name: 'Hon. R. Calloway', role: 'Neutral', email: 'rcalloway@nam-neutrals.example' },
          ].map((p, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: i < 3 ? '1px dashed var(--stroke-1)' : 0 }}>
              <input type="checkbox" defaultChecked />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{p.name}</div>
                <div style={{ fontSize: 11.5, color: 'var(--fg-2)' }}>{p.role} · {p.email}</div>
              </div>
              <Pill tone="cream">{p.role.split(' ')[0]}</Pill>
            </div>
          ))}
        </div>
        <Field label="Email template">
          <select className="select"><option>Standard hearing confirmation</option><option>Reschedule notice</option><option>Custom…</option></select>
        </Field>
      </Modal>

      {/* Hearing status change modal */}
      <Modal open={!!statusModal} onClose={() => setStatusModal(null)} width={520}
        title="Update hearing status"
        subtitle={statusModal ? `${statusModal.neutral} · ${fmtDateTime(statusModal.date)}` : ''}
        footer={<>
          <Button variant="ghost" onClick={() => setStatusModal(null)}>Cancel</Button>
          <Button variant="primary" onClick={() => { setStatusModal(null); onShowToast('Hearing status updated · downstream actions queued'); }}>Apply update</Button>
        </>}>
        <Field label="New status">
          <select className="select" defaultValue="adjourned">
            <option value="continued">Continued</option>
            <option value="adjourned">Adjourned</option>
            <option value="cancelled">Cancelled</option>
            <option value="settled">Settled</option>
            <option value="heard">Heard / Decision pending</option>
          </select>
        </Field>
        <div style={{ marginTop: 12 }}>
          <Field label="Reason">
            <select className="select"><option>Party request</option><option>Neutral conflict</option><option>Discovery outstanding</option><option>Settlement reached</option></select>
          </Field>
        </div>
        <div style={{ marginTop: 12 }}>
          <Field label="Notes">
            <textarea className="textarea" placeholder="Optional context for the audit log…" />
          </Field>
        </div>
        <div className="card card-pad-sm" style={{ marginTop: 14, background: '#fef2c5', border: '1px solid #e8d27a' }}>
          <div className="row gap-2" style={{ color: '#7f201f', fontSize: 12.5 }}>
            <Icon name="zap" size={13} />
            <strong>Auto consequences when applied:</strong>
          </div>
          <ul style={{ margin: '6px 0 0 22px', padding: 0, fontSize: 12.5, color: '#7f201f' }}>
            <li>Adjournment fee invoice generated</li>
            <li>Neutral availability released back to roster</li>
            <li>Case status updates: Scheduled → Adjourned</li>
            <li>Diary entry: 7-day reschedule follow-up</li>
          </ul>
        </div>
      </Modal>
    </div>
  );
}

// ---------------- Finance tab (per case) ----------------
function FinanceTab({ caseObj }) {
  const D = window.NAM_DATA;
  const invoices = D.invoices.filter(i => i.case === caseObj.id);
  const total = invoices.reduce((s, i) => s + i.amount, 0);
  const outstanding = invoices.filter(i => i.status === 'overdue' || i.status === 'sent').reduce((s, i) => s + i.amount, 0);
  const paid = invoices.filter(i => i.status === 'paid').reduce((s, i) => s + i.amount, 0);

  return (
    <div style={{ padding: '24px 28px 60px' }}>
      <div className="row" style={{ marginBottom: 14 }}>
        <h2 className="title-serif" style={{ fontSize: 22 }}>Finance · {invoices.length} invoices</h2>
        <div style={{ flex: 1 }} />
        <Button variant="outline" size="sm" icon="dollar">Record payment</Button>
        <Button variant="primary" size="sm" icon="plus" style={{ marginLeft: 8 }}>New invoice</Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 20 }}>
        <div className="stat-card"><div className="stat-label">Billed to date</div><div className="stat-num">{fmtMoney(total)}</div></div>
        <div className="stat-card"><div className="stat-label">Outstanding</div><div className="stat-num" style={{ color: outstanding > 0 ? 'var(--primary)' : 'inherit' }}>{fmtMoney(outstanding)}</div></div>
        <div className="stat-card"><div className="stat-label">Paid</div><div className="stat-num">{fmtMoney(paid)}</div></div>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <table className="data">
          <thead><tr><th style={{ paddingLeft: 18 }}>Invoice #</th><th>Issued</th><th>Client</th><th>Status</th><th style={{ textAlign: 'right', paddingRight: 18 }}>Amount</th></tr></thead>
          <tbody>
            {invoices.map(inv => (
              <tr key={inv.id}>
                <td style={{ paddingLeft: 18, fontFamily: 'IBM Plex Mono, monospace', fontSize: 12.5, fontWeight: 500 }}>{inv.id}</td>
                <td style={{ fontSize: 12.5 }}>{fmtDate(inv.issued)}</td>
                <td style={{ fontSize: 13 }}>{inv.client}</td>
                <td><InvoiceStatusPill status={inv.status} daysOverdue={inv.daysOverdue} /></td>
                <td style={{ textAlign: 'right', paddingRight: 18, fontFamily: 'IBM Plex Mono, monospace', fontSize: 13, fontWeight: 500 }}>{fmtMoney(inv.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {invoices.length === 0 && <EmptyState icon="dollar" title="No invoices yet" body="Invoices auto-generate from hearings, settlements, and PMA/decisions." />}
      </div>
    </div>
  );
}

function InvoiceStatusPill({ status, daysOverdue }) {
  const map = {
    'pending-review': { tone: 'amber', label: 'Pending review' },
    'approved': { tone: 'cream', label: 'Approved' },
    'sent': { tone: 'muted', label: 'Sent' },
    'paid': { tone: 'success', label: 'Paid' },
    'overdue': { tone: 'danger', label: `Overdue · ${daysOverdue}d` },
    'flagged': { tone: 'amber', label: 'Flagged' },
  };
  const s = map[status] || { tone: 'muted', label: status };
  return <Pill tone={s.tone} dot>{s.label}</Pill>;
}

// ---------------- Diary tab ----------------
function DiaryTab({ caseObj, onShowToast }) {
  const D = window.NAM_DATA;
  const tasks = D.tasks.filter(t => t.case === caseObj.id);
  const [showAdd, setShowAdd] = React.useState(false);

  return (
    <div style={{ padding: '24px 28px 60px' }}>
      <div className="row" style={{ marginBottom: 14 }}>
        <div>
          <h2 className="title-serif" style={{ fontSize: 22 }}>Diary & tasks · {tasks.length}</h2>
          <div style={{ fontSize: 13, color: 'var(--fg-2)' }}>First-class task model. Past-due items auto-roll until resolved. Linked source events auto-complete tasks.</div>
        </div>
        <div style={{ flex: 1 }} />
        <Button variant="primary" size="sm" icon="plus" onClick={() => setShowAdd(true)}>Add task</Button>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <table className="data">
          <thead><tr><th style={{ paddingLeft: 18, width: 40 }}></th><th>Task</th><th>Source event</th><th>Owner</th><th>SLA</th><th style={{ paddingRight: 18 }}>Due</th></tr></thead>
          <tbody>
            {tasks.map(t => (
              <tr key={t.id}>
                <td style={{ paddingLeft: 18 }}>
                  <input type="checkbox" />
                </td>
                <td>
                  <div style={{ fontSize: 13.5, fontWeight: 500 }}>{t.title}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--fg-2)', marginTop: 2 }}>Auto-rolls until resolved · {t.linkedEvent}</div>
                </td>
                <td style={{ fontSize: 12.5, color: 'var(--fg-2)' }}>{t.source}</td>
                <td><Avatar initials={D.users.me.initials} size={22} /></td>
                <td style={{ fontSize: 12.5, color: 'var(--fg-2)' }}>{t.sla}</td>
                <td style={{ paddingRight: 18 }}>
                  <Pill tone={t.status === 'overdue' ? 'danger' : 'muted'} dot>
                    {t.status === 'overdue' ? 'Overdue' : fmtDate(t.due)}
                  </Pill>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {tasks.length === 0 && <EmptyState icon="check" title="No tasks for this case" body="Tasks auto-create when source events fire." />}
      </div>

      <Modal open={showAdd} onClose={() => setShowAdd(false)} title="Add task" width={520}
        footer={<>
          <Button variant="ghost" onClick={() => setShowAdd(false)}>Cancel</Button>
          <Button variant="primary" onClick={() => { setShowAdd(false); onShowToast('Task added to case'); }}>Create task</Button>
        </>}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Field label="Title"><input className="input" placeholder="What needs to happen?" autoFocus /></Field>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <Field label="Owner"><select className="select"><option>{D.users.me.name} (me)</option><option>{D.users.sup.name}</option></select></Field>
            <Field label="Due date"><input className="input" type="date" defaultValue="2026-05-12" /></Field>
          </div>
          <Field label="SLA"><select className="select"><option>24 hours</option><option>48 hours</option><option>3 business days</option><option>7 business days</option></select></Field>
          <Field label="Description (optional)"><textarea className="textarea" placeholder="Context, links, party numbers…"></textarea></Field>
        </div>
      </Modal>
    </div>
  );
}

// ---------------- Communications tab ----------------
function CommunicationsTab({ caseObj }) {
  const emails = [
    { id: 'e1', from: 'M. Calderón', email: 'm.calderon@pinecrest.example', subject: 'Re: missing claim filed date — ' + caseObj.id, snippet: 'Filed date is 14 March 2026. Apologies for the delay; the original notice never reached me. Sending claim file separately.', date: '2026-05-06T09:50', dir: 'in', linked: 'auto' },
    { id: 'e2', from: 'Jordan Avery', email: 'j.avery@nam-cms.example', subject: 'Missing intake fields — Acme Holdings v. Pinecrest', snippet: 'Hi M., we still need the claim filed date and adjuster phone to complete intake. Could you send by EOD?', date: '2026-05-06T08:30', dir: 'out', linked: 'auto' },
    { id: 'e3', from: 'Daniel R. Whitaker', email: 'dwhitaker@quincyreed.com', subject: 'Demand for arbitration — submission', snippet: 'Please find attached the demand and supporting documents. We are requesting expedited scheduling given client circumstances.', date: '2026-05-05T14:12', dir: 'in', linked: 'manual' },
  ];

  return (
    <div style={{ padding: '24px 28px 60px', display: 'grid', gridTemplateColumns: '1fr 480px', gap: 24 }}>
      <div>
        <div className="row" style={{ marginBottom: 14 }}>
          <h2 className="title-serif" style={{ fontSize: 22 }}>Communications</h2>
          <div style={{ flex: 1 }} />
          <Button variant="outline" size="sm" icon="filter">Filter</Button>
          <Button variant="primary" size="sm" icon="send" style={{ marginLeft: 8 }}>New email</Button>
        </div>

        <div className="card">
          {emails.map((m, i) => (
            <div key={m.id} className="hover-row" style={{ padding: '14px 18px', borderBottom: i < emails.length - 1 ? '1px solid var(--stroke-1)' : 0, display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{
                width: 32, height: 32, borderRadius: 999,
                background: m.dir === 'in' ? '#fef2c5' : 'var(--primary)',
                color: m.dir === 'in' ? '#7f201f' : '#fff',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Icon name={m.dir === 'in' ? 'mail' : 'send'} size={14} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="row gap-2">
                  <span style={{ fontSize: 13, fontWeight: 600 }}>{m.from}</span>
                  <span style={{ fontSize: 11.5, color: 'var(--fg-2)', fontFamily: 'IBM Plex Mono, monospace' }}>&lt;{m.email}&gt;</span>
                  <div style={{ flex: 1 }} />
                  {m.linked === 'auto' && <Pill tone="success" dot>Auto-linked</Pill>}
                  {m.linked === 'manual' && <Pill tone="muted">Manually linked</Pill>}
                  <span style={{ fontSize: 11.5, color: 'var(--fg-2)' }}>{fmtTimeAgo(m.date)}</span>
                </div>
                <div style={{ fontSize: 13, fontWeight: 500, marginTop: 4 }}>{m.subject}</div>
                <div style={{ fontSize: 12.5, color: 'var(--fg-2)', marginTop: 4, lineHeight: 1.55 }}>{m.snippet}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compose */}
      <div>
        <div className="card" style={{ position: 'sticky', top: 0 }}>
          <div style={{ padding: '16px 20px 12px', borderBottom: '1px solid var(--stroke-1)' }}>
            <div className="title-serif" style={{ fontSize: 18 }}>Send from this case</div>
            <div style={{ fontSize: 12, color: 'var(--fg-2)', marginTop: 2 }}>Outbound auto-logged. Replies thread back here.</div>
          </div>
          <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Field label="To">
              <select className="select" multiple={false}><option>All parties · 4 recipients</option><option>Claimant counsel</option><option>Respondent counsel</option><option>Adjuster only</option></select>
            </Field>
            <Field label="Template">
              <select className="select"><option>Custom message</option><option>48-hour follow-up</option><option>Pre-hearing reminder</option><option>Adjournment notice</option></select>
            </Field>
            <Field label="Subject">
              <input className="input" defaultValue={`Update — ${caseObj.id}`} />
            </Field>
            <Field label="Message">
              <textarea className="textarea" style={{ minHeight: 120 }} defaultValue="Hi all,&#10;&#10;Following up on the items below to keep this matter moving forward."></textarea>
            </Field>
            <div className="row" style={{ justifyContent: 'flex-end', gap: 6, marginTop: 4 }}>
              <Button variant="ghost" size="sm" icon="paperclip">Attach</Button>
              <Button variant="primary" size="sm" icon="send">Send · log to case</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { CaseDetail });
