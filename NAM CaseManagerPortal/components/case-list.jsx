// ============================================================
// NAM CMS 2.0 — Case List
// ============================================================

function CaseList({ onOpenCase, query: globalQuery }) {
  const D = window.NAM_DATA;
  const [query, setQuery] = React.useState(globalQuery || '');
  const [statusFilter, setStatusFilter] = React.useState('all');
  const [matterFilter, setMatterFilter] = React.useState('all');
  const [savedView, setSavedView] = React.useState('my-active');
  const [selected, setSelected] = React.useState(new Set());

  const savedViews = [
    { id: 'my-active', label: 'My active cases', count: 6, default: true },
    { id: 'new-unactioned', label: 'New & unactioned', count: 2, urgent: true },
    { id: 'ny-flagged', label: 'New York · flagged', count: 5 },
    { id: 'on-hold', label: 'On hold (SLA at risk)', count: 1 },
    { id: 'closed-q1', label: 'Closed · Q1 2026', count: 24 },
  ];

  const filtered = D.cases.filter(c => {
    if (savedView === 'new-unactioned' && !c.flags.includes('unactioned-48h')) return false;
    if (savedView === 'ny-flagged' && !c.flags.includes('ny')) return false;
    if (savedView === 'on-hold' && c.status !== 'on-hold') return false;
    if (savedView === 'closed-q1' && c.status !== 'closed') return false;
    if (savedView === 'my-active' && (c.status === 'closed')) return false;

    if (statusFilter !== 'all' && c.status !== statusFilter) return false;
    if (matterFilter !== 'all' && c.matter !== matterFilter) return false;
    if (query) {
      const q = query.toLowerCase();
      return c.id.toLowerCase().includes(q) ||
             c.claimant.toLowerCase().includes(q) ||
             c.respondent.toLowerCase().includes(q) ||
             c.claimNumber.toLowerCase().includes(q);
    }
    return true;
  });

  const toggleSel = (id) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id); else next.add(id);
    setSelected(next);
  };

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      {/* Saved views rail */}
      <div style={{ width: 220, background: '#fafaf8', borderRight: '1px solid var(--stroke-1)', padding: '20px 14px', overflowY: 'auto', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 6px 8px' }}>
          <div className="eyebrow">Saved views</div>
          <button className="btn btn-ghost btn-sm" style={{ padding: 4 }}><Icon name="plus" size={13} /></button>
        </div>
        <ul className="clean">
          {savedViews.map(v => (
            <li key={v.id} className={`nav-row ${savedView === v.id ? 'active' : ''}`}
                onClick={() => { setSavedView(v.id); setStatusFilter('all'); setMatterFilter('all'); }}>
              <Icon name={v.urgent ? 'flag' : 'bookmark'} size={13} />
              <span style={{ flex: 1, fontSize: 13 }}>{v.label}</span>
              <span className="nav-count">{v.count}</span>
            </li>
          ))}
        </ul>

        <div className="eyebrow" style={{ padding: '20px 6px 8px' }}>Quick filters</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {['Adjuster follow-up', 'Awaiting DRA', 'Pending neutral selection', 'Date hold expiring'].map(f => (
            <div key={f} className="nav-row" style={{ padding: '6px 10px', fontSize: 12.5 }}>
              <Icon name="filter" size={12} />
              {f}
            </div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflow: 'auto' }}>
        <div style={{ padding: '24px 28px 16px' }}>
          <div className="row gap-3" style={{ marginBottom: 4 }}>
            <h1 className="title-serif" style={{ fontSize: 28 }}>Cases</h1>
            <span style={{ fontSize: 13, color: 'var(--fg-2)' }}>{filtered.length} of {D.cases.length}</span>
          </div>
          <div style={{ fontSize: 13, color: 'var(--fg-2)' }}>
            View: <span style={{ color: 'var(--fg-1)', fontWeight: 500 }}>{savedViews.find(v => v.id === savedView)?.label}</span>
          </div>
        </div>

        {/* Filter bar */}
        <div style={{ padding: '0 28px 16px', display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: '#fff', border: '1px solid var(--stroke-2)', borderRadius: 6,
            padding: '5px 11px', minWidth: 320,
          }}>
            <Icon name="search" size={14} style={{ color: 'var(--fg-2)' }} />
            <input value={query} onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by case #, party, claim #, adjuster…"
              style={{ border: 0, outline: 'none', fontFamily: 'inherit', fontSize: 13, background: 'transparent', flex: 1 }} />
            {query && <button className="btn btn-ghost btn-sm" style={{ padding: 2 }} onClick={() => setQuery('')}><Icon name="x" size={12} /></button>}
          </div>
          <FilterDropdown label="Status" value={statusFilter} setValue={setStatusFilter}
            options={[['all','All statuses'], ...Object.entries(D.statuses).map(([k,v]) => [k, v.label])]} />
          <FilterDropdown label="Matter" value={matterFilter} setValue={setMatterFilter}
            options={[['all','All'],['Arbitration','Arbitration'],['Mediation','Mediation']]} />
          <FilterDropdown label="Case manager" value="me" setValue={() => {}} options={[['me','J. Avery (me)'],['team','My team'],['all','Everyone']]} />
          <FilterDropdown label="County" value="all" setValue={() => {}} options={[['all','All counties'],['ny','New York'],['queens','Queens'],['kings','Kings'],['nassau','Nassau']]} />
          <div style={{ flex: 1 }} />
          {selected.size > 0 ? (
            <>
              <span style={{ fontSize: 12.5, color: 'var(--fg-2)' }}>{selected.size} selected</span>
              <Button variant="outline" size="sm" icon="user">Reassign</Button>
              <Button variant="outline" size="sm" icon="refresh">Bulk status</Button>
              <Button variant="outline" size="sm" icon="download">Export</Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" icon="bookmark">Save view</Button>
              <Button variant="outline" size="sm" icon="download">Export</Button>
            </>
          )}
        </div>

        {/* Table */}
        <div style={{ padding: '0 28px 40px' }}>
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <table className="data">
              <thead>
                <tr>
                  <th style={{ width: 32, paddingLeft: 18 }}>
                    <input type="checkbox" checked={selected.size === filtered.length && filtered.length > 0}
                           onChange={(e) => setSelected(e.target.checked ? new Set(filtered.map(c => c.id)) : new Set())} />
                  </th>
                  <th>Case</th>
                  <th>Parties</th>
                  <th>Status</th>
                  <th>Matter</th>
                  <th>Next hearing</th>
                  <th>Last activity</th>
                  <th style={{ textAlign: 'right' }}>Amount</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(c => {
                  const ny = c.flags.includes('ny');
                  const unaction = c.flags.includes('unactioned-48h');
                  return (
                    <tr key={c.id} className={ny ? 'row-flag' : ''} onClick={() => onOpenCase(c.id)}>
                      <td style={{ paddingLeft: 18 }} onClick={(e) => e.stopPropagation()}>
                        <input type="checkbox" checked={selected.has(c.id)} onChange={() => toggleSel(c.id)} />
                      </td>
                      <td>
                        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 12.5, fontWeight: 500 }}>{c.id}</div>
                        <div style={{ fontSize: 11.5, color: 'var(--fg-2)', marginTop: 2 }}>{c.county}, {c.state} · {c.voluntary ? 'Voluntary' : 'Contractual'}</div>
                      </td>
                      <td>
                        <div style={{ fontSize: 13, fontWeight: 500 }}>{c.claimant}</div>
                        <div style={{ fontSize: 12, color: 'var(--fg-2)', marginTop: 2 }}>vs. {c.respondent}</div>
                      </td>
                      <td>
                        <div className="row gap-2">
                          <StatusPill status={c.status} />
                          {unaction && <Pill tone="amber" dot>48h+</Pill>}
                        </div>
                      </td>
                      <td><Pill tone="muted">{c.matter}</Pill></td>
                      <td>
                        {c.nextHearing ? (
                          <div>
                            <div style={{ fontSize: 13 }}>{fmtDate(c.nextHearing)}</div>
                            <div style={{ fontSize: 11.5, color: 'var(--fg-2)', fontFamily: 'IBM Plex Mono, monospace' }}>{new Date(c.nextHearing).toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit'})}</div>
                          </div>
                        ) : (
                          <span style={{ fontSize: 12, color: 'var(--fg-2)' }}>Not scheduled</span>
                        )}
                      </td>
                      <td style={{ fontSize: 12.5, color: 'var(--fg-2)' }}>{fmtTimeAgo(c.lastActivity)}</td>
                      <td style={{ textAlign: 'right', fontFamily: 'IBM Plex Mono, monospace', fontSize: 12.5 }}>
                        {c.amountInDispute ? fmtMoney(c.amountInDispute) : '—'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <EmptyState icon="search" title="No cases match this view"
                body="Try clearing the search or switching to All cases."
                action={<Button variant="outline" onClick={() => { setQuery(''); setSavedView('my-active'); }}>Clear filters</Button>} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterDropdown({ label, value, setValue, options }) {
  const cur = options.find(o => o[0] === value);
  return (
    <div style={{ position: 'relative' }}>
      <select value={value} onChange={(e) => setValue(e.target.value)}
        style={{
          appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none',
          background: '#fff', border: '1px solid var(--stroke-2)', borderRadius: 6,
          padding: '5px 28px 5px 11px', fontSize: 13, fontFamily: 'inherit',
          color: 'var(--fg-1)', cursor: 'pointer', outline: 'none',
        }}>
        {options.map(([k, v]) => <option key={k} value={k}>{label}: {v}</option>)}
      </select>
      <div style={{ position: 'absolute', right: 9, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--fg-2)' }}>
        <Icon name="chevronDown" size={12} />
      </div>
    </div>
  );
}

Object.assign(window, { CaseList });
