const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "density": "comfy",
  "serifTitles": true,
  "showFlags": true,
  "primary": "#0A264D"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = React.useState({ view: 'dashboard' });
  const [intakeOpen, setIntakeOpen] = React.useState(false);
  const [scheduleOpen, setScheduleOpen] = React.useState(null);
  const [statusOpen, setStatusOpen] = React.useState(null);
  const [toasts, setToasts] = React.useState([]);
  const [openTab, setOpenTab] = React.useState('overview');

  const showToast = React.useCallback((msg) => {
    const id = Date.now() + Math.random();
    setToasts(ts => [...ts, { id, msg }]);
    setTimeout(() => setToasts(ts => ts.filter(t => t.id !== id)), 3800);
  }, []);

  // density wiring (compact / regular / comfy)
  const densityPad = { compact: '12px 18px', regular: '14px 14px', comfy: '18px 16px' }[t.density];

  const goToCase = (id) => { setRoute({ view: 'case', id }); setOpenTab('overview'); };
  const goBack = () => setRoute({ view: 'cases' });

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '232px 1fr',
      height: '100vh',
      '--primary': t.primary,
    }}>
      <Sidebar
        active={route.view === 'dashboard' ? 'home' : route.view}
        counts={{ tasks: 14, cases: 23, inbox: 6 }}
        onNav={(v) => {
          if (v === 'intake') { setIntakeOpen(true); return; }
          if (typeof v === 'string' && v.startsWith('case:')) { goToCase(v.slice(5)); return; }
          if (v === 'home') { setRoute({ view: 'dashboard' }); return; }
          setRoute({ view: v });
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'var(--bg-1)' }}>
        <TopBar onSearch={() => setRoute({ view: 'cases' })} />
        <div style={{ flex: 1, overflow: 'hidden' }}>
          {route.view === 'dashboard' && (
            <Dashboard
              onOpenCase={goToCase}
              onIntake={() => setIntakeOpen(true)}
              onOpenList={() => setRoute({ view: 'cases' })}
              showFlags={t.showFlags}
            />
          )}
          {route.view === 'cases' && (
            <CaseList onOpenCase={goToCase} />
          )}
          {route.view === 'case' && (
            <CaseDetail
              caseId={route.id}
              onBack={goBack}
              openTab={openTab}
              setOpenTab={setOpenTab}
              onOpenStatusModal={() => setStatusOpen(route.id)}
              onOpenSchedule={() => setScheduleOpen(route.id)}
              onShowToast={showToast}
            />
          )}
          {route.view === 'finance' && <Finance onShowToast={showToast} />}
          {(route.view === 'tasks' || route.view === 'hearings' || route.view === 'reports' || route.view === 'admin') && (
            <PlaceholderView label={route.view} onBack={() => setRoute({ view: 'dashboard' })} />
          )}
        </div>
      </div>

      {intakeOpen && (
        <IntakeWizard
          onClose={() => setIntakeOpen(false)}
          onComplete={() => { setIntakeOpen(false); showToast('Case NAM-PI-204872 created · 48-hour follow-up diary set · AE notified.'); }}
        />
      )}
      {scheduleOpen && (
        <ScheduleHearingModal
          caseId={scheduleOpen}
          onClose={() => setScheduleOpen(null)}
          onScheduled={({ slot }) => { setScheduleOpen(null); showToast(`Hearing scheduled for ${slot || 'Wed May 21 · 10:00'} · all confirmations sent.`); }}
        />
      )}
      {statusOpen && (
        <StatusChangeModal
          caseId={statusOpen}
          onClose={() => setStatusOpen(null)}
          onConfirm={(s, r) => { setStatusOpen(null); showToast(`Status changed → ${s} · reason: ${r}`); }}
        />
      )}

      {/* Toasts */}
      <div className="toast-stack">
        {toasts.map(t => (
          <div key={t.id} className="toast">
            <Icon name="check" size={14} style={{ color: '#7a9b4a' }} />
            {t.msg}
          </div>
        ))}
      </div>

      {/* Tweaks */}
      <TweaksPanel title="Prototype tweaks">
        <TweakSection label="Density" />
        <TweakRadio label="Row density" value={t.density}
          options={['compact', 'regular', 'comfy']}
          onChange={(v) => setTweak('density', v)} />
        <TweakSection label="Visual" />
        <TweakColor label="Primary" value={t.primary}
          options={['#0A264D', '#1E2430', '#9e2c2c', '#b75301']}
          onChange={(v) => setTweak('primary', v)} />
        <TweakToggle label="Serif page titles" value={t.serifTitles}
          onChange={(v) => setTweak('serifTitles', v)} />
        <TweakToggle label="Show NY flag bars" value={t.showFlags}
          onChange={(v) => setTweak('showFlags', v)} />
        <TweakSection label="Demo" />
        <TweakButton label="Trigger toast" onClick={() => showToast('Toast preview · this is what notifications look like.')} />
      </TweaksPanel>

      {/* Conditional CSS for tweaks */}
      <style>{`
        ${!t.serifTitles ? '.title-serif{font-family:var(--font-sans)!important;font-weight:600!important;letter-spacing:-0.01em!important}' : ''}
        ${!t.showFlags ? '.row-flag{box-shadow:none!important}' : ''}
        ${t.density === 'compact' ? 'table.data td{padding:8px 14px}table.data th{padding:8px 14px}.feed-item{padding:9px 0}.nav-row{padding:5px 10px}' : ''}
        ${t.density === 'comfy' ? 'table.data td{padding:16px 14px}.feed-item{padding:16px 0}.nav-row{padding:9px 10px}' : ''}
      `}</style>
    </div>
  );
}

function PlaceholderView({ label, onBack }) {
  const titles = {
    tasks: { title: 'My tasks', desc: 'First-class task model · auto-rollover · SLA · linked to source events.' },
    hearings: { title: 'Hearings', desc: 'Combined availability grid · bulk confirmations · NP2 sync.' },
    reports: { title: 'Reports', desc: 'Self-service reporting · saved views · favorites.' },
    admin: { title: 'Admin & configuration', desc: 'Statuses · fee sheets · roles · client-specific rules — all front-end editable.' },
  };
  const m = titles[label] || { title: label, desc: '' };
  return (
    <div style={{ padding: 40, maxWidth: 720 }}>
      <button className="btn btn-ghost btn-sm" onClick={onBack}><Icon name="arrowLeft" size={13} />Back to dashboard</button>
      <h1 className="title-serif" style={{ fontSize: 32, marginTop: 18 }}>{m.title}</h1>
      <p style={{ fontSize: 15, color: 'var(--fg-2)', marginTop: 8, maxWidth: 520 }}>{m.desc}</p>
      <div className="card card-pad" style={{ marginTop: 20, background: 'var(--bg-3)', border: '1px solid #f0d77a' }}>
        <div className="row gap-2" style={{ marginBottom: 6 }}>
          <Icon name="zap" size={14} style={{ color: '#7e5403' }} />
          <strong style={{ fontSize: 13, color: '#5a3a02' }}>Out of P1 scope for this prototype.</strong>
        </div>
        <div style={{ fontSize: 13, color: '#5a3a02' }}>
          The PI Case Manager daily flow lives in Dashboard, Cases, Case Detail, and Finance. This module would be designed in a follow-up pass.
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
