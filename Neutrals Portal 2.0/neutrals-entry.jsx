const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
"primaryColor": "#0A264D",
"accentColor": "#B8893A",
"density": "comfortable",
"showOverdue": true,
"sidebarStyle": "navy"
}/*EDITMODE-END*/;

const NAV = [
{ id: "dashboard", label: "Dashboard", icon: "dashboard", group: "Workspace" },
{ id: "cases", label: "My cases", icon: "briefcase", group: "Workspace", badge: 4 },
{ id: "tasks", label: "Pending tasks", icon: "check-square", group: "Workspace", badge: 5, badgeDanger: true },
{ id: "timesheets", label: "Timesheets", icon: "clock", group: "Workspace" },
{ id: "pma", label: "PMA drafting", icon: "file-edit", group: "Workspace" },
{ id: "availability", label: "Availability", icon: "calendar", group: "Schedule" },
{ id: "documents", label: "Documents", icon: "folder", group: "Schedule" },
{ id: "notifications", label: "Notifications", icon: "bell", group: "Account", badge: 3 },
{ id: "profile", label: "Profile", icon: "user", group: "Account" },
];

function App() {
const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
const [authed, setAuthed] = React.useState(true);
const [route, setRoute] = React.useState({ page: "dashboard", id: null });

React.useEffect(() => {
  const root = document.documentElement;
  root.style.setProperty("--primary", t.primaryColor);
  root.style.setProperty("--nam-gold", t.accentColor);
}, [t.primaryColor, t.accentColor]);

const go = (page, id = null) => {
  setRoute({ page, id });
  window.scrollTo({ top: 0 });
};

if (!authed) return <LoginPage onLogin={() => setAuthed(true)}/>;

const groups = {};
NAV.forEach(n => { (groups[n.group] = groups[n.group] || []).push(n); });

const current = NAV.find(n => n.id === route.page);
const titleMap = {
  "case": "Case detail",
};

return (
  <div className="app">
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="nam-sidebar-logo-row">
          <img className="nam-sidebar-logo-img" src="assets/nam-logo.jpeg" alt="NAM"/>
          <div className="nam-sidebar-logo-meta">
            <div className="nam-sidebar-logo-eyebrow">NP2 · 2.0</div>
            <div className="nam-sidebar-logo-product">Neutrals portal</div>
          </div>
        </div>
      </div>
      {Object.entries(groups).map(([g, items]) => (
        <React.Fragment key={g}>
          <div className="sidebar-section-label">{g}</div>
          <ul className="nav-list">
            {items.map(n => (
              <li key={n.id} className={"nav-item " + (route.page === n.id || (route.page === "case" && n.id === "cases") ? "active" : "")} onClick={() => go(n.id)}>
                <Icon name={n.icon} size={15}/>
                <span>{n.label}</span>
                {n.badge && <span className={"nav-badge " + (n.badgeDanger ? "danger" : "")}>{n.badge}</span>}
              </li>
            ))}
          </ul>
        </React.Fragment>
      ))}
      <div className="sidebar-user">
        <div className="avatar">MC</div>
        <div style={{flex: 1, minWidth: 0}}>
          <div className="who">Hon. Margaret Chen</div>
          <div className="role">Arbitrator · NY, NJ, CT, FL</div>
        </div>
        <button className="icon-btn" style={{color: '#8fa3c2'}} title="Sign out" onClick={() => setAuthed(false)}><Icon name="logout" size={15}/></button>
      </div>
    </aside>

    <main className="main">
      <header className="topbar">
        <div className="crumbs">
          <span>Neutrals Portal</span>
          <Icon name="chevron-right" size={13} className="sep"/>
          <span className="now">{titleMap[route.page] || current?.label || "Page"}</span>
        </div>
        <div className="topbar-spacer"></div>
        <div className="search">
          <Icon name="search" size={14}/>
          <input placeholder="Search cases, tasks, documents"/>
          <span className="kbd">⌘ K</span>
        </div>
        <button className="icon-btn" onClick={() => go("notifications")}>
          <Icon name="bell" size={17}/>
          <span className="dot"></span>
        </button>
        <button className="icon-btn"><Icon name="settings" size={17}/></button>
      </header>

      <div className={"content" + (route.page === "cases" || route.page === "documents" ? " content--cases" : "")}>
        {route.page === "dashboard" && <Dashboard go={go} overdueMode={t.showOverdue}/>}
        {route.page === "cases" && <CasesList go={go}/>}
        {route.page === "case" && <CaseDetail caseId={route.id} go={go}/>}
        {route.page === "tasks" && <TasksPage go={go}/>}
        {route.page === "timesheets" && <TimesheetsPage go={go}/>}
        {route.page === "pma" && <PMAPage go={go}/>}
        {route.page === "availability" && <AvailabilityPage go={go}/>}
        {route.page === "documents" && <CasesList go={go}/>}
        {route.page === "notifications" && <NotificationsPage/>}
        {route.page === "profile" && <ProfilePage/>}
      </div>
    </main>

    <TweaksPanel title="Tweaks">
      <TweakSection title="Brand">
        <TweakColor label="Primary (nav)" value={t.primaryColor} onChange={v => setTweak('primaryColor', v)} options={['#0A264D', '#0F3D7A', '#1E293B', '#3B2F12']}/>
        <TweakColor label="Accent" value={t.accentColor} onChange={v => setTweak('accentColor', v)} options={['#B8893A', '#A33E3E', '#0B7A75', '#5A5A6B']}/>
      </TweakSection>
      <TweakSection title="Demo state">
        <TweakToggle label="Show overdue task alert" value={t.showOverdue} onChange={v => setTweak('showOverdue', v)}/>
      </TweakSection>
    </TweaksPanel>
  </div>
);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
