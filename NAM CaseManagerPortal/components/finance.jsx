// ============================================================
// NAM CMS 2.0 — Finance Module
// Invoice Queue · Payment modal · Month-end dashboard
// ============================================================

function Finance({ onShowToast }) {
  const D = window.NAM_DATA;
  const [view, setView] = React.useState('queue'); // queue | dashboard | ebilling
  const [selected, setSelected] = React.useState(new Set());
  const [paymentModal, setPaymentModal] = React.useState(false);
  const [statementModal, setStatementModal] = React.useState(false);

  return (
    <div style={{ overflow: 'auto', height: '100%' }}>
      <div style={{ padding: '24px 28px 0' }}>
        <div className="row gap-3" style={{ marginBottom: 6 }}>
          <h1 className="title-serif" style={{ fontSize: 28 }}>Finance</h1>
          <Pill tone="muted">Revenue ops · May 2026</Pill>
          <div style={{ flex: 1 }} />
          <Button variant="outline" icon="dollar" onClick={() => setPaymentModal(true)}>Record payment</Button>
          <Button variant="outline" icon="play" onClick={() => setStatementModal(true)}>Run statements</Button>
        </div>
        <div style={{ fontSize: 13, color: 'var(--fg-2)', marginBottom: 18 }}>
          Rules-driven invoicing · bulk eBilling · background statements · month-end reconciliation
        </div>

        <div className="tabs" style={{ marginBottom: 0 }}>
          <button className={`tab ${view === 'queue' ? 'active' : ''}`} onClick={() => setView('queue')}>
            <Icon name="fileText" size={13} />Invoice queue<span className="tab-count">{D.invoices.filter(i => i.status === 'pending-review' || i.status === 'flagged').length}</span>
          </button>
          <button className={`tab ${view === 'ebilling' ? 'active' : ''}`} onClick={() => setView('ebilling')}>
            <Icon name="send" size={13} />eBilling<span className="tab-count">2</span>
          </button>
          <button className={`tab ${view === 'dashboard' ? 'active' : ''}`} onClick={() => setView('dashboard')}>
            <Icon name="trending" size={13} />Month-end
          </button>
          <button className={`tab`} onClick={() => {}}>
            <Icon name="alertTriangle" size={13} />AR collections<span className="tab-count">1</span>
          </button>
        </div>
      </div>

      <div style={{ padding: '20px 28px 40px' }}>
        {view === 'queue' && <InvoiceQueue D={D} selected={selected} setSelected={setSelected} onShowToast={onShowToast} />}
        {view === 'ebilling' && <EBillingQueue D={D} onShowToast={onShowToast} />}
        {view === 'dashboard' && <MonthEndDashboard D={D} />}
      </div>

      {paymentModal && <PaymentModal onClose={() => setPaymentModal(false)} onShowToast={onShowToast} />}
      {statementModal && <StatementRunModal onClose={() => setStatementModal(false)} onShowToast={onShowToast} />}
    </div>
  );
}

function InvoiceQueue({ D, selected, setSelected, onShowToast }) {
  const toggleSel = (id) => {
    const n = new Set(selected);
    if (n.has(id)) n.delete(id); else n.add(id);
    setSelected(n);
  };
  const tone = {
    'pending-review': 'amber', 'approved': 'success', 'sent': 'muted',
    'paid': 'success', 'flagged': 'danger', 'overdue': 'danger',
  };
  const label = {
    'pending-review': 'Pending review', 'approved': 'Approved · queued',
    'sent': 'Sent · eBilling', 'paid': 'Paid', 'flagged': 'Flagged · review',
    'overdue': 'Overdue',
  };

  const total = D.invoices.filter(i => selected.has(i.id)).reduce((s, i) => s + i.amount, 0);

  return (
    <div className="card" style={{ padding: 0 }}>
      <div className="row gap-3" style={{ padding: '14px 18px', borderBottom: '1px solid var(--stroke-1)', background: '#faf6ee' }}>
        <span className="eyebrow">Pending invoices</span>
        <Pill tone="amber">{D.invoices.filter(i => i.status === 'pending-review').length} need review</Pill>
        <Pill tone="danger">{D.invoices.filter(i => i.status === 'flagged').length} flagged by rules</Pill>
        <div style={{ flex: 1 }} />
        {selected.size > 0 ? (
          <>
            <span style={{ fontSize: 12.5, color: 'var(--fg-2)' }}>
              {selected.size} selected · <span style={{ fontFamily: 'IBM Plex Mono, monospace', color: 'var(--fg-1)', fontWeight: 500 }}>{fmtMoney(total)}</span>
            </span>
            <Button variant="outline" size="sm" icon="x" onClick={() => { setSelected(new Set()); onShowToast('Rejected and returned to queue.'); }}>Reject</Button>
            <Button variant="primary" size="sm" icon="check" onClick={() => { onShowToast(`${selected.size} invoices approved · queued for eBilling.`); setSelected(new Set()); }}>Approve & queue</Button>
          </>
        ) : (
          <>
            <Button variant="ghost" size="sm" icon="filter">Filters</Button>
            <Button variant="outline" size="sm" icon="download">Export</Button>
          </>
        )}
      </div>

      <table className="data">
        <thead>
          <tr>
            <th style={{ width: 32, paddingLeft: 18 }}>
              <input type="checkbox" checked={selected.size === D.invoices.filter(i => i.status === 'pending-review' || i.status === 'flagged').length}
                onChange={(e) => setSelected(e.target.checked
                  ? new Set(D.invoices.filter(i => i.status === 'pending-review' || i.status === 'flagged').map(i => i.id))
                  : new Set())} />
            </th>
            <th>Invoice</th>
            <th>Case · client</th>
            <th>Issued</th>
            <th>Status</th>
            <th>Rule</th>
            <th style={{ textAlign: 'right', paddingRight: 18 }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {D.invoices.map(inv => (
            <tr key={inv.id}>
              <td style={{ paddingLeft: 18 }} onClick={(e) => e.stopPropagation()}>
                <input type="checkbox" checked={selected.has(inv.id)} onChange={() => toggleSel(inv.id)}
                  disabled={!['pending-review', 'flagged'].includes(inv.status)} />
              </td>
              <td>
                <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 12.5, fontWeight: 500 }}>{inv.id}</div>
                {inv.warning && <div style={{ fontSize: 11.5, color: '#971b1b', marginTop: 3 }}><Icon name="alertTriangle" size={11} /> {inv.warning}</div>}
              </td>
              <td>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{inv.client}</div>
                <div style={{ fontSize: 11.5, color: 'var(--fg-2)', fontFamily: 'IBM Plex Mono, monospace', marginTop: 2 }}>{inv.case}</div>
              </td>
              <td style={{ fontSize: 12.5, color: 'var(--fg-2)' }}>{fmtDate(inv.issued)}</td>
              <td>
                <Pill tone={tone[inv.status]} dot>{label[inv.status]}</Pill>
                {inv.daysOverdue && <div style={{ fontSize: 11, color: '#971b1b', marginTop: 3 }}>{inv.daysOverdue} days past due</div>}
                {inv.sentVia && <div style={{ fontSize: 11, color: 'var(--fg-2)', marginTop: 3 }}>{inv.sentVia}</div>}
              </td>
              <td style={{ fontSize: 12, color: 'var(--fg-2)' }}>{inv.rule || '—'}</td>
              <td style={{ textAlign: 'right', paddingRight: 18, fontFamily: 'IBM Plex Mono, monospace', fontSize: 13, fontWeight: 500 }}>
                {fmtMoney(inv.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EBillingQueue({ D, onShowToast }) {
  const ready = D.invoices.filter(i => i.status === 'approved').concat([
    { id: 'INV-2026-04420', case: 'NAM-PI-204760', client: 'Heritage Mutual', amount: 1850, status: 'approved' },
    { id: 'INV-2026-04421', case: 'NAM-PI-204306', client: 'GeoSurety Insurance', amount: 2100, status: 'approved' },
  ]);
  const [batch, setBatch] = React.useState(new Set(ready.map(i => i.id)));
  const [running, setRunning] = React.useState(false);

  return (
    <div>
      <div className="card" style={{ padding: 18, marginBottom: 16, background: 'var(--bg-3)', border: '1px solid #f0d77a' }}>
        <div className="row gap-3">
          <Icon name="zap" size={20} style={{ color: '#7e5403' }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 17, fontWeight: 700, color: '#5a3a02' }}>No 20-invoice cap.</div>
            <div style={{ fontSize: 12.5, color: '#5a3a02', marginTop: 2 }}>
              Send any number in a single batch. Background processing — navigate away while it runs.
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ padding: 0 }}>
        <div className="row gap-3" style={{ padding: '14px 18px', borderBottom: '1px solid var(--stroke-1)', background: '#faf6ee' }}>
          <span className="eyebrow">Ready to send</span>
          <Pill tone="success">{batch.size} of {ready.length} selected</Pill>
          <div style={{ flex: 1 }} />
          <Button variant="primary" icon="send" disabled={running || batch.size === 0}
            onClick={() => {
              setRunning(true);
              setTimeout(() => { setRunning(false); onShowToast(`${batch.size} invoices sent via eBilling. Background batch complete.`); setBatch(new Set()); }, 2400);
            }}>
            {running ? `Sending ${batch.size}…` : `Send batch (${batch.size})`}
          </Button>
        </div>

        {running && (
          <div style={{ padding: '14px 18px', background: '#fdf3f3', borderBottom: '1px solid var(--stroke-1)' }}>
            <div className="row gap-3" style={{ marginBottom: 6 }}>
              <Icon name="play" size={13} style={{ color: 'var(--primary)' }} />
              <strong style={{ fontSize: 12.5 }}>Batch running in background</strong>
              <span style={{ fontSize: 11.5, color: 'var(--fg-2)', fontFamily: 'IBM Plex Mono, monospace', marginLeft: 'auto' }}>est. 30s</span>
            </div>
            <div style={{ height: 4, background: '#f0caca', borderRadius: 999, overflow: 'hidden' }}>
              <div className="ebill-progress" style={{ height: '100%', background: 'var(--primary)', width: '0%' }} />
            </div>
          </div>
        )}

        <table className="data">
          <thead>
            <tr><th style={{ paddingLeft: 18, width: 32 }}><input type="checkbox" checked={batch.size === ready.length} onChange={(e) => setBatch(e.target.checked ? new Set(ready.map(i => i.id)) : new Set())} /></th>
              <th>Invoice</th><th>Client</th><th>Case</th><th style={{ textAlign: 'right', paddingRight: 18 }}>Amount</th></tr>
          </thead>
          <tbody>
            {ready.map(i => (
              <tr key={i.id}>
                <td style={{ paddingLeft: 18 }} onClick={(e) => e.stopPropagation()}>
                  <input type="checkbox" checked={batch.has(i.id)} onChange={() => {
                    const n = new Set(batch); n.has(i.id) ? n.delete(i.id) : n.add(i.id); setBatch(n);
                  }} />
                </td>
                <td style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 12.5, fontWeight: 500 }}>{i.id}</td>
                <td>{i.client}</td>
                <td style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 12, color: 'var(--fg-2)' }}>{i.case}</td>
                <td style={{ textAlign: 'right', paddingRight: 18, fontFamily: 'IBM Plex Mono, monospace', fontSize: 13, fontWeight: 500 }}>{fmtMoney(i.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>{`@keyframes ebillFill{0%{width:0%}100%{width:100%}}.ebill-progress{animation:ebillFill 2.4s linear forwards}`}</style>
    </div>
  );
}

function MonthEndDashboard({ D }) {
  const stats = [
    { label: 'Revenue · MTD', val: '$184,210', delta: '+12% vs forecast', tone: 'success' },
    { label: 'Outstanding AR', val: '$48,920', delta: '5 invoices > 30 days', tone: 'warn' },
    { label: 'Invoices sent', val: '317', delta: 'across 4 batches', tone: 'muted' },
    { label: 'Exceptions', val: '3', delta: 'down from 18 last month', tone: 'success' },
  ];
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 18 }}>
        {stats.map(s => (
          <div key={s.label} className="stat-card">
            <div className="stat-label">{s.label}</div>
            <div className="stat-num">{s.val}</div>
            <div style={{ fontSize: 11.5, color: s.tone === 'warn' ? '#971b1b' : 'var(--fg-2)' }}>{s.delta}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16, marginBottom: 16 }}>
        <div className="card card-pad">
          <div className="section-h"><h3 className="title-serif">Actuals vs. expected</h3>
            <span style={{ fontSize: 12, color: 'var(--fg-2)' }}>through May 7</span></div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14, height: 160, paddingTop: 10 }}>
            {[
              ['Wk 1', 88, 92], ['Wk 2', 76, 71], ['Wk 3', 94, 98], ['Wk 4', 102, 110], ['Wk 5', 42, 48],
            ].map(([w, exp, act]) => (
              <div key={w} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 130 }}>
                  <div style={{ width: 18, height: `${exp}%`, background: '#e5d9bf', borderRadius: '4px 4px 0 0' }} title="Expected" />
                  <div style={{ width: 18, height: `${act}%`, background: 'var(--primary)', borderRadius: '4px 4px 0 0' }} title="Actual" />
                </div>
                <div style={{ fontSize: 11, color: 'var(--fg-2)', fontFamily: 'IBM Plex Mono, monospace' }}>{w}</div>
              </div>
            ))}
          </div>
          <div className="row gap-4" style={{ marginTop: 14, fontSize: 11.5, color: 'var(--fg-2)' }}>
            <div className="row gap-2"><span style={{ width: 10, height: 10, background: '#e5d9bf' }} />Expected</div>
            <div className="row gap-2"><span style={{ width: 10, height: 10, background: 'var(--primary)' }} />Actual</div>
          </div>
        </div>

        <div className="card card-pad">
          <div className="section-h"><h3 className="title-serif">AR aging</h3></div>
          {[
            ['0–30 days', 38420, 84, 'success'],
            ['31–60 days', 7800, 12, 'warn'],
            ['61–90 days', 1850, 3, 'rust'],
            ['90+ days', 850, 1, 'danger'],
          ].map(([bucket, amt, pct, tone]) => (
            <div key={bucket} style={{ marginBottom: 10 }}>
              <div className="row" style={{ marginBottom: 4 }}>
                <span style={{ fontSize: 12.5 }}>{bucket}</span>
                <span style={{ flex: 1 }} />
                <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 12.5, fontWeight: 500 }}>{fmtMoney(amt)}</span>
              </div>
              <div style={{ height: 6, background: 'var(--bg-2)', borderRadius: 999, overflow: 'hidden' }}>
                <div style={{
                  height: '100%', width: `${pct}%`,
                  background: tone === 'success' ? '#7a9b4a' : tone === 'warn' ? '#b75301' : tone === 'rust' ? '#8f4113' : '#971b1b',
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card card-pad">
        <div className="section-h"><h3 className="title-serif">Exceptions to investigate</h3>
          <Pill tone="amber">3 open</Pill></div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {[
            { rule: '$0 invoice deletion rule', case: 'NAM-PI-204411', detail: 'INV-2026-04414 is $0 — flagged before posting.' },
            { rule: 'NY simultaneous send', case: 'NAM-PI-204760', detail: 'Send to claimant + respondent in one transaction.' },
            { rule: 'Express rate uprate', case: 'NAM-PI-204306', detail: 'Admin fee should reflect express schedule (+$120).' },
          ].map((e, i) => (
            <div key={i} className="row gap-3" style={{ padding: '12px 0', borderBottom: i === 2 ? 0 : '1px dashed var(--stroke-1)' }}>
              <Icon name="alertTriangle" size={14} style={{ color: '#b75301' }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{e.rule}</div>
                <div style={{ fontSize: 12, color: 'var(--fg-2)', marginTop: 2 }}>{e.case} · {e.detail}</div>
              </div>
              <Button variant="ghost" size="sm">Resolve</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Payment modal ---
function PaymentModal({ onClose, onShowToast }) {
  const D = window.NAM_DATA;
  const [amount, setAmount] = React.useState('3950.00');
  const [method, setMethod] = React.useState('check');
  const [applyTo, setApplyTo] = React.useState({
    'INV-2026-04419': 1850, 'INV-2026-04418': 2100,
  });
  const [overpay, setOverpay] = React.useState('apply');
  const total = Object.values(applyTo).reduce((s, n) => s + Number(n || 0), 0);
  const diff = Number(amount) - total;

  return (
    <div className="modal-scrim" onClick={onClose}>
      <div className="modal" style={{ width: 640, maxWidth: '94vw' }} onClick={(e) => e.stopPropagation()}>
        <div style={{ padding: '20px 28px 14px', borderBottom: '1px solid var(--stroke-1)' }}>
          <div className="row gap-3">
            <Icon name="dollar" size={16} style={{ color: 'var(--primary)' }} />
            <span className="eyebrow">Record payment</span>
            <div style={{ flex: 1 }} />
            <button className="btn btn-ghost btn-sm" onClick={onClose}><Icon name="x" size={14} /></button>
          </div>
          <h2 className="title-serif" style={{ fontSize: 22, marginTop: 6 }}>Apply payment to invoices</h2>
        </div>

        <div style={{ padding: '20px 28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
            <div>
              <label className="field-label">Amount received</label>
              <input className="input" value={amount} onChange={(e) => setAmount(e.target.value)} style={{ fontFamily: 'IBM Plex Mono, monospace' }} />
            </div>
            <div>
              <label className="field-label">Method</label>
              <select className="select" value={method} onChange={(e) => setMethod(e.target.value)}>
                <option value="check">Check (#84012 · Heritage Mutual)</option>
                <option value="ach">ACH / Lockstep</option>
                <option value="cc">Credit card</option>
                <option value="portal">Client portal payment</option>
              </select>
            </div>
          </div>

          <div className="eyebrow" style={{ marginBottom: 8 }}>Apply to invoices</div>
          <div className="card" style={{ padding: 0, marginBottom: 14 }}>
            {Object.keys(applyTo).map((id, i, arr) => {
              const inv = D.invoices.find(x => x.id === id) || { id, client: 'Heritage Mutual', case: 'NAM-PI-204760', amount: applyTo[id] };
              return (
                <div key={id} className="row gap-3" style={{ padding: '12px 16px', borderBottom: i === arr.length - 1 ? 0 : '1px solid var(--stroke-1)' }}>
                  <Icon name="fileText" size={14} style={{ color: 'var(--primary)' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 500, fontFamily: 'IBM Plex Mono, monospace' }}>{id}</div>
                    <div style={{ fontSize: 11.5, color: 'var(--fg-2)' }}>{inv.client} · {inv.case}</div>
                  </div>
                  <input className="input" value={applyTo[id]} style={{ width: 110, textAlign: 'right', fontFamily: 'IBM Plex Mono, monospace' }}
                    onChange={(e) => setApplyTo({ ...applyTo, [id]: e.target.value })} />
                </div>
              );
            })}
          </div>

          <div className="row gap-3" style={{
            padding: '12px 14px', borderRadius: 6,
            background: diff > 0 ? '#fef2c5' : diff < 0 ? '#f8d6d6' : '#e1edd8',
            border: '1px solid', borderColor: diff > 0 ? '#f0d77a' : diff < 0 ? '#f0caca' : '#c0d3a6',
          }}>
            <Icon name={diff === 0 ? 'check' : 'alertTriangle'} size={14} style={{ color: diff > 0 ? '#7e5403' : diff < 0 ? '#971b1b' : '#4a6b2a' }} />
            <div style={{ flex: 1, fontSize: 12.5 }}>
              {diff === 0 && <span><strong>Fully applied.</strong> {fmtMoney(Number(amount))} matches invoices.</span>}
              {diff > 0 && <span><strong>Overpayment of {fmtMoney(diff)}.</strong> Choose what to do with the surplus.</span>}
              {diff < 0 && <span><strong>{fmtMoney(-diff)} short.</strong> Reduce applied amounts or change total.</span>}
            </div>
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 12.5, fontWeight: 500 }}>{fmtMoney(total)} of {fmtMoney(Number(amount))}</span>
          </div>

          {diff > 0 && (
            <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
              {[['apply', 'Apply to balance'], ['ledger', 'Hold in ledger'], ['refund', 'Issue refund']].map(([v, lbl]) => (
                <button key={v} type="button" onClick={() => setOverpay(v)} className="btn"
                  style={{
                    flex: 1, justifyContent: 'center',
                    background: overpay === v ? 'var(--bg-3)' : '#fff',
                    border: '1px solid', borderColor: overpay === v ? 'var(--primary)' : 'var(--stroke-2)',
                    color: overpay === v ? 'var(--primary)' : 'var(--fg-1)',
                  }}>{lbl}</button>
              ))}
            </div>
          )}
        </div>

        <div style={{ padding: '14px 28px', borderTop: '1px solid var(--stroke-1)', background: '#fafaf8', display: 'flex', gap: 10 }}>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <div style={{ flex: 1 }} />
          <Button variant="primary" icon="check" onClick={() => { onShowToast(`Payment of ${fmtMoney(Number(amount))} recorded across ${Object.keys(applyTo).length} invoices.`); onClose(); }}>
            Record payment
          </Button>
        </div>
      </div>
    </div>
  );
}

// --- Statement run modal ---
function StatementRunModal({ onClose, onShowToast }) {
  const [running, setRunning] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    if (!running) return;
    const t = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(t); setDone(true); setRunning(false); return 100; }
        return p + 3;
      });
    }, 60);
    return () => clearInterval(t);
  }, [running]);

  return (
    <div className="modal-scrim" onClick={onClose}>
      <div className="modal" style={{ width: 540 }} onClick={(e) => e.stopPropagation()}>
        <div style={{ padding: '20px 24px 14px', borderBottom: '1px solid var(--stroke-1)' }}>
          <div className="row gap-3">
            <Icon name="play" size={16} style={{ color: 'var(--primary)' }} />
            <span className="eyebrow">Statement generation</span>
            <div style={{ flex: 1 }} />
            <button className="btn btn-ghost btn-sm" onClick={onClose}><Icon name="x" size={14} /></button>
          </div>
          <h2 className="title-serif" style={{ fontSize: 22, marginTop: 6 }}>Run monthly statements</h2>
        </div>

        <div style={{ padding: '20px 24px' }}>
          <div className="card" style={{ padding: 14, marginBottom: 14, background: 'var(--bg-3)', border: '1px solid #f0d77a' }}>
            <div className="row gap-2" style={{ marginBottom: 4 }}>
              <Icon name="zap" size={14} style={{ color: '#7e5403' }} />
              <strong style={{ fontSize: 12.5, color: '#5a3a02' }}>Background job · runs any time of day.</strong>
            </div>
            <div style={{ fontSize: 12, color: '#5a3a02' }}>No after-hours requirement. No system crash. You can navigate away.</div>
          </div>

          <div style={{ fontSize: 13, marginBottom: 14 }}>
            <div className="row" style={{ marginBottom: 6 }}><span>Cycle</span><span style={{ flex: 1 }} /><strong>April 2026 · 1,247 statements</strong></div>
            <div className="row" style={{ marginBottom: 6 }}><span>Eligible accounts</span><span style={{ flex: 1 }} /><strong>1,184</strong></div>
            <div className="row" style={{ marginBottom: 6 }}><span>Holds / suppressions</span><span style={{ flex: 1 }} /><strong>63</strong></div>
            <div className="row"><span>Estimated runtime</span><span style={{ flex: 1 }} /><strong>~28 minutes</strong></div>
          </div>

          {(running || done) && (
            <div style={{ marginBottom: 8 }}>
              <div className="row" style={{ marginBottom: 6 }}>
                <span style={{ fontSize: 12.5 }}>{done ? 'Complete' : `Running… ${Math.round(progress * 11.84)} of 1,184`}</span>
                <span style={{ flex: 1 }} />
                <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 12.5, fontWeight: 500 }}>{progress}%</span>
              </div>
              <div style={{ height: 6, background: 'var(--bg-2)', borderRadius: 999, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${progress}%`, background: done ? '#7a9b4a' : 'var(--primary)', transition: 'width 60ms linear' }} />
              </div>
            </div>
          )}
        </div>

        <div style={{ padding: '14px 24px', borderTop: '1px solid var(--stroke-1)', background: '#fafaf8', display: 'flex', gap: 10 }}>
          <Button variant="ghost" onClick={onClose}>{done ? 'Close' : 'Cancel'}</Button>
          <div style={{ flex: 1 }} />
          {!running && !done && <Button variant="primary" icon="play" onClick={() => setRunning(true)}>Start run</Button>}
          {running && <Button variant="outline" disabled>Running…</Button>}
          {done && <Button variant="primary" icon="check" onClick={() => { onShowToast('Statement run complete · 1,184 statements pushed to client portal.'); onClose(); }}>Done</Button>}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Finance });
