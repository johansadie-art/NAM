// ============================================================
// NAM CMS 2.0 — Sidebar
// ============================================================

function Sidebar({ active, onNav, counts }) {
  const D = window.NAM_DATA;
  const sections = [
    {
      id: 'work', label: 'Workspace',
      items: [
        { id: 'home',     label: 'Home',          icon: 'home',     count: counts.tasks },
        { id: 'cases',    label: 'Cases',         icon: 'briefcase',count: counts.cases },
        { id: 'tasks',    label: 'My tasks',      icon: 'check',    count: counts.tasks },
        { id: 'inbox',    label: 'Inbox',         icon: 'mail',     count: counts.inbox },
      ],
    },
    {
      id: 'ops', label: 'Operations',
      items: [
        { id: 'scheduling', label: 'Scheduling',  icon: 'calendar' },
        { id: 'finance',    label: 'Finance',     icon: 'dollar' },
        { id: 'reporting',  label: 'Reports',     icon: 'pieChart' },
      ],
    },
    {
      id: 'admin', label: 'System',
      items: [
        { id: 'admin',    label: 'Admin',         icon: 'settings' },
      ],
    },
  ];

  const recentCases = D.cases.slice(0, 4);

  return (
    <aside style={{
      width: 232, minWidth: 232, boxSizing: 'border-box',
      background: 'var(--sidebar)', borderRight: '1px solid var(--sidebar-border)',
      display: 'flex', flexDirection: 'column', height: '100%', flexShrink: 0,
    }}>
      <div style={{ padding: '16px 16px 14px' }}>
        <NAMLogo />
      </div>

      <div style={{ padding: '0 12px 8px' }}>
        <Button variant="primary" icon="plus" size="sm" onClick={() => onNav('intake')}
                style={{ width: '100%', justifyContent: 'center' }}>
          New case
        </Button>
      </div>

      <div style={{ padding: '6px 12px 12px', overflowY: 'auto', flex: 1 }}>
        {sections.map(sec => (
          <div key={sec.id} style={{ marginBottom: 14 }}>
            <div style={{
              padding: '8px 10px 6px',
              fontSize: 10, fontFamily: 'IBM Plex Mono, monospace', letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'var(--fg-2)', fontWeight: 500,
            }}>{sec.label}</div>
            {sec.items.map(it => (
              <div key={it.id}
                   className={`nav-row ${active === it.id ? 'active' : ''}`}
                   onClick={() => onNav(it.id)}>
                <Icon name={it.icon} size={15} />
                <span style={{ flex: 1 }}>{it.label}</span>
                {it.count != null && <span className="nav-count">{it.count}</span>}
              </div>
            ))}
          </div>
        ))}

        <div style={{ marginBottom: 8 }}>
          <div style={{
            padding: '8px 10px 6px',
            fontSize: 10, fontFamily: 'IBM Plex Mono, monospace', letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--fg-2)', fontWeight: 500,
          }}>Recent</div>
          {recentCases.map(c => (
            <div key={c.id}
                 className="nav-row"
                 style={{ padding: '6px 10px' }}
                 onClick={() => onNav(`case:${c.id}`)}>
              <span style={{
                width: 6, height: 6, borderRadius: 999,
                background: c.flags.includes('ny') ? 'var(--primary)' : 'var(--stroke-2)',
              }} />
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11.5, color: 'var(--fg-2)' }}>
                {c.id.replace('NAM-PI-','PI · ')}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '12px 14px', borderTop: '1px solid #163864',
      }}>
        <Avatar initials={D.users.me.initials} size={32} color="primary" />
        <div style={{ flex: 1, lineHeight: 1.2 }}>
          <div style={{ fontSize: 13, fontWeight: 500, color: '#e8eaef' }}>{D.users.me.name}</div>
          <div style={{ fontSize: 11, color: '#8fa3c2' }}>{D.users.me.role}</div>
        </div>
        <Icon name="settings" size={15} style={{ color: '#8fa3c2' }} />
      </div>
    </aside>
  );
}

function TopBar({ onSearch, query, breadcrumb }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 14, padding: '12px 24px',
      borderBottom: '1px solid var(--stroke-1)', background: '#fafaf8',
      height: 56, flexShrink: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--fg-2)' }}>
        {breadcrumb && breadcrumb.map((b, i) => (
          <React.Fragment key={i}>
            {i > 0 && <Icon name="chevronRight" size={12} style={{ color: 'var(--stroke-2)' }} />}
            <span style={{ color: i === breadcrumb.length - 1 ? 'var(--fg-1)' : 'var(--fg-2)', fontWeight: i === breadcrumb.length - 1 ? 500 : 400 }}>{b}</span>
          </React.Fragment>
        ))}
      </div>

      <div style={{ flex: 1 }} />

      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        background: '#fff', border: '1px solid var(--stroke-2)', borderRadius: 6,
        padding: '5px 11px', minWidth: 320,
      }}>
        <Icon name="search" size={14} style={{ color: 'var(--fg-2)' }} />
        <input value={query || ''} onChange={(e) => onSearch && onSearch(e.target.value)}
          placeholder="Search cases, parties, invoices…"
          style={{ border: 0, outline: 'none', fontFamily: 'inherit', fontSize: 13,
                   background: 'transparent', flex: 1, color: 'var(--fg-1)' }} />
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 10.5, color: 'var(--fg-2)',
          padding: '2px 5px', border: '1px solid var(--stroke-2)', borderRadius: 4 }}>⌘K</span>
      </div>

      <button className="btn btn-ghost btn-sm" style={{ padding: 7, position: 'relative' }} title="Notifications">
        <Icon name="bell" size={16} />
        <span style={{ position: 'absolute', top: 5, right: 5, width: 7, height: 7, borderRadius: 999, background: 'var(--primary)' }} />
      </button>

      <Button variant="outline" size="sm" icon="zap">Quick action</Button>
    </div>
  );
}

Object.assign(window, { Sidebar, TopBar });
