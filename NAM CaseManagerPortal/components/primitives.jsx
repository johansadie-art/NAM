// ============================================================
// NAM CMS 2.0 — Primitives
// Icons, Buttons, Pills, Avatars, Cards, etc.
// ============================================================

const Icons = {
  // Lucide-style 24x24, 1.75 stroke
  home: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4v-7H10v7H6a2 2 0 0 1-2-2V9zM21 9l-9-7-9 7',
  inbox: 'M22 12h-6l-2 3h-4l-2-3H2 M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z',
  cases: 'M3 7h18v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2 M3 12h18',
  plus: 'M12 5v14 M5 12h14',
  search: 'M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14z M21 21l-4.35-4.35',
  bell: 'M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9 M13.73 21a2 2 0 0 1-3.46 0',
  filter: 'M22 3H2l8 9.46V19l4 2v-8.54L22 3z',
  calendar: 'M8 2v4 M16 2v4 M3 10h18 M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 6v6l4 2',
  alertTriangle: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z M12 9v4 M12 17h.01',
  alertCircle: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 8v4 M12 16h.01',
  check: 'M20 6L9 17l-5-5',
  checkCircle: 'M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3',
  x: 'M18 6L6 18 M6 6l12 12',
  arrowRight: 'M5 12h14 M12 5l7 7-7 7',
  arrowLeft: 'M19 12H5 M12 19l-7-7 7-7',
  chevronDown: 'M6 9l6 6 6-6',
  chevronRight: 'M9 6l6 6-6 6',
  chevronLeft: 'M15 6l-6 6 6 6',
  more: 'M5 12h.01 M12 12h.01 M19 12h.01',
  fileText: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8',
  user: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8z',
  users: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
  building: 'M3 21h18 M5 21V7l8-4v18 M19 21V11l-6-4',
  briefcase: 'M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16',
  upload: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M17 8l-5-5-5 5 M12 3v12',
  download: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3',
  paperclip: 'M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48',
  mail: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M22 6l-10 7L2 6',
  phone: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
  edit: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7 M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z',
  trash: 'M3 6h18 M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2',
  settings: 'M12 1l2.39 2.39a2 2 0 0 0 1.42.59h2.38a2 2 0 0 1 2 2v2.38a2 2 0 0 0 .59 1.42L23 12l-2.39 2.39a2 2 0 0 0-.59 1.42v2.38a2 2 0 0 1-2 2h-2.38a2 2 0 0 0-1.42.59L12 23l-2.39-2.39a2 2 0 0 0-1.42-.59H5.81a2 2 0 0 1-2-2v-2.38a2 2 0 0 0-.59-1.42L1 12l2.22-2.39a2 2 0 0 0 .59-1.42V5.81a2 2 0 0 1 2-2h2.38a2 2 0 0 0 1.42-.59L12 1z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  refresh: 'M23 4v6h-6 M1 20v-6h6 M3.51 9a9 9 0 0 1 14.85-3.36L23 10 M1 14l4.64 4.36A9 9 0 0 0 20.49 15',
  send: 'M22 2L11 13 M22 2l-7 20-4-9-9-4 20-7z',
  pieChart: 'M21.21 15.89A10 10 0 1 1 8 2.83 M22 12A10 10 0 0 0 12 2v10z',
  barChart: 'M12 20V10 M18 20V4 M6 20v-6',
  zap: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  list: 'M8 6h13 M8 12h13 M8 18h13 M3 6h.01 M3 12h.01 M3 18h.01',
  grid: 'M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z',
  flag: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M4 22V15',
  pin: 'M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  link: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71 M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71',
  video: 'M23 7l-7 5 7 5V7z M14 5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z',
  mapPin: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  dollar: 'M12 1v22 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
  circle: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z',
  star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  bookmark: 'M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z',
  archive: 'M21 8v13H3V8 M1 3h22v5H1z M10 12h4',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  eye: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  copy: 'M20 9H11a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2z M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1',
  lock: 'M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z M7 11V7a5 5 0 0 1 10 0v4',
  zoom: 'M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14z M21 21l-4.35-4.35 M11 8v6 M8 11h6',
  command: 'M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z',
  gavel: 'M14 5l5 5 M9 10l5 5 M3 21l3-3 M8 16l3 3 M13 13l-7 7 M9 4l11 11',
};

function Icon({ name, size = 16, stroke = 1.75, className = '', style }) {
  const d = Icons[name];
  if (!d) return null;
  // Path may contain multiple subpaths separated by spaces; split on " M" handled naturally as single d attr
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
         fill="none" stroke="currentColor" strokeWidth={stroke}
         strokeLinecap="round" strokeLinejoin="round"
         className={className} style={{ flexShrink: 0, ...style }}>
      <path d={d} />
    </svg>
  );
}

function Button({ variant = 'outline', size = 'md', icon, iconRight, children, onClick, disabled, type = 'button', style, title }) {
  const cls = `btn btn-${variant} ${size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : ''}`;
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled} title={title} style={style}>
      {icon && <Icon name={icon} size={size === 'sm' ? 13 : 14} />}
      {children}
      {iconRight && <Icon name={iconRight} size={size === 'sm' ? 13 : 14} />}
    </button>
  );
}

function Pill({ tone = 'muted', dot, children, style }) {
  return (
    <span className={`pill pill-${tone}`} style={style}>
      {dot && <span className="pill-dot" />}
      {children}
    </span>
  );
}

function StatusPill({ status }) {
  const s = window.NAM_DATA.statuses[status];
  if (!s) return <Pill tone="muted">{status}</Pill>;
  return <Pill tone={s.color.replace('pill-','')} dot>{s.label}</Pill>;
}

function Avatar({ initials, size = 28, color = 'primary' }) {
  const colors = {
    primary: { bg: '#9e2c2c', fg: '#fff' },
    rust:    { bg: '#b75301', fg: '#fff' },
    cream:   { bg: '#fdf1d4', fg: '#7e5403' },
    accent:  { bg: '#fef2c5', fg: '#7f201f' },
    muted:   { bg: '#e2d8cf', fg: '#56524d' },
    ink:     { bg: '#1b1b1b', fg: '#fef2c5' },
  };
  const c = colors[color] || colors.primary;
  return (
    <div style={{
      width: size, height: size, borderRadius: 999, background: c.bg, color: c.fg,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Libre Baskerville, serif', fontSize: Math.round(size * 0.4),
      fontWeight: 700, flexShrink: 0,
    }}>{initials}</div>
  );
}

// NAM brand mark — uses the uploaded logo
function NAMLogo({ compact }) {
  return (
    <div className="nam-sidebar-logo-row">
      <img
        className="nam-sidebar-logo-img"
        src={window.__resources ? window.__resources.namLogo : "assets/nam-logo.jpeg"}
        alt="NAM"
      />
      {!compact && (
        <div className="nam-sidebar-logo-meta">
          <div className="nam-sidebar-logo-eyebrow">CMS · 2.0</div>
          <div className="nam-sidebar-logo-product">Case manager</div>
        </div>
      )}
    </div>
  );
}

// Toast manager (lightweight)
function ToastStack({ toasts }) {
  return (
    <div className="toast-stack">
      {toasts.map(t => (
        <div key={t.id} className="toast">
          <Icon name={t.icon || 'check'} size={15} style={{ color: '#a8d4a4' }} />
          <div>{t.text}</div>
        </div>
      ))}
    </div>
  );
}

// Modal frame
function Modal({ open, onClose, title, subtitle, width = 540, children, footer }) {
  if (!open) return null;
  return (
    <div className="modal-scrim" onMouseDown={onClose}>
      <div className="modal" style={{ width }} onMouseDown={(e) => e.stopPropagation()}>
        <div style={{ padding: '20px 24px 14px', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <div style={{ flex: 1 }}>
            {title && <div className="title-serif" style={{ fontSize: 22 }}>{title}</div>}
            {subtitle && <div style={{ marginTop: 4, fontSize: 13, color: 'var(--fg-2)' }}>{subtitle}</div>}
          </div>
          <button className="btn btn-ghost btn-sm" onClick={onClose} style={{ padding: 6 }}>
            <Icon name="x" size={16} />
          </button>
        </div>
        <div style={{ padding: '4px 24px 20px' }}>
          {children}
        </div>
        {footer && (
          <div style={{ padding: '14px 24px', background: '#faf6ee', borderTop: '1px solid var(--stroke-1)', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

// Field row
function Field({ label, help, error, children, span }) {
  return (
    <div style={{ gridColumn: span ? `span ${span}` : 'auto' }}>
      <label className="field-label">{label}</label>
      {children}
      {help && !error && <div className="field-help">{help}</div>}
      {error && <div className="field-help" style={{ color: 'var(--destructive)' }}>{error}</div>}
    </div>
  );
}

// Empty state
function EmptyState({ icon = 'inbox', title, body, action }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
      padding: '48px 24px', gap: 8,
    }}>
      <div style={{
        width: 48, height: 48, borderRadius: 999, background: 'var(--muted)',
        color: 'var(--fg-2)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4
      }}>
        <Icon name={icon} size={20} />
      </div>
      <div className="title-serif" style={{ fontSize: 18 }}>{title}</div>
      {body && <div style={{ color: 'var(--fg-2)', fontSize: 13.5, maxWidth: 360 }}>{body}</div>}
      {action && <div style={{ marginTop: 8 }}>{action}</div>}
    </div>
  );
}

// Format helpers
function fmtDate(d) {
  if (!d) return '—';
  const date = typeof d === 'string' ? new Date(d) : d;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
function fmtDateTime(d) {
  if (!d) return '—';
  const date = typeof d === 'string' ? new Date(d) : d;
  const day = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  return `${day} · ${time}`;
}
function fmtTimeAgo(d) {
  const date = typeof d === 'string' ? new Date(d) : d;
  const diffMs = Date.now() - date.getTime();
  const diffH = Math.round(diffMs / 3600000);
  if (diffH < 1) return 'just now';
  if (diffH < 24) return `${diffH}h ago`;
  return `${Math.round(diffH/24)}d ago`;
}
function fmtMoney(n) {
  if (n == null) return '—';
  return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

Object.assign(window, {
  Icon, Button, Pill, StatusPill, Avatar, NAMLogo, ToastStack, Modal, Field, EmptyState,
  fmtDate, fmtDateTime, fmtTimeAgo, fmtMoney,
});
