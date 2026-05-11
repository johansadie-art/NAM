// ============================================================
// NAM CMS 2.0 — Case Intake Wizard (5-step PFLA-style)
// ============================================================

function IntakeWizard({ onClose, onComplete }) {
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState({
    caseType: 'PI',
    matter: 'Arbitration',
    voluntary: true,
    intakeMethod: 'online',
    claimant: '',
    claimantFirm: '',
    claimantCounsel: '',
    respondent: '',
    respondentFirm: 'Pinecrest Insurance Co.',
    adjuster: '',
    adjusterEmail: '',
    adjusterPhone: '',
    claimNumber: '',
    incidentDate: '',
    feeSheet: 'PI Standard 2026',
    feeWaiver: false,
    documents: [
      { name: 'Demand for Arbitration.pdf', size: '156 KB' },
    ],
  });

  const update = (k, v) => setData(d => ({ ...d, [k]: v }));

  const stepDefs = [
    { n: 1, label: 'Classification' },
    { n: 2, label: 'Parties' },
    { n: 3, label: 'Completeness' },
    { n: 4, label: 'Fee & docs' },
    { n: 5, label: 'Review' },
  ];

  const requiredMissing = (() => {
    const m = [];
    if (!data.claimant) m.push('Claimant');
    if (!data.respondentFirm) m.push('Respondent firm');
    if (!data.adjuster) m.push('Adjuster name');
    if (!data.adjusterPhone) m.push('Adjuster phone');
    if (!data.claimNumber) m.push('Claim number');
    if (!data.incidentDate) m.push('Incident date');
    return m;
  })();

  const canAdvance = step !== 3 || requiredMissing.length === 0;

  return (
    <div className="modal-scrim" onClick={onClose}>
      <div className="modal" style={{ width: 880, maxWidth: '94vw' }} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{ padding: '20px 28px 14px', borderBottom: '1px solid var(--stroke-1)' }}>
          <div className="row gap-3" style={{ marginBottom: 6 }}>
            <Icon name="filePlus" size={16} style={{ color: 'var(--primary)' }} />
            <span className="eyebrow">New case · Intake</span>
            <div style={{ flex: 1 }} />
            <button className="btn btn-ghost btn-sm" onClick={onClose}><Icon name="x" size={14} /></button>
          </div>
          <h2 className="title-serif" style={{ fontSize: 24 }}>Open a new case</h2>
          <div className="steps" style={{ marginTop: 14 }}>
            {stepDefs.map((s, i) => (
              <React.Fragment key={s.n}>
                <div className={`step ${step === s.n ? 'active' : ''} ${step > s.n ? 'done' : ''}`}>
                  <span className="step-num">{step > s.n ? '✓' : s.n}</span>
                  <span>{s.label}</span>
                </div>
                {i < stepDefs.length - 1 && <span className="step-line" />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '24px 28px', minHeight: 380 }}>
          {step === 1 && <Step1 data={data} update={update} />}
          {step === 2 && <Step2 data={data} update={update} />}
          {step === 3 && <Step3 data={data} update={update} missing={requiredMissing} />}
          {step === 4 && <Step4 data={data} update={update} />}
          {step === 5 && <Step5 data={data} />}
        </div>

        {/* Footer */}
        <div style={{ padding: '14px 28px', borderTop: '1px solid var(--stroke-1)', background: '#fafaf8',
                      display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 12, color: 'var(--fg-2)' }}>
            Step {step} of 5
            {step === 3 && requiredMissing.length > 0 && (
              <span style={{ color: '#971b1b', marginLeft: 10 }}>· {requiredMissing.length} required field{requiredMissing.length === 1 ? '' : 's'} missing</span>
            )}
          </span>
          <div style={{ flex: 1 }} />
          {step > 1 && <Button variant="outline" onClick={() => setStep(step - 1)} icon="arrowLeft">Back</Button>}
          {step < 5 ? (
            <Button variant="primary" disabled={!canAdvance} onClick={() => setStep(step + 1)}>
              Continue<Icon name="arrowRight" size={13} />
            </Button>
          ) : (
            <Button variant="primary" onClick={() => onComplete(data)} icon="check">Create case</Button>
          )}
        </div>
      </div>
    </div>
  );
}

// --- Step 1: Classification ---
function Step1({ data, update }) {
  const types = [
    { v: 'PI', label: 'Personal Injury', desc: 'Bodily injury claims under no-fault and tort' },
    { v: 'Commercial', label: 'Commercial', desc: 'Contract, partnership, business disputes' },
    { v: 'No-Fault', label: 'No-Fault', desc: 'NY no-fault arbitration' },
    { v: 'Employment', label: 'Employment', desc: 'Workplace and labor disputes' },
  ];
  return (
    <div>
      <div style={{ marginBottom: 22 }}>
        <label className="field-label">Case type</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
          {types.map(t => (
            <label key={t.v} className="hover-row" style={{
              padding: 14, border: data.caseType === t.v ? '2px solid var(--primary)' : '1px solid var(--stroke-2)',
              borderRadius: 8, cursor: 'pointer', background: data.caseType === t.v ? '#fdf3f3' : '#fff',
              display: 'flex', gap: 12,
            }}>
              <input type="radio" checked={data.caseType === t.v} onChange={() => update('caseType', t.v)} style={{ marginTop: 2 }} />
              <div>
                <div style={{ fontSize: 13.5, fontWeight: 600 }}>{t.label}</div>
                <div style={{ fontSize: 12, color: 'var(--fg-2)', marginTop: 2 }}>{t.desc}</div>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
        <div>
          <label className="field-label">Matter type</label>
          <div style={{ display: 'flex', gap: 8 }}>
            {['Arbitration', 'Mediation'].map(m => (
              <button key={m} type="button"
                onClick={() => update('matter', m)}
                className="btn"
                style={{
                  flex: 1, justifyContent: 'center',
                  background: data.matter === m ? 'var(--bg-3)' : '#fff',
                  border: '1px solid', borderColor: data.matter === m ? 'var(--primary)' : 'var(--stroke-2)',
                  color: data.matter === m ? 'var(--primary)' : 'var(--fg-1)',
                }}>{m}</button>
            ))}
          </div>
        </div>

        <div>
          <label className="field-label">Filing type</label>
          <div style={{ display: 'flex', gap: 8 }}>
            <button type="button" onClick={() => update('voluntary', true)} className="btn"
              style={{ flex: 1, justifyContent: 'center',
                background: data.voluntary ? 'var(--bg-3)' : '#fff',
                border: '1px solid', borderColor: data.voluntary ? 'var(--primary)' : 'var(--stroke-2)',
                color: data.voluntary ? 'var(--primary)' : 'var(--fg-1)',
              }}>Voluntary</button>
            <button type="button" onClick={() => update('voluntary', false)} className="btn"
              style={{ flex: 1, justifyContent: 'center',
                background: !data.voluntary ? 'var(--bg-3)' : '#fff',
                border: '1px solid', borderColor: !data.voluntary ? 'var(--primary)' : 'var(--stroke-2)',
                color: !data.voluntary ? 'var(--primary)' : 'var(--fg-1)',
              }}>Contractual</button>
          </div>
        </div>
      </div>

      <div>
        <label className="field-label">Intake method</label>
        <select className="select" value={data.intakeMethod} onChange={(e) => update('intakeMethod', e.target.value)}>
          <option value="online">Online inquiry · myADR portal</option>
          <option value="email">Email submission</option>
          <option value="phone">Phone intake</option>
          <option value="referral">AE referral</option>
        </select>
      </div>
    </div>
  );
}

// --- Step 2: Parties (with duplicate detection) ---
function Step2({ data, update }) {
  return (
    <div>
      {data.respondentFirm && (
        <div style={{ background: '#fef2c5', border: '1px solid #f0d77a', borderRadius: 6, padding: '11px 14px', marginBottom: 18, display: 'flex', gap: 10 }}>
          <Icon name="alertTriangle" size={15} style={{ color: '#7e5403', flexShrink: 0, marginTop: 1 }} />
          <div style={{ fontSize: 12.5, color: '#5a3a02' }}>
            <strong>Possible duplicate detected.</strong> "{data.respondentFirm}" matches an existing firm record (3 prior cases, 2 active).
            <a href="#" onClick={(e) => e.preventDefault()} style={{ color: '#7e5403', marginLeft: 4, textDecoration: 'underline' }}>Use existing record →</a>
          </div>
        </div>
      )}

      <div className="eyebrow" style={{ marginBottom: 10 }}>Claimant</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 18 }}>
        <div>
          <label className="field-label">Claimant name</label>
          <input className="input" placeholder="Acme Holdings LLC" value={data.claimant} onChange={(e) => update('claimant', e.target.value)} />
        </div>
        <div>
          <label className="field-label">Claimant counsel</label>
          <input className="input" placeholder="Search firms or add new…" value={data.claimantCounsel} onChange={(e) => update('claimantCounsel', e.target.value)} />
        </div>
      </div>

      <div className="eyebrow" style={{ marginBottom: 10 }}>Respondent</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 18 }}>
        <div>
          <label className="field-label">Respondent firm</label>
          <input className="input" value={data.respondentFirm} onChange={(e) => update('respondentFirm', e.target.value)} />
          <div className="field-help">Linked to existing record · GEICO Group</div>
        </div>
        <div>
          <label className="field-label">Claim number</label>
          <input className="input" placeholder="PNC-2026-XXXXX" value={data.claimNumber} onChange={(e) => update('claimNumber', e.target.value)} />
        </div>
      </div>

      <div className="eyebrow" style={{ marginBottom: 10 }}>Adjuster</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
        <div>
          <label className="field-label">Adjuster name</label>
          <input className="input" placeholder="M. Calderón" value={data.adjuster} onChange={(e) => update('adjuster', e.target.value)} />
        </div>
        <div>
          <label className="field-label">Adjuster phone</label>
          <input className="input" placeholder="(555) 555-0118" value={data.adjusterPhone} onChange={(e) => update('adjusterPhone', e.target.value)} />
        </div>
        <div>
          <label className="field-label">Adjuster email</label>
          <input className="input" placeholder="m.calderon@…" value={data.adjusterEmail} onChange={(e) => update('adjusterEmail', e.target.value)} />
        </div>
      </div>
    </div>
  );
}

// --- Step 3: Completeness gate ---
function Step3({ data, update, missing }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
        <div style={{
          width: 56, height: 56, borderRadius: '50%',
          background: missing.length === 0 ? '#e1edd8' : '#fef2c5',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon name={missing.length === 0 ? 'check' : 'alertTriangle'} size={26}
                style={{ color: missing.length === 0 ? '#4a6b2a' : '#7e5403' }} />
        </div>
        <div>
          <div style={{ fontFamily: 'Libre Baskerville, serif', fontSize: 20, fontWeight: 700 }}>
            {missing.length === 0 ? 'Intake complete' : `${missing.length} required field${missing.length === 1 ? '' : 's'} missing`}
          </div>
          <div style={{ fontSize: 13, color: 'var(--fg-2)', marginTop: 2 }}>
            {missing.length === 0
              ? 'You can proceed to fee selection and document upload.'
              : 'Complete these to prevent downstream rework. The system blocks creation until all required fields are filled.'}
          </div>
        </div>
      </div>

      {missing.length > 0 && (
        <div className="card" style={{ padding: 0, marginBottom: 16 }}>
          {missing.map((m, i) => (
            <div key={m} className="row gap-3" style={{
              padding: '12px 16px',
              borderBottom: i === missing.length - 1 ? 0 : '1px solid var(--stroke-1)',
            }}>
              <div style={{ width: 6, height: 6, borderRadius: 999, background: '#971b1b', flexShrink: 0 }} />
              <span style={{ fontSize: 13, fontWeight: 500 }}>{m}</span>
              <span style={{ fontSize: 12, color: 'var(--fg-2)', marginLeft: 'auto' }}>Required for PI · NY</span>
              <Button variant="ghost" size="sm" icon="arrowLeft">Step 2</Button>
            </div>
          ))}
        </div>
      )}

      <div className="eyebrow" style={{ marginBottom: 8, marginTop: 8 }}>Soft warnings (non-blocking)</div>
      <div className="card" style={{ padding: 0 }}>
        {[
          'Counsel email not provided — confirmation will go to firm general inbox.',
          'Incident date is more than 90 days ago — flag for SOL review.',
        ].map((w, i) => (
          <div key={w} className="row gap-3" style={{ padding: '12px 16px', borderBottom: i === 0 ? '1px solid var(--stroke-1)' : 0 }}>
            <Icon name="alertTriangle" size={14} style={{ color: '#b75301' }} />
            <span style={{ fontSize: 13, color: 'var(--fg-1)' }}>{w}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Step 4: Fee & docs ---
function Step4({ data, update }) {
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <label className="field-label">Fee sheet</label>
        <select className="select" value={data.feeSheet} onChange={(e) => update('feeSheet', e.target.value)}>
          <option>PI Standard 2026</option>
          <option>PI Express 2026</option>
          <option>PI No-Fault 2026</option>
          <option>Custom — admin override</option>
        </select>
        <div className="field-help">Auto-selected based on PI · NY · Voluntary. Admin can override.</div>
      </div>

      <div className="card" style={{ padding: 16, marginBottom: 16, background: 'var(--bg-3)', border: '1px solid var(--stroke-2)' }}>
        <div className="row gap-3">
          <Icon name="dollar" size={16} style={{ color: '#7e5403' }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 500 }}>PI Standard 2026 · summary</div>
            <div style={{ fontSize: 12, color: 'var(--fg-2)', marginTop: 2 }}>$450 admin fee · $675/hr neutral · simultaneous-send to NY parties enabled</div>
          </div>
          <Button variant="ghost" size="sm" icon="external">Open fee sheet</Button>
        </div>
      </div>

      <label style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 22, fontSize: 13 }}>
        <input type="checkbox" checked={data.feeWaiver} onChange={(e) => update('feeWaiver', e.target.checked)} />
        Apply fee waiver (requires manager approval)
      </label>

      <div className="eyebrow" style={{ marginBottom: 10 }}>Intake documents</div>
      <div style={{
        border: '2px dashed var(--stroke-2)', borderRadius: 8, padding: 28,
        textAlign: 'center', background: '#fff', marginBottom: 12,
      }}>
        <Icon name="upload" size={22} style={{ color: 'var(--fg-2)', marginBottom: 6 }} />
        <div style={{ fontSize: 13, fontWeight: 500 }}>Drop files here, or <a href="#" onClick={(e) => e.preventDefault()} style={{ color: 'var(--primary)' }}>browse</a></div>
        <div style={{ fontSize: 11.5, color: 'var(--fg-2)', marginTop: 4 }}>PDF, MS Office, CSV, JPG, PNG, video — up to 50 MB each</div>
      </div>

      {data.documents.map((d, i) => (
        <div key={i} className="row gap-3" style={{ padding: '10px 14px', background: '#fff', border: '1px solid var(--stroke-1)', borderRadius: 6, marginBottom: 6 }}>
          <Icon name="fileText" size={14} style={{ color: 'var(--primary)' }} />
          <span style={{ fontSize: 13, fontWeight: 500 }}>{d.name}</span>
          <span style={{ fontSize: 11.5, color: 'var(--fg-2)' }}>{d.size}</span>
          <div style={{ flex: 1 }} />
          <Pill tone="success" dot>Uploaded</Pill>
        </div>
      ))}
    </div>
  );
}

// --- Step 5: Review ---
function Step5({ data }) {
  const Row = ({ k, v }) => (
    <div className="row" style={{ padding: '8px 0', borderBottom: '1px dashed var(--stroke-1)', alignItems: 'flex-start' }}>
      <div style={{ width: 170, fontSize: 12, color: 'var(--fg-2)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{k}</div>
      <div style={{ fontSize: 13.5, fontWeight: 500 }}>{v}</div>
    </div>
  );
  return (
    <div>
      <div className="row gap-3" style={{ marginBottom: 14 }}>
        <Icon name="check" size={16} style={{ color: '#4a6b2a' }} />
        <h3 className="title-serif" style={{ fontSize: 22 }}>Review & confirm</h3>
      </div>

      <div className="card" style={{ padding: '6px 18px', marginBottom: 16 }}>
        <Row k="Case type" v={`${data.caseType} · ${data.matter} · ${data.voluntary ? 'Voluntary' : 'Contractual'}`} />
        <Row k="Claimant" v={data.claimant || '—'} />
        <Row k="Respondent" v={`${data.respondentFirm} · Claim ${data.claimNumber || '—'}`} />
        <Row k="Adjuster" v={`${data.adjuster || '—'} · ${data.adjusterPhone || '—'}`} />
        <Row k="Fee sheet" v={data.feeSheet} />
        <Row k="Documents" v={`${data.documents.length} uploaded`} />
      </div>

      <div className="card" style={{ padding: 14, background: '#fef2c5', border: '1px solid #f0d77a' }}>
        <div className="row gap-2" style={{ marginBottom: 6 }}>
          <Icon name="zap" size={14} style={{ color: '#7e5403' }} />
          <strong style={{ fontSize: 12.5 }}>On creation, the system will automatically:</strong>
        </div>
        <ul style={{ margin: 0, paddingLeft: 20, fontSize: 12.5, color: '#5a3a02', lineHeight: 1.7 }}>
          <li>Assign case number NAM-PI-204872</li>
          <li>Set 48-hour follow-up diary task</li>
          <li>Send intake confirmation to claimant counsel and respondent adjuster</li>
          <li>Notify your AE (C. Ulan)</li>
          <li>Run carrier-specific rules: GEICO stipulation field, NY simultaneous-send</li>
        </ul>
      </div>
    </div>
  );
}

Object.assign(window, { IntakeWizard });
