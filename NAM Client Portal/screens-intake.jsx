// Intake wizard — 6-step voluntary case submission

function IntakePage({ navigate }) {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({
    caseTrack: 'voluntary',
    caseType: 'pi',
    claimant: { name: 'Karen Hartwell', email: 'karen.h@example.com', phone: '(212) 555-0114', address: '124 Tilden St, Brooklyn, NY 11226' },
    respondent: { name: '', company: 'Cordova Logistics, Inc.', email: 'legal@cordovalog.com' },
    counsel: { firm: 'Morgan & Pell LLP', name: 'Rachel Morgan', email: 'rachel.morgan@morganpell.com' },
    adjuster: { name: 'Marcus Tan', carrier: 'GEICO', claimNo: 'C-44129' },
    incidentDate: '2025-08-14',
    description: 'Vehicle collision at intersection of Atlantic Ave and 4th Ave, Brooklyn. Claimant sustained cervical and lumbar injuries.',
    jurisdiction: 'NY',
    feeWaiver: false,
    payment: 'card',
  });

  const steps = [
    { id: 'type',     label: 'Case type' },
    { id: 'parties',  label: 'Parties' },
    { id: 'details',  label: 'Case details' },
    { id: 'docs',     label: 'Documents' },
    { id: 'fee',      label: 'Fee & payment' },
    { id: 'review',   label: 'Review & submit' },
  ];

  const next = () => setStep(s => Math.min(s + 1, steps.length));
  const back = () => setStep(s => Math.max(s - 1, 0));

  if (step === steps.length) {
    return <IntakeConfirmation navigate={navigate} />;
  }

  return (
    <>
      <SubNav crumbs={[
        { label: 'Home', onClick: () => navigate('landing') },
        { label: 'Submit a case' },
        { label: steps[step].label },
      ]} />
      <div className="page page-narrow fade-in" key={step}>
        <div className="page-header" style={{ marginBottom: 12 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 6 }}>Step {step + 1} of {steps.length}</div>
            <h1 className="page-title">{
              ['What kind of case is this?', 'Who are the parties?', 'Tell us about the matter', 'Upload your documents', 'Filing fee & payment', 'Review and submit'][step]
            }</h1>
          </div>
          <div style={{ fontSize: 13, color: 'var(--ink-3)', textAlign: 'right' }}>
            <div>Saved as draft · {new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</div>
            <a className="btn-link" style={{ fontSize: 12.5 }}>Save and continue later</a>
          </div>
        </div>

        {/* Stepper */}
        <div className="stepper">
          {steps.map((s, i) => (
            <React.Fragment key={s.id}>
              <div className={`step ${i === step ? 'active' : i < step ? 'done' : ''}`}>
                <div className="step-num">{i < step ? <Icon name="check" size={13} /> : i + 1}</div>
                <div className="step-label">{s.label}</div>
              </div>
              {i < steps.length - 1 && <div className="step-connector" />}
            </React.Fragment>
          ))}
        </div>

        <div className="card" style={{ padding: 32, marginBottom: 20 }}>
          {step === 0 && <Step0Type data={data} setData={setData} />}
          {step === 1 && <Step1Parties data={data} setData={setData} />}
          {step === 2 && <Step2Details data={data} setData={setData} />}
          {step === 3 && <Step3Docs />}
          {step === 4 && <Step4Fee data={data} setData={setData} />}
          {step === 5 && <Step5Review data={data} setStep={setStep} />}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button className="btn btn-ghost" onClick={step === 0 ? () => navigate('landing') : back}>
            <Icon name="arrowLeft" size={14} /> {step === 0 ? 'Cancel' : 'Back'}
          </button>
          <div style={{ fontSize: 12.5, color: 'var(--ink-3)', display: 'flex', alignItems: 'center', gap: 6 }}>
            <Icon name="lock" size={13} /> Encrypted in transit and at rest
          </div>
          <button className="btn btn-primary btn-lg" onClick={next}>
            {step === steps.length - 1 ? 'Submit case' : 'Continue'} <Icon name="arrowRight" size={14} />
          </button>
        </div>
      </div>
    </>
  );
}

function Step0Type({ data, setData }) {
  return (
    <>
      <h3 style={{ marginBottom: 8 }}>Filing track</h3>
      <p style={{ color: 'var(--ink-3)', marginBottom: 20, fontSize: 14 }}>Voluntary if both parties have agreed to NAM. Contractual if a contract names NAM as the dispute resolution forum.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 32 }}>
        {[
          { id: 'voluntary', t: 'Voluntary', sub: 'Both parties have agreed to use NAM. PI claims, settled commercial matters.' },
          { id: 'contractual', t: 'Contractual', sub: 'A contract names NAM. Employment, consumer, healthcare, commercial.' },
        ].map(o => (
          <label key={o.id} className="card" style={{
            padding: 20, cursor: 'pointer', border: data.caseTrack === o.id ? '2px solid var(--navy)' : '1px solid var(--stroke-1)',
            background: data.caseTrack === o.id ? 'var(--navy-50)' : '#fff',
          }}>
            <input type="radio" checked={data.caseTrack === o.id} onChange={() => setData({...data, caseTrack: o.id})} style={{ marginBottom: 10 }} />
            <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>{o.t}</div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{o.sub}</div>
          </label>
        ))}
      </div>

      <h3 style={{ marginBottom: 8 }}>Case category</h3>
      <p style={{ color: 'var(--ink-3)', marginBottom: 20, fontSize: 14 }}>This determines the applicable rules of procedure and fee schedule.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
        {[
          { id: 'pi', t: 'Personal Injury', sub: 'Auto, slip & fall, premises liability' },
          { id: 'commercial', t: 'Commercial', sub: 'Business-to-business disputes' },
          { id: 'employment', t: 'Employment', sub: 'Wage, discrimination, contract' },
          { id: 'consumer', t: 'Consumer', sub: 'Product, service, warranty' },
          { id: 'healthcare', t: 'Healthcare malpractice', sub: 'Medical, dental, hospital' },
          { id: 'nofault', t: 'No-Fault', sub: 'Insurance no-fault claims' },
        ].map(o => (
          <label key={o.id} style={{
            padding: '12px 14px', borderRadius: 8,
            border: data.caseType === o.id ? '2px solid var(--navy)' : '1px solid var(--stroke-1)',
            background: data.caseType === o.id ? 'var(--navy-50)' : '#fff',
            cursor: 'pointer',
            display: 'flex', alignItems: 'flex-start', gap: 10,
          }}>
            <input type="radio" checked={data.caseType === o.id} onChange={() => setData({...data, caseType: o.id})} style={{ marginTop: 3 }} />
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 600 }}>{o.t}</div>
              <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{o.sub}</div>
            </div>
          </label>
        ))}
      </div>
    </>
  );
}

function Step1Parties({ data, setData }) {
  return (
    <>
      {/* Duplicate detection alert */}
      <div style={{ background: 'var(--navy-50)', border: '1px solid var(--navy-100)', padding: 12, borderRadius: 8, display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 24 }}>
        <Icon name="info" size={16} color="var(--navy)" style={{ marginTop: 2 }} />
        <div style={{ fontSize: 13, color: 'var(--ink-2)' }}>
          We found <strong>1 possible match</strong> for "Karen Hartwell" in our records (case NAM-2024-19887). <a className="btn-link">Review match</a> · <a className="btn-link">Continue as new</a>
        </div>
      </div>

      <h3 style={{ marginBottom: 16 }}>Claimant</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
        <div>
          <label className="label">Full name</label>
          <input className="input" value={data.claimant.name} onChange={e => setData({...data, claimant: {...data.claimant, name: e.target.value}})} />
        </div>
        <div>
          <label className="label">Email</label>
          <input className="input" value={data.claimant.email} onChange={e => setData({...data, claimant: {...data.claimant, email: e.target.value}})} />
        </div>
        <div>
          <label className="label">Phone</label>
          <input className="input" value={data.claimant.phone} />
        </div>
        <div>
          <label className="label">Address</label>
          <input className="input" value={data.claimant.address} />
        </div>
      </div>

      <h3 style={{ marginBottom: 16 }}>Respondent</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
        <div>
          <label className="label">Company / individual</label>
          <input className="input" value={data.respondent.company} onChange={e => setData({...data, respondent: {...data.respondent, company: e.target.value}})} />
        </div>
        <div>
          <label className="label">Email for service</label>
          <input className="input" value={data.respondent.email} onChange={e => setData({...data, respondent: {...data.respondent, email: e.target.value}})} />
          <div className="help">A response link will be sent here once the case is submitted.</div>
        </div>
      </div>

      <h3 style={{ marginBottom: 16 }}>Counsel <span style={{ fontSize: 12, fontWeight: 400, color: 'var(--ink-3)' }}>(filing on behalf of claimant)</span></h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
        <div>
          <label className="label">Firm</label>
          <input className="input" value={data.counsel.firm} disabled />
        </div>
        <div>
          <label className="label">Attorney name</label>
          <input className="input" value={data.counsel.name} disabled />
        </div>
      </div>

      <h3 style={{ marginBottom: 4 }}>Insurance / adjuster <span style={{ fontSize: 12, fontWeight: 400, color: 'var(--ink-3)' }}>(if applicable)</span></h3>
      <p style={{ color: 'var(--ink-3)', fontSize: 13, marginBottom: 16 }}>
        Adjuster name and claim number are required for PI and No-Fault matters.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
        <div>
          <label className="label">Carrier</label>
          <input className="input" value={data.adjuster.carrier} />
        </div>
        <div>
          <label className="label">Adjuster name</label>
          <input className="input" value={data.adjuster.name} />
        </div>
        <div>
          <label className="label">Claim number</label>
          <input className="input" value={data.adjuster.claimNo} />
        </div>
      </div>
    </>
  );
}

function Step2Details({ data, setData }) {
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
        <div>
          <label className="label">Date of incident</label>
          <input className="input" type="date" value={data.incidentDate} onChange={e => setData({...data, incidentDate: e.target.value})} />
        </div>
        <div>
          <label className="label">Jurisdiction</label>
          <select className="input" value={data.jurisdiction} onChange={e => setData({...data, jurisdiction: e.target.value})}>
            <option value="NY">New York</option>
            <option value="NJ">New Jersey</option>
            <option value="CT">Connecticut</option>
            <option value="PA">Pennsylvania</option>
          </select>
        </div>
      </div>

      <label className="label">Brief description of the matter</label>
      <textarea className="input" rows={5} value={data.description} onChange={e => setData({...data, description: e.target.value})} />
      <div className="help">A 2–4 sentence summary. NAM and the assigned neutral will see this. The opposing party will see it once the case is opened.</div>

      <div style={{ marginTop: 24 }}>
        <label className="label">Special circumstances</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5 }}>
            <input type="checkbox" /> Expedited handling requested
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5 }}>
            <input type="checkbox" checked={data.feeWaiver} onChange={e => setData({...data, feeWaiver: e.target.checked})} /> Apply for fee waiver (financial hardship)
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5 }}>
            <input type="checkbox" /> ADA / accessibility accommodation needed
          </label>
        </div>
      </div>
    </>
  );
}

function Step3Docs() {
  const slots = [
    { name: 'Demand for arbitration', required: true, accepted: 'PDF', uploaded: 'demand-hartwell.pdf', size: '2.4 MB' },
    { name: 'Proof of service', required: true, accepted: 'PDF, JPG', uploaded: 'cert-mail-receipt.pdf', size: '480 KB' },
    { name: 'Police / incident report', required: false, accepted: 'PDF', uploaded: 'incident-2025-082.pdf', size: '1.1 MB' },
    { name: 'Medical records', required: false, accepted: 'PDF', uploaded: null },
    { name: 'Supporting evidence (other)', required: false, accepted: 'PDF, DOCX, XLSX, JPG, PNG', uploaded: null },
  ];
  return (
    <>
      <p style={{ color: 'var(--ink-3)', marginBottom: 24, fontSize: 14 }}>
        Upload each document into the labelled slot. NAM will route it into the right folder automatically. You can add or replace documents later from your case page.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {slots.map((s, i) => (
          <div key={s.name} style={{
            display: 'flex', alignItems: 'center', gap: 16,
            padding: 16, border: '1px solid var(--stroke-1)', borderRadius: 8,
            background: s.uploaded ? 'var(--success-bg)' : '#fff',
            borderColor: s.uploaded ? '#A8D5BC' : 'var(--stroke-1)',
          }}>
            <div style={{ width: 40, height: 40, borderRadius: 8, background: s.uploaded ? '#fff' : 'var(--bg-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.uploaded ? 'var(--success)' : 'var(--ink-3)', flexShrink: 0 }}>
              <Icon name={s.uploaded ? 'check' : 'upload'} size={18} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>
                {s.name} {s.required && <span style={{ color: 'var(--danger)', fontWeight: 500 }}>*</span>}
              </div>
              <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>
                {s.uploaded ? <><Icon name="file" size={11} style={{ verticalAlign: '-1px', marginRight: 4 }} />{s.uploaded} · {s.size}</> : <>Accepted: {s.accepted} · 50 MB max</>}
              </div>
            </div>
            <button className="btn btn-outline btn-sm">
              {s.uploaded ? <><Icon name="refresh" size={13} /> Replace</> : <><Icon name="upload" size={13} /> Upload</>}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

function Step4Fee({ data, setData }) {
  return (
    <>
      <div className="card" style={{ padding: 0, marginBottom: 24, overflow: 'hidden', border: '1px solid var(--stroke-1)' }}>
        <div style={{ background: 'var(--navy-50)', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--navy-100)' }}>
          <div style={{ fontWeight: 600, color: 'var(--navy)' }}>Calculated filing fee</div>
          <span className="badge badge-navy">PI · Voluntary · NY</span>
        </div>
        <div style={{ padding: '14px 20px' }}>
          {[
            { l: 'Initial filing fee', v: '$1,200.00' },
            { l: 'Administrative surcharge (3%)', v: '$36.00' },
            { l: 'Document handling', v: '$45.00' },
          ].map(r => (
            <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 13.5, color: 'var(--ink-2)' }}>
              <span>{r.l}</span><span>{r.v}</span>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--stroke-1)', marginTop: 8, paddingTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 14, fontWeight: 600 }}>Total due today</span>
            <span className="serif" style={{ fontSize: 28, fontWeight: 700, color: 'var(--navy)' }}>$1,281.00</span>
          </div>
        </div>
      </div>

      <h3 style={{ marginBottom: 16 }}>Payment method</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
        {[
          { id: 'card', t: 'Credit / debit card', sub: 'Visa, Mastercard, Amex, Discover', icon: 'card' },
          { id: 'ach', t: 'ACH bank transfer', sub: 'Direct from US checking — 2 business days', icon: 'building' },
        ].map(o => (
          <label key={o.id} className="card" style={{
            padding: 16, cursor: 'pointer',
            border: data.payment === o.id ? '2px solid var(--navy)' : '1px solid var(--stroke-1)',
            background: data.payment === o.id ? 'var(--navy-50)' : '#fff',
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <input type="radio" checked={data.payment === o.id} onChange={() => setData({...data, payment: o.id})} />
            <Icon name={o.icon} size={18} color="var(--navy)" />
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{o.t}</div>
              <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{o.sub}</div>
            </div>
          </label>
        ))}
      </div>

      {data.payment === 'card' && (
        <div className="fade-in" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
          <div style={{ gridColumn: 'span 3' }}>
            <label className="label">Card number</label>
            <input className="input" placeholder="•••• •••• •••• ••••" defaultValue="4242 4242 4242 4242" />
          </div>
          <div>
            <label className="label">Expiry</label>
            <input className="input" defaultValue="08 / 28" />
          </div>
          <div>
            <label className="label">CVC</label>
            <input className="input" defaultValue="•••" />
          </div>
          <div>
            <label className="label">ZIP</label>
            <input className="input" defaultValue="11226" />
          </div>
        </div>
      )}

      <div style={{ marginTop: 24, fontSize: 12.5, color: 'var(--ink-3)', display: 'flex', gap: 8 }}>
        <Icon name="lock" size={14} /> Payments are processed via Authorize.Net. NAM never stores your card number.
      </div>
    </>
  );
}

function Step5Review({ data, setStep }) {
  const sections = [
    { step: 0, title: 'Case type', items: [
      ['Track', data.caseTrack === 'voluntary' ? 'Voluntary' : 'Contractual'],
      ['Category', { pi: 'Personal Injury', commercial: 'Commercial', employment: 'Employment', consumer: 'Consumer', healthcare: 'Healthcare malpractice', nofault: 'No-Fault' }[data.caseType]],
    ]},
    { step: 1, title: 'Parties', items: [
      ['Claimant', `${data.claimant.name} · ${data.claimant.email}`],
      ['Respondent', `${data.respondent.company} · ${data.respondent.email}`],
      ['Counsel', `${data.counsel.name}, ${data.counsel.firm}`],
      ['Carrier', `${data.adjuster.carrier} (claim ${data.adjuster.claimNo})`],
    ]},
    { step: 2, title: 'Case details', items: [
      ['Incident date', data.incidentDate],
      ['Jurisdiction', data.jurisdiction],
      ['Description', data.description],
    ]},
    { step: 3, title: 'Documents', items: [
      ['Uploaded', '3 of 5 slots filled (2 required)'],
    ]},
    { step: 4, title: 'Fee & payment', items: [
      ['Total', '$1,281.00'],
      ['Method', data.payment === 'card' ? 'Visa ending 4242' : 'ACH transfer'],
    ]},
  ];
  return (
    <>
      <p style={{ color: 'var(--ink-3)', marginBottom: 24, fontSize: 14 }}>
        Take a moment to review what you're about to submit. You can edit any section before clicking Submit case.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {sections.map(s => (
          <div key={s.title} style={{ border: '1px solid var(--stroke-1)', borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'var(--bg-muted)', borderBottom: '1px solid var(--stroke-1)' }}>
              <h4>{s.title}</h4>
              <a className="btn-link" style={{ fontSize: 12.5 }} onClick={() => setStep(s.step)}>Edit</a>
            </div>
            <div style={{ padding: '8px 16px' }}>
              {s.items.map(([l, v], i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 12, padding: '10px 0', borderBottom: i < s.items.length - 1 ? '1px solid var(--stroke-1)' : 'none', fontSize: 13.5 }}>
                  <div style={{ color: 'var(--ink-3)' }}>{l}</div>
                  <div>{v}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 24, padding: 16, background: 'var(--gold-soft)', borderRadius: 8, fontSize: 13, color: '#6F541F' }}>
        <strong>By submitting</strong>, you confirm that all information is accurate, you have authority to file on behalf of the claimant, and you agree to NAM's rules of procedure for {{ pi: 'Personal Injury', commercial: 'Commercial', employment: 'Employment', consumer: 'Consumer', healthcare: 'Healthcare malpractice', nofault: 'No-Fault' }[data.caseType]}.
      </div>
    </>
  );
}

function IntakeConfirmation({ navigate }) {
  return (
    <>
      <SubNav crumbs={[{ label: 'Submission confirmed' }]} />
      <div className="page page-narrow fade-in" style={{ paddingTop: 48 }}>
        <div className="card" style={{ padding: 48, textAlign: 'center' }}>
          <div style={{ width: 80, height: 80, borderRadius: 999, background: 'var(--success-bg)', color: 'var(--success)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
            <Icon name="check" size={36} />
          </div>
          <h1 className="serif" style={{ fontSize: 36, marginBottom: 12 }}>Your case has been submitted</h1>
          <p style={{ color: 'var(--ink-3)', maxWidth: 480, margin: '0 auto 28px', fontSize: 15 }}>
            We've issued your case number, sent a confirmation email, and notified the respondent. NAM will review and assign a case manager within one business day.
          </p>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '14px 24px', background: 'var(--navy-50)', borderRadius: 10, marginBottom: 28 }}>
            <div className="eyebrow">Your case number</div>
            <div className="mono" style={{ fontSize: 18, fontWeight: 600, color: 'var(--navy)' }}>NAM-2026-04219</div>
            <Icon name="link" size={14} color="var(--navy)" style={{ cursor: 'pointer' }} />
          </div>

          <div style={{ textAlign: 'left', maxWidth: 560, margin: '0 auto 32px' }}>
            <h4 style={{ marginBottom: 12 }}>What happens next</h4>
            {[
              { t: 'Now', body: 'Confirmation email sent to rachel.morgan@morganpell.com' },
              { t: 'Within 1 business day', body: 'Cordova Logistics receives a respondent response link' },
              { t: 'Within 2 business days', body: 'NAM assigns a case manager and confirms intake' },
              { t: 'Within 5 business days', body: 'Neutral selection slate published — you\'ll be notified to submit preferences' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, padding: '10px 0', borderBottom: i < 3 ? '1px solid var(--stroke-1)' : 'none' }}>
                <div style={{ minWidth: 160, fontSize: 12, fontWeight: 600, color: 'var(--navy)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{s.t}</div>
                <div style={{ fontSize: 13.5, color: 'var(--ink-2)' }}>{s.body}</div>
              </div>
            ))}
          </div>

          <div className="card" style={{ padding: 20, background: 'var(--gold-soft)', borderColor: '#E8DBB0', maxWidth: 560, margin: '0 auto 28px', textAlign: 'left' }}>
            <h4 style={{ color: '#6F541F', marginBottom: 6 }}>Save your details for next time</h4>
            <p style={{ fontSize: 13, color: '#6F541F', margin: '0 0 12px' }}>You filed as a guest. Create a free account in 30 seconds to track this case, message your case manager, and skip data entry on your next filing.</p>
            <button className="btn btn-primary btn-sm">Create my account</button>
          </div>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <button className="btn btn-outline" onClick={() => navigate('landing')}>Return to home</button>
            <button className="btn btn-primary" onClick={() => navigate('dashboard')}>Go to my cases <Icon name="arrowRight" size={14} /></button>
          </div>
        </div>
      </div>
    </>
  );
}

Object.assign(window, { IntakePage });
