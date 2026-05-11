// ============================================================
// NAM CMS 2.0 — Status Change modal (guided transition)
// ============================================================

function StatusChangeModal({ caseId, onClose, onConfirm }) {
  const D = window.NAM_DATA;
  const c = D.cases.find(x => x.id === caseId);
  const cur = D.statuses[c.status];
  const allowed = cur.next;

  const [newStatus, setNewStatus] = React.useState(allowed[0] || '');
  const [reason, setReason] = React.useState('');
  const [note, setNote] = React.useState('');

  const reasonsByStatus = {
    'open': ['Intake complete', 'Returned from hold', 'Re-opened by manager'],
    'scheduled': ['Hearing date confirmed', 'Date hold converted', 'Rescheduled'],
    'on-hold': ['Awaiting respondent counsel', 'Awaiting party documentation', 'Settlement discussion in progress', 'Adjuster unreachable'],
    'adjourned': ['Party request', 'Neutral conflict', 'Court of competent jurisdiction', 'Settlement pending'],
    'settled': ['Settled before hearing', 'Settled at hearing', 'Settled post-hearing'],
    'closed': ['No further action', 'Withdrawn', 'Administratively closed'],
    'hearing': ['Hearing in session'],
  };
  const reasons = reasonsByStatus[newStatus] || [];

  const consequences = {
    'open': ['Case removed from new-intake queue', '48-hour follow-up diary closed if open'],
    'scheduled': ['Confirmation diary created · 24h before hearing', 'Calendar holds released except chosen slot'],
    'on-hold': ['SLA timer paused', 'Diary auto-rolls until manually advanced', 'AE notified'],
    'adjourned': ['Adjournment fee invoice auto-generated', 'New scheduling diary created'],
    'settled': ['Final settlement invoice generated', 'Neutral payable run triggered', 'Documents flagged for archival'],
    'closed': ['Case archived after 30-day retention', 'Removed from active queues', 'Final statement queued'],
  };
  const cons = consequences[newStatus] || [];

  return (
    <div className="modal-scrim" onClick={onClose}>
      <div className="modal" style={{ width: 560 }} onClick={(e) => e.stopPropagation()}>
        <div style={{ padding: '20px 24px 14px', borderBottom: '1px solid var(--stroke-1)' }}>
          <div className="row gap-3" style={{ marginBottom: 6 }}>
            <Icon name="refresh" size={16} style={{ color: 'var(--primary)' }} />
            <span className="eyebrow">Change case status</span>
            <div style={{ flex: 1 }} />
            <button className="btn btn-ghost btn-sm" onClick={onClose}><Icon name="x" size={14} /></button>
          </div>
          <div className="row gap-3" style={{ marginTop: 8 }}>
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 12, color: 'var(--fg-2)' }}>{c.id}</span>
            <StatusPill status={c.status} />
            <Icon name="arrowRight" size={13} style={{ color: 'var(--fg-2)' }} />
            {newStatus && <StatusPill status={newStatus} />}
          </div>
        </div>

        <div style={{ padding: '20px 24px' }}>
          <div style={{ marginBottom: 16 }}>
            <label className="field-label">New status</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
              {allowed.map(s => (
                <button key={s} type="button" onClick={() => { setNewStatus(s); setReason(''); }}
                  style={{
                    padding: '10px 14px', textAlign: 'left',
                    background: newStatus === s ? '#fdf3f3' : '#fff',
                    border: '2px solid', borderColor: newStatus === s ? 'var(--primary)' : 'var(--stroke-2)',
                    borderRadius: 6, cursor: 'pointer', fontFamily: 'inherit',
                  }}>
                  <StatusPill status={s} />
                </button>
              ))}
            </div>
            <div className="field-help">Only allowed transitions are shown — admin-configurable.</div>
          </div>

          <div style={{ marginBottom: 14 }}>
            <label className="field-label">Reason</label>
            <select className="select" value={reason} onChange={(e) => setReason(e.target.value)}>
              <option value="">Select a reason…</option>
              {reasons.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label className="field-label">Note (optional · visible to case team)</label>
            <textarea className="textarea" value={note} onChange={(e) => setNote(e.target.value)}
              placeholder="Any context for the team…" />
          </div>

          {cons.length > 0 && (
            <div className="card" style={{ padding: 14, background: 'var(--bg-4)', border: '1px solid #f0d77a' }}>
              <div className="row gap-2" style={{ marginBottom: 6 }}>
                <Icon name="zap" size={14} style={{ color: '#7e5403' }} />
                <strong style={{ fontSize: 12.5, color: '#5a3a02' }}>What happens automatically:</strong>
              </div>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: 12.5, color: '#5a3a02', lineHeight: 1.7 }}>
                {cons.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>
          )}
        </div>

        <div style={{ padding: '14px 24px', borderTop: '1px solid var(--stroke-1)', background: '#fafaf8', display: 'flex', gap: 10 }}>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <div style={{ flex: 1 }} />
          <Button variant="primary" icon="check" disabled={!newStatus || !reason}
            onClick={() => onConfirm(newStatus, reason)}>Confirm change</Button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { StatusChangeModal });
