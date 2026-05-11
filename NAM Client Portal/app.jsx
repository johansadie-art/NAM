// Main app: routing + shell

function App() {
  const [route, setRoute] = React.useState('landing');
  const [toast, setToast] = React.useState(null);

  const navigate = (r) => {
    setRoute(r);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const authed = ['dashboard', 'notifications', 'invoices'].some(r => route.startsWith(r)) || route.startsWith('case:') || route.startsWith('pay:');

  let content;
  if (route === 'landing') content = <LandingPage navigate={navigate} />;
  else if (route === 'login') content = <LoginPage navigate={navigate} />;
  else if (route === 'respondent') content = <RespondentPage navigate={navigate} />;
  else if (route === 'intake') content = <IntakePage navigate={navigate} />;
  else if (route === 'dashboard') content = <Dashboard navigate={navigate} />;
  else if (route === 'notifications') content = <NotificationsPage navigate={navigate} />;
  else if (route.startsWith('case:')) content = <CaseView caseId={route.split(':')[1]} navigate={navigate} />;
  else if (route === 'invoices') content = <InvoicesPage navigate={navigate} />;
  else content = <LandingPage navigate={navigate} />;

  return (
    <div>
      <TopNav route={route} navigate={navigate} authed={authed} />
      {content}
      <Toast visible={!!toast} message={toast} onClose={() => setToast(null)} />
    </div>
  );
}

function InvoicesPage({ navigate }) {
  const all = [
    { id: 'INV-2026-09244', case: 'NAM-2026-03987', desc: 'Hearing fee — Driggs Insurance', amount: '$2,450.00', due: 'May 24, 2026', status: 'due' },
    { id: 'INV-2026-09501', case: 'NAM-2026-04183', desc: 'Document handling fee', amount: '$340.00', due: 'Jun 1, 2026', status: 'pending' },
    { id: 'INV-2026-09587', case: 'NAM-2026-04102', desc: 'Adjournment fee — Mercer', amount: '$425.00', due: 'Jun 3, 2026', status: 'pending' },
    { id: 'INV-2026-09128', case: 'NAM-2026-04183', desc: 'Initial filing fee — Voluntary PI', amount: '$1,200.00', due: 'May 6, 2026', status: 'paid' },
    { id: 'INV-2026-08977', case: 'NAM-2026-03812', desc: 'Final hearing fee', amount: '$3,800.00', due: 'Apr 15, 2026', status: 'paid' },
  ];
  const totalDue = 2450 + 340 + 425;

  return (
    <>
      <SubNav crumbs={[{ label: 'Invoices' }]} />
      <div className="page page-wide fade-in">
        <div className="page-header">
          <div>
            <h1 className="page-title">Invoices</h1>
            <p className="page-sub">Pay outstanding invoices and download past receipts.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}>
          <div className="card" style={{ padding: 20 }}>
            <div className="eyebrow" style={{ marginBottom: 8 }}>Outstanding</div>
            <div className="serif" style={{ fontSize: 32, fontWeight: 700, color: 'var(--danger)' }}>${totalDue.toLocaleString()}</div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 4 }}>Across 3 invoices</div>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <div className="eyebrow" style={{ marginBottom: 8 }}>Paid year-to-date</div>
            <div className="serif" style={{ fontSize: 32, fontWeight: 700 }}>$24,820</div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 4 }}>17 invoices · 2026</div>
          </div>
          <div className="card" style={{ padding: 20, background: 'var(--navy-50)', borderColor: 'var(--navy-100)' }}>
            <div className="eyebrow" style={{ marginBottom: 8, color: 'var(--navy)' }}>Saved methods</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
              <Icon name="card" size={18} color="var(--navy)" />
              <span style={{ fontSize: 14, fontWeight: 500 }}>Visa ending 4429</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
              <Icon name="building" size={18} color="var(--navy)" />
              <span style={{ fontSize: 14, fontWeight: 500 }}>Chase ACH ••••8821</span>
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <table className="data">
            <thead>
              <tr>
                <th>Invoice</th>
                <th>Case</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Due</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {all.map(i => (
                <tr key={i.id}>
                  <td className="mono" style={{ fontSize: 12.5 }}>{i.id}</td>
                  <td className="mono" style={{ fontSize: 12.5, color: 'var(--ink-3)', cursor: 'pointer' }} onClick={() => navigate(`case:${i.case}`)}>{i.case}</td>
                  <td style={{ fontWeight: 500 }}>{i.desc}</td>
                  <td style={{ fontWeight: 600 }}>{i.amount}</td>
                  <td style={{ fontSize: 13, color: 'var(--ink-3)' }}>{i.due}</td>
                  <td>
                    {i.status === 'paid' && <span className="badge badge-success"><span className="badge-dot" />Paid</span>}
                    {i.status === 'due' && <span className="badge badge-danger"><span className="badge-dot" />Past due in 14 days</span>}
                    {i.status === 'pending' && <span className="badge badge-warning"><span className="badge-dot" />Issued</span>}
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    {i.status === 'paid'
                      ? <button className="btn btn-ghost btn-sm"><Icon name="download" size={13} /> Receipt</button>
                      : <button className="btn btn-primary btn-sm">Pay now</button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

Object.assign(window, { App, InvoicesPage });

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
