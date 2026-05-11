// Screens part 2 — Timesheet, PMA, Availability, Documents, Notifications, Profile, Login
const { useState: useState2 } = React;

// ===== Timesheets =====
function TimesheetsPage({ go }) {
  const { TIMESHEETS, CASES } = window.NPDATA;
  const [view, setView] = useState2("list");
  const [showValidation, setShowValidation] = useState2(false);
  const [hours, setHours] = useState2("5.5");
  const scheduledHours = 4;
  const variance = ((parseFloat(hours) - scheduledHours) / scheduledHours) * 100;

  if (view === "submit") return (
    <div>
      <div className="crumbs mb-3">
        <a onClick={() => setView("list")} style={{cursor: 'pointer'}}>Timesheets</a>
        <Icon name="chevron-right" size={13}/>
        <span className="now">Submit timesheet</span>
      </div>
      <div className="page-head">
        <div><h1>Submit timesheet</h1><div className="sub">Pre-populated from hearing record · NAM-2025-04812</div></div>
      </div>
      <div className="grid g-2x1">
        <div className="card">
          <div className="card-head"><h3>Hearing details</h3><span className="badge badge-navy">Pre-populated</span></div>
          <div className="card-body" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16}}>
            <div className="field">
              <label>Case</label>
              <div className="input" style={{background: 'var(--paper)'}}>NAM-2025-04812 · Atherton Holdings v. Bridgewater</div>
            </div>
            <div className="field">
              <label>Hearing type</label>
              <div className="input" style={{background: 'var(--paper)'}}>Arbitration hearing</div>
            </div>
            <div className="field">
              <label>Hearing date</label>
              <div className="input" style={{background: 'var(--paper)'}}>May 14, 2026</div>
            </div>
            <div className="field">
              <label>Scheduled length</label>
              <div className="input" style={{background: 'var(--paper)'}}>4 hours (10:00 AM – 2:00 PM ET)</div>
            </div>

            <div style={{gridColumn: '1 / -1', borderTop: '1px solid var(--line-2)', paddingTop: 16, marginTop: 4}}>
              <h3 style={{marginBottom: 12}}>Your time</h3>
            </div>

            <div className="field">
              <label>Start time</label>
              <input className="input" defaultValue="10:00 AM"/>
            </div>
            <div className="field">
              <label>End time</label>
              <input className="input" defaultValue="3:30 PM"/>
            </div>
            <div className="field">
              <label>Hours billed</label>
              <input className="input" value={hours} onChange={e => setHours(e.target.value)} onBlur={() => setShowValidation(Math.abs(variance) > 10)}/>
              <div className="help">Includes 30-minute deliberation, excludes lunch.</div>
            </div>
            <div className="field">
              <label>Travel time (optional)</label>
              <input className="input" placeholder="0.0"/>
              <div className="help">Per your fee structure: in-person hearings only.</div>
            </div>

            {showValidation && (
              <div className="alert alert-warning" style={{gridColumn: '1 / -1'}}>
                <Icon name="alert" size={18} className="icon"/>
                <div style={{flex: 1}}>
                  <div className="title">Hours variance: +{variance.toFixed(0)}% over scheduled length</div>
                  <div className="body">You submitted {hours}h against a {scheduledHours}h scheduled block. NAM Finance will review the variance. Add a note below if you'd like to explain.</div>
                </div>
              </div>
            )}

            <div className="field" style={{gridColumn: '1 / -1'}}>
              <label>Note to NAM Finance (optional)</label>
              <textarea className="textarea" placeholder="e.g. Hearing ran long due to expert witness testimony"></textarea>
            </div>
          </div>
        </div>

        <div className="col gap-4" style={{display: 'flex'}}>
          <div className="card">
            <div className="card-head"><h3>Fee structure</h3></div>
            <div className="card-body" style={{display: 'flex', flexDirection: 'column', gap: 10}}>
              <div className="flex-between"><span className="cell-meta">Rate</span><span className="cell-strong">$450 / hr</span></div>
              <div className="flex-between"><span className="cell-meta">Structure</span><span>Standard</span></div>
              <div className="divider" style={{margin: 0}}></div>
              <div className="flex-between"><span className="cell-meta">Hours × rate</span><span>{hours} × $450</span></div>
              <div className="flex-between" style={{fontSize: 16}}><span className="cell-strong">Estimated total</span><span className="cell-strong">${(parseFloat(hours || 0) * 450).toLocaleString('en-US', {minimumFractionDigits: 2})}</span></div>
              <div className="help" style={{marginTop: 4}}>For transparency only. Final amount confirmed by NAM Finance.</div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <button className="btn btn-primary" style={{width: '100%'}}>Submit timesheet</button>
              <button className="btn btn-secondary" style={{width: '100%', marginTop: 8}}>Save as draft</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Timesheets</h1>
          <div className="sub">Pre-populated from hearing records · validated against scheduled time</div>
        </div>
        <div className="page-actions">
          <button className="btn btn-primary" onClick={() => setView("submit")}><Icon name="plus" size={14}/> New timesheet</button>
        </div>
      </div>

      <div className="grid g-4 mb-4">
        <div className="card stat"><div className="label">Submitted (YTD)</div><div className="value">28</div><div className="delta">$24,750 total</div></div>
        <div className="card stat"><div className="label">Paid</div><div className="value">25</div><div className="delta up">$22,275 disbursed</div></div>
        <div className="card stat"><div className="label">In review</div><div className="value">2</div><div className="delta">$2,475 pending</div></div>
        <div className="card stat"><div className="label">Avg cycle time</div><div className="value">11 d</div><div className="delta up">−3d vs. last year</div></div>
      </div>

      <div className="card">
        <div className="card-head"><h3>All submissions</h3><span className="meta">Showing 2026</span></div>
        <div className="card-body flush">
          <table className="table">
            <thead><tr><th>Reference</th><th>Case</th><th>Hearing date</th><th>Hours</th><th>Amount</th><th>Status</th><th>Payment</th></tr></thead>
            <tbody>
              {TIMESHEETS.map(t => {
                const c = CASES.find(c => c.id === t.caseId);
                const sb = t.status === "approved" ? "badge-success" : t.status === "review" ? "badge-warning" : "badge-neutral";
                return (
                  <tr key={t.id}>
                    <td><div className="cell-strong">{t.id}</div></td>
                    <td>
                      <div>{c?.title.slice(0, 36)}{c?.title.length > 36 ? "…" : ""}</div>
                      <div className="cell-meta">{t.caseId}</div>
                    </td>
                    <td>{t.date}</td>
                    <td>{t.hours} h</td>
                    <td className="cell-strong">{t.amount}</td>
                    <td><span className={"badge " + sb}><span className="pip"></span>{t.statusLabel}</span></td>
                    <td className="cell-meta">{t.paymentDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ===== PMA Drafting =====
function PMAPage({ go }) {
  const { CLAUSES } = window.NPDATA;
  const [clauses, setClauses] = useState2(CLAUSES);
  const [view, setView] = useState2("draft"); // draft | preview | submitted
  const [amount, setAmount] = useState2("180,000");
  const toggleClause = id => setClauses(cs => cs.map(c => c.id === id ? { ...c, selected: !c.selected } : c));

  if (view === "submitted") return (
    <div>
      <div className="page-head"><div><h1>PMA — Delano v. Riverbend Medical Group</h1><div className="sub">NAM-2025-04501 · Mediation</div></div></div>
      <div className="alert alert-success mb-4">
        <Icon name="check" size={18} className="icon"/>
        <div><div className="title">Submitted for NAM review</div><div className="body">Maria Echeverria (Case Manager) has been notified. She'll review and trigger DocuSign to all parties.</div></div>
      </div>
      <div className="grid g-2x1">
        <div className="card">
          <div className="card-head"><h3>Submission status</h3></div>
          <div className="card-body">
            <div className="timeline">
              <div className="timeline-item done">
                <div className="ti-title">Draft submitted</div>
                <div className="ti-meta">Today, 11:42 AM · by you</div>
              </div>
              <div className="timeline-item">
                <div className="ti-title">NAM review</div>
                <div className="ti-meta">In progress · est. completion within 24 hours</div>
              </div>
              <div className="timeline-item">
                <div className="ti-title">DocuSign sent to parties</div>
                <div className="ti-meta">Pending NAM approval</div>
              </div>
              <div className="timeline-item">
                <div className="ti-title">All parties signed</div>
                <div className="ti-meta">Pending</div>
              </div>
              <div className="timeline-item">
                <div className="ti-title">Payment cleared</div>
                <div className="ti-meta">Pending</div>
              </div>
              <div className="timeline-item">
                <div className="ti-title">PMA released to parties</div>
                <div className="ti-meta">Pending</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-head"><h3>If parties prefer paper</h3></div>
          <div className="card-body">
            <p style={{color: 'var(--ink-2)', fontSize: 13.5, marginBottom: 12}}>If any party cannot sign digitally, NAM can route a physical signature copy. Status will continue to update here.</p>
            <button className="btn btn-secondary" style={{width: '100%'}}><Icon name="message" size={13}/> Request physical signature path</button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="crumbs mb-3">
        <a onClick={() => go("case", "NAM-2025-04501")} style={{cursor: 'pointer'}}>NAM-2025-04501</a>
        <Icon name="chevron-right" size={13}/>
        <span className="now">Draft PMA</span>
      </div>
      <div className="page-head">
        <div>
          <h1>Draft Post-Mediation Agreement</h1>
          <div className="sub">Delano v. Riverbend Medical Group · Healthcare Malpractice Mediation</div>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary" onClick={() => setView(view === "preview" ? "draft" : "preview")}>
            <Icon name="eye" size={14}/> {view === "preview" ? "Edit draft" : "Preview"}
          </button>
          <button className="btn btn-secondary">Save draft</button>
          <button className="btn btn-primary" onClick={() => setView("submitted")}>Submit for NAM review</button>
        </div>
      </div>

      {view === "draft" ? (
        <div className="grid" style={{gridTemplateColumns: '1fr 320px', gap: 20}}>
          <div className="card">
            <div className="card-head"><h3>Agreement terms</h3><span className="badge badge-navy">Case context pre-populated</span></div>
            <div className="card-body" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16}}>
              <div className="field"><label>Case number</label><div className="input" style={{background: 'var(--paper)'}}>NAM-2025-04501</div></div>
              <div className="field"><label>Mediation date</label><div className="input" style={{background: 'var(--paper)'}}>May 04, 2026</div></div>
              <div className="field"><label>Claimant</label><div className="input" style={{background: 'var(--paper)'}}>Cassandra Delano</div></div>
              <div className="field"><label>Respondent</label><div className="input" style={{background: 'var(--paper)'}}>Riverbend Medical Group</div></div>

              <div style={{gridColumn: '1 / -1', borderTop: '1px solid var(--line-2)', paddingTop: 16}}>
                <h3 style={{marginBottom: 12}}>Resolution</h3>
              </div>

              <div className="field"><label>Settlement amount (USD)</label>
                <div style={{position: 'relative'}}>
                  <span style={{position: 'absolute', left: 12, top: 9, color: 'var(--ink-3)'}}>$</span>
                  <input className="input" style={{paddingLeft: 24}} value={amount} onChange={e => setAmount(e.target.value)}/>
                </div>
              </div>
              <div className="field"><label>Payment due within</label>
                <select className="select"><option>30 days of execution</option><option>45 days</option><option>60 days</option><option>Other</option></select>
              </div>
              <div className="field" style={{gridColumn: '1 / -1'}}>
                <label>Resolution narrative</label>
                <textarea className="textarea" defaultValue="The parties, having engaged in good-faith mediation, agree to resolve all matters arising from the events of November 14, 2024 on the terms set forth in this Agreement. Respondent admits no liability. Claimant releases all claims known and unknown."></textarea>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-head"><h3>Clause library</h3><span className="meta">{clauses.filter(c => c.selected).length} selected</span></div>
            <div className="card-body" style={{padding: 0, maxHeight: 520, overflowY: 'auto'}}>
              {clauses.map(c => (
                <div key={c.id} onClick={() => toggleClause(c.id)} style={{padding: '14px 20px', borderBottom: '1px solid var(--line-2)', cursor: 'pointer', display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  <div style={{
                    width: 18, height: 18, borderRadius: 4,
                    border: '1.5px solid ' + (c.selected ? 'var(--navy)' : 'var(--line)'),
                    background: c.selected ? 'var(--navy)' : 'transparent',
                    color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: 1,
                  }}>
                    {c.selected && <Icon name="check" size={12} stroke={3}/>}
                  </div>
                  <div style={{flex: 1, minWidth: 0}}>
                    <div className="cell-strong" style={{fontSize: 13}}>{c.name}</div>
                    <div className="cell-meta">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{padding: 12, borderTop: '1px solid var(--line-2)', background: 'var(--paper)', fontSize: 12, color: 'var(--ink-3)'}}>
              <Icon name="info" size={12}/> Clauses are managed by NAM Admin. New clauses can be added without code changes.
            </div>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card-body" style={{padding: '48px 80px', maxWidth: 800, margin: '0 auto', fontFamily: '"Source Serif Pro", Georgia, serif'}}>
            <div style={{textAlign: 'center', marginBottom: 32}}>
              <div style={{fontSize: 11, letterSpacing: '0.18em', color: 'var(--ink-3)', textTransform: 'uppercase', marginBottom: 8}}>National Arbitration and Mediation</div>
              <h2 style={{fontSize: 22, fontFamily: 'inherit', letterSpacing: '-0.01em'}}>POST-MEDIATION AGREEMENT</h2>
              <div style={{color: 'var(--ink-3)', marginTop: 8, fontSize: 13}}>NAM-2025-04501</div>
            </div>
            <p style={{lineHeight: 1.7, marginBottom: 14, color: 'var(--ink)'}}>
              This Post-Mediation Agreement (the "Agreement") is entered into as of May 11, 2026, by and between <strong>Cassandra Delano</strong> ("Claimant") and <strong>Riverbend Medical Group</strong> ("Respondent"), collectively the "Parties."
            </p>
            <p style={{lineHeight: 1.7, marginBottom: 14}}>
              The Parties, having engaged in good-faith mediation, agree to resolve all matters arising from the events of November 14, 2024 on the terms set forth in this Agreement. Respondent admits no liability. Claimant releases all claims known and unknown.
            </p>
            <p style={{lineHeight: 1.7, marginBottom: 14}}>
              <strong>1. Settlement Amount.</strong> Respondent shall pay to Claimant the sum of <strong>${amount}.00 USD</strong> within thirty (30) days of execution.
            </p>
            {clauses.filter(c => c.selected).map((c, i) => (
              <p key={c.id} style={{lineHeight: 1.7, marginBottom: 14}}>
                <strong>{i + 2}. {c.name}.</strong> {c.desc}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ===== Availability =====
function AvailabilityPage({ go }) {
  const [showSubmit, setShowSubmit] = useState2(false);
  // Build May 2026 calendar (May 1, 2026 = Friday)
  const days = [];
  for (let i = 0; i < 35; i++) days.push(i);
  const cells = days.map(i => {
    const dayNum = i - 4; // first cell is Sun Apr 26 → May 1 is index 5
    const inMonth = dayNum >= 1 && dayNum <= 31;
    const today = dayNum === 11;
    let events = [];
    if (dayNum === 12) events.push({ label: "Quintero · 2:00 PM", type: "" });
    if (dayNum === 14) events.push({ label: "Atherton · 10:00 AM", type: "" });
    if (dayNum === 19) events.push({ label: "Westmark · 9:30 AM", type: "" });
    if (dayNum === 22) events.push({ label: "Okafor · 11:00 AM", type: "" });
    if (dayNum === 7) events.push({ label: "Pre-hearing · Westmark", type: "" });
    if (dayNum >= 25 && dayNum <= 29) events.push({ label: dayNum === 25 ? "Vacation (approved)" : "Vacation", type: "vacation" });
    if (dayNum === 30) events.push({ label: "Conf. CLE seminar", type: "pending" });
    return { dayNum, inMonth, today, events };
  });
  const dow = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Availability</h1>
          <div className="sub">Unified view · hearing bookings from CMS 2.0 + your submitted vacation</div>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary"><Icon name="external" size={14}/> Export iCal</button>
          <button className="btn btn-primary" onClick={() => setShowSubmit(true)}><Icon name="plus" size={14}/> Submit vacation</button>
        </div>
      </div>

      <div className="alert alert-info mb-4">
        <Icon name="info" size={18} className="icon"/>
        <div><div className="title">No conflicts detected</div><div className="body">Your approved vacation (May 25–29) does not overlap with any scheduled hearings. Conflicts will be flagged here in real time.</div></div>
      </div>

      <div className="grid" style={{gridTemplateColumns: '1fr 320px', gap: 20}}>
        <div className="calendar">
          <div className="cal-head">
            <div className="flex-center gap-3">
              <button className="icon-btn"><Icon name="chevron-left" size={16}/></button>
              <h3 style={{fontSize: 16}}>May 2026</h3>
              <button className="icon-btn"><Icon name="chevron-right" size={16}/></button>
            </div>
            <div className="flex gap-2">
              <div className="flex-center gap-2" style={{fontSize: 11.5, color: 'var(--ink-3)'}}><span style={{width: 10, height: 10, background: 'var(--navy)', borderRadius: 2}}></span> Hearing</div>
              <div className="flex-center gap-2" style={{fontSize: 11.5, color: 'var(--ink-3)'}}><span style={{width: 10, height: 10, background: 'var(--gold)', borderRadius: 2}}></span> Vacation</div>
              <div className="flex-center gap-2" style={{fontSize: 11.5, color: 'var(--ink-3)'}}><span style={{width: 10, height: 10, background: 'var(--ink-4)', borderRadius: 2}}></span> Pending</div>
            </div>
          </div>
          <div className="cal-grid">
            {dow.map(d => <div key={d} className="cal-dow">{d}</div>)}
            {cells.map((c, i) => (
              <div key={i} className={"cal-cell " + (!c.inMonth ? "muted " : "") + (c.today ? "today" : "")}>
                <div className="cal-date">{c.inMonth ? c.dayNum : (c.dayNum <= 0 ? 30 + c.dayNum : c.dayNum - 31)}</div>
                {c.events.map((e, ei) => (
                  <div key={ei} className={"cal-event " + e.type}>{e.label}</div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="col gap-4" style={{display: 'flex'}}>
          <div className="card">
            <div className="card-head"><h3>Preferences</h3></div>
            <div className="card-body" style={{display: 'flex', flexDirection: 'column', gap: 14}}>
              <div className="field">
                <label>Preferred format</label>
                <div className="row gap-2">
                  <button className="btn btn-primary btn-sm" style={{flex: 1}}>Zoom</button>
                  <button className="btn btn-secondary btn-sm" style={{flex: 1}}>In-person</button>
                  <button className="btn btn-secondary btn-sm" style={{flex: 1}}>Either</button>
                </div>
              </div>
              <div className="field">
                <label>Preferred days</label>
                <div className="row gap-2" style={{flexWrap: 'wrap'}}>
                  {["M", "T", "W", "T", "F"].map((d, i) => (
                    <button key={i} className={"btn btn-sm " + (i < 4 ? "btn-primary" : "btn-secondary")} style={{width: 38, padding: '5px 0'}}>{d}</button>
                  ))}
                </div>
                <div className="help">Used as a preference signal by NAM Scheduling. Not a hard constraint.</div>
              </div>
              <div className="field">
                <label>Preferred offices</label>
                <select className="select"><option>NAM New York, NAM Garden City</option></select>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-head"><h3>Vacation requests (2026)</h3></div>
            <div className="card-body flush">
              <div style={{padding: 14, borderBottom: '1px solid var(--line-2)'}}>
                <div className="flex-between"><span className="cell-strong">May 25 – May 29</span><span className="badge badge-success"><span className="pip"></span>Approved</span></div>
                <div className="cell-meta">Family vacation · approved May 02</div>
              </div>
              <div style={{padding: 14, borderBottom: '1px solid var(--line-2)'}}>
                <div className="flex-between"><span className="cell-strong">Jun 22 – Jun 28</span><span className="badge badge-success"><span className="pip"></span>Approved</span></div>
                <div className="cell-meta">Bar conference · approved May 09</div>
              </div>
              <div style={{padding: 14}}>
                <div className="flex-between"><span className="cell-strong">Aug 10 – Aug 21</span><span className="badge badge-warning"><span className="pip"></span>Pending</span></div>
                <div className="cell-meta">Submitted May 06 · awaiting NAM approval</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showSubmit && (
        <div onClick={() => setShowSubmit(false)} style={{position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100}}>
          <div onClick={e => e.stopPropagation()} className="card" style={{width: 480, boxShadow: 'var(--shadow-lg)'}}>
            <div className="card-head"><h3>Submit vacation</h3><button className="icon-btn" onClick={() => setShowSubmit(false)}><Icon name="x" size={16}/></button></div>
            <div className="card-body" style={{display: 'flex', flexDirection: 'column', gap: 14}}>
              <div className="row gap-3">
                <div className="field flex-1"><label>Start date</label><input className="input" defaultValue="2026-07-15" type="date"/></div>
                <div className="field flex-1"><label>End date</label><input className="input" defaultValue="2026-07-22" type="date"/></div>
              </div>
              <div className="field"><label>Reason (optional, for NAM)</label><textarea className="textarea" placeholder="e.g. Personal travel"></textarea></div>
              <div className="alert alert-info"><Icon name="info" size={16} className="icon"/><div><div className="body">No upcoming hearings during this period. NAM Scheduling typically approves within 2 business days.</div></div></div>
              <div className="row gap-2" style={{justifyContent: 'flex-end'}}>
                <button className="btn btn-secondary" onClick={() => setShowSubmit(false)}>Cancel</button>
                <button className="btn btn-primary" onClick={() => setShowSubmit(false)}>Submit for approval</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ===== Notifications =====
function NotificationsPage() {
  const { NOTIFICATIONS } = window.NPDATA;
  const [tab, setTab] = useState2("all");
  const list = tab === "unread" ? NOTIFICATIONS.filter(n => n.unread) : NOTIFICATIONS;
  const typeIcon = { case: "briefcase", hearing: "calendar", doc: "file", payment: "dollar", pma: "file-edit", availability: "check" };
  return (
    <div>
      <div className="page-head">
        <div><h1>Notifications</h1><div className="sub">{NOTIFICATIONS.filter(n => n.unread).length} unread</div></div>
        <div className="page-actions">
          <button className="btn btn-secondary"><Icon name="check" size={14}/> Mark all read</button>
          <button className="btn btn-secondary"><Icon name="settings" size={14}/> Preferences</button>
        </div>
      </div>
      <div className="tabs">
        <div className={"tab " + (tab === "all" ? "active" : "")} onClick={() => setTab("all")}>All</div>
        <div className={"tab " + (tab === "unread" ? "active" : "")} onClick={() => setTab("unread")}>Unread <span className="badge badge-warning" style={{marginLeft: 6}}>{NOTIFICATIONS.filter(n => n.unread).length}</span></div>
      </div>

      <div className="grid" style={{gridTemplateColumns: '1fr 320px', gap: 20}}>
        <div className="card">
          <div className="card-body flush">
            {list.map(n => (
              <div key={n.id} style={{padding: '14px 20px', borderBottom: '1px solid var(--line-2)', display: 'flex', gap: 14, alignItems: 'flex-start', background: n.unread ? '#FAFCFF' : 'transparent'}}>
                <div className="task-icon"><Icon name={typeIcon[n.type] || "bell"} size={16}/></div>
                <div style={{flex: 1}}>
                  <div style={{fontWeight: n.unread ? 600 : 500, fontSize: 13.5}}>{n.title} {n.unread && <span style={{width: 7, height: 7, borderRadius: 999, background: 'var(--navy)', display: 'inline-block', marginLeft: 6}}></span>}</div>
                  <div className="cell-meta" style={{marginTop: 3}}>{n.desc}</div>
                </div>
                <div className="cell-meta" style={{whiteSpace: 'nowrap'}}>{n.time}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <div className="card-head"><h3>Delivery preferences</h3></div>
          <div className="card-body" style={{display: 'flex', flexDirection: 'column', gap: 12}}>
            {[
              ["New case assigned", "Email + In-app"],
              ["Hearing scheduled / changed", "Email + In-app"],
              ["Document uploaded", "In-app"],
              ["Task created", "In-app"],
              ["PMA / decision released", "Email + In-app"],
              ["Payment scheduled", "Email"],
            ].map(([t, m]) => (
              <div key={t} className="flex-between"><span style={{fontSize: 13}}>{t}</span><span className="badge badge-neutral">{m}</span></div>
            ))}
            <div className="divider"></div>
            <div className="flex-between">
              <span style={{fontSize: 13, fontWeight: 500}}>Daily digest email</span>
              <Toggle initial={true}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Toggle({ initial = false }) {
  const [on, setOn] = useState2(initial);
  return (
    <button onClick={() => setOn(!on)} style={{
      width: 36, height: 20, borderRadius: 999,
      background: on ? 'var(--navy)' : '#cbd5e1',
      position: 'relative', transition: 'background 150ms',
    }}>
      <span style={{
        position: 'absolute', top: 2, left: on ? 18 : 2,
        width: 16, height: 16, borderRadius: 999, background: '#fff',
        transition: 'left 150ms',
        boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
      }}></span>
    </button>
  );
}

// ===== Profile =====
function ProfilePage() {
  const [edit, setEdit] = useState2(false);
  return (
    <div>
      <div className="page-head">
        <div><h1>Profile</h1><div className="sub">Manage your contact details, payment information, and licensure</div></div>
        <div className="page-actions">
          {!edit ? <button className="btn btn-primary" onClick={() => setEdit(true)}><Icon name="edit" size={14}/> Edit profile</button> : <>
            <button className="btn btn-secondary" onClick={() => setEdit(false)}>Cancel</button>
            <button className="btn btn-primary" onClick={() => setEdit(false)}>Save changes</button>
          </>}
        </div>
      </div>

      <div className="grid g-2x1">
        <div className="col gap-4" style={{display: 'flex'}}>
          <div className="card">
            <div className="card-head"><h3>Personal details</h3></div>
            <div className="card-body" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16}}>
              <ProfileField label="Full name" value="Hon. Margaret L. Chen" edit={edit}/>
              <ProfileField label="Title" value="Retired Judge · ADR Professional" edit={edit}/>
              <ProfileField label="Email" value="m.chen@chenadr.com" edit={edit}/>
              <ProfileField label="Mobile" value="+1 (917) 555-0142" edit={edit}/>
              <ProfileField label="Mailing address" value="120 Broadway, Suite 2310, New York, NY 10271" edit={edit} span/>
              <ProfileField label="Preferred contact" value="Email" edit={edit}/>
              <ProfileField label="Time zone" value="America/New_York" edit={edit}/>
            </div>
          </div>

          <div className="card">
            <div className="card-head"><h3>Payment information</h3><span className="badge badge-warning">Changes require NAM approval</span></div>
            <div className="card-body" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16}}>
              <ProfileField label="Bank name" value="First Republic" edit={edit} sensitive/>
              <ProfileField label="Account holder" value="Margaret L. Chen" edit={edit} sensitive/>
              <ProfileField label="Account number" value="•••• •••• 4421" edit={edit} sensitive/>
              <ProfileField label="Routing number" value="•••• •••• 8830" edit={edit} sensitive/>
              <ProfileField label="W-9 on file" value="Yes · updated Jan 2026" edit={false}/>
              <ProfileField label="1099 delivery" value="Electronic" edit={edit}/>
            </div>
          </div>
        </div>

        <div className="col gap-4" style={{display: 'flex'}}>
          <div className="card">
            <div className="card-head"><h3>Licensure & specialities</h3><span className="meta">Managed by NAM</span></div>
            <div className="card-body" style={{display: 'flex', flexDirection: 'column', gap: 12}}>
              <div>
                <div className="cell-meta mb-2">Jurisdictions</div>
                <div className="flex gap-2" style={{flexWrap: 'wrap'}}>
                  {["NY", "NJ", "CT", "FL"].map(s => <span key={s} className="badge badge-navy">{s}</span>)}
                </div>
              </div>
              <div className="divider" style={{margin: 0}}></div>
              <div>
                <div className="cell-meta mb-2">Case types</div>
                <div className="flex gap-2" style={{flexWrap: 'wrap'}}>
                  {["Commercial Arb.", "Healthcare Med.", "PI", "Employment"].map(s => <span key={s} className="badge badge-gold">{s}</span>)}
                </div>
              </div>
              <div className="divider" style={{margin: 0}}></div>
              <div>
                <div className="cell-meta mb-2">Current rate (read-only)</div>
                <div className="cell-strong">$450 / hour · Standard structure</div>
                <div className="help">Set by NAM. Contact your recruiter to discuss.</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-head"><h3>Security</h3></div>
            <div className="card-body" style={{display: 'flex', flexDirection: 'column', gap: 10}}>
              <div className="flex-between"><span>Multi-factor authentication</span><span className="badge badge-success"><span className="pip"></span>Authenticator app</span></div>
              <div className="flex-between"><span>Trusted devices</span><span>2 active</span></div>
              <div className="flex-between"><span>Last sign-in</span><span className="cell-meta">Today, 8:41 AM ET</span></div>
              <div className="divider" style={{margin: 0}}></div>
              <button className="btn btn-secondary"><Icon name="lock" size={14}/> Change password</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileField({ label, value, edit, sensitive, span }) {
  return (
    <div className="field" style={span ? {gridColumn: '1 / -1'} : {}}>
      <label>{label} {sensitive && edit && <span className="badge badge-warning" style={{marginLeft: 4}}>Requires approval</span>}</label>
      {edit ? <input className="input" defaultValue={value}/> : <div style={{padding: '9px 0', borderBottom: '1px solid var(--line-2)', fontSize: 13.5}}>{value}</div>}
    </div>
  );
}

// ===== Login =====
function LoginPage({ onLogin }) {
  const [step, setStep] = useState2("login");
  return (
    <div style={{minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', background: 'var(--paper)'}}>
      <div style={{background: 'var(--navy)', color: '#fff', padding: '64px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <img src="assets/nam-logo.jpeg" alt="NAM" style={{height: 50, width: 'auto', borderRadius: 4}}/>
        <div>
          <div style={{fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 12}}>Neutrals Portal 2.0</div>
          <h1 style={{fontSize: 36, color: '#fff', lineHeight: 1.2, fontFamily: 'var(--font-serif), Georgia, serif', maxWidth: 480}}>Manage your caseload with clarity.</h1>
          <p style={{color: 'rgba(255,255,255,0.75)', marginTop: 16, maxWidth: 460, lineHeight: 1.6}}>The portal arbitrators, mediators and hearing officers use to handle their NAM-assigned matters — now built on the CMS 2.0 platform.</p>
        </div>
        <div style={{fontSize: 12, color: 'rgba(255,255,255,0.55)'}}>© 2026 National Arbitration and Mediation · Privacy · Terms</div>
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 48}}>
        <div style={{width: 380}}>
          {step === "login" && <>
            <h2 style={{fontSize: 24, marginBottom: 6}}>Sign in</h2>
            <p style={{color: 'var(--ink-3)', marginBottom: 28}}>Use the email NAM has on file for you.</p>
            <div className="field mb-3"><label>Email</label><input className="input" defaultValue="m.chen@chenadr.com"/></div>
            <div className="field mb-3"><label>Password</label><input className="input" type="password" defaultValue="••••••••••••"/></div>
            <div className="flex-between mb-4">
              <label style={{display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, cursor: 'pointer'}}>
                <input type="checkbox" defaultChecked/> Remember this device for 30 days
              </label>
              <a style={{fontSize: 13, color: 'var(--navy)', fontWeight: 500, cursor: 'pointer'}} onClick={() => setStep("forgot")}>Forgot password?</a>
            </div>
            <button className="btn btn-primary" style={{width: '100%', justifyContent: 'center', padding: '11px 14px', fontSize: 14}} onClick={() => setStep("mfa")}>Continue</button>
            <div className="divider"></div>
            <button className="btn btn-secondary" style={{width: '100%', justifyContent: 'center', padding: '11px 14px'}}><Icon name="shield" size={15}/> Sign in with firm SSO</button>
            <div style={{textAlign: 'center', marginTop: 24, fontSize: 13, color: 'var(--ink-3)'}}>
              Not a NAM neutral? <a style={{color: 'var(--navy)', fontWeight: 500}}>Contact recruiting</a>
            </div>
          </>}
          {step === "mfa" && <>
            <h2 style={{fontSize: 24, marginBottom: 6}}>Verification code</h2>
            <p style={{color: 'var(--ink-3)', marginBottom: 28}}>Enter the 6-digit code from your authenticator app.</p>
            <div className="row gap-2 mb-4">
              {[2, 9, 4, 0, 8, 1].map((d, i) => (
                <input key={i} className="input" defaultValue={d} maxLength={1} style={{textAlign: 'center', fontSize: 22, fontWeight: 600, padding: '14px 0', letterSpacing: 0}}/>
              ))}
            </div>
            <button className="btn btn-primary" style={{width: '100%', justifyContent: 'center', padding: '11px 14px', fontSize: 14}} onClick={onLogin}>Verify and continue</button>
            <div style={{textAlign: 'center', marginTop: 16, fontSize: 13}}>
              <a style={{color: 'var(--navy)', cursor: 'pointer'}}>Use a different method</a>
            </div>
          </>}
          {step === "forgot" && <>
            <h2 style={{fontSize: 24, marginBottom: 6}}>Reset your password</h2>
            <p style={{color: 'var(--ink-3)', marginBottom: 28}}>We'll email a recovery link to the address NAM has on file.</p>
            <div className="field mb-4"><label>Email</label><input className="input" placeholder="you@example.com"/></div>
            <button className="btn btn-primary" style={{width: '100%', justifyContent: 'center', padding: '11px 14px', fontSize: 14}} onClick={() => setStep("login")}>Send recovery link</button>
            <div style={{textAlign: 'center', marginTop: 16, fontSize: 13}}>
              <a style={{color: 'var(--navy)', cursor: 'pointer'}} onClick={() => setStep("login")}>Back to sign in</a>
            </div>
          </>}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { TimesheetsPage, PMAPage, AvailabilityPage, NotificationsPage, ProfilePage, LoginPage });
