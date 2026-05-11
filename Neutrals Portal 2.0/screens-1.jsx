// Screens part 1 — Dashboard, Cases list, Case detail, Tasks
const { useState, useMemo } = React;

function StatusBadge({ status }) {
  const map = {
    "active": ["badge-success", "Active"],
    "awaiting-decision": ["badge-warning", "Awaiting Payment"],
    "closed": ["badge-neutral", "Closed"],
    "pre": ["badge-info", "Pre-Hearing"],
  };
  const [cls, label] = map[status] || ["badge-neutral", status];
  return <span className={"badge " + cls}><span className="pip"></span>{label}</span>;
}

function MatterBadge({ matter }) {
  return matter === "arb"
    ? <span className="badge badge-navy">Arbitration</span>
    : <span className="badge badge-gold">Mediation</span>;
}

/** Same interaction pattern as CMS Case List filter dropdowns */
function NpFilterDropdown({ label, value, setValue, options }) {
  return (
    <div className="np-filter-wrap">
      <select className="np-filter-select" value={value} onChange={(e) => setValue(e.target.value)}>
        {options.map(([k, v]) => <option key={k} value={k}>{label}: {v}</option>)}
      </select>
      <span className="np-chevron"><Icon name="chevron-down" size={12} /></span>
    </div>
  );
}

// ===== Dashboard =====
function Dashboard({ go, overdueMode }) {
  const { CASES, TASKS, HEARINGS, NOTIFICATIONS } = window.NPDATA;
  const tasks = overdueMode
    ? TASKS.map(t => t.id === "T-1041" ? { ...t, overdue: true, due: "Overdue · 1d", sla: "Was due yesterday" } : t)
    : TASKS;
  const activeCount = CASES.filter(c => c.status === "active").length;
  const overdueCount = tasks.filter(t => t.overdue).length;

  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Good morning, Hon. Margaret Chen</h1>
          <div className="sub">Monday, May 11, 2026 · You have {overdueCount} overdue {overdueCount === 1 ? "task" : "tasks"} and {HEARINGS.length} upcoming hearings this week.</div>
        </div>
        <div className="page-actions">
          <button className="btn btn-secondary"><Icon name="calendar" size={15}/> Block date</button>
          <button className="btn btn-primary"><Icon name="plus" size={15}/> New timesheet</button>
        </div>
      </div>

      {overdueCount > 0 && (
        <div className="alert alert-danger mb-4">
          <Icon name="alert" size={18} className="icon"/>
          <div>
            <div className="title">{overdueCount} overdue {overdueCount === 1 ? "task needs" : "tasks need"} your attention</div>
            <div className="body">PMA for <strong>Delano v. Riverbend</strong> was due May 9. NAM Case Manager James Park has been notified.</div>
          </div>
          <button className="btn btn-sm btn-danger" onClick={() => go("tasks")}>Review tasks</button>
        </div>
      )}

      <div className="grid g-4 mb-4">
        <div className="card stat">
          <div className="label">Active cases</div>
          <div className="value">{activeCount}</div>
          <div className="delta up">+1 assigned this week</div>
        </div>
        <div className="card stat">
          <div className="label">Pending tasks</div>
          <div className="value">{tasks.filter(t => t.status === "open").length}</div>
          <div className={"delta " + (overdueCount > 0 ? "down" : "")}>{overdueCount} overdue</div>
        </div>
        <div className="card stat">
          <div className="label">Hearings this week</div>
          <div className="value">{HEARINGS.length}</div>
          <div className="delta">2 in-person · 2 Zoom</div>
        </div>
        <div className="card stat">
          <div className="label">Awaiting payment</div>
          <div className="value">$3,375</div>
          <div className="delta">2 timesheets in review</div>
        </div>
      </div>

      <div className="grid g-2x1">
        <div className="col gap-4" style={{display: 'flex'}}>
          {/* My Cases */}
          <div className="card" style={{flex: 1}}>
            <div className="card-head">
              <h3>My active cases</h3>
              <button className="btn btn-ghost btn-sm" onClick={() => go("cases")}>View all <Icon name="arrow-right" size={13}/></button>
            </div>
            <div className="card-body flush">
              <table className="table">
                <thead><tr><th>Case</th><th>Type</th><th>Next hearing</th><th>Status</th></tr></thead>
                <tbody>
                  {CASES.filter(c => c.status === "active").slice(0, 4).map(c => (
                    <tr key={c.id} onClick={() => go("case", c.id)}>
                      <td>
                        <div className="cell-strong">{c.title}</div>
                        <div className="cell-meta">{c.id}</div>
                      </td>
                      <td><MatterBadge matter={c.matter}/></td>
                      <td>
                        <div>{c.nextHearing}</div>
                        <div className="cell-meta">{c.nextHearingTime} · {c.format}</div>
                      </td>
                      <td><StatusBadge status={c.statusLabel === "Pre-Hearing" ? "pre" : c.status}/></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pending tasks */}
          <div className="card">
            <div className="card-head">
              <h3>Pending tasks</h3>
              <button className="btn btn-ghost btn-sm" onClick={() => go("tasks")}>All tasks <Icon name="arrow-right" size={13}/></button>
            </div>
            <div className="card-body flush">
              {tasks.slice(0, 4).map(t => (
                <div key={t.id} className={"task-row " + (t.overdue ? "overdue" : "")} onClick={() => go("tasks")}>
                  <div className="task-icon"><Icon name={t.icon} size={17}/></div>
                  <div className="task-body">
                    <div className="task-title">{t.title}</div>
                    <div className="task-meta">{t.caseId} · {t.sla}</div>
                  </div>
                  <span className={"badge " + (t.overdue ? "badge-danger" : "badge-neutral")}>{t.due}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col gap-4" style={{display: 'flex'}}>
          {/* Upcoming hearings */}
          <div className="card">
            <div className="card-head">
              <h3>Upcoming hearings</h3>
              <button className="btn btn-ghost btn-sm" onClick={() => go("availability")}>Calendar <Icon name="arrow-right" size={13}/></button>
            </div>
            <div className="card-body" style={{display: 'flex', flexDirection: 'column', gap: 10}}>
              {HEARINGS.map((h, i) => (
                <div key={i} className="hearing-card" onClick={() => go("case", h.caseId)}>
                  <div className="hearing-date">
                    <div className="day">{h.date}</div>
                    <div className="mon">{h.month}</div>
                  </div>
                  <div className="hearing-info">
                    <div className="case-no">{h.caseId} · {h.day}</div>
                    <div className="case-title">{h.title}</div>
                    <div className="cell-meta flex-center gap-2" style={{marginTop: 4}}>
                      <Icon name={h.format === "Zoom" ? "video" : "map-pin"} size={12}/>
                      {h.time} · {h.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="card">
            <div className="card-head">
              <h3>Recent activity</h3>
              <button className="btn btn-ghost btn-sm" onClick={() => go("notifications")}>All <Icon name="arrow-right" size={13}/></button>
            </div>
            <div className="card-body flush">
              {NOTIFICATIONS.slice(0, 5).map(n => (
                <div key={n.id} style={{padding: '12px 20px', borderBottom: '1px solid var(--line-2)', display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                  {n.unread && <span style={{width: 7, height: 7, borderRadius: 999, background: 'var(--navy)', marginTop: 7, flexShrink: 0}}></span>}
                  {!n.unread && <span style={{width: 7, marginTop: 7, flexShrink: 0}}></span>}
                  <div style={{flex: 1}}>
                    <div style={{fontSize: 13, fontWeight: n.unread ? 500 : 400}}>{n.title}</div>
                    <div className="cell-meta">{n.desc}</div>
                  </div>
                  <div className="cell-meta" style={{whiteSpace: 'nowrap'}}>{n.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== Cases List — layout + search/filters aligned with CMS Case List =====
function CasesList({ go }) {
  const { CASES } = window.NPDATA;
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [matterFilter, setMatterFilter] = useState("all");
  const [officeFilter, setOfficeFilter] = useState("all");
  const [savedView, setSavedView] = useState("my-open");

  const offices = useMemo(() => {
    const u = [...new Set(CASES.map((c) => c.location).filter(Boolean))].sort();
    return u;
  }, [CASES]);

  const savedViews = useMemo(() => {
    const C = CASES;
    return [
      { id: "my-open", label: "My open cases", count: C.filter((c) => c.status !== "closed").length },
      { id: "hearings-up", label: "Hearings scheduled", count: C.filter((c) => c.nextHearing && c.nextHearing !== "—").length },
      { id: "mediation", label: "Mediation", count: C.filter((c) => c.matter === "med").length },
      { id: "arbitration", label: "Arbitration", count: C.filter((c) => c.matter === "arb").length },
      { id: "closed", label: "Closed / released", count: C.filter((c) => c.status === "closed").length },
    ];
  }, [CASES]);

  const filtered = useMemo(() => {
    return CASES.filter((c) => {
      if (savedView === "my-open" && c.status === "closed") return false;
      if (savedView === "hearings-up" && (c.nextHearing === "—" || !c.nextHearing)) return false;
      if (savedView === "mediation" && c.matter !== "med") return false;
      if (savedView === "arbitration" && c.matter !== "arb") return false;
      if (savedView === "closed" && c.status !== "closed") return false;

      if (statusFilter !== "all" && c.status !== statusFilter) return false;
      if (matterFilter !== "all" && c.matter !== matterFilter) return false;
      if (officeFilter !== "all" && c.location !== officeFilter) return false;

      if (query) {
        const q = query.toLowerCase();
        return (
          c.id.toLowerCase().includes(q) ||
          (c.title && c.title.toLowerCase().includes(q)) ||
          (c.claimant && c.claimant.toLowerCase().includes(q)) ||
          (c.respondent && c.respondent.toLowerCase().includes(q)) ||
          (c.type && c.type.toLowerCase().includes(q)) ||
          (c.caseManager && c.caseManager.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [CASES, savedView, statusFilter, matterFilter, officeFilter, query]);

  const viewLabel = savedViews.find((v) => v.id === savedView)?.label || "Cases";

  const clearFilters = () => {
    setQuery("");
    setSavedView("my-open");
    setStatusFilter("all");
    setMatterFilter("all");
    setOfficeFilter("all");
  };

  return (
    <div className="cases-shell">
      <div className="cases-rail">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 6px 8px" }}>
          <div className="eyebrow">Saved views</div>
          <button type="button" className="btn btn-ghost btn-sm" style={{ padding: 4 }} title="Save view">
            <Icon name="plus" size={13} />
          </button>
        </div>
        <ul className="clean" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {savedViews.map((v) => (
            <li
              key={v.id}
              className={"rail-nav-item " + (savedView === v.id ? "active" : "")}
              onClick={() => {
                setSavedView(v.id);
                setStatusFilter("all");
                setMatterFilter("all");
              }}
            >
              <Icon name="bookmark" size={13} />
              <span style={{ flex: 1, fontSize: 13 }}>{v.label}</span>
              <span className="rail-count">{v.count}</span>
            </li>
          ))}
        </ul>

        <div className="eyebrow" style={{ padding: "20px 6px 8px" }}>
          Quick filters
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {["PMA due this week", "Awaiting payment", "Zoom hearings only", "Panel / tripartite"].map((f) => (
            <div key={f} className="rail-nav-item" style={{ fontSize: 12.5 }}>
              <Icon name="filter" size={12} />
              {f}
            </div>
          ))}
        </div>
      </div>

      <div className="cases-main">
        <div style={{ padding: "24px 28px 16px" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 4 }}>
            <h1 className="title-serif" style={{ fontSize: 28, margin: 0 }}>
              My cases
            </h1>
            <span style={{ fontSize: 13, color: "var(--ink-3)" }}>
              {filtered.length} of {CASES.length}
            </span>
          </div>
          <div style={{ fontSize: 13, color: "var(--ink-3)" }}>
            View:{" "}
            <span style={{ color: "var(--ink)", fontWeight: 500 }}>{viewLabel}</span>
            <span style={{ marginLeft: 8, opacity: 0.85 }}>· synced from CMS 2.0</span>
          </div>
        </div>

        <div style={{ padding: "0 28px 16px", display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
          <div className="np-search-field">
            <Icon name="search" size={14} style={{ color: "var(--ink-3)", flexShrink: 0 }} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by case #, party, matter type, case manager…"
            />
            {query && (
              <button type="button" className="btn btn-ghost btn-sm" style={{ padding: 2 }} onClick={() => setQuery("")} aria-label="Clear search">
                <Icon name="x" size={12} />
              </button>
            )}
          </div>
          <NpFilterDropdown
            label="Status"
            value={statusFilter}
            setValue={setStatusFilter}
            options={[
              ["all", "All statuses"],
              ["active", "Active"],
              ["awaiting-decision", "Awaiting payment"],
              ["closed", "Closed"],
            ]}
          />
          <NpFilterDropdown
            label="Matter"
            value={matterFilter}
            setValue={setMatterFilter}
            options={[
              ["all", "All"],
              ["arb", "Arbitration"],
              ["med", "Mediation"],
            ]}
          />
          <NpFilterDropdown
            label="Office"
            value={officeFilter}
            setValue={setOfficeFilter}
            options={[["all", "All offices"], ...offices.map((o) => [o, o])]}
          />
          <NpFilterDropdown
            label="Neutral"
            value="me"
            setValue={() => {}}
            options={[
              ["me", "M. Chen (me)"],
              ["panel", "My panel"],
              ["all", "Everyone"],
            ]}
          />
          <div style={{ flex: 1, minWidth: 8 }} />
          <button type="button" className="btn btn-ghost btn-sm">
            <Icon name="bookmark" size={13} /> Save view
          </button>
          <button type="button" className="btn btn-secondary btn-sm">
            <Icon name="download" size={13} /> Export
          </button>
        </div>

        <div style={{ padding: "0 28px 40px" }}>
          <div className="card" style={{ padding: 0, overflow: "hidden" }}>
            <table className="data">
              <thead>
                <tr>
                  <th>Case</th>
                  <th>Parties</th>
                  <th>Status</th>
                  <th>Matter</th>
                  <th>Next hearing</th>
                  <th>Open tasks</th>
                  <th style={{ textAlign: "right" }}>Amount</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((c) => {
                  const rowFlag = c.pre ? "row-flag" : "";
                  return (
                    <tr key={c.id} className={rowFlag} onClick={() => go("case", c.id)}>
                      <td>
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, fontWeight: 500 }}>{c.id}</div>
                        <div style={{ fontSize: 13, fontWeight: 500, marginTop: 4 }}>{c.title}</div>
                        <div className="cell-meta">
                          {c.location} · {c.type}
                        </div>
                      </td>
                      <td>
                        <div style={{ fontSize: 13, fontWeight: 500 }}>{c.claimant}</div>
                        <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 2 }}>vs. {c.respondent}</div>
                      </td>
                      <td>
                        <StatusBadge status={c.statusLabel === "Pre-Hearing" ? "pre" : c.status} />
                      </td>
                      <td>
                        <MatterBadge matter={c.matter} />
                      </td>
                      <td>
                        {c.nextHearing !== "—" ? (
                          <>
                            <div style={{ fontSize: 13 }}>{c.nextHearing}</div>
                            <div className="cell-meta">
                              {c.nextHearingTime} · {c.format}
                            </div>
                          </>
                        ) : (
                          <span className="cell-meta">Not scheduled</span>
                        )}
                      </td>
                      <td>
                        {c.tasksOpen > 0 ? (
                          <span className="badge badge-warning">{c.tasksOpen} open</span>
                        ) : (
                          <span className="cell-meta">—</span>
                        )}
                      </td>
                      <td style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 12.5 }}>
                        {c.amountInControversy || "—"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div style={{ padding: "48px 24px", textAlign: "center" }}>
                <Icon name="search" size={28} style={{ color: "var(--ink-4)", marginBottom: 12 }} />
                <div style={{ fontWeight: 600, marginBottom: 8 }}>No cases match this view</div>
                <div style={{ fontSize: 13, color: "var(--ink-3)", marginBottom: 16 }}>Try clearing the search or switching saved view.</div>
                <button type="button" className="btn btn-secondary btn-sm" onClick={clearFilters}>
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== Case Detail =====
function CaseDetail({ caseId, go }) {
  const { CASES, DOCUMENTS, TASKS } = window.NPDATA;
  const c = CASES.find(c => c.id === caseId) || CASES[0];
  const [tab, setTab] = useState("overview");
  const tasksForCase = TASKS.filter(t => t.caseId === c.id);

  return (
    <div>
      <div className="crumbs mb-3">
        <a onClick={() => go("cases")} style={{cursor: 'pointer'}}>My cases</a>
        <Icon name="chevron-right" size={13}/>
        <span className="now">{c.id}</span>
      </div>

      <div className="card mb-4">
        <div style={{padding: '20px 24px'}}>
          <div className="flex-between gap-4" style={{alignItems: 'flex-start'}}>
            <div style={{flex: 1, minWidth: 0}}>
              <div className="flex-center gap-2 mb-2">
                <MatterBadge matter={c.matter}/>
                <StatusBadge status={c.statusLabel === "Pre-Hearing" ? "pre" : c.status}/>
                <span className="badge badge-neutral">{c.type}</span>
              </div>
              <h1 style={{fontSize: 22}}>{c.title}</h1>
              <div className="sub" style={{marginTop: 4}}>{c.id} · Amount in controversy {c.amountInControversy} · Assigned {c.assignedAt}</div>
            </div>
            <div className="page-actions">
              <button className="btn btn-secondary"><Icon name="message" size={14}/> Message NAM</button>
              <button className="btn btn-secondary"><Icon name="download" size={14}/> Export</button>
              {c.matter === "med" && c.status === "active" && <button className="btn btn-primary"><Icon name="file-edit" size={14}/> Draft PMA</button>}
              {c.matter === "arb" && c.status === "active" && <button className="btn btn-primary"><Icon name="gavel" size={14}/> Submit award</button>}
            </div>
          </div>

          <div className="grid g-4 mt-4" style={{gap: 0, gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid var(--line-2)', paddingTop: 16}}>
            <div>
              <div className="cell-meta">Claimant</div>
              <div className="cell-strong" style={{marginTop: 2}}>{c.claimant}</div>
            </div>
            <div>
              <div className="cell-meta">Respondent</div>
              <div className="cell-strong" style={{marginTop: 2}}>{c.respondent}</div>
            </div>
            <div>
              <div className="cell-meta">NAM Case Manager</div>
              <div className="cell-strong" style={{marginTop: 2}}>{c.caseManager}</div>
            </div>
            <div>
              <div className="cell-meta">Office</div>
              <div className="cell-strong" style={{marginTop: 2}}>{c.location}</div>
            </div>
          </div>
        </div>
      </div>

      {c.status === "awaiting-decision" && (
        <div className="alert alert-info mb-4">
          <Icon name="info" size={18} className="icon"/>
          <div style={{flex: 1}}>
            <div className="title">Awaiting payment clearance</div>
            <div className="body">Your submitted PMA is complete. It will be released to parties once NAM receives final payment from the claimant. Estimated release: <strong>May 17, 2026</strong>. You'll be notified automatically.</div>
          </div>
        </div>
      )}

      <div className="tabs">
        {["overview", "documents", "tasks", "timeline"].map(t => (
          <div key={t} className={"tab " + (tab === t ? "active" : "")} onClick={() => setTab(t)}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
            {t === "tasks" && tasksForCase.length > 0 && <span className="badge badge-warning" style={{marginLeft: 6}}>{tasksForCase.length}</span>}
          </div>
        ))}
      </div>

      {tab === "overview" && <CaseOverview c={c}/>}
      {tab === "documents" && <CaseDocuments c={c} docs={DOCUMENTS}/>}
      {tab === "tasks" && <CaseTasks tasks={tasksForCase}/>}
      {tab === "timeline" && <CaseTimeline c={c}/>}
    </div>
  );
}

function CaseOverview({ c }) {
  return (
    <div className="grid g-2x1">
      <div className="col gap-4" style={{display: 'flex'}}>
        <div className="card">
          <div className="card-head"><h3>Hearings</h3><span className="meta">Including pre-hearing conferences</span></div>
          <div className="card-body" style={{display: 'flex', flexDirection: 'column', gap: 10}}>
            {c.pre && (
              <div className="hearing-card">
                <div className="hearing-date" style={{background: '#5A6B85'}}>
                  <div className="day">07</div>
                  <div className="mon">May</div>
                </div>
                <div className="hearing-info">
                  <div className="case-no">Pre-hearing conference · Completed</div>
                  <div className="case-title">Scheduling and discovery scope</div>
                  <div className="cell-meta flex-center gap-2" style={{marginTop: 4}}>
                    <Icon name="video" size={12}/>
                    Zoom · 45 min · with both counsel
                  </div>
                </div>
                <span className="badge badge-neutral">Logged</span>
              </div>
            )}
            <div className="hearing-card">
              <div className="hearing-date">
                <div className="day">{c.nextHearing.split(" ")[1]?.replace(",", "") || "14"}</div>
                <div className="mon">May</div>
              </div>
              <div className="hearing-info">
                <div className="case-no">Main hearing · Upcoming</div>
                <div className="case-title">{c.matter === "arb" ? "Arbitration hearing" : "Mediation session"}</div>
                <div className="cell-meta flex-center gap-2" style={{marginTop: 4}}>
                  <Icon name={c.format === "Zoom" ? "video" : "map-pin"} size={12}/>
                  {c.nextHearingTime} · {c.format} · {c.location}
                </div>
              </div>
              {c.format === "Zoom" && <button className="btn btn-secondary btn-sm">Join Zoom <Icon name="external" size={12}/></button>}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-head"><h3>Recent documents</h3><button className="btn btn-ghost btn-sm">View all <Icon name="arrow-right" size={13}/></button></div>
          <div className="card-body flush">
            {window.NPDATA.DOCUMENTS.slice(0, 4).map((d, i) => (
              <div key={i} className="doc-row">
                <div className={"doc-icon " + d.type}>{d.type.toUpperCase()}</div>
                <div style={{flex: 1, minWidth: 0}}>
                  <div className="cell-strong" style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{d.name}</div>
                  <div className="cell-meta">{d.folder} · {d.uploaded} · {d.size}</div>
                </div>
                <button className="btn btn-ghost btn-sm"><Icon name="eye" size={14}/></button>
                <button className="btn btn-ghost btn-sm"><Icon name="download" size={14}/></button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col gap-4" style={{display: 'flex'}}>
        <div className="card">
          <div className="card-head"><h3>Case manager</h3></div>
          <div className="card-body">
            <div className="flex-center gap-3">
              <div className="avatar" style={{background: 'var(--navy)'}}>ME</div>
              <div>
                <div className="cell-strong">{c.caseManager}</div>
                <div className="cell-meta">{c.location} · Senior Case Manager</div>
              </div>
            </div>
            <div className="divider"></div>
            <button className="btn btn-secondary" style={{width: '100%'}}><Icon name="message" size={14}/> Send message</button>
          </div>
        </div>

        <div className="card">
          <div className="card-head"><h3>Quick actions</h3></div>
          <div className="card-body" style={{display: 'flex', flexDirection: 'column', gap: 8}}>
            <button className="btn btn-secondary" style={{justifyContent: 'flex-start'}}><Icon name="clock" size={14}/> Submit timesheet</button>
            <button className="btn btn-secondary" style={{justifyContent: 'flex-start'}}><Icon name="upload" size={14}/> Upload document</button>
            <button className="btn btn-secondary" style={{justifyContent: 'flex-start'}}><Icon name="edit" size={14}/> Add private note</button>
            <button className="btn btn-secondary" style={{justifyContent: 'flex-start'}}><Icon name="calendar" size={14}/> Reschedule request</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseDocuments({ c, docs }) {
  const [folder, setFolder] = useState("all");
  const filtered = folder === "all" ? docs : docs.filter(d => d.folder === folder);
  return (
    <div className="card">
      <div style={{padding: 16, display: 'flex', gap: 8, alignItems: 'center', borderBottom: '1px solid var(--line-2)'}}>
        <div className="flex gap-2">
          {[["all", "All"], ["Neutral", "Neutral folder"], ["Submitting Party", "Submitting party"], ["Opposing Party", "Opposing party"]].map(([k, l]) => (
            <button key={k} className={"btn btn-sm " + (folder === k ? "btn-primary" : "btn-secondary")} onClick={() => setFolder(k)}>{l}</button>
          ))}
        </div>
        <div style={{flex: 1}}></div>
        <button className="btn btn-secondary btn-sm"><Icon name="upload" size={13}/> Upload</button>
      </div>
      <div className="card-body flush">
        {filtered.map((d, i) => (
          <div key={i} className="doc-row">
            <div className={"doc-icon " + d.type}>{d.type.toUpperCase()}</div>
            <div style={{flex: 1, minWidth: 0}}>
              <div className="cell-strong">{d.name}</div>
              <div className="cell-meta">{d.folder} · Uploaded by {d.by} · {d.uploaded} · {d.size}</div>
            </div>
            <button className="btn btn-ghost btn-sm"><Icon name="eye" size={14}/> Preview</button>
            <button className="btn btn-ghost btn-sm"><Icon name="download" size={14}/></button>
          </div>
        ))}
      </div>
    </div>
  );
}

function CaseTasks({ tasks }) {
  if (tasks.length === 0) return (
    <div className="card"><div className="card-body" style={{textAlign: 'center', padding: '48px 20px', color: 'var(--ink-3)'}}>
      <Icon name="check" size={32} style={{color: 'var(--success)', marginBottom: 12}}/>
      <div style={{fontWeight: 500, color: 'var(--ink)'}}>You're all caught up</div>
      <div className="cell-meta" style={{marginTop: 4}}>No open tasks on this case.</div>
    </div></div>
  );
  return (
    <div className="card">
      <div className="card-body flush">
        {tasks.map(t => (
          <div key={t.id} className={"task-row " + (t.overdue ? "overdue" : "")}>
            <div className="task-icon"><Icon name={t.icon} size={17}/></div>
            <div className="task-body">
              <div className="task-title">{t.title}</div>
              <div className="task-meta">{t.type} · {t.sla}</div>
            </div>
            <span className={"badge " + (t.overdue ? "badge-danger" : "badge-neutral")}>{t.due}</span>
            <button className="btn btn-primary btn-sm">Open</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function CaseTimeline({ c }) {
  const events = [
    { title: "Case assigned to you", meta: c.assignedAt + " · by NAM Selection", done: true },
    { title: "Engagement agreement signed", meta: "Apr 23, 2026 · DocuSign", done: true },
    { title: "Pre-hearing conference held", meta: "May 07, 2026 · 45 min Zoom", done: c.pre },
    { title: "Pre-hearing brief uploaded", meta: "May 09, 2026 · by claimant counsel", done: true },
    { title: c.matter === "arb" ? "Arbitration hearing" : "Mediation session", meta: c.nextHearing + " · " + c.nextHearingTime, done: false },
    { title: c.matter === "arb" ? "Award submitted" : "PMA drafted and submitted", meta: "Pending", done: false },
    { title: "Released to parties", meta: "Awaiting payment clearance", done: false },
  ];
  return (
    <div className="card">
      <div className="card-body">
        <div className="timeline">
          {events.map((e, i) => (
            <div key={i} className={"timeline-item " + (e.done ? "done" : "")}>
              <div className="ti-title" style={{color: e.done ? 'var(--ink)' : 'var(--ink-3)'}}>{e.title}</div>
              <div className="ti-meta">{e.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== Tasks page =====
function TasksPage({ go }) {
  const { TASKS } = window.NPDATA;
  const [tab, setTab] = useState("open");
  const open = TASKS.filter(t => t.status === "open");
  const history = [
    { id: "H-1031", title: "Submit timesheet for Petralia mediation", caseId: "NAM-2025-03991", type: "Timesheet", completed: "May 02, 2026", icon: "clock" },
    { id: "H-1029", title: "Draft PMA for Petralia Family Trust", caseId: "NAM-2025-03991", type: "PMA", completed: "Apr 28, 2026", icon: "file-edit" },
    { id: "H-1025", title: "Sign engagement agreement", caseId: "NAM-2025-04501", type: "DocuSign", completed: "Apr 14, 2026", icon: "edit" },
    { id: "H-1022", title: "Review case materials", caseId: "NAM-2025-04388", type: "Review", completed: "Apr 10, 2026", icon: "folder" },
  ];
  return (
    <div>
      <div className="page-head">
        <div>
          <h1>Pending tasks</h1>
          <div className="sub">Event-driven · tasks appear within seconds of being created in CMS 2.0</div>
        </div>
      </div>
      <div className="tabs">
        <div className={"tab " + (tab === "open" ? "active" : "")} onClick={() => setTab("open")}>Open <span className="badge badge-warning" style={{marginLeft: 6}}>{open.length}</span></div>
        <div className={"tab " + (tab === "history" ? "active" : "")} onClick={() => setTab("history")}>History (90 days)</div>
      </div>
      <div className="card">
        <div className="card-body flush">
          {tab === "open" && open.map(t => (
            <div key={t.id} className={"task-row " + (t.overdue ? "overdue" : "")}>
              <div className="task-icon"><Icon name={t.icon} size={17}/></div>
              <div className="task-body">
                <div className="task-title">{t.title}</div>
                <div className="task-meta">
                  <a onClick={() => go("case", t.caseId)} style={{cursor: 'pointer', color: 'var(--navy)', fontWeight: 500}}>{t.caseId}</a>
                  {" · " + t.type + " · " + t.sla}
                </div>
              </div>
              <span className={"badge " + (t.overdue ? "badge-danger" : "badge-neutral")}>{t.due}</span>
              <button className="btn btn-primary btn-sm">Open</button>
            </div>
          ))}
          {tab === "history" && history.map(t => (
            <div key={t.id} className="task-row" style={{opacity: 0.85}}>
              <div className="task-icon" style={{background: 'var(--success-bg)', color: 'var(--success)'}}><Icon name="check" size={17}/></div>
              <div className="task-body">
                <div className="task-title">{t.title}</div>
                <div className="task-meta">{t.caseId} · {t.type} · Completed {t.completed}</div>
              </div>
              <span className="badge badge-success">Completed</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Dashboard, CasesList, CaseDetail, TasksPage, StatusBadge, MatterBadge });
