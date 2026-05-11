// ============================================================
// NAM CMS 2.0 — Schedule Hearing modal (availability grid + bulk confirm)
// ============================================================

function ScheduleHearingModal({ caseId, onClose, onScheduled }) {
  const D = window.NAM_DATA;
  const c = D.cases.find(x => x.id === caseId);
  const [stage, setStage] = React.useState('grid'); // grid | location | confirm
  const [neutral, setNeutral] = React.useState('hon-calloway');
  const [slot, setSlot] = React.useState(null);
  const [location, setLocation] = React.useState('zoom');
  const [parties, setParties] = React.useState({
    claimant: true, claimantCounsel: true, respondent: true, respondentAdj: true, neutralCC: true,
  });

  // Grid: 5 days × 5 timeslots, with availability/conflict markers
  const days = ['Mon May 19', 'Tue May 20', 'Wed May 21', 'Thu May 22', 'Fri May 23'];
  const times = ['9:00', '10:00', '11:00', '13:30', '15:00'];
  // Pre-baked availability
  const cells = {
    'Mon May 19_9:00': 'open',  'Mon May 19_10:00': 'booked', 'Mon May 19_11:00': 'open', 'Mon May 19_13:30': 'restrict', 'Mon May 19_15:00': 'open',
    'Tue May 20_9:00': 'vacation', 'Tue May 20_10:00': 'vacation', 'Tue May 20_11:00': 'vacation', 'Tue May 20_13:30': 'vacation', 'Tue May 20_15:00': 'vacation',
    'Wed May 21_9:00': 'open',  'Wed May 21_10:00': 'open',  'Wed May 21_11:00': 'open',  'Wed May 21_13:30': 'open',  'Wed May 21_15:00': 'booked',
    'Thu May 22_9:00': 'booked', 'Thu May 22_10:00': 'open', 'Thu May 22_11:00': 'open',  'Thu May 22_13:30': 'open',  'Thu May 22_15:00': 'open',
    'Fri May 23_9:00': 'open',  'Fri May 23_10:00': 'restrict', 'Fri May 23_11:00': 'open', 'Fri May 23_13:30': 'open', 'Fri May 23_15:00': 'open',
  };

  const cellLabel = {
    open: '',
    booked: 'Hearing',
    vacation: 'Vacation',
    restrict: 'Carrier',
  };
  const cellTone = {
    open: { bg: '#fff', color: 'var(--fg-1)', border: 'var(--stroke-2)' },
    booked: { bg: '#f8e3e3', color: '#7a1f1f', border: '#f0caca' },
    vacation: { bg: '#efeae4', color: '#56524d', border: '#e0d8cf' },
    restrict: { bg: '#fef2c5', color: '#7e5403', border: '#f0d77a' },
  };

  const Title = (
    <div style={{ padding: '20px 28px 14px', borderBottom: '1px solid var(--stroke-1)' }}>
      <div className="row gap-3" style={{ marginBottom: 6 }}>
        <Icon name="calendar" size={16} style={{ color: 'var(--primary)' }} />
        <span className="eyebrow">Schedule hearing · {c.id}</span>
        <div style={{ flex: 1 }} />
        <button className="btn btn-ghost btn-sm" onClick={onClose}><Icon name="x" size={14} /></button>
      </div>
      <h2 className="title-serif" style={{ fontSize: 24 }}>
        {stage === 'grid' && 'Find an open hearing slot'}
        {stage === 'location' && 'Pick a location'}
        {stage === 'confirm' && 'Send confirmations'}
      </h2>
    </div>
  );

  return (
    <div className="modal-scrim" onClick={onClose}>
      <div className="modal" style={{ width: 920, maxWidth: '95vw' }} onClick={(e) => e.stopPropagation()}>
        {Title}

        {/* GRID stage */}
        {stage === 'grid' && (
          <div style={{ padding: '20px 28px' }}>
            <div className="row gap-3" style={{ marginBottom: 14 }}>
              <div style={{ flex: 1 }}>
                <label className="field-label">Neutral</label>
                <select className="select" value={neutral} onChange={(e) => setNeutral(e.target.value)}>
                  <option value="hon-calloway">Hon. R. Calloway · NY · PI Roster · 2/3 holds used</option>
                  <option value="hon-marsh">Hon. P. Marsh · NY, NJ · PI Roster · 0/3 holds</option>
                  <option value="hon-bauer">Hon. T. Bauer · NY · Mediation · 1/3 holds</option>
                </select>
              </div>
              <div style={{ width: 200 }}>
                <label className="field-label">Week of</label>
                <select className="select" defaultValue="may19">
                  <option value="may12">May 12 – May 16</option>
                  <option value="may19">May 19 – May 23</option>
                  <option value="may26">May 26 – May 30</option>
                </select>
              </div>
            </div>

            {/* Legend */}
            <div className="row gap-4" style={{ marginBottom: 10, fontSize: 11.5, color: 'var(--fg-2)' }}>
              {[
                ['open', 'Available'], ['booked', 'Booked'],
                ['vacation', 'Vacation'], ['restrict', 'Carrier-restricted'],
              ].map(([k, lbl]) => (
                <div key={k} className="row gap-2">
                  <span style={{ width: 12, height: 12, borderRadius: 3, background: cellTone[k].bg, border: '1px solid ' + cellTone[k].border }} />
                  {lbl}
                </div>
              ))}
            </div>

            {/* Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '60px repeat(5, 1fr)', gap: 6 }}>
              <div />
              {days.map(d => (
                <div key={d} style={{ fontSize: 11.5, fontWeight: 500, textAlign: 'center', color: 'var(--fg-2)', padding: '4px 0' }}>{d}</div>
              ))}
              {times.map(t => (
                <React.Fragment key={t}>
                  <div style={{ fontSize: 11.5, color: 'var(--fg-2)', fontFamily: 'IBM Plex Mono, monospace', textAlign: 'right', paddingRight: 6, alignSelf: 'center' }}>{t}</div>
                  {days.map(d => {
                    const k = `${d}_${t}`;
                    const tone = cells[k] || 'open';
                    const sel = slot === k;
                    const t1 = cellTone[tone];
                    return (
                      <button key={k} type="button"
                        disabled={tone !== 'open'}
                        onClick={() => setSlot(k)}
                        style={{
                          height: 48, borderRadius: 6, padding: 6,
                          background: sel ? 'var(--primary)' : t1.bg,
                          color: sel ? '#fff' : t1.color,
                          border: '1px solid', borderColor: sel ? 'var(--primary)' : t1.border,
                          fontFamily: 'inherit', fontSize: 11.5, fontWeight: 500,
                          cursor: tone === 'open' ? 'pointer' : 'default',
                          textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                        }}>
                        {sel ? '✓ Selected' : (cellLabel[tone] || 'Open')}
                      </button>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>

            <div className="row gap-3" style={{ marginTop: 16, padding: '10px 14px', background: 'var(--bg-3)', borderRadius: 6, fontSize: 12.5, color: '#5a3a02' }}>
              <Icon name="alertTriangle" size={14} />
              Three-hold cap: this neutral has 2 of 3 holds. One more allowed before manager approval.
            </div>
          </div>
        )}

        {/* LOCATION stage */}
        {stage === 'location' && (
          <div style={{ padding: '24px 28px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 18 }}>
              {[
                { v: 'nam', label: 'NAM office', desc: 'Manhattan · Long Island · NJ', icon: 'home' },
                { v: 'zoom', label: 'Zoom', desc: 'Auto-generated meeting link', icon: 'video' },
                { v: 'external', label: 'External venue', desc: 'Custom address', icon: 'mapPin' },
              ].map(opt => (
                <button key={opt.v} type="button" onClick={() => setLocation(opt.v)}
                  style={{
                    padding: 18, textAlign: 'left',
                    background: location === opt.v ? '#fdf3f3' : '#fff',
                    border: '2px solid', borderColor: location === opt.v ? 'var(--primary)' : 'var(--stroke-2)',
                    borderRadius: 8, cursor: 'pointer', fontFamily: 'inherit',
                    display: 'flex', flexDirection: 'column', gap: 8,
                  }}>
                  <Icon name={opt.icon} size={20} style={{ color: location === opt.v ? 'var(--primary)' : 'var(--fg-2)' }} />
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{opt.label}</div>
                  <div style={{ fontSize: 12, color: 'var(--fg-2)' }}>{opt.desc}</div>
                </button>
              ))}
            </div>

            {location === 'zoom' && (
              <div className="card" style={{ padding: 16, background: '#fafaf8' }}>
                <div className="row gap-2" style={{ marginBottom: 6 }}>
                  <Icon name="video" size={14} style={{ color: 'var(--primary)' }} />
                  <strong style={{ fontSize: 12.5 }}>Zoom meeting will be auto-created</strong>
                </div>
                <ul style={{ margin: 0, paddingLeft: 20, fontSize: 12.5, color: 'var(--fg-2)', lineHeight: 1.7 }}>
                  <li>Meeting URL generated and embedded in confirmation email</li>
                  <li>Waiting room enabled · passcode auto-set</li>
                  <li>Recording controls visible to neutral only</li>
                </ul>
              </div>
            )}
          </div>
        )}

        {/* CONFIRM stage */}
        {stage === 'confirm' && (
          <div style={{ padding: '20px 28px' }}>
            <div className="card" style={{ padding: 14, marginBottom: 16, background: '#fafaf8' }}>
              <div style={{ fontSize: 12.5, color: 'var(--fg-2)' }}>Hearing summary</div>
              <div style={{ fontSize: 14, fontWeight: 600, marginTop: 4 }}>{slot || 'Wed May 21 · 10:00'} · Hon. R. Calloway · {location === 'zoom' ? 'Zoom' : location === 'nam' ? 'NAM Manhattan' : 'External venue'}</div>
            </div>

            <div className="eyebrow" style={{ marginBottom: 8 }}>Send confirmations to</div>
            <div className="card" style={{ padding: 0, marginBottom: 14 }}>
              {[
                ['claimant', 'Claimant', c.claimant, 'a.birch@example.com'],
                ['claimantCounsel', 'Claimant counsel', 'Quinn & Reed PC', 'jquinn@quinnreed.example'],
                ['respondent', 'Respondent firm', c.respondent, 'service@pinecrest.example'],
                ['respondentAdj', 'Respondent adjuster', c.adjuster, 'm.calderon@pinecrest.example'],
                ['neutralCC', 'Neutral (cc)', 'Hon. R. Calloway', 'r.calloway@neutrals.nam'],
              ].map(([k, role, name, email], i, arr) => (
                <label key={k} className="row gap-3" style={{
                  padding: '12px 16px', cursor: 'pointer',
                  borderBottom: i === arr.length - 1 ? 0 : '1px solid var(--stroke-1)',
                }}>
                  <input type="checkbox" checked={parties[k]} onChange={(e) => setParties(p => ({ ...p, [k]: e.target.checked }))} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 500 }}>{role} · {name}</div>
                    <div style={{ fontSize: 11.5, color: 'var(--fg-2)', fontFamily: 'IBM Plex Mono, monospace', marginTop: 2 }}>{email}</div>
                  </div>
                  <Pill tone="muted">Email</Pill>
                </label>
              ))}
            </div>

            <div className="card" style={{ padding: 14, background: 'var(--bg-3)', border: '1px solid #f0d77a' }}>
              <div className="row gap-2" style={{ marginBottom: 6 }}>
                <Icon name="zap" size={14} style={{ color: '#7e5403' }} />
                <strong style={{ fontSize: 12.5, color: '#5a3a02' }}>Old way · 10–15 individual sends. New way · one click.</strong>
              </div>
              <div style={{ fontSize: 12.5, color: '#5a3a02' }}>
                Sending will also: place calendar holds, sync to NP2, create confirmation follow-up diary (24h before hearing), update case status to Scheduled.
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={{ padding: '14px 28px', borderTop: '1px solid var(--stroke-1)', background: '#fafaf8',
                      display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 12, color: 'var(--fg-2)' }}>
            {stage === 'grid' && (slot ? `Selected: ${slot}` : 'Pick an open slot to continue')}
            {stage === 'location' && `Location: ${location}`}
            {stage === 'confirm' && `${Object.values(parties).filter(Boolean).length} recipients · 1 click`}
          </span>
          <div style={{ flex: 1 }} />
          {stage !== 'grid' && (
            <Button variant="outline" icon="arrowLeft" onClick={() => setStage(stage === 'location' ? 'grid' : 'location')}>Back</Button>
          )}
          {stage === 'grid' && <Button variant="primary" disabled={!slot} onClick={() => setStage('location')}>Continue<Icon name="arrowRight" size={13} /></Button>}
          {stage === 'location' && <Button variant="primary" onClick={() => setStage('confirm')}>Continue<Icon name="arrowRight" size={13} /></Button>}
          {stage === 'confirm' && <Button variant="primary" icon="send" onClick={() => onScheduled({ slot, location, parties })}>Send all confirmations</Button>}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ScheduleHearingModal });
