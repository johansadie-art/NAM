// Public screens: Landing, Login, Respondent response

// ---------------- Landing ----------------
function LandingPage({ navigate }) {
  return (
    <div>
      {/* Hero */}
      <section className="hero" style={{ padding: '80px 32px 96px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 12px', borderRadius: 999,
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)',
              fontSize: 12, fontWeight: 500, letterSpacing: '0.04em',
              marginBottom: 24,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--gold)' }} />
              myADR 2.0 — Now in early access
            </div>
            <h1 className="display" style={{ color: '#fff', maxWidth: 640 }}>
              The modern way to file, follow, and resolve cases with NAM.
            </h1>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.78)', marginTop: 20, maxWidth: 540, lineHeight: 1.55 }}>
              File a demand, respond to one, track every hearing, and access decisions the moment they're released — without picking up the phone.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
              <button className="btn btn-lg" style={{ background: '#fff', color: 'var(--navy)' }} onClick={() => navigate('intake')}>
                Submit a case <Icon name="arrowRight" size={16} />
              </button>
              <button className="btn btn-lg btn-ghost" style={{ color: '#fff', border: '1px solid rgba(255,255,255,0.28)' }} onClick={() => navigate('login')}>
                Sign in to your portal
              </button>
            </div>
            <div style={{ display: 'flex', gap: 28, marginTop: 40, color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Icon name="shield" size={15} color="var(--gold)" />
                Trusted by 9,000+ counsel
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Icon name="lock" size={15} color="var(--gold)" />
                Confidentiality enforced
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Icon name="check" size={15} color="var(--gold)" />
                No phone calls required
              </div>
            </div>
          </div>

          {/* Hero card preview */}
          <div style={{ position: 'relative' }}>
            <div className="card" style={{ background: '#fff', padding: 0, overflow: 'hidden', boxShadow: '0 30px 80px rgb(0 0 0 / 0.32)', transform: 'rotate(-1deg)' }}>
              <div style={{ background: 'var(--bg-muted)', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--stroke-1)' }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  <span style={{ width: 10, height: 10, borderRadius: 999, background: '#E66F66' }} />
                  <span style={{ width: 10, height: 10, borderRadius: 999, background: '#E8B547' }} />
                  <span style={{ width: 10, height: 10, borderRadius: 999, background: '#5BB774' }} />
                </div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>portal.namadr.com / cases</div>
                <div style={{ width: 40 }} />
              </div>
              <div style={{ padding: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <div className="serif" style={{ fontSize: 20, fontWeight: 700, color: 'var(--ink-1)' }}>Your cases</div>
                  <span className="badge badge-warning"><span className="badge-dot" />2 action required</span>
                </div>
                {[
                  { id: 'NAM-2026-04183', parties: 'Hartwell v. Cordova Logistics', status: 'awaiting-response', date: 'Hearing Jun 14' },
                  { id: 'NAM-2026-04102', parties: 'Mercer Industrial Arbitration', status: 'hearing-scheduled', date: 'Hearing Jun 22' },
                  { id: 'NAM-2026-03987', parties: 'Driggs Insurance Carrier #4471', status: 'invoice-due', date: 'Due May 24' },
                ].map(c => (
                  <div key={c.id} style={{ padding: '14px 0', borderBottom: '1px solid var(--stroke-1)', display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ flex: 1 }}>
                      <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>{c.id}</div>
                      <div style={{ fontSize: 14, fontWeight: 500, marginTop: 2 }}>{c.parties}</div>
                    </div>
                    <StatusBadge status={c.status} />
                    <div style={{ fontSize: 12, color: 'var(--ink-3)', minWidth: 110, textAlign: 'right' }}>{c.date}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* floating accent card */}
            <div className="card" style={{ position: 'absolute', bottom: -32, left: -28, padding: 16, background: '#fff', minWidth: 220, boxShadow: '0 20px 50px rgb(0 0 0 / 0.25)', transform: 'rotate(2deg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--success-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="check" size={18} color="var(--success)" />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>Decision released</div>
                  <div style={{ fontSize: 11.5, color: 'var(--ink-3)' }}>NAM-2026-03812 · 2 min ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick paths */}
      <section style={{ background: '#fff', borderTop: '1px solid var(--stroke-1)', padding: '64px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="eyebrow" style={{ marginBottom: 8 }}>Get started</div>
          <h2 className="serif" style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>What brings you to NAM today?</h2>
          <p style={{ color: 'var(--ink-3)', marginBottom: 32, maxWidth: 640 }}>Pick the path that matches you. You don't need an account to start filing or to respond to a demand.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {[
              { id: 'intake', icon: 'briefcase', title: 'Submit a case', sub: 'Voluntary or contractual — guided wizard', cta: 'Begin filing' },
              { id: 'respondent', icon: 'mail', title: 'I\'ve received a demand', sub: 'Respond from your email link — no account needed', cta: 'Respond now' },
              { id: 'login', icon: 'briefcase', title: 'Track my cases', sub: 'Status, hearings, documents, invoices', cta: 'Sign in' },
              { id: 'intake', icon: 'building', title: 'Mass filing', sub: 'CSV bulk submission for carriers and firms', cta: 'Bulk upload' },
            ].map((p, i) => (
              <div key={p.id+i} className="card" style={{ padding: 24, cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 12, transition: 'transform 200ms, box-shadow 200ms' }}
                   onClick={() => navigate(p.id)}
                   onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
                   onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--navy-50)', color: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={p.icon} size={22} />
                </div>
                <div className="serif" style={{ fontSize: 19, fontWeight: 700 }}>{p.title}</div>
                <div style={{ fontSize: 13.5, color: 'var(--ink-3)', flex: 1 }}>{p.sub}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--navy)', display: 'flex', alignItems: 'center', gap: 6 }}>
                  {p.cta} <Icon name="arrowRight" size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's new */}
      <section style={{ padding: '64px 32px', background: 'var(--bg-page)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'start' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 12 }}>What's new in 2.0</div>
            <h2 className="serif" style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.15 }}>Built around how parties actually work — not how the case management system was built.</h2>
            <p style={{ color: 'var(--ink-3)', marginTop: 16, fontSize: 15 }}>
              The portal is now the primary path: structured intake, self-service status, automated respondent flow, confidential neutral selection, and online payment. No more chasing case managers.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { icon: 'edit', title: 'Structured intake', body: 'A guided wizard that captures every required field on the first submission. No more half-complete email demands.' },
              { icon: 'mail', title: 'Respondent path', body: 'A demand recipient gets a one-click response link. Accept, decline, or request an extension without a login.' },
              { icon: 'scale', title: 'Confidential neutral selection', body: 'Submit your strikes or rankings directly. Opposing party selections are never visible.' },
              { icon: 'card', title: 'Online billing', body: 'Pay via card or ACH. Decisions on payment-hold release the moment payment clears.' },
            ].map(f => (
              <div key={f.title} className="card" style={{ padding: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--gold-soft)', color: '#6F541F', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                  <Icon name={f.icon} size={18} />
                </div>
                <h4 style={{ marginBottom: 6 }}>{f.title}</h4>
                <p style={{ fontSize: 13.5, color: 'var(--ink-3)', margin: 0 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--navy)', color: 'rgba(255,255,255,0.78)', padding: '48px 32px 32px', fontSize: 13 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
          <div style={{ maxWidth: 360 }}>
            <NAMLogo height={42} />
            <p style={{ marginTop: 16, lineHeight: 1.6 }}>
              National Arbitration and Mediation. Resolving commercial, personal injury, employment, and consumer disputes since 1992.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 64 }}>
            <div>
              <div style={{ fontWeight: 600, color: '#fff', marginBottom: 12 }}>Portal</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span>Submit a case</span>
                <span>Respond to a demand</span>
                <span>Pay an invoice</span>
                <span>Track status</span>
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 600, color: '#fff', marginBottom: 12 }}>Help</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span>FAQ</span>
                <span>Contact case management</span>
                <span>Rules of procedure</span>
                <span>Fee schedules</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: 1280, margin: '32px auto 0', paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.12)', display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
          <div>© 2026 National Arbitration and Mediation. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <span>Privacy</span><span>Terms</span><span>Accessibility</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ---------------- Login ----------------
function LoginPage({ navigate }) {
  const [email, setEmail] = React.useState('rachel.morgan@morganpell.com');
  const [pw, setPw] = React.useState('••••••••••••');
  return (
    <div style={{ minHeight: 'calc(100vh - 64px)', display: 'flex' }}>
      {/* Left visual */}
      <div className="hero" style={{ flex: '1 1 50%', display: 'flex', alignItems: 'center', padding: '64px', position: 'relative', minHeight: 600 }}>
        <div style={{ position: 'relative', zIndex: 1, color: '#fff', maxWidth: 480 }}>
          <NAMLogo height={48} />
          <h2 className="serif" style={{ fontSize: 36, fontWeight: 700, color: '#fff', marginTop: 32, lineHeight: 1.2 }}>
            "I used to call NAM for every status update. Now I open the portal."
          </h2>
          <div style={{ marginTop: 24, fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>
            <div style={{ fontWeight: 600, color: '#fff' }}>Theo Aldrete</div>
            <div>Senior Counsel, Aldrete & Jain</div>
          </div>
        </div>
      </div>
      {/* Right form */}
      <div style={{ flex: '1 1 50%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 48 }}>
        <div style={{ width: '100%', maxWidth: 400 }}>
          <h1 className="serif" style={{ fontSize: 32, marginBottom: 8 }}>Welcome back</h1>
          <p style={{ color: 'var(--ink-3)', marginBottom: 32 }}>Sign in to view your cases, hearings, and invoices.</p>

          <label className="label">Email</label>
          <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginBottom: 16 }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label className="label">Password</label>
            <a className="btn-link" style={{ fontSize: 12.5, marginBottom: 6 }}>Forgot password?</a>
          </div>
          <input className="input" type="password" value={pw} onChange={(e) => setPw(e.target.value)} />

          <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 16, fontSize: 13, color: 'var(--ink-2)' }}>
            <input type="checkbox" defaultChecked /> Keep me signed in for 30 days
          </label>

          <button className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: 24, justifyContent: 'center' }} onClick={() => navigate('dashboard')}>
            Sign in
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '24px 0', color: 'var(--ink-3)', fontSize: 12 }}>
            <div style={{ flex: 1, height: 1, background: 'var(--stroke-1)' }} />
            or
            <div style={{ flex: 1, height: 1, background: 'var(--stroke-1)' }} />
          </div>

          <button className="btn btn-outline btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
            <Icon name="building" size={16} /> Continue with my firm SSO
          </button>

          <p style={{ marginTop: 32, fontSize: 13, color: 'var(--ink-3)', textAlign: 'center' }}>
            Don't have an account? <a className="btn-link" onClick={() => navigate('intake')}>File a case as a guest</a>
          </p>
        </div>
      </div>
    </div>
  );
}

// ---------------- Respondent Response ----------------
function RespondentPage({ navigate }) {
  const [choice, setChoice] = React.useState(null);   // accept | decline | extension
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <div style={{ background: 'var(--bg-page)', minHeight: 'calc(100vh - 64px)', padding: '32px 24px' }}>
      <div className="page page-narrow" style={{ paddingTop: 0 }}>
        {/* Header strip */}
        <div className="card" style={{ padding: 0, overflow: 'hidden', marginBottom: 24 }}>
          <div style={{ background: 'var(--navy)', color: '#fff', padding: '20px 28px', display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="mail" size={22} color="#fff" />
            </div>
            <div style={{ flex: 1 }}>
              <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Action required</div>
              <h2 className="serif" style={{ color: '#fff', fontSize: 22, marginTop: 4 }}>A demand has been filed against you.</h2>
            </div>
            <span className="badge" style={{ background: 'var(--gold)', color: '#fff' }}>Respond by Jun 4, 2026</span>
          </div>
          <div style={{ padding: '20px 28px', background: 'var(--bg-muted)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {[
              { l: 'Case number', v: 'NAM-2026-04183' },
              { l: 'Filed by', v: 'Karen Hartwell' },
              { l: 'Matter', v: 'Personal Injury' },
              { l: 'Filed on', v: 'May 6, 2026' },
            ].map(i => (
              <div key={i.l}>
                <div className="eyebrow" style={{ marginBottom: 4 }}>{i.l}</div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{i.v}</div>
              </div>
            ))}
          </div>
        </div>

        {!submitted ? (
          <>
            <div className="card" style={{ padding: 28, marginBottom: 16 }}>
              <h3 style={{ marginBottom: 8 }}>What this means</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.65, marginBottom: 16 }}>
                You've been named as the respondent in an arbitration demand filed with NAM by <strong>Karen Hartwell</strong>. As the respondent, you can choose to accept and proceed, decline (with a reason), or request additional time before responding. You don't need to create an account to respond — your decision will be recorded against this case automatically.
              </p>
              <p style={{ color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.65, margin: 0 }}>
                If you don't respond by <strong>June 4, 2026</strong>, NAM will follow up with you directly. If you have questions, contact your assigned case manager <a className="btn-link">Sharon Liu</a>.
              </p>
            </div>

            <h3 style={{ marginBottom: 16 }}>Choose your response</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
              {[
                { id: 'accept', title: 'Accept and proceed', sub: 'Agree to participate in the arbitration. You\'ll be guided through signing the agreement (DocuSign, takes about 3 minutes).', icon: 'check', accent: 'var(--success)' },
                { id: 'decline', title: 'Decline to participate', sub: 'You\'ll be asked to provide a reason. NAM will be notified automatically.', icon: 'x', accent: 'var(--danger)' },
                { id: 'extension', title: 'Request an extension', sub: 'Ask for additional time before responding. NAM\'s case manager will review and respond within one business day.', icon: 'clock', accent: 'var(--warning)' },
              ].map(o => (
                <label key={o.id} className="card" style={{
                  padding: 20, cursor: 'pointer',
                  display: 'flex', alignItems: 'flex-start', gap: 16,
                  border: choice === o.id ? `2px solid var(--navy)` : '1px solid var(--stroke-1)',
                  background: choice === o.id ? 'var(--navy-50)' : '#fff',
                  transition: 'all 150ms',
                }}>
                  <input type="radio" checked={choice === o.id} onChange={() => setChoice(o.id)} style={{ marginTop: 4 }} />
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: '#fff', border: '1px solid var(--stroke-1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: o.accent, flexShrink: 0 }}>
                    <Icon name={o.icon} size={18} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{o.title}</div>
                    <div style={{ fontSize: 13.5, color: 'var(--ink-3)' }}>{o.sub}</div>
                  </div>
                </label>
              ))}
            </div>

            {choice === 'decline' && (
              <div className="card fade-in" style={{ padding: 24, marginBottom: 16 }}>
                <label className="label">Reason for declining</label>
                <select className="input" defaultValue="">
                  <option value="" disabled>Select a reason…</option>
                  <option>The contract does not require arbitration with NAM</option>
                  <option>The matter has been settled</option>
                  <option>I dispute that I am the correct party</option>
                  <option>Other (explain below)</option>
                </select>
                <label className="label" style={{ marginTop: 16 }}>Additional context (optional)</label>
                <textarea className="input" rows={4} placeholder="Add any details NAM should know…" />
              </div>
            )}

            {choice === 'extension' && (
              <div className="card fade-in" style={{ padding: 24, marginBottom: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label className="label">Requested new deadline</label>
                    <input className="input" type="date" defaultValue="2026-06-25" />
                  </div>
                  <div>
                    <label className="label">Days requested</label>
                    <input className="input" defaultValue="21 days" disabled />
                  </div>
                </div>
                <label className="label" style={{ marginTop: 16 }}>Reason for the request</label>
                <textarea className="input" rows={4} placeholder="Briefly explain why more time is needed…" />
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
              <div style={{ fontSize: 12.5, color: 'var(--ink-3)', display: 'flex', alignItems: 'center', gap: 6 }}>
                <Icon name="lock" size={14} /> Your response is encrypted and submitted directly to NAM.
              </div>
              <button className="btn btn-primary btn-lg" disabled={!choice} style={{ opacity: choice ? 1 : 0.5, cursor: choice ? 'pointer' : 'not-allowed' }} onClick={() => setSubmitted(true)}>
                Submit response <Icon name="arrowRight" size={16} />
              </button>
            </div>
          </>
        ) : (
          <div className="card fade-in" style={{ padding: 48, textAlign: 'center' }}>
            <div style={{ width: 64, height: 64, borderRadius: 999, background: 'var(--success-bg)', color: 'var(--success)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
              <Icon name="check" size={32} />
            </div>
            <h2 className="serif" style={{ fontSize: 28, marginBottom: 8 }}>Response received</h2>
            <p style={{ color: 'var(--ink-3)', maxWidth: 480, margin: '0 auto 24px' }}>
              Thank you. Your response to <strong>NAM-2026-04183</strong> has been submitted and the assigned case manager has been notified. You'll receive an email confirmation within a few minutes.
            </p>
            <div style={{ background: 'var(--navy-50)', padding: 20, borderRadius: 8, maxWidth: 480, margin: '0 auto 24px', textAlign: 'left' }}>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Want to track this case as it progresses?</div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Create an account to view status, upload documents, and pay invoices online.</div>
              <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                <button className="btn btn-primary btn-sm" onClick={() => navigate('login')}>Create account</button>
                <button className="btn btn-ghost btn-sm" onClick={() => navigate('landing')}>Maybe later</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { LandingPage, LoginPage, RespondentPage });
