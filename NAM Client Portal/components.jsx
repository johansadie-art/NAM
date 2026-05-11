// Shared components for NAM myADR Client Portal

// ---------------- Icons (Lucide paths) ----------------
const ICON_PATHS = {
  home: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10',
  folder: 'M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z',
  file: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8',
  upload: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M17 8l-5-5-5 5 M12 3v12',
  calendar: 'M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z M16 2v4 M8 2v4 M3 10h18',
  bell: 'M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 0 1-3.46 0',
  search: 'M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z M21 21l-4.35-4.35',
  plus: 'M12 5v14 M5 12h14',
  arrowRight: 'M5 12h14 M12 5l7 7-7 7',
  arrowLeft: 'M19 12H5 M12 19l-7-7 7-7',
  chevronRight: 'M9 18l6-6-6-6',
  chevronDown: 'M6 9l6 6 6-6',
  check: 'M20 6 9 17l-5-5',
  x: 'M18 6 6 18 M6 6l12 12',
  alert: 'M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z M12 9v4 M12 17h.01',
  info: 'M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z M12 16v-4 M12 8h.01',
  clock: 'M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z M12 6v6l4 2',
  user: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z',
  users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
  briefcase: 'M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16',
  building: 'M3 21h18 M5 21V7l8-4v18 M19 21V11l-6-4 M9 9h.01 M9 12h.01 M9 15h.01 M9 18h.01',
  scale: 'M16 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z M2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z M7 21h10 M12 3v18 M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2',
  gavel: 'M14 13l-7.5 7.5c-.83.83-2.17.83-3 0s-.83-2.17 0-3L11 10 M16 16l6-6 M8 8l6-6 M9 7l8 8 M21 21H7',
  download: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3',
  externalLink: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6 M15 3h6v6 M10 14L21 3',
  card: 'M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z M1 10h22',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  lock: 'M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z M7 11V7a5 5 0 0 1 10 0v4',
  mail: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M22 6l-10 7L2 6',
  filter: 'M22 3H2l8 9.46V19l4 2v-8.54z',
  more: 'M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z M19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  edit: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7 M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z',
  trash: 'M3 6h18 M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6 M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2',
  link: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71 M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71',
  zoom: 'M23 7l-7 5 7 5V7z M14 5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z',
  send: 'M22 2L11 13 M22 2l-7 20-4-9-9-4 20-7z',
  eye: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  settings: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z',
  logout: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9',
  helpCircle: 'M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3 M12 17h.01',
  refresh: 'M23 4v6h-6 M1 20v-6h6 M3.51 9a9 9 0 0 1 14.85-3.36L23 10 M1 14l4.64 4.36A9 9 0 0 0 20.49 15',
  document: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6',
  archive: 'M21 8v13H3V8 M1 3h22v5H1z M10 12h4',
};

function Icon({ name, size = 16, stroke = 1.75, color = 'currentColor', style = {} }) {
  const d = ICON_PATHS[name];
  if (!d) return null;
  const paths = d.split(' M').map((seg, i) => i === 0 ? seg : 'M' + seg);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
         fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
         style={{ flexShrink: 0, display: 'inline-block', verticalAlign: 'middle', ...style }}>
      {paths.map((p, i) => <path key={i} d={p} />)}
    </svg>
  );
}

// ---------------- NAM Logo (uses uploaded image) ----------------
function NAMLogo({ height = 36 }) {
  return <img src={(typeof window !== 'undefined' && window.__resources && window.__resources.namLogo) || "assets/nam-logo.jpeg"} alt="NAM — National Arbitration and Mediation" style={{ height, width: 'auto', display: 'block', borderRadius: 3 }} />;
}

// ---------------- Status helpers ----------------
const STATUS_MAP = {
  'awaiting-response':    { label: 'Awaiting your response',  variant: 'warning' },
  'awaiting-respondent':  { label: 'Awaiting respondent',     variant: 'muted' },
  'docs-needed':          { label: 'Documents needed',        variant: 'warning' },
  'neutral-selection':    { label: 'Neutral selection open',  variant: 'navy' },
  'hearing-scheduled':    { label: 'Hearing scheduled',       variant: 'navy' },
  'invoice-due':          { label: 'Invoice due',             variant: 'danger' },
  'decision-pending':     { label: 'Decision pending',        variant: 'navy' },
  'decision-released':    { label: 'Decision released',       variant: 'success' },
  'closed':               { label: 'Closed',                  variant: 'muted' },
  'in-progress':          { label: 'In progress',             variant: 'navy' },
};

function StatusBadge({ status, dot = true }) {
  const s = STATUS_MAP[status] || { label: status, variant: 'muted' };
  return (
    <span className={`badge badge-${s.variant}`}>
      {dot && <span className="badge-dot" />}
      {s.label}
    </span>
  );
}

// ---------------- TopNav ----------------
function TopNav({ route, navigate, authed, unread = 3 }) {
  const links = authed ? [
    { id: 'dashboard', label: 'Cases', icon: 'briefcase' },
    { id: 'invoices',  label: 'Invoices', icon: 'card' },
    { id: 'notifications', label: 'Notifications', icon: 'bell' },
  ] : [];

  return (
    <header className="topnav">
      <div className="topnav-brand" onClick={() => navigate(authed ? 'dashboard' : 'landing')}>
        <NAMLogo height={36} />
        <div className="topnav-divider" />
        <div>
          <div className="topnav-product">myADR</div>
          <div className="topnav-product-sub">Client Portal</div>
        </div>
      </div>

      {authed && (
        <nav className="topnav-links">
          {links.map(l => (
            <div key={l.id}
                 className={`topnav-link ${route.startsWith(l.id) ? 'active' : ''}`}
                 onClick={() => navigate(l.id)}>
              <Icon name={l.icon} size={15} />
              {l.label}
            </div>
          ))}
        </nav>
      )}

      <div className="topnav-spacer" />

      {authed ? (
        <>
          <div className="topnav-action" onClick={() => navigate('notifications')} title="Notifications">
            <Icon name="bell" size={18} />
            {unread > 0 && <span className="topnav-notif-dot" />}
          </div>
          <div className="topnav-action" title="Help">
            <Icon name="helpCircle" size={18} />
          </div>
          <div className="topnav-divider" />
          <div className="topnav-action" style={{ paddingRight: 4 }}>
            <div className="avatar" style={{ width: 32, height: 32, fontSize: 12, background: '#fff', color: 'var(--navy)' }}>RM</div>
            <div style={{ lineHeight: 1.15, fontSize: 13 }}>
              <div style={{ fontWeight: 600, color: '#fff' }}>Rachel Morgan</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>Morgan & Pell LLP</div>
            </div>
            <Icon name="chevronDown" size={14} style={{ marginLeft: 4 }} />
          </div>
        </>
      ) : (
        <>
          <div className="topnav-link" onClick={() => navigate('respondent')}>
            Respondent response
          </div>
          <div className="topnav-link" onClick={() => navigate('login')}>
            Sign in
          </div>
          <div className="topnav-cta" onClick={() => navigate('intake')}>
            Submit a case
          </div>
        </>
      )}
    </header>
  );
}

// ---------------- Sub-bar (breadcrumbs) ----------------
function SubNav({ crumbs = [], right }) {
  return (
    <div className="subnav">
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {crumbs.map((c, i) => (
          <React.Fragment key={i}>
            {i > 0 && <Icon name="chevronRight" size={12} className="sep" color="var(--ink-4)" />}
            <span className={`crumb ${i === crumbs.length - 1 ? 'current' : ''}`}
                  style={{ cursor: c.onClick ? 'pointer' : 'default' }}
                  onClick={c.onClick}>
              {c.label}
            </span>
          </React.Fragment>
        ))}
      </div>
      <div style={{ flex: 1 }} />
      {right}
    </div>
  );
}

// ---------------- Avatar ----------------
function Avatar({ name, size = 36, color }) {
  const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  // hash-based palette
  const palettes = [
    { bg: 'var(--navy-100)', fg: 'var(--navy)' },
    { bg: '#F3EAD4', fg: '#6F541F' },
    { bg: '#E0EAE2', fg: '#1F5E3E' },
    { bg: '#EDE0E8', fg: '#7F2F58' },
    { bg: '#E8E4F0', fg: '#3F3576' },
  ];
  const p = palettes[name.charCodeAt(0) % palettes.length];
  return (
    <div className="avatar" style={{
      width: size, height: size, fontSize: size * 0.36,
      background: color?.bg || p.bg, color: color?.fg || p.fg
    }}>{initials}</div>
  );
}

// ---------------- Empty box (placeholder image) ----------------
function PlaceholderBox({ label, height = 120, style = {} }) {
  return (
    <div style={{
      height, background: 'repeating-linear-gradient(135deg, var(--bg-muted), var(--bg-muted) 8px, var(--bg-tray) 8px, var(--bg-tray) 16px)',
      border: '1px dashed var(--stroke-2)',
      borderRadius: 'var(--radius)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'var(--ink-3)', fontSize: 13, fontWeight: 500,
      ...style,
    }}>{label}</div>
  );
}

// ---------------- Toast ----------------
function Toast({ visible, message, onClose }) {
  React.useEffect(() => {
    if (visible) {
      const t = setTimeout(onClose, 3000);
      return () => clearTimeout(t);
    }
  }, [visible]);
  if (!visible) return null;
  return (
    <div style={{
      position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
      background: 'var(--navy)', color: '#fff',
      padding: '12px 18px', borderRadius: 8,
      boxShadow: 'var(--shadow-lg)',
      display: 'flex', alignItems: 'center', gap: 10,
      fontSize: 14, fontWeight: 500,
      zIndex: 100,
      animation: 'fadeUp 200ms ease',
    }}>
      <Icon name="check" size={16} color="var(--gold)" />
      {message}
    </div>
  );
}

Object.assign(window, { Icon, NAMLogo, StatusBadge, TopNav, SubNav, Avatar, PlaceholderBox, Toast, ICON_PATHS, STATUS_MAP });
