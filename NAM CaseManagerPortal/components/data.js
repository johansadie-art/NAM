// ============================================================
// NAM CMS 2.0 — Mock data for the prototype
// ============================================================

window.NAM_DATA = (function () {
  // ---------------- Users ----------------
  const users = {
    me: { id: 'u_me', name: 'Jordan Avery', initials: 'JA', role: 'PI Case Manager', email: 'j.avery@nam-cms.example' },
    sup: { id: 'u_sup', name: 'Mira Donato', initials: 'MD', role: 'Supervisor, Client Services' },
    ae:  { id: 'u_ae',  name: 'Chris Ulan', initials: 'CU', role: 'Account Executive' },
    sched: { id: 'u_sc', name: 'Tess Park', initials: 'TP', role: 'Scheduling Coordinator' },
    fin:  { id: 'u_fin', name: 'Sara Ng',   initials: 'SN', role: 'Finance' },
  };

  // ---------------- Cases ----------------
  // status: new | open | scheduled | hearing | adjourned | settled | closed | on-hold
  const cases = [
    {
      id: 'NAM-PI-204871',
      type: 'PI', matter: 'Arbitration', voluntary: true,
      status: 'new', flags: ['ny', 'unactioned-48h'],
      claimant: 'Acme Holdings LLC',
      respondent: 'Pinecrest Insurance Co.',
      claimNumber: 'PNC-2026-31418',
      adjuster: 'M. Calderón',
      cm: users.me.id, ae: users.ae.id,
      opened: '2026-05-05', lastActivity: '2026-05-06',
      nextHearing: null,
      amountInDispute: 84500,
      county: 'New York', state: 'NY',
      intakeComplete: 0.65,
      missing: ['Adjuster phone', 'Claim filed date', 'Counsel email'],
    },
    {
      id: 'NAM-PI-204760',
      type: 'PI', matter: 'Arbitration', voluntary: true,
      status: 'scheduled', flags: ['ny'],
      claimant: 'River Bend Apartments',
      respondent: 'Heritage Mutual',
      claimNumber: 'HM-2026-90113',
      adjuster: 'L. Park',
      cm: users.me.id, ae: users.ae.id,
      opened: '2026-04-22', lastActivity: '2026-05-06',
      nextHearing: '2026-05-21T10:00',
      amountInDispute: 142000,
      county: 'Queens', state: 'NY',
      intakeComplete: 1,
    },
    {
      id: 'NAM-PI-204582',
      type: 'PI', matter: 'Mediation', voluntary: false,
      status: 'open', flags: [],
      claimant: 'Beacon Foods, Inc.',
      respondent: 'Anchor Liability Group',
      claimNumber: 'ALG-2026-22810',
      adjuster: 'D. Ortiz',
      cm: users.me.id, ae: users.ae.id,
      opened: '2026-04-09', lastActivity: '2026-05-04',
      nextHearing: '2026-06-02T13:30',
      amountInDispute: 47200,
      county: 'Suffolk', state: 'NY',
      intakeComplete: 1,
    },
    {
      id: 'NAM-PI-204411',
      type: 'PI', matter: 'Arbitration', voluntary: true,
      status: 'on-hold', flags: ['sla-risk'],
      claimant: 'Quincy & Reed PC',
      respondent: 'Maritime Bond Co.',
      claimNumber: 'MBC-2026-00871',
      adjuster: 'J. Cho',
      cm: users.me.id, ae: users.ae.id,
      opened: '2026-03-19', lastActivity: '2026-04-30',
      nextHearing: null,
      amountInDispute: 31800,
      county: 'Bronx', state: 'NY',
      intakeComplete: 1,
    },
    {
      id: 'NAM-PI-204306',
      type: 'PI', matter: 'Arbitration', voluntary: true,
      status: 'hearing', flags: [],
      claimant: 'Sunset Logistics',
      respondent: 'GeoSurety Insurance',
      claimNumber: 'GS-2026-77441',
      adjuster: 'P. Vassilev',
      cm: users.me.id, ae: users.ae.id,
      opened: '2026-02-26', lastActivity: '2026-05-01',
      nextHearing: '2026-05-08T09:30',
      amountInDispute: 96400,
      county: 'New York', state: 'NY',
      intakeComplete: 1,
    },
    {
      id: 'NAM-PI-204129',
      type: 'PI', matter: 'Arbitration', voluntary: false,
      status: 'settled', flags: [],
      claimant: 'Halcyon Property Group',
      respondent: 'Rockford Indemnity',
      claimNumber: 'RI-2026-44910',
      adjuster: 'A. Mensah',
      cm: users.me.id, ae: users.ae.id,
      opened: '2026-01-12', lastActivity: '2026-04-28',
      nextHearing: null,
      amountInDispute: 21000,
      county: 'Kings', state: 'NY',
      intakeComplete: 1,
    },
    {
      id: 'NAM-PI-203998',
      type: 'PI', matter: 'Arbitration', voluntary: true,
      status: 'open', flags: [],
      claimant: 'Ada Birch (pro se)',
      respondent: 'Cedar Valley Insurance',
      claimNumber: 'CV-2026-10208',
      adjuster: 'S. Whitfield',
      cm: users.me.id, ae: users.ae.id,
      opened: '2026-04-30', lastActivity: '2026-05-06',
      nextHearing: '2026-05-30T11:00',
      amountInDispute: 18750,
      county: 'Nassau', state: 'NY',
      intakeComplete: 1,
    },
    {
      id: 'NAM-PI-203845',
      type: 'PI', matter: 'Mediation', voluntary: true,
      status: 'open', flags: ['unactioned-48h'],
      claimant: 'Northwind Carriers',
      respondent: 'Pinecrest Insurance Co.',
      claimNumber: 'PNC-2026-29905',
      adjuster: 'M. Calderón',
      cm: users.me.id, ae: users.ae.id,
      opened: '2026-05-04', lastActivity: '2026-05-04',
      nextHearing: null,
      amountInDispute: 53400,
      county: 'New York', state: 'NY',
      intakeComplete: 0.8,
      missing: ['Claimant counsel'],
    },
    {
      id: 'NAM-PI-203712',
      type: 'PI', matter: 'Arbitration', voluntary: true,
      status: 'closed', flags: [],
      claimant: 'Vista Apartments LLC',
      respondent: 'Heritage Mutual',
      claimNumber: 'HM-2026-22019',
      adjuster: 'L. Park',
      cm: users.me.id, ae: users.ae.id,
      opened: '2025-11-04', lastActivity: '2026-04-21',
      nextHearing: null,
      amountInDispute: 0,
      county: 'Queens', state: 'NY',
      intakeComplete: 1,
    },
  ];

  // ---------------- Tasks (the diary) ----------------
  // Source events drive auto-create / auto-complete
  const tasks = [
    { id: 't_001', case: 'NAM-PI-204871', title: '48-hour intake follow-up: contact respondent counsel',
      owner: users.me.id, due: '2026-05-07T17:00', status: 'overdue',
      sla: '48h', source: 'Intake received · 2026-05-05', linkedEvent: 'intake' },
    { id: 't_002', case: 'NAM-PI-204760', title: 'Confirm hearing with all parties',
      owner: users.me.id, due: '2026-05-08T12:00', status: 'open',
      sla: '24h before hearing', source: 'Hearing scheduled · 2026-05-21', linkedEvent: 'hearing-scheduled' },
    { id: 't_003', case: 'NAM-PI-204411', title: 'Date hold expires today — extend or release',
      owner: users.me.id, due: '2026-05-07T17:00', status: 'open',
      sla: '14 days', source: 'Date hold placed · 2026-04-23', linkedEvent: 'date-hold' },
    { id: 't_004', case: 'NAM-PI-204306', title: 'Send DRA to GeoSurety via DocuSign',
      owner: users.me.id, due: '2026-05-09T17:00', status: 'open',
      sla: '72h', source: 'Hearing scheduled · 2026-05-08', linkedEvent: 'hearing-scheduled' },
    { id: 't_005', case: 'NAM-PI-203845', title: 'Verify claimant counsel — eCourts lookup',
      owner: users.me.id, due: '2026-05-08T17:00', status: 'open',
      sla: '48h', source: 'Intake received · 2026-05-04', linkedEvent: 'intake' },
    { id: 't_006', case: 'NAM-PI-204760', title: 'Adjuster follow-up: signed agreement outstanding',
      owner: users.me.id, due: '2026-05-12T17:00', status: 'open',
      sla: '7 days', source: 'Agreement sent · 2026-05-05', linkedEvent: 'docusign' },
    { id: 't_007', case: 'NAM-PI-204582', title: 'Send mediation pre-statement reminder',
      owner: users.me.id, due: '2026-05-26T12:00', status: 'open',
      sla: '7 days before', source: 'Mediation scheduled · 2026-06-02', linkedEvent: 'hearing-scheduled' },
    { id: 't_008', case: 'NAM-PI-204871', title: 'Capture missing intake fields and re-validate',
      owner: users.me.id, due: '2026-05-08T12:00', status: 'open',
      sla: '24h', source: 'Intake completeness gate · 2026-05-06', linkedEvent: 'intake' },
  ];

  // ---------------- Activity feed ----------------
  const activity = [
    { id: 'a1', case: 'NAM-PI-204871', type: 'intake', text: 'Intake received from Pinecrest Insurance. 3 fields missing.', at: '2026-05-06T08:14', by: users.ae.initials },
    { id: 'a2', case: 'NAM-PI-204760', type: 'hearing', text: 'Hearing scheduled with Hon. R. Calloway · 2026-05-21 10:00 · Zoom', at: '2026-05-06T11:20', by: users.sched.initials },
    { id: 'a3', case: 'NAM-PI-204306', type: 'docusign', text: 'DRA signed by GeoSurety. Status auto-advanced.', at: '2026-05-05T16:42', by: 'system' },
    { id: 'a4', case: 'NAM-PI-204411', type: 'status', text: 'Status changed: Open → On hold. Reason: awaiting respondent counsel.', at: '2026-05-04T15:08', by: users.me.initials },
    { id: 'a5', case: 'NAM-PI-204582', type: 'doc', text: 'Pre-mediation statement uploaded by claimant.', at: '2026-05-04T10:55', by: 'system' },
    { id: 'a6', case: 'NAM-PI-204129', type: 'finance', text: 'Final settlement amount recorded. Invoice generated.', at: '2026-05-03T14:30', by: users.fin.initials },
    { id: 'a7', case: 'NAM-PI-204871', type: 'email', text: 'Email logged: from M. Calderón (Pinecrest). Re: missing claim filed date.', at: '2026-05-06T09:50', by: 'inbox' },
    { id: 'a8', case: 'NAM-PI-204760', type: 'task', text: '48-hour follow-up auto-completed: agreement received.', at: '2026-05-05T18:01', by: 'system' },
  ];

  // ---------------- Hearings ----------------
  const hearings = [
    { id: 'h_001', case: 'NAM-PI-204760', type: 'Arbitration', neutral: 'Hon. R. Calloway',
      date: '2026-05-21T10:00', location: 'Zoom', status: 'confirmed', confirmations: { sent: 4, total: 4 } },
    { id: 'h_002', case: 'NAM-PI-204306', type: 'Arbitration', neutral: 'Hon. P. Marsh',
      date: '2026-05-08T09:30', location: 'NAM Manhattan · Room 4B', status: 'today', confirmations: { sent: 5, total: 5 } },
    { id: 'h_003', case: 'NAM-PI-204582', type: 'Mediation', neutral: 'Hon. T. Bauer',
      date: '2026-06-02T13:30', location: 'Zoom', status: 'confirmed', confirmations: { sent: 3, total: 3 } },
    { id: 'h_004', case: 'NAM-PI-203998', type: 'Arbitration', neutral: 'Hon. M. Yates',
      date: '2026-05-30T11:00', location: 'NAM Long Island · Room 2', status: 'pending-confirmation', confirmations: { sent: 0, total: 4 } },
  ];

  // ---------------- Documents ----------------
  const documents = {
    'NAM-PI-204760': [
      { id: 'd1', name: 'Demand for Arbitration.pdf', type: 'intake', size: '218 KB', uploaded: '2026-04-22', by: users.ae.initials, folder: 'submitting' },
      { id: 'd2', name: 'Signed DRA — Heritage Mutual.pdf', type: 'agreement', size: '142 KB', uploaded: '2026-05-05', by: 'system', folder: 'opposing', docusign: 'completed' },
      { id: 'd3', name: 'Claim file 90113.zip', type: 'evidence', size: '4.8 MB', uploaded: '2026-04-25', by: 'L. Park', folder: 'opposing' },
      { id: 'd4', name: 'Hearing logistics — Zoom invite.pdf', type: 'hearing', size: '38 KB', uploaded: '2026-05-06', by: users.sched.initials, folder: 'neutral' },
      { id: 'd5', name: 'Pre-hearing statement — claimant.docx', type: 'hearing', size: '64 KB', uploaded: '2026-05-04', by: users.ae.initials, folder: 'submitting' },
    ],
    'NAM-PI-204871': [
      { id: 'd1', name: 'Demand for Arbitration.pdf', type: 'intake', size: '156 KB', uploaded: '2026-05-05', by: users.ae.initials, folder: 'submitting' },
      { id: 'd2', name: 'Police report — incident 31418.pdf', type: 'evidence', size: '512 KB', uploaded: '2026-05-05', by: users.ae.initials, folder: 'submitting' },
    ],
  };

  // ---------------- Invoices ----------------
  const invoices = [
    { id: 'INV-2026-04419', case: 'NAM-PI-204760', client: 'Heritage Mutual',
      issued: '2026-05-06', amount: 1850, status: 'pending-review',
      rule: 'NY simultaneous send', warning: null },
    { id: 'INV-2026-04418', case: 'NAM-PI-204306', client: 'GeoSurety Insurance',
      issued: '2026-05-06', amount: 2100, status: 'pending-review', warning: null },
    { id: 'INV-2026-04417', case: 'NAM-PI-204582', client: 'Anchor Liability Group',
      issued: '2026-05-05', amount: 1450, status: 'approved' },
    { id: 'INV-2026-04416', case: 'NAM-PI-204129', client: 'Rockford Indemnity',
      issued: '2026-05-03', amount: 980, status: 'sent', sentVia: 'eBilling · batch 2026-05-04' },
    { id: 'INV-2026-04415', case: 'NAM-PI-203998', client: 'Cedar Valley Insurance',
      issued: '2026-05-02', amount: 1200, status: 'sent', sentVia: 'eBilling · batch 2026-05-03' },
    { id: 'INV-2026-04414', case: 'NAM-PI-204411', client: 'Maritime Bond Co.',
      issued: '2026-04-30', amount: 0, status: 'flagged',
      warning: '$0 invoice — auto-flagged by deletion rule. Review before posting.' },
    { id: 'INV-2026-04413', case: 'NAM-PI-203712', client: 'Heritage Mutual',
      issued: '2026-04-28', amount: 2400, status: 'paid' },
    { id: 'INV-2026-04412', case: 'NAM-PI-204760', client: 'Heritage Mutual',
      issued: '2026-04-27', amount: 750, status: 'overdue', daysOverdue: 10 },
  ];

  // Statuses (and allowed transitions)
  const statuses = {
    new:        { label: 'New',           color: 'pill-amber',  next: ['open', 'on-hold', 'closed'] },
    open:       { label: 'Open',          color: 'pill-cream',  next: ['scheduled', 'on-hold', 'settled', 'closed'] },
    scheduled:  { label: 'Scheduled',     color: 'pill-rust',   next: ['hearing', 'adjourned', 'settled', 'on-hold'] },
    hearing:    { label: 'In hearing',    color: 'pill-primary',next: ['adjourned', 'settled', 'closed'] },
    adjourned:  { label: 'Adjourned',     color: 'pill-muted',  next: ['scheduled', 'settled', 'closed'] },
    'on-hold':  { label: 'On hold',       color: 'pill-muted',  next: ['open', 'closed'] },
    settled:    { label: 'Settled',       color: 'pill-success',next: ['closed'] },
    closed:     { label: 'Closed',        color: 'pill-muted',  next: [] },
  };

  return { users, cases, tasks, activity, hearings, documents, invoices, statuses };
})();
