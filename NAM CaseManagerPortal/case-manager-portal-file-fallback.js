(() => {
  // ../../../../../../../../private/var/folders/gp/770467ts1q371dts0tw0rpnh0000gn/T/nam-fallback-0yl5be/combined.jsx
  window.NAM_DATA = (function() {
    const users = {
      me: { id: "u_me", name: "Jordan Avery", initials: "JA", role: "PI Case Manager", email: "j.avery@nam-cms.example" },
      sup: { id: "u_sup", name: "Mira Donato", initials: "MD", role: "Supervisor, Client Services" },
      ae: { id: "u_ae", name: "Chris Ulan", initials: "CU", role: "Account Executive" },
      sched: { id: "u_sc", name: "Tess Park", initials: "TP", role: "Scheduling Coordinator" },
      fin: { id: "u_fin", name: "Sara Ng", initials: "SN", role: "Finance" }
    };
    const cases = [
      {
        id: "NAM-PI-204871",
        type: "PI",
        matter: "Arbitration",
        voluntary: true,
        status: "new",
        flags: ["ny", "unactioned-48h"],
        claimant: "Acme Holdings LLC",
        respondent: "Pinecrest Insurance Co.",
        claimNumber: "PNC-2026-31418",
        adjuster: "M. Calder\xF3n",
        cm: users.me.id,
        ae: users.ae.id,
        opened: "2026-05-05",
        lastActivity: "2026-05-06",
        nextHearing: null,
        amountInDispute: 84500,
        county: "New York",
        state: "NY",
        intakeComplete: 0.65,
        missing: ["Adjuster phone", "Claim filed date", "Counsel email"]
      },
      {
        id: "NAM-PI-204760",
        type: "PI",
        matter: "Arbitration",
        voluntary: true,
        status: "scheduled",
        flags: ["ny"],
        claimant: "River Bend Apartments",
        respondent: "Heritage Mutual",
        claimNumber: "HM-2026-90113",
        adjuster: "L. Park",
        cm: users.me.id,
        ae: users.ae.id,
        opened: "2026-04-22",
        lastActivity: "2026-05-06",
        nextHearing: "2026-05-21T10:00",
        amountInDispute: 142e3,
        county: "Queens",
        state: "NY",
        intakeComplete: 1
      },
      {
        id: "NAM-PI-204582",
        type: "PI",
        matter: "Mediation",
        voluntary: false,
        status: "open",
        flags: [],
        claimant: "Beacon Foods, Inc.",
        respondent: "Anchor Liability Group",
        claimNumber: "ALG-2026-22810",
        adjuster: "D. Ortiz",
        cm: users.me.id,
        ae: users.ae.id,
        opened: "2026-04-09",
        lastActivity: "2026-05-04",
        nextHearing: "2026-06-02T13:30",
        amountInDispute: 47200,
        county: "Suffolk",
        state: "NY",
        intakeComplete: 1
      },
      {
        id: "NAM-PI-204411",
        type: "PI",
        matter: "Arbitration",
        voluntary: true,
        status: "on-hold",
        flags: ["sla-risk"],
        claimant: "Quincy & Reed PC",
        respondent: "Maritime Bond Co.",
        claimNumber: "MBC-2026-00871",
        adjuster: "J. Cho",
        cm: users.me.id,
        ae: users.ae.id,
        opened: "2026-03-19",
        lastActivity: "2026-04-30",
        nextHearing: null,
        amountInDispute: 31800,
        county: "Bronx",
        state: "NY",
        intakeComplete: 1
      },
      {
        id: "NAM-PI-204306",
        type: "PI",
        matter: "Arbitration",
        voluntary: true,
        status: "hearing",
        flags: [],
        claimant: "Sunset Logistics",
        respondent: "GeoSurety Insurance",
        claimNumber: "GS-2026-77441",
        adjuster: "P. Vassilev",
        cm: users.me.id,
        ae: users.ae.id,
        opened: "2026-02-26",
        lastActivity: "2026-05-01",
        nextHearing: "2026-05-08T09:30",
        amountInDispute: 96400,
        county: "New York",
        state: "NY",
        intakeComplete: 1
      },
      {
        id: "NAM-PI-204129",
        type: "PI",
        matter: "Arbitration",
        voluntary: false,
        status: "settled",
        flags: [],
        claimant: "Halcyon Property Group",
        respondent: "Rockford Indemnity",
        claimNumber: "RI-2026-44910",
        adjuster: "A. Mensah",
        cm: users.me.id,
        ae: users.ae.id,
        opened: "2026-01-12",
        lastActivity: "2026-04-28",
        nextHearing: null,
        amountInDispute: 21e3,
        county: "Kings",
        state: "NY",
        intakeComplete: 1
      },
      {
        id: "NAM-PI-203998",
        type: "PI",
        matter: "Arbitration",
        voluntary: true,
        status: "open",
        flags: [],
        claimant: "Ada Birch (pro se)",
        respondent: "Cedar Valley Insurance",
        claimNumber: "CV-2026-10208",
        adjuster: "S. Whitfield",
        cm: users.me.id,
        ae: users.ae.id,
        opened: "2026-04-30",
        lastActivity: "2026-05-06",
        nextHearing: "2026-05-30T11:00",
        amountInDispute: 18750,
        county: "Nassau",
        state: "NY",
        intakeComplete: 1
      },
      {
        id: "NAM-PI-203845",
        type: "PI",
        matter: "Mediation",
        voluntary: true,
        status: "open",
        flags: ["unactioned-48h"],
        claimant: "Northwind Carriers",
        respondent: "Pinecrest Insurance Co.",
        claimNumber: "PNC-2026-29905",
        adjuster: "M. Calder\xF3n",
        cm: users.me.id,
        ae: users.ae.id,
        opened: "2026-05-04",
        lastActivity: "2026-05-04",
        nextHearing: null,
        amountInDispute: 53400,
        county: "New York",
        state: "NY",
        intakeComplete: 0.8,
        missing: ["Claimant counsel"]
      },
      {
        id: "NAM-PI-203712",
        type: "PI",
        matter: "Arbitration",
        voluntary: true,
        status: "closed",
        flags: [],
        claimant: "Vista Apartments LLC",
        respondent: "Heritage Mutual",
        claimNumber: "HM-2026-22019",
        adjuster: "L. Park",
        cm: users.me.id,
        ae: users.ae.id,
        opened: "2025-11-04",
        lastActivity: "2026-04-21",
        nextHearing: null,
        amountInDispute: 0,
        county: "Queens",
        state: "NY",
        intakeComplete: 1
      }
    ];
    const tasks = [
      {
        id: "t_001",
        case: "NAM-PI-204871",
        title: "48-hour intake follow-up: contact respondent counsel",
        owner: users.me.id,
        due: "2026-05-07T17:00",
        status: "overdue",
        sla: "48h",
        source: "Intake received \xB7 2026-05-05",
        linkedEvent: "intake"
      },
      {
        id: "t_002",
        case: "NAM-PI-204760",
        title: "Confirm hearing with all parties",
        owner: users.me.id,
        due: "2026-05-08T12:00",
        status: "open",
        sla: "24h before hearing",
        source: "Hearing scheduled \xB7 2026-05-21",
        linkedEvent: "hearing-scheduled"
      },
      {
        id: "t_003",
        case: "NAM-PI-204411",
        title: "Date hold expires today \u2014 extend or release",
        owner: users.me.id,
        due: "2026-05-07T17:00",
        status: "open",
        sla: "14 days",
        source: "Date hold placed \xB7 2026-04-23",
        linkedEvent: "date-hold"
      },
      {
        id: "t_004",
        case: "NAM-PI-204306",
        title: "Send DRA to GeoSurety via DocuSign",
        owner: users.me.id,
        due: "2026-05-09T17:00",
        status: "open",
        sla: "72h",
        source: "Hearing scheduled \xB7 2026-05-08",
        linkedEvent: "hearing-scheduled"
      },
      {
        id: "t_005",
        case: "NAM-PI-203845",
        title: "Verify claimant counsel \u2014 eCourts lookup",
        owner: users.me.id,
        due: "2026-05-08T17:00",
        status: "open",
        sla: "48h",
        source: "Intake received \xB7 2026-05-04",
        linkedEvent: "intake"
      },
      {
        id: "t_006",
        case: "NAM-PI-204760",
        title: "Adjuster follow-up: signed agreement outstanding",
        owner: users.me.id,
        due: "2026-05-12T17:00",
        status: "open",
        sla: "7 days",
        source: "Agreement sent \xB7 2026-05-05",
        linkedEvent: "docusign"
      },
      {
        id: "t_007",
        case: "NAM-PI-204582",
        title: "Send mediation pre-statement reminder",
        owner: users.me.id,
        due: "2026-05-26T12:00",
        status: "open",
        sla: "7 days before",
        source: "Mediation scheduled \xB7 2026-06-02",
        linkedEvent: "hearing-scheduled"
      },
      {
        id: "t_008",
        case: "NAM-PI-204871",
        title: "Capture missing intake fields and re-validate",
        owner: users.me.id,
        due: "2026-05-08T12:00",
        status: "open",
        sla: "24h",
        source: "Intake completeness gate \xB7 2026-05-06",
        linkedEvent: "intake"
      }
    ];
    const activity = [
      { id: "a1", case: "NAM-PI-204871", type: "intake", text: "Intake received from Pinecrest Insurance. 3 fields missing.", at: "2026-05-06T08:14", by: users.ae.initials },
      { id: "a2", case: "NAM-PI-204760", type: "hearing", text: "Hearing scheduled with Hon. R. Calloway \xB7 2026-05-21 10:00 \xB7 Zoom", at: "2026-05-06T11:20", by: users.sched.initials },
      { id: "a3", case: "NAM-PI-204306", type: "docusign", text: "DRA signed by GeoSurety. Status auto-advanced.", at: "2026-05-05T16:42", by: "system" },
      { id: "a4", case: "NAM-PI-204411", type: "status", text: "Status changed: Open \u2192 On hold. Reason: awaiting respondent counsel.", at: "2026-05-04T15:08", by: users.me.initials },
      { id: "a5", case: "NAM-PI-204582", type: "doc", text: "Pre-mediation statement uploaded by claimant.", at: "2026-05-04T10:55", by: "system" },
      { id: "a6", case: "NAM-PI-204129", type: "finance", text: "Final settlement amount recorded. Invoice generated.", at: "2026-05-03T14:30", by: users.fin.initials },
      { id: "a7", case: "NAM-PI-204871", type: "email", text: "Email logged: from M. Calder\xF3n (Pinecrest). Re: missing claim filed date.", at: "2026-05-06T09:50", by: "inbox" },
      { id: "a8", case: "NAM-PI-204760", type: "task", text: "48-hour follow-up auto-completed: agreement received.", at: "2026-05-05T18:01", by: "system" }
    ];
    const hearings = [
      {
        id: "h_001",
        case: "NAM-PI-204760",
        type: "Arbitration",
        neutral: "Hon. R. Calloway",
        date: "2026-05-21T10:00",
        location: "Zoom",
        status: "confirmed",
        confirmations: { sent: 4, total: 4 }
      },
      {
        id: "h_002",
        case: "NAM-PI-204306",
        type: "Arbitration",
        neutral: "Hon. P. Marsh",
        date: "2026-05-08T09:30",
        location: "NAM Manhattan \xB7 Room 4B",
        status: "today",
        confirmations: { sent: 5, total: 5 }
      },
      {
        id: "h_003",
        case: "NAM-PI-204582",
        type: "Mediation",
        neutral: "Hon. T. Bauer",
        date: "2026-06-02T13:30",
        location: "Zoom",
        status: "confirmed",
        confirmations: { sent: 3, total: 3 }
      },
      {
        id: "h_004",
        case: "NAM-PI-203998",
        type: "Arbitration",
        neutral: "Hon. M. Yates",
        date: "2026-05-30T11:00",
        location: "NAM Long Island \xB7 Room 2",
        status: "pending-confirmation",
        confirmations: { sent: 0, total: 4 }
      }
    ];
    const documents = {
      "NAM-PI-204760": [
        { id: "d1", name: "Demand for Arbitration.pdf", type: "intake", size: "218 KB", uploaded: "2026-04-22", by: users.ae.initials, folder: "submitting" },
        { id: "d2", name: "Signed DRA \u2014 Heritage Mutual.pdf", type: "agreement", size: "142 KB", uploaded: "2026-05-05", by: "system", folder: "opposing", docusign: "completed" },
        { id: "d3", name: "Claim file 90113.zip", type: "evidence", size: "4.8 MB", uploaded: "2026-04-25", by: "L. Park", folder: "opposing" },
        { id: "d4", name: "Hearing logistics \u2014 Zoom invite.pdf", type: "hearing", size: "38 KB", uploaded: "2026-05-06", by: users.sched.initials, folder: "neutral" },
        { id: "d5", name: "Pre-hearing statement \u2014 claimant.docx", type: "hearing", size: "64 KB", uploaded: "2026-05-04", by: users.ae.initials, folder: "submitting" }
      ],
      "NAM-PI-204871": [
        { id: "d1", name: "Demand for Arbitration.pdf", type: "intake", size: "156 KB", uploaded: "2026-05-05", by: users.ae.initials, folder: "submitting" },
        { id: "d2", name: "Police report \u2014 incident 31418.pdf", type: "evidence", size: "512 KB", uploaded: "2026-05-05", by: users.ae.initials, folder: "submitting" }
      ]
    };
    const invoices = [
      {
        id: "INV-2026-04419",
        case: "NAM-PI-204760",
        client: "Heritage Mutual",
        issued: "2026-05-06",
        amount: 1850,
        status: "pending-review",
        rule: "NY simultaneous send",
        warning: null
      },
      {
        id: "INV-2026-04418",
        case: "NAM-PI-204306",
        client: "GeoSurety Insurance",
        issued: "2026-05-06",
        amount: 2100,
        status: "pending-review",
        warning: null
      },
      {
        id: "INV-2026-04417",
        case: "NAM-PI-204582",
        client: "Anchor Liability Group",
        issued: "2026-05-05",
        amount: 1450,
        status: "approved"
      },
      {
        id: "INV-2026-04416",
        case: "NAM-PI-204129",
        client: "Rockford Indemnity",
        issued: "2026-05-03",
        amount: 980,
        status: "sent",
        sentVia: "eBilling \xB7 batch 2026-05-04"
      },
      {
        id: "INV-2026-04415",
        case: "NAM-PI-203998",
        client: "Cedar Valley Insurance",
        issued: "2026-05-02",
        amount: 1200,
        status: "sent",
        sentVia: "eBilling \xB7 batch 2026-05-03"
      },
      {
        id: "INV-2026-04414",
        case: "NAM-PI-204411",
        client: "Maritime Bond Co.",
        issued: "2026-04-30",
        amount: 0,
        status: "flagged",
        warning: "$0 invoice \u2014 auto-flagged by deletion rule. Review before posting."
      },
      {
        id: "INV-2026-04413",
        case: "NAM-PI-203712",
        client: "Heritage Mutual",
        issued: "2026-04-28",
        amount: 2400,
        status: "paid"
      },
      {
        id: "INV-2026-04412",
        case: "NAM-PI-204760",
        client: "Heritage Mutual",
        issued: "2026-04-27",
        amount: 750,
        status: "overdue",
        daysOverdue: 10
      }
    ];
    const statuses = {
      new: { label: "New", color: "pill-amber", next: ["open", "on-hold", "closed"] },
      open: { label: "Open", color: "pill-cream", next: ["scheduled", "on-hold", "settled", "closed"] },
      scheduled: { label: "Scheduled", color: "pill-rust", next: ["hearing", "adjourned", "settled", "on-hold"] },
      hearing: { label: "In hearing", color: "pill-primary", next: ["adjourned", "settled", "closed"] },
      adjourned: { label: "Adjourned", color: "pill-muted", next: ["scheduled", "settled", "closed"] },
      "on-hold": { label: "On hold", color: "pill-muted", next: ["open", "closed"] },
      settled: { label: "Settled", color: "pill-success", next: ["closed"] },
      closed: { label: "Closed", color: "pill-muted", next: [] }
    };
    return { users, cases, tasks, activity, hearings, documents, invoices, statuses };
  })();
  var __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;width:100%;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;
  function useTweaks(defaults) {
    const [values, setValues] = React.useState(defaults);
    const setTweak = React.useCallback((keyOrEdits, val) => {
      const edits = typeof keyOrEdits === "object" && keyOrEdits !== null ? keyOrEdits : { [keyOrEdits]: val };
      setValues((prev) => ({ ...prev, ...edits }));
      window.parent.postMessage({ type: "__edit_mode_set_keys", edits }, "*");
      window.dispatchEvent(new CustomEvent("tweakchange", { detail: edits }));
    }, []);
    return [values, setTweak];
  }
  function TweaksPanel({ title = "Tweaks", noDeckControls = false, children }) {
    const [open, setOpen] = React.useState(false);
    const dragRef = React.useRef(null);
    const hasDeckStage = React.useMemo(
      () => typeof document !== "undefined" && !!document.querySelector("deck-stage"),
      []
    );
    const [railEnabled, setRailEnabled] = React.useState(
      () => hasDeckStage && !!document.querySelector("deck-stage")?._railEnabled
    );
    React.useEffect(() => {
      if (!hasDeckStage || railEnabled) return void 0;
      const onMsg = (e) => {
        if (e.data && e.data.type === "__omelette_rail_enabled") setRailEnabled(true);
      };
      window.addEventListener("message", onMsg);
      return () => window.removeEventListener("message", onMsg);
    }, [hasDeckStage, railEnabled]);
    const [railVisible, setRailVisible] = React.useState(() => {
      try {
        return localStorage.getItem("deck-stage.railVisible") !== "0";
      } catch (e) {
        return true;
      }
    });
    const toggleRail = (on) => {
      setRailVisible(on);
      window.postMessage({ type: "__deck_rail_visible", on }, "*");
    };
    const offsetRef = React.useRef({ x: 16, y: 16 });
    const PAD = 16;
    const clampToViewport = React.useCallback(() => {
      const panel = dragRef.current;
      if (!panel) return;
      const w = panel.offsetWidth, h = panel.offsetHeight;
      const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
      const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
      offsetRef.current = {
        x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
        y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
      };
      panel.style.right = offsetRef.current.x + "px";
      panel.style.bottom = offsetRef.current.y + "px";
    }, []);
    React.useEffect(() => {
      if (!open) return;
      clampToViewport();
      if (typeof ResizeObserver === "undefined") {
        window.addEventListener("resize", clampToViewport);
        return () => window.removeEventListener("resize", clampToViewport);
      }
      const ro = new ResizeObserver(clampToViewport);
      ro.observe(document.documentElement);
      return () => ro.disconnect();
    }, [open, clampToViewport]);
    React.useEffect(() => {
      const onMsg = (e) => {
        const t = e?.data?.type;
        if (t === "__activate_edit_mode") setOpen(true);
        else if (t === "__deactivate_edit_mode") setOpen(false);
      };
      window.addEventListener("message", onMsg);
      window.parent.postMessage({ type: "__edit_mode_available" }, "*");
      return () => window.removeEventListener("message", onMsg);
    }, []);
    const dismiss = () => {
      setOpen(false);
      window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*");
    };
    const onDragStart = (e) => {
      const panel = dragRef.current;
      if (!panel) return;
      const r = panel.getBoundingClientRect();
      const sx = e.clientX, sy = e.clientY;
      const startRight = window.innerWidth - r.right;
      const startBottom = window.innerHeight - r.bottom;
      const move = (ev) => {
        offsetRef.current = {
          x: startRight - (ev.clientX - sx),
          y: startBottom - (ev.clientY - sy)
        };
        clampToViewport();
      };
      const up = () => {
        window.removeEventListener("mousemove", move);
        window.removeEventListener("mouseup", up);
      };
      window.addEventListener("mousemove", move);
      window.addEventListener("mouseup", up);
    };
    if (!open) return null;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("style", null, __TWEAKS_STYLE), /* @__PURE__ */ React.createElement(
      "div",
      {
        ref: dragRef,
        className: "twk-panel",
        "data-noncommentable": "",
        style: { right: offsetRef.current.x, bottom: offsetRef.current.y }
      },
      /* @__PURE__ */ React.createElement("div", { className: "twk-hd", onMouseDown: onDragStart }, /* @__PURE__ */ React.createElement("b", null, title), /* @__PURE__ */ React.createElement(
        "button",
        {
          className: "twk-x",
          "aria-label": "Close tweaks",
          onMouseDown: (e) => e.stopPropagation(),
          onClick: dismiss
        },
        "\u2715"
      )),
      /* @__PURE__ */ React.createElement("div", { className: "twk-body" }, children, hasDeckStage && railEnabled && !noDeckControls && /* @__PURE__ */ React.createElement(TweakSection, { label: "Deck" }, /* @__PURE__ */ React.createElement(TweakToggle, { label: "Thumbnail rail", value: railVisible, onChange: toggleRail })))
    ));
  }
  function TweakSection({ label, children }) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "twk-sect" }, label), children);
  }
  function TweakRow({ label, value, children, inline = false }) {
    return /* @__PURE__ */ React.createElement("div", { className: inline ? "twk-row twk-row-h" : "twk-row" }, /* @__PURE__ */ React.createElement("div", { className: "twk-lbl" }, /* @__PURE__ */ React.createElement("span", null, label), value != null && /* @__PURE__ */ React.createElement("span", { className: "twk-val" }, value)), children);
  }
  function TweakSlider({ label, value, min = 0, max = 100, step = 1, unit = "", onChange }) {
    return /* @__PURE__ */ React.createElement(TweakRow, { label, value: `${value}${unit}` }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "range",
        className: "twk-slider",
        min,
        max,
        step,
        value,
        onChange: (e) => onChange(Number(e.target.value))
      }
    ));
  }
  function TweakToggle({ label, value, onChange }) {
    return /* @__PURE__ */ React.createElement("div", { className: "twk-row twk-row-h" }, /* @__PURE__ */ React.createElement("div", { className: "twk-lbl" }, /* @__PURE__ */ React.createElement("span", null, label)), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        className: "twk-toggle",
        "data-on": value ? "1" : "0",
        role: "switch",
        "aria-checked": !!value,
        onClick: () => onChange(!value)
      },
      /* @__PURE__ */ React.createElement("i", null)
    ));
  }
  function TweakRadio({ label, value, options, onChange }) {
    const trackRef = React.useRef(null);
    const [dragging, setDragging] = React.useState(false);
    const valueRef = React.useRef(value);
    valueRef.current = value;
    const labelLen = (o) => String(typeof o === "object" ? o.label : o).length;
    const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
    const fitsAsSegments = maxLen <= ({ 2: 16, 3: 10 }[options.length] ?? 0);
    if (!fitsAsSegments) {
      const resolve = (s) => {
        const m = options.find((o) => String(typeof o === "object" ? o.value : o) === s);
        return m === void 0 ? s : typeof m === "object" ? m.value : m;
      };
      return /* @__PURE__ */ React.createElement(
        TweakSelect,
        {
          label,
          value,
          options,
          onChange: (s) => onChange(resolve(s))
        }
      );
    }
    const opts = options.map((o) => typeof o === "object" ? o : { value: o, label: o });
    const idx = Math.max(0, opts.findIndex((o) => o.value === value));
    const n = opts.length;
    const segAt = (clientX) => {
      const r = trackRef.current.getBoundingClientRect();
      const inner = r.width - 4;
      const i = Math.floor((clientX - r.left - 2) / inner * n);
      return opts[Math.max(0, Math.min(n - 1, i))].value;
    };
    const onPointerDown = (e) => {
      setDragging(true);
      const v0 = segAt(e.clientX);
      if (v0 !== valueRef.current) onChange(v0);
      const move = (ev) => {
        if (!trackRef.current) return;
        const v = segAt(ev.clientX);
        if (v !== valueRef.current) onChange(v);
      };
      const up = () => {
        setDragging(false);
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", up);
      };
      window.addEventListener("pointermove", move);
      window.addEventListener("pointerup", up);
    };
    return /* @__PURE__ */ React.createElement(TweakRow, { label }, /* @__PURE__ */ React.createElement(
      "div",
      {
        ref: trackRef,
        role: "radiogroup",
        onPointerDown,
        className: dragging ? "twk-seg dragging" : "twk-seg"
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "twk-seg-thumb",
          style: {
            left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
            width: `calc((100% - 4px) / ${n})`
          }
        }
      ),
      opts.map((o) => /* @__PURE__ */ React.createElement("button", { key: o.value, type: "button", role: "radio", "aria-checked": o.value === value }, o.label))
    ));
  }
  function TweakSelect({ label, value, options, onChange }) {
    return /* @__PURE__ */ React.createElement(TweakRow, { label }, /* @__PURE__ */ React.createElement("select", { className: "twk-field", value, onChange: (e) => onChange(e.target.value) }, options.map((o) => {
      const v = typeof o === "object" ? o.value : o;
      const l = typeof o === "object" ? o.label : o;
      return /* @__PURE__ */ React.createElement("option", { key: v, value: v }, l);
    })));
  }
  function TweakText({ label, value, placeholder, onChange }) {
    return /* @__PURE__ */ React.createElement(TweakRow, { label }, /* @__PURE__ */ React.createElement(
      "input",
      {
        className: "twk-field",
        type: "text",
        value,
        placeholder,
        onChange: (e) => onChange(e.target.value)
      }
    ));
  }
  function TweakNumber({ label, value, min, max, step = 1, unit = "", onChange }) {
    const clamp = (n) => {
      if (min != null && n < min) return min;
      if (max != null && n > max) return max;
      return n;
    };
    const startRef = React.useRef({ x: 0, val: 0 });
    const onScrubStart = (e) => {
      e.preventDefault();
      startRef.current = { x: e.clientX, val: value };
      const decimals = (String(step).split(".")[1] || "").length;
      const move = (ev) => {
        const dx = ev.clientX - startRef.current.x;
        const raw = startRef.current.val + dx * step;
        const snapped = Math.round(raw / step) * step;
        onChange(clamp(Number(snapped.toFixed(decimals))));
      };
      const up = () => {
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", up);
      };
      window.addEventListener("pointermove", move);
      window.addEventListener("pointerup", up);
    };
    return /* @__PURE__ */ React.createElement("div", { className: "twk-num" }, /* @__PURE__ */ React.createElement("span", { className: "twk-num-lbl", onPointerDown: onScrubStart }, label), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "number",
        value,
        min,
        max,
        step,
        onChange: (e) => onChange(clamp(Number(e.target.value)))
      }
    ), unit && /* @__PURE__ */ React.createElement("span", { className: "twk-num-unit" }, unit));
  }
  function __twkIsLight(hex) {
    const h = String(hex).replace("#", "");
    const x = h.length === 3 ? h.replace(/./g, (c) => c + c) : h.padEnd(6, "0");
    const n = parseInt(x.slice(0, 6), 16);
    if (Number.isNaN(n)) return true;
    const r = n >> 16 & 255, g = n >> 8 & 255, b = n & 255;
    return r * 299 + g * 587 + b * 114 > 148e3;
  }
  var __TwkCheck = ({ light }) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 14 14", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M3 7.2 5.8 10 11 4.2",
      fill: "none",
      strokeWidth: "2.2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      stroke: light ? "rgba(0,0,0,.78)" : "#fff"
    }
  ));
  function TweakColor({ label, value, options, onChange }) {
    if (!options || !options.length) {
      return /* @__PURE__ */ React.createElement("div", { className: "twk-row twk-row-h" }, /* @__PURE__ */ React.createElement("div", { className: "twk-lbl" }, /* @__PURE__ */ React.createElement("span", null, label)), /* @__PURE__ */ React.createElement(
        "input",
        {
          type: "color",
          className: "twk-swatch",
          value,
          onChange: (e) => onChange(e.target.value)
        }
      ));
    }
    const key = (o) => String(JSON.stringify(o)).toLowerCase();
    const cur = key(value);
    return /* @__PURE__ */ React.createElement(TweakRow, { label }, /* @__PURE__ */ React.createElement("div", { className: "twk-chips", role: "radiogroup" }, options.map((o, i) => {
      const colors = Array.isArray(o) ? o : [o];
      const [hero, ...rest] = colors;
      const sup = rest.slice(0, 4);
      const on = key(o) === cur;
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          key: i,
          type: "button",
          className: "twk-chip",
          role: "radio",
          "aria-checked": on,
          "data-on": on ? "1" : "0",
          "aria-label": colors.join(", "),
          title: colors.join(" \xB7 "),
          style: { background: hero },
          onClick: () => onChange(o)
        },
        sup.length > 0 && /* @__PURE__ */ React.createElement("span", null, sup.map((c, j) => /* @__PURE__ */ React.createElement("i", { key: j, style: { background: c } }))),
        on && /* @__PURE__ */ React.createElement(__TwkCheck, { light: __twkIsLight(hero) })
      );
    })));
  }
  function TweakButton({ label, onClick, secondary = false }) {
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        className: secondary ? "twk-btn secondary" : "twk-btn",
        onClick
      },
      label
    );
  }
  Object.assign(window, {
    useTweaks,
    TweaksPanel,
    TweakSection,
    TweakRow,
    TweakSlider,
    TweakToggle,
    TweakRadio,
    TweakSelect,
    TweakText,
    TweakNumber,
    TweakColor,
    TweakButton
  });
  var Icons = {
    // Lucide-style 24x24, 1.75 stroke
    home: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4v-7H10v7H6a2 2 0 0 1-2-2V9zM21 9l-9-7-9 7",
    inbox: "M22 12h-6l-2 3h-4l-2-3H2 M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
    cases: "M3 7h18v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2 M3 12h18",
    plus: "M12 5v14 M5 12h14",
    search: "M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14z M21 21l-4.35-4.35",
    bell: "M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9 M13.73 21a2 2 0 0 1-3.46 0",
    filter: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z",
    calendar: "M8 2v4 M16 2v4 M3 10h18 M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
    clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 6v6l4 2",
    alertTriangle: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z M12 9v4 M12 17h.01",
    alertCircle: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 8v4 M12 16h.01",
    check: "M20 6L9 17l-5-5",
    checkCircle: "M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3",
    x: "M18 6L6 18 M6 6l12 12",
    arrowRight: "M5 12h14 M12 5l7 7-7 7",
    arrowLeft: "M19 12H5 M12 19l-7-7 7-7",
    chevronDown: "M6 9l6 6 6-6",
    chevronRight: "M9 6l6 6-6 6",
    chevronLeft: "M15 6l-6 6 6 6",
    more: "M5 12h.01 M12 12h.01 M19 12h.01",
    fileText: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8",
    user: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8z",
    users: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
    building: "M3 21h18 M5 21V7l8-4v18 M19 21V11l-6-4",
    briefcase: "M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
    upload: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M17 8l-5-5-5 5 M12 3v12",
    download: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3",
    paperclip: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48",
    mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M22 6l-10 7L2 6",
    phone: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    edit: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7 M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
    trash: "M3 6h18 M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
    settings: "M12 1l2.39 2.39a2 2 0 0 0 1.42.59h2.38a2 2 0 0 1 2 2v2.38a2 2 0 0 0 .59 1.42L23 12l-2.39 2.39a2 2 0 0 0-.59 1.42v2.38a2 2 0 0 1-2 2h-2.38a2 2 0 0 0-1.42.59L12 23l-2.39-2.39a2 2 0 0 0-1.42-.59H5.81a2 2 0 0 1-2-2v-2.38a2 2 0 0 0-.59-1.42L1 12l2.22-2.39a2 2 0 0 0 .59-1.42V5.81a2 2 0 0 1 2-2h2.38a2 2 0 0 0 1.42-.59L12 1z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    refresh: "M23 4v6h-6 M1 20v-6h6 M3.51 9a9 9 0 0 1 14.85-3.36L23 10 M1 14l4.64 4.36A9 9 0 0 0 20.49 15",
    send: "M22 2L11 13 M22 2l-7 20-4-9-9-4 20-7z",
    pieChart: "M21.21 15.89A10 10 0 1 1 8 2.83 M22 12A10 10 0 0 0 12 2v10z",
    barChart: "M12 20V10 M18 20V4 M6 20v-6",
    zap: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
    list: "M8 6h13 M8 12h13 M8 18h13 M3 6h.01 M3 12h.01 M3 18h.01",
    grid: "M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z",
    flag: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M4 22V15",
    pin: "M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    link: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71 M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    video: "M23 7l-7 5 7 5V7z M14 5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",
    mapPin: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    dollar: "M12 1v22 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    circle: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z",
    star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    bookmark: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",
    archive: "M21 8v13H3V8 M1 3h22v5H1z M10 12h4",
    shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    eye: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    copy: "M20 9H11a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2z M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",
    lock: "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z M7 11V7a5 5 0 0 1 10 0v4",
    zoom: "M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14z M21 21l-4.35-4.35 M11 8v6 M8 11h6",
    command: "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z",
    gavel: "M14 5l5 5 M9 10l5 5 M3 21l3-3 M8 16l3 3 M13 13l-7 7 M9 4l11 11"
  };
  function Icon({ name, size = 16, stroke = 1.75, className = "", style }) {
    const d = Icons[name];
    if (!d) return null;
    return /* @__PURE__ */ React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: stroke,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
        style: { flexShrink: 0, ...style }
      },
      /* @__PURE__ */ React.createElement("path", { d })
    );
  }
  function Button({ variant = "outline", size = "md", icon, iconRight, children, onClick, disabled, type = "button", style, title }) {
    const cls = `btn btn-${variant} ${size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : ""}`;
    return /* @__PURE__ */ React.createElement("button", { type, className: cls, onClick, disabled, title, style }, icon && /* @__PURE__ */ React.createElement(Icon, { name: icon, size: size === "sm" ? 13 : 14 }), children, iconRight && /* @__PURE__ */ React.createElement(Icon, { name: iconRight, size: size === "sm" ? 13 : 14 }));
  }
  function Pill({ tone = "muted", dot, children, style }) {
    return /* @__PURE__ */ React.createElement("span", { className: `pill pill-${tone}`, style }, dot && /* @__PURE__ */ React.createElement("span", { className: "pill-dot" }), children);
  }
  function StatusPill({ status }) {
    const s = window.NAM_DATA.statuses[status];
    if (!s) return /* @__PURE__ */ React.createElement(Pill, { tone: "muted" }, status);
    return /* @__PURE__ */ React.createElement(Pill, { tone: s.color.replace("pill-", ""), dot: true }, s.label);
  }
  function Avatar({ initials, size = 28, color = "primary" }) {
    const colors = {
      primary: { bg: "#9e2c2c", fg: "#fff" },
      rust: { bg: "#b75301", fg: "#fff" },
      cream: { bg: "#fdf1d4", fg: "#7e5403" },
      accent: { bg: "#fef2c5", fg: "#7f201f" },
      muted: { bg: "#e2d8cf", fg: "#56524d" },
      ink: { bg: "#1b1b1b", fg: "#fef2c5" }
    };
    const c = colors[color] || colors.primary;
    return /* @__PURE__ */ React.createElement("div", { style: {
      width: size,
      height: size,
      borderRadius: 999,
      background: c.bg,
      color: c.fg,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Libre Baskerville, serif",
      fontSize: Math.round(size * 0.4),
      fontWeight: 700,
      flexShrink: 0
    } }, initials);
  }
  function NAMLogo({ compact }) {
    return /* @__PURE__ */ React.createElement("div", { className: "nam-sidebar-logo-row" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        className: "nam-sidebar-logo-img",
        src: window.__resources ? window.__resources.namLogo : "assets/nam-logo.jpeg",
        alt: "NAM"
      }
    ), !compact && /* @__PURE__ */ React.createElement("div", { className: "nam-sidebar-logo-meta" }, /* @__PURE__ */ React.createElement("div", { className: "nam-sidebar-logo-eyebrow" }, "CMS \xB7 2.0"), /* @__PURE__ */ React.createElement("div", { className: "nam-sidebar-logo-product" }, "Case manager")));
  }
  function ToastStack({ toasts }) {
    return /* @__PURE__ */ React.createElement("div", { className: "toast-stack" }, toasts.map((t) => /* @__PURE__ */ React.createElement("div", { key: t.id, className: "toast" }, /* @__PURE__ */ React.createElement(Icon, { name: t.icon || "check", size: 15, style: { color: "#a8d4a4" } }), /* @__PURE__ */ React.createElement("div", null, t.text))));
  }
  function Modal({ open, onClose, title, subtitle, width = 540, children, footer }) {
    if (!open) return null;
    return /* @__PURE__ */ React.createElement("div", { className: "modal-scrim", onMouseDown: onClose }, /* @__PURE__ */ React.createElement("div", { className: "modal", style: { width }, onMouseDown: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("div", { style: { padding: "20px 24px 14px", display: "flex", alignItems: "flex-start", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, title && /* @__PURE__ */ React.createElement("div", { className: "title-serif", style: { fontSize: 22 } }, title), subtitle && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 4, fontSize: 13, color: "var(--fg-2)" } }, subtitle)), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost btn-sm", onClick: onClose, style: { padding: 6 } }, /* @__PURE__ */ React.createElement(Icon, { name: "x", size: 16 }))), /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 24px 20px" } }, children), footer && /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 24px", background: "#faf6ee", borderTop: "1px solid var(--stroke-1)", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, display: "flex", justifyContent: "flex-end", gap: 8 } }, footer)));
  }
  function Field({ label, help, error, children, span }) {
    return /* @__PURE__ */ React.createElement("div", { style: { gridColumn: span ? `span ${span}` : "auto" } }, /* @__PURE__ */ React.createElement("label", { className: "field-label" }, label), children, help && !error && /* @__PURE__ */ React.createElement("div", { className: "field-help" }, help), error && /* @__PURE__ */ React.createElement("div", { className: "field-help", style: { color: "var(--destructive)" } }, error));
  }
  function EmptyState({ icon = "inbox", title, body, action }) {
    return /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: "48px 24px",
      gap: 8
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 48,
      height: 48,
      borderRadius: 999,
      background: "var(--muted)",
      color: "var(--fg-2)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 4
    } }, /* @__PURE__ */ React.createElement(Icon, { name: icon, size: 20 })), /* @__PURE__ */ React.createElement("div", { className: "title-serif", style: { fontSize: 18 } }, title), body && /* @__PURE__ */ React.createElement("div", { style: { color: "var(--fg-2)", fontSize: 13.5, maxWidth: 360 } }, body), action && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8 } }, action));
  }
  function fmtDate(d) {
    if (!d) return "\u2014";
    const date = typeof d === "string" ? new Date(d) : d;
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }
  function fmtDateTime(d) {
    if (!d) return "\u2014";
    const date = typeof d === "string" ? new Date(d) : d;
    const day = date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    const time = date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
    return `${day} \xB7 ${time}`;
  }
  function fmtTimeAgo(d) {
    const date = typeof d === "string" ? new Date(d) : d;
    const diffMs = Date.now() - date.getTime();
    const diffH = Math.round(diffMs / 36e5);
    if (diffH < 1) return "just now";
    if (diffH < 24) return `${diffH}h ago`;
    return `${Math.round(diffH / 24)}d ago`;
  }
  function fmtMoney(n) {
    if (n == null) return "\u2014";
    return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  }
  Object.assign(window, {
    Icon,
    Button,
    Pill,
    StatusPill,
    Avatar,
    NAMLogo,
    ToastStack,
    Modal,
    Field,
    EmptyState,
    fmtDate,
    fmtDateTime,
    fmtTimeAgo,
    fmtMoney
  });
  function Sidebar({ active, onNav, counts }) {
    const D = window.NAM_DATA;
    const sections = [
      {
        id: "work",
        label: "Workspace",
        items: [
          { id: "home", label: "Home", icon: "home", count: counts.tasks },
          { id: "cases", label: "Cases", icon: "briefcase", count: counts.cases },
          { id: "tasks", label: "My tasks", icon: "check", count: counts.tasks },
          { id: "inbox", label: "Inbox", icon: "mail", count: counts.inbox }
        ]
      },
      {
        id: "ops",
        label: "Operations",
        items: [
          { id: "scheduling", label: "Scheduling", icon: "calendar" },
          { id: "finance", label: "Finance", icon: "dollar" },
          { id: "reporting", label: "Reports", icon: "pieChart" }
        ]
      },
      {
        id: "admin",
        label: "System",
        items: [
          { id: "admin", label: "Admin", icon: "settings" }
        ]
      }
    ];
    const recentCases = D.cases.slice(0, 4);
    return /* @__PURE__ */ React.createElement("aside", { style: {
      width: 232,
      minWidth: 232,
      boxSizing: "border-box",
      background: "var(--sidebar)",
      borderRight: "1px solid var(--sidebar-border)",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      flexShrink: 0
    } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "16px 16px 14px" } }, /* @__PURE__ */ React.createElement(NAMLogo, null)), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 12px 8px" } }, /* @__PURE__ */ React.createElement(
      Button,
      {
        variant: "primary",
        icon: "plus",
        size: "sm",
        onClick: () => onNav("intake"),
        style: { width: "100%", justifyContent: "center" }
      },
      "New case"
    )), /* @__PURE__ */ React.createElement("div", { style: { padding: "6px 12px 12px", overflowY: "auto", flex: 1 } }, sections.map((sec) => /* @__PURE__ */ React.createElement("div", { key: sec.id, style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", { style: {
      padding: "8px 10px 6px",
      fontSize: 10,
      fontFamily: "IBM Plex Mono, monospace",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--fg-2)",
      fontWeight: 500
    } }, sec.label), sec.items.map((it) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: it.id,
        className: `nav-row ${active === it.id ? "active" : ""}`,
        onClick: () => onNav(it.id)
      },
      /* @__PURE__ */ React.createElement(Icon, { name: it.icon, size: 15 }),
      /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }, it.label),
      it.count != null && /* @__PURE__ */ React.createElement("span", { className: "nav-count" }, it.count)
    )))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 8 } }, /* @__PURE__ */ React.createElement("div", { style: {
      padding: "8px 10px 6px",
      fontSize: 10,
      fontFamily: "IBM Plex Mono, monospace",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--fg-2)",
      fontWeight: 500
    } }, "Recent"), recentCases.map((c) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: c.id,
        className: "nav-row",
        style: { padding: "6px 10px" },
        onClick: () => onNav(`case:${c.id}`)
      },
      /* @__PURE__ */ React.createElement("span", { style: {
        width: 6,
        height: 6,
        borderRadius: 999,
        background: c.flags.includes("ny") ? "var(--primary)" : "var(--stroke-2)"
      } }),
      /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "IBM Plex Mono, monospace", fontSize: 11.5, color: "var(--fg-2)" } }, c.id.replace("NAM-PI-", "PI \xB7 "))
    )))), /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 14px",
      borderTop: "1px solid #163864"
    } }, /* @__PURE__ */ React.createElement(Avatar, { initials: D.users.me.initials, size: 32, color: "primary" }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, lineHeight: 1.2 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 500, color: "#e8eaef" } }, D.users.me.name), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#8fa3c2" } }, D.users.me.role)), /* @__PURE__ */ React.createElement(Icon, { name: "settings", size: 15, style: { color: "#8fa3c2" } })));
  }
  function TopBar({ onSearch, query, breadcrumb }) {
    return /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "12px 24px",
      borderBottom: "1px solid var(--stroke-1)",
      background: "#fafaf8",
      height: 56,
      flexShrink: 0
    } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--fg-2)" } }, breadcrumb && breadcrumb.map((b, i) => /* @__PURE__ */ React.createElement(React.Fragment, { key: i }, i > 0 && /* @__PURE__ */ React.createElement(Icon, { name: "chevronRight", size: 12, style: { color: "var(--stroke-2)" } }), /* @__PURE__ */ React.createElement("span", { style: { color: i === breadcrumb.length - 1 ? "var(--fg-1)" : "var(--fg-2)", fontWeight: i === breadcrumb.length - 1 ? 500 : 400 } }, b)))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      background: "#fff",
      border: "1px solid var(--stroke-2)",
      borderRadius: 6,
      padding: "5px 11px",
      minWidth: 320
    } }, /* @__PURE__ */ React.createElement(Icon, { name: "search", size: 14, style: { color: "var(--fg-2)" } }), /* @__PURE__ */ React.createElement(
      "input",
      {
        value: query || "",
        onChange: (e) => onSearch && onSearch(e.target.value),
        placeholder: "Search cases, parties, invoices\u2026",
        style: {
          border: 0,
          outline: "none",
          fontFamily: "inherit",
          fontSize: 13,
          background: "transparent",
          flex: 1,
          color: "var(--fg-1)"
        }
      }
    ), /* @__PURE__ */ React.createElement("span", { style: {
      fontFamily: "IBM Plex Mono, monospace",
      fontSize: 10.5,
      color: "var(--fg-2)",
      padding: "2px 5px",
      border: "1px solid var(--stroke-2)",
      borderRadius: 4
    } }, "\u2318K")), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost btn-sm", style: { padding: 7, position: "relative" }, title: "Notifications" }, /* @__PURE__ */ React.createElement(Icon, { name: "bell", size: 16 }), /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", top: 5, right: 5, width: 7, height: 7, borderRadius: 999, background: "var(--primary)" } })), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", icon: "zap" }, "Quick action"));
  }
  Object.assign(window, { Sidebar, TopBar });
  function Dashboard({ onOpenCase, onNav }) {
    const D = window.NAM_DATA;
    const myTasks = D.tasks.filter((t) => t.owner === D.users.me.id);
    const overdueTasks = myTasks.filter((t) => t.status === "overdue");
    const todayTasks = myTasks.filter((t) => {
      if (t.status === "overdue") return false;
      const due = new Date(t.due);
      const today = /* @__PURE__ */ new Date("2026-05-07");
      return due.toDateString() === today.toDateString();
    });
    const upcomingTasks = myTasks.filter((t) => {
      if (t.status === "overdue") return false;
      const due = new Date(t.due);
      const today = /* @__PURE__ */ new Date("2026-05-07");
      return due > today && due.toDateString() !== today.toDateString();
    });
    const flaggedNY = D.cases.filter((c) => c.flags.includes("ny") && c.status !== "closed" && c.status !== "settled");
    const unactioned = D.cases.filter((c) => c.flags.includes("unactioned-48h"));
    const slaRisk = D.cases.filter((c) => c.flags.includes("sla-risk"));
    const newToday = D.cases.filter((c) => c.status === "new").length;
    const todayHearings = D.hearings.filter((h) => h.status === "today").length;
    const pendingInvoices = D.invoices.filter((i) => i.status === "pending-review" || i.status === "flagged").length;
    return /* @__PURE__ */ React.createElement("div", { style: { padding: "24px 28px 48px", maxWidth: 1320, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 22 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 6 } }, "Thursday \xB7 7 May 2026 \xB7 ", D.users.me.role), /* @__PURE__ */ React.createElement("h1", { className: "title-serif", style: { fontSize: 36 } }, "Good morning, Jordan."), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 6, color: "var(--fg-2)", fontSize: 14, maxWidth: "60ch" } }, overdueTasks.length, " overdue \xB7 ", todayTasks.length, " due today \xB7 ", newToday, " new ", newToday === 1 ? "case" : "cases", " waiting on first action.")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ React.createElement(Button, { variant: "outline", icon: "search", onClick: () => onNav("cases") }, "Search a case"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", icon: "calendar", onClick: () => onNav("scheduling") }, "Schedule hearing"), /* @__PURE__ */ React.createElement(Button, { variant: "primary", icon: "plus", onClick: () => onNav("intake") }, "New case"))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14, marginBottom: 24 } }, /* @__PURE__ */ React.createElement("div", { className: "stat-card" }, /* @__PURE__ */ React.createElement("div", { className: "stat-label" }, "My queue"), /* @__PURE__ */ React.createElement("div", { className: "stat-num" }, myTasks.length), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--fg-2)" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--destructive)", fontWeight: 500 } }, overdueTasks.length, " overdue"), " \xB7 ", todayTasks.length, " today")), /* @__PURE__ */ React.createElement("div", { className: "stat-card" }, /* @__PURE__ */ React.createElement("div", { className: "stat-label" }, "New cases"), /* @__PURE__ */ React.createElement("div", { className: "stat-num" }, newToday), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--fg-2)" } }, unactioned.length, " unactioned 48h+")), /* @__PURE__ */ React.createElement("div", { className: "stat-card" }, /* @__PURE__ */ React.createElement("div", { className: "stat-label" }, "Hearings today"), /* @__PURE__ */ React.createElement("div", { className: "stat-num" }, todayHearings), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--fg-2)" } }, D.hearings.filter((h) => h.status === "pending-confirmation").length, " awaiting confirmation")), /* @__PURE__ */ React.createElement("div", { className: "stat-card" }, /* @__PURE__ */ React.createElement("div", { className: "stat-label" }, "Open invoices"), /* @__PURE__ */ React.createElement("div", { className: "stat-num" }, pendingInvoices), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--fg-2)" } }, D.invoices.filter((i) => i.status === "overdue").length, " past due")), /* @__PURE__ */ React.createElement("div", { className: "stat-card", style: { background: "var(--accent)", borderColor: "#e8d27a" } }, /* @__PURE__ */ React.createElement("div", { className: "stat-label", style: { color: "#7f201f" } }, "Cases on hold"), /* @__PURE__ */ React.createElement("div", { className: "stat-num", style: { color: "#7f201f" } }, slaRisk.length), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "#7f201f" } }, "SLA at risk \u2014 review"))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 24 } }, /* @__PURE__ */ React.createElement("div", { className: "card" }, /* @__PURE__ */ React.createElement("div", { style: { padding: "16px 20px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--stroke-1)" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "title-serif", style: { fontSize: 18 } }, "My queue"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--fg-2)", marginTop: 2 } }, "Tasks owned by you, ordered by SLA. Overdue items auto-roll until resolved.")), /* @__PURE__ */ React.createElement(Button, { variant: "ghost", size: "sm", iconRight: "arrowRight", onClick: () => onNav("tasks") }, "All tasks")), /* @__PURE__ */ React.createElement("div", null, overdueTasks.length > 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 20px 6px", fontSize: 11, fontFamily: "IBM Plex Mono, monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--destructive)", fontWeight: 500 } }, "Overdue \xB7 ", overdueTasks.length), overdueTasks.map((t) => /* @__PURE__ */ React.createElement(TaskRow, { key: t.id, task: t, onOpenCase }))), /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 20px 6px", fontSize: 11, fontFamily: "IBM Plex Mono, monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-2)", fontWeight: 500 } }, "Today \xB7 ", todayTasks.length), todayTasks.map((t) => /* @__PURE__ */ React.createElement(TaskRow, { key: t.id, task: t, onOpenCase })), /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 20px 6px", fontSize: 11, fontFamily: "IBM Plex Mono, monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-2)", fontWeight: 500 } }, "Upcoming \xB7 ", upcomingTasks.length), upcomingTasks.slice(0, 3).map((t) => /* @__PURE__ */ React.createElement(TaskRow, { key: t.id, task: t, onOpenCase })))), /* @__PURE__ */ React.createElement("div", { className: "col gap-5" }, /* @__PURE__ */ React.createElement("div", { className: "card" }, /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 18px 10px", borderBottom: "1px solid var(--stroke-1)", display: "flex", alignItems: "center", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-2" }, /* @__PURE__ */ React.createElement(Icon, { name: "flag", size: 14, style: { color: "var(--primary)" } }), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 600, fontSize: 14 } }, "Flagged cases")), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "var(--fg-2)", fontFamily: "IBM Plex Mono, monospace" } }, "NY \xB7 admin rule")), /* @__PURE__ */ React.createElement("div", null, flaggedNY.slice(0, 4).map((c) => /* @__PURE__ */ React.createElement("div", { key: c.id, className: "hover-row row-flag", style: { padding: "10px 18px", borderBottom: "1px solid var(--stroke-1)" }, onClick: () => onOpenCase(c.id) }, /* @__PURE__ */ React.createElement("div", { className: "row gap-3", style: { alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 500 } }, c.claimant), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11.5, color: "var(--fg-2)", marginTop: 2, fontFamily: "IBM Plex Mono, monospace" } }, c.id, " \xB7 ", c.county)), /* @__PURE__ */ React.createElement(StatusPill, { status: c.status })))))), /* @__PURE__ */ React.createElement("div", { className: "card" }, /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 18px 10px", borderBottom: "1px solid var(--stroke-1)", display: "flex", alignItems: "center", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 600, fontSize: 14 } }, "Recent activity"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "var(--fg-2)", fontFamily: "IBM Plex Mono, monospace" } }, "Last 24h")), /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 18px 10px", maxHeight: 320, overflowY: "auto" } }, D.activity.slice(0, 6).map((a) => /* @__PURE__ */ React.createElement("div", { key: a.id, className: "feed-item", onClick: () => onOpenCase(a.case), style: { cursor: "pointer" } }, /* @__PURE__ */ React.createElement("div", { className: "feed-icon", style: {
      background: a.type === "intake" ? "#fef2c5" : a.type === "hearing" ? "#fde2c8" : a.type === "docusign" ? "#e1edd8" : a.type === "finance" ? "#f8e3e3" : "var(--muted)",
      color: a.type === "intake" ? "#7f201f" : a.type === "hearing" ? "#8f4113" : a.type === "docusign" ? "#4a6b2a" : a.type === "finance" ? "#7a1f1f" : "var(--fg-2)"
    } }, /* @__PURE__ */ React.createElement(Icon, { name: a.type === "intake" ? "inbox" : a.type === "hearing" ? "calendar" : a.type === "docusign" ? "check" : a.type === "finance" ? "dollar" : a.type === "email" ? "mail" : a.type === "doc" ? "fileText" : "refresh", size: 14 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, lineHeight: 1.4 } }, a.text), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--fg-2)", marginTop: 3, fontFamily: "IBM Plex Mono, monospace" } }, a.case.replace("NAM-PI-", "PI \xB7 "), " \xB7 ", fmtTimeAgo(a.at), " \xB7 ", a.by)))))))));
  }
  function TaskRow({ task, onOpenCase }) {
    const D = window.NAM_DATA;
    const c = D.cases.find((x) => x.id === task.case);
    const overdue = task.status === "overdue";
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `hover-row ${overdue ? "row-flag" : ""}`,
        style: { padding: "12px 20px", borderBottom: "1px solid var(--stroke-1)", display: "flex", alignItems: "center", gap: 12 },
        onClick: () => onOpenCase(task.case)
      },
      /* @__PURE__ */ React.createElement("div", { style: {
        width: 18,
        height: 18,
        borderRadius: 4,
        border: `1.5px solid ${overdue ? "var(--destructive)" : "var(--stroke-2)"}`,
        flexShrink: 0
      } }),
      /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13.5, fontWeight: 500 } }, task.title), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11.5, color: "var(--fg-2)", marginTop: 2, fontFamily: "IBM Plex Mono, monospace" } }, c ? c.claimant : "\u2014", " \xB7 ", task.case.replace("NAM-PI-", "PI \xB7 "), " \xB7 ", task.source)),
      /* @__PURE__ */ React.createElement(Pill, { tone: overdue ? "danger" : task.sla.includes("h") ? "amber" : "muted" }, overdue ? "Overdue" : `Due ${fmtDate(task.due)}`)
    );
  }
  Object.assign(window, { Dashboard });
  function CaseList({ onOpenCase, query: globalQuery }) {
    const D = window.NAM_DATA;
    const [query, setQuery] = React.useState(globalQuery || "");
    const [statusFilter, setStatusFilter] = React.useState("all");
    const [matterFilter, setMatterFilter] = React.useState("all");
    const [savedView, setSavedView] = React.useState("my-active");
    const [selected, setSelected] = React.useState(/* @__PURE__ */ new Set());
    const savedViews = [
      { id: "my-active", label: "My active cases", count: 6, default: true },
      { id: "new-unactioned", label: "New & unactioned", count: 2, urgent: true },
      { id: "ny-flagged", label: "New York \xB7 flagged", count: 5 },
      { id: "on-hold", label: "On hold (SLA at risk)", count: 1 },
      { id: "closed-q1", label: "Closed \xB7 Q1 2026", count: 24 }
    ];
    const filtered = D.cases.filter((c) => {
      if (savedView === "new-unactioned" && !c.flags.includes("unactioned-48h")) return false;
      if (savedView === "ny-flagged" && !c.flags.includes("ny")) return false;
      if (savedView === "on-hold" && c.status !== "on-hold") return false;
      if (savedView === "closed-q1" && c.status !== "closed") return false;
      if (savedView === "my-active" && c.status === "closed") return false;
      if (statusFilter !== "all" && c.status !== statusFilter) return false;
      if (matterFilter !== "all" && c.matter !== matterFilter) return false;
      if (query) {
        const q = query.toLowerCase();
        return c.id.toLowerCase().includes(q) || c.claimant.toLowerCase().includes(q) || c.respondent.toLowerCase().includes(q) || c.claimNumber.toLowerCase().includes(q);
      }
      return true;
    });
    const toggleSel = (id) => {
      const next = new Set(selected);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      setSelected(next);
    };
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", height: "100%" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 220, background: "#fafaf8", borderRight: "1px solid var(--stroke-1)", padding: "20px 14px", overflowY: "auto", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 6px 8px" } }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, "Saved views"), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost btn-sm", style: { padding: 4 } }, /* @__PURE__ */ React.createElement(Icon, { name: "plus", size: 13 }))), /* @__PURE__ */ React.createElement("ul", { className: "clean" }, savedViews.map((v) => /* @__PURE__ */ React.createElement(
      "li",
      {
        key: v.id,
        className: `nav-row ${savedView === v.id ? "active" : ""}`,
        onClick: () => {
          setSavedView(v.id);
          setStatusFilter("all");
          setMatterFilter("all");
        }
      },
      /* @__PURE__ */ React.createElement(Icon, { name: v.urgent ? "flag" : "bookmark", size: 13 }),
      /* @__PURE__ */ React.createElement("span", { style: { flex: 1, fontSize: 13 } }, v.label),
      /* @__PURE__ */ React.createElement("span", { className: "nav-count" }, v.count)
    ))), /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { padding: "20px 6px 8px" } }, "Quick filters"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4 } }, ["Adjuster follow-up", "Awaiting DRA", "Pending neutral selection", "Date hold expiring"].map((f) => /* @__PURE__ */ React.createElement("div", { key: f, className: "nav-row", style: { padding: "6px 10px", fontSize: 12.5 } }, /* @__PURE__ */ React.createElement(Icon, { name: "filter", size: 12 }), f)))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflow: "auto" } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "24px 28px 16px" } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-3", style: { marginBottom: 4 } }, /* @__PURE__ */ React.createElement("h1", { className: "title-serif", style: { fontSize: 28 } }, "Cases"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: "var(--fg-2)" } }, filtered.length, " of ", D.cases.length)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--fg-2)" } }, "View: ", /* @__PURE__ */ React.createElement("span", { style: { color: "var(--fg-1)", fontWeight: 500 } }, savedViews.find((v) => v.id === savedView)?.label))), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 28px 16px", display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      background: "#fff",
      border: "1px solid var(--stroke-2)",
      borderRadius: 6,
      padding: "5px 11px",
      minWidth: 320
    } }, /* @__PURE__ */ React.createElement(Icon, { name: "search", size: 14, style: { color: "var(--fg-2)" } }), /* @__PURE__ */ React.createElement(
      "input",
      {
        value: query,
        onChange: (e) => setQuery(e.target.value),
        placeholder: "Search by case #, party, claim #, adjuster\u2026",
        style: { border: 0, outline: "none", fontFamily: "inherit", fontSize: 13, background: "transparent", flex: 1 }
      }
    ), query && /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost btn-sm", style: { padding: 2 }, onClick: () => setQuery("") }, /* @__PURE__ */ React.createElement(Icon, { name: "x", size: 12 }))), /* @__PURE__ */ React.createElement(
      FilterDropdown,
      {
        label: "Status",
        value: statusFilter,
        setValue: setStatusFilter,
        options: [["all", "All statuses"], ...Object.entries(D.statuses).map(([k, v]) => [k, v.label])]
      }
    ), /* @__PURE__ */ React.createElement(
      FilterDropdown,
      {
        label: "Matter",
        value: matterFilter,
        setValue: setMatterFilter,
        options: [["all", "All"], ["Arbitration", "Arbitration"], ["Mediation", "Mediation"]]
      }
    ), /* @__PURE__ */ React.createElement(FilterDropdown, { label: "Case manager", value: "me", setValue: () => {
    }, options: [["me", "J. Avery (me)"], ["team", "My team"], ["all", "Everyone"]] }), /* @__PURE__ */ React.createElement(FilterDropdown, { label: "County", value: "all", setValue: () => {
    }, options: [["all", "All counties"], ["ny", "New York"], ["queens", "Queens"], ["kings", "Kings"], ["nassau", "Nassau"]] }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), selected.size > 0 ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12.5, color: "var(--fg-2)" } }, selected.size, " selected"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", icon: "user" }, "Reassign"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", icon: "refresh" }, "Bulk status"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", icon: "download" }, "Export")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", size: "sm", icon: "bookmark" }, "Save view"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", icon: "download" }, "Export"))), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 28px 40px" } }, /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 0, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("table", { className: "data" }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", { style: { width: 32, paddingLeft: 18 } }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "checkbox",
        checked: selected.size === filtered.length && filtered.length > 0,
        onChange: (e) => setSelected(e.target.checked ? new Set(filtered.map((c) => c.id)) : /* @__PURE__ */ new Set())
      }
    )), /* @__PURE__ */ React.createElement("th", null, "Case"), /* @__PURE__ */ React.createElement("th", null, "Parties"), /* @__PURE__ */ React.createElement("th", null, "Status"), /* @__PURE__ */ React.createElement("th", null, "Matter"), /* @__PURE__ */ React.createElement("th", null, "Next hearing"), /* @__PURE__ */ React.createElement("th", null, "Last activity"), /* @__PURE__ */ React.createElement("th", { style: { textAlign: "right" } }, "Amount"))), /* @__PURE__ */ React.createElement("tbody", null, filtered.map((c) => {
      const ny = c.flags.includes("ny");
      const unaction = c.flags.includes("unactioned-48h");
      return /* @__PURE__ */ React.createElement("tr", { key: c.id, className: ny ? "row-flag" : "", onClick: () => onOpenCase(c.id) }, /* @__PURE__ */ React.createElement("td", { style: { paddingLeft: 18 }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: selected.has(c.id), onChange: () => toggleSel(c.id) })), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "IBM Plex Mono, monospace", fontSize: 12.5, fontWeight: 500 } }, c.id), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11.5, color: "var(--fg-2)", marginTop: 2 } }, c.county, ", ", c.state, " \xB7 ", c.voluntary ? "Voluntary" : "Contractual")), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 500 } }, c.claimant), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--fg-2)", marginTop: 2 } }, "vs. ", c.respondent)), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("div", { className: "row gap-2" }, /* @__PURE__ */ React.createElement(StatusPill, { status: c.status }), unaction && /* @__PURE__ */ React.createElement(Pill, { tone: "amber", dot: true }, "48h+"))), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Pill, { tone: "muted" }, c.matter)), /* @__PURE__ */ React.createElement("td", null, c.nextHearing ? /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13 } }, fmtDate(c.nextHearing)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11.5, color: "var(--fg-2)", fontFamily: "IBM Plex Mono, monospace" } }, new Date(c.nextHearing).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }))) : /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: "var(--fg-2)" } }, "Not scheduled")), /* @__PURE__ */ React.createElement("td", { style: { fontSize: 12.5, color: "var(--fg-2)" } }, fmtTimeAgo(c.lastActivity)), /* @__PURE__ */ React.createElement("td", { style: { textAlign: "right", fontFamily: "IBM Plex Mono, monospace", fontSize: 12.5 } }, c.amountInDispute ? fmtMoney(c.amountInDispute) : "\u2014"));
    }))), filtered.length === 0 && /* @__PURE__ */ React.createElement(
      EmptyState,
      {
        icon: "search",
        title: "No cases match this view",
        body: "Try clearing the search or switching to All cases.",
        action: /* @__PURE__ */ React.createElement(Button, { variant: "outline", onClick: () => {
          setQuery("");
          setSavedView("my-active");
        } }, "Clear filters")
      }
    )))));
  }
  function FilterDropdown({ label, value, setValue, options }) {
    const cur = options.find((o) => o[0] === value);
    return /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement(
      "select",
      {
        value,
        onChange: (e) => setValue(e.target.value),
        style: {
          appearance: "none",
          WebkitAppearance: "none",
          MozAppearance: "none",
          background: "#fff",
          border: "1px solid var(--stroke-2)",
          borderRadius: 6,
          padding: "5px 28px 5px 11px",
          fontSize: 13,
          fontFamily: "inherit",
          color: "var(--fg-1)",
          cursor: "pointer",
          outline: "none"
        }
      },
      options.map(([k, v]) => /* @__PURE__ */ React.createElement("option", { key: k, value: k }, label, ": ", v))
    ), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", right: 9, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "var(--fg-2)" } }, /* @__PURE__ */ React.createElement(Icon, { name: "chevronDown", size: 12 })));
  }
  Object.assign(window, { CaseList });
  function CaseDetail({ caseId, onBack, onOpenStatusModal, openTab, setOpenTab, onShowToast }) {
    const D = window.NAM_DATA;
    const c = D.cases.find((x) => x.id === caseId);
    if (!c) return null;
    const tab = openTab || "overview";
    const tabs = [
      { id: "overview", label: "Overview", icon: "home" },
      { id: "parties", label: "Parties", icon: "users", count: 4 },
      { id: "documents", label: "Documents", icon: "fileText", count: (D.documents[caseId] || []).length },
      { id: "hearings", label: "Hearings", icon: "calendar", count: D.hearings.filter((h) => h.case === caseId).length },
      { id: "finance", label: "Finance", icon: "dollar", count: D.invoices.filter((i) => i.case === caseId).length },
      { id: "diary", label: "Diary & tasks", icon: "check", count: D.tasks.filter((t) => t.case === caseId).length },
      { id: "communications", label: "Communications", icon: "mail", count: 7 }
    ];
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { background: "#fafaf8", borderBottom: "1px solid var(--stroke-1)", padding: "14px 28px 0", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-3", style: { marginBottom: 10 } }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost btn-sm", onClick: onBack }, /* @__PURE__ */ React.createElement(Icon, { name: "arrowLeft", size: 13 }), "Back to cases")), /* @__PURE__ */ React.createElement("div", { className: "row gap-4", style: { alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-3", style: { marginBottom: 4 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "IBM Plex Mono, monospace", fontSize: 12, color: "var(--fg-2)", letterSpacing: "0.04em" } }, c.id), /* @__PURE__ */ React.createElement(Pill, { tone: "muted" }, c.matter), /* @__PURE__ */ React.createElement(Pill, { tone: "muted" }, c.voluntary ? "Voluntary" : "Contractual"), c.flags.includes("ny") && /* @__PURE__ */ React.createElement(Pill, { tone: "primary", dot: true }, "NY \xB7 flagged"), c.flags.includes("unactioned-48h") && /* @__PURE__ */ React.createElement(Pill, { tone: "amber", dot: true }, "Unactioned 48h+"), c.flags.includes("sla-risk") && /* @__PURE__ */ React.createElement(Pill, { tone: "danger", dot: true }, "SLA at risk")), /* @__PURE__ */ React.createElement("h1", { className: "title-serif", style: { fontSize: 26, marginBottom: 4 } }, c.claimant, " ", /* @__PURE__ */ React.createElement("span", { style: { color: "var(--fg-2)", fontWeight: 400 } }, "vs."), " ", c.respondent), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--fg-2)" } }, "Claim # ", /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "IBM Plex Mono, monospace", color: "var(--fg-1)" } }, c.claimNumber), " \xB7 ", "Adjuster ", c.adjuster, " \xB7 ", "Opened ", fmtDate(c.opened), " \xB7 ", c.county, ", ", c.state)), /* @__PURE__ */ React.createElement("div", { className: "row gap-2" }, /* @__PURE__ */ React.createElement(StatusPill, { status: c.status }), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", icon: "edit", onClick: onOpenStatusModal }, "Change status"))), /* @__PURE__ */ React.createElement("div", { className: "row gap-2", style: { padding: "14px 0 12px" } }, /* @__PURE__ */ React.createElement(Button, { variant: "primary", size: "sm", icon: "calendar", onClick: () => setOpenTab("hearings") }, "Schedule hearing"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", icon: "check" }, "Add task"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", icon: "upload" }, "Upload doc"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", icon: "dollar" }, "New invoice"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", icon: "mail" }, "Send email"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement(Button, { variant: "ghost", size: "sm", icon: "more" })), /* @__PURE__ */ React.createElement("div", { className: "tabs" }, tabs.map((t) => /* @__PURE__ */ React.createElement("div", { key: t.id, className: `tab ${tab === t.id ? "active" : ""}`, onClick: () => setOpenTab(t.id) }, /* @__PURE__ */ React.createElement(Icon, { name: t.icon, size: 13 }), t.label, t.count != null && /* @__PURE__ */ React.createElement("span", { className: "tab-count" }, t.count))))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflowY: "auto" } }, tab === "overview" && /* @__PURE__ */ React.createElement(OverviewTab, { caseObj: c, setOpenTab }), tab === "parties" && /* @__PURE__ */ React.createElement(PartiesTab, { caseObj: c }), tab === "documents" && /* @__PURE__ */ React.createElement(DocumentsTab, { caseObj: c, onShowToast }), tab === "hearings" && /* @__PURE__ */ React.createElement(HearingsTab, { caseObj: c, onShowToast }), tab === "finance" && /* @__PURE__ */ React.createElement(FinanceTab, { caseObj: c }), tab === "diary" && /* @__PURE__ */ React.createElement(DiaryTab, { caseObj: c, onShowToast }), tab === "communications" && /* @__PURE__ */ React.createElement(CommunicationsTab, { caseObj: c })));
  }
  function OverviewTab({ caseObj, setOpenTab }) {
    const D = window.NAM_DATA;
    const tasks = D.tasks.filter((t) => t.case === caseObj.id);
    const activity = D.activity.filter((a) => a.case === caseObj.id);
    const hearings = D.hearings.filter((h) => h.case === caseObj.id);
    const invoices = D.invoices.filter((i) => i.case === caseObj.id);
    const completePct = Math.round((caseObj.intakeComplete || 1) * 100);
    const incomplete = caseObj.intakeComplete && caseObj.intakeComplete < 1;
    const timeline = [
      { date: caseObj.opened, label: "Case opened", type: "intake", detail: "Intake submitted via web form" },
      incomplete && { date: caseObj.opened, label: "Completeness gate \xB7 " + completePct + "%", type: "alert", detail: `Missing: ${(caseObj.missing || []).join(", ")}` },
      hearings.length > 0 && { date: hearings[0].date, label: "Hearing scheduled", type: "hearing", detail: `${hearings[0].neutral} \xB7 ${hearings[0].location}` },
      invoices.length > 0 && { date: invoices[0].issued, label: invoices[0].id + " issued", type: "finance", detail: fmtMoney(invoices[0].amount) + " \xB7 " + invoices[0].client }
    ].filter(Boolean);
    return /* @__PURE__ */ React.createElement("div", { style: { padding: "24px 28px 60px", display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 24 } }, /* @__PURE__ */ React.createElement("div", { className: "col gap-5" }, incomplete && /* @__PURE__ */ React.createElement("div", { className: "card", style: { background: "#fef2c5", border: "1px solid #e8d27a" } }, /* @__PURE__ */ React.createElement("div", { style: { padding: 18 } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-3", style: { marginBottom: 10 } }, /* @__PURE__ */ React.createElement(Icon, { name: "alertTriangle", size: 18, style: { color: "#7f201f" } }), /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 600, fontSize: 14, color: "#7f201f" } }, "Intake incomplete \xB7 ", completePct, "%"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement(Button, { variant: "primary", size: "sm", icon: "edit" }, "Complete intake")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "#7f201f", marginBottom: 12 } }, "The completeness gate is blocking certain downstream actions until these fields are captured."), /* @__PURE__ */ React.createElement("div", { style: { height: 6, background: "rgba(127,32,31,0.15)", borderRadius: 999, overflow: "hidden", marginBottom: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { height: "100%", width: completePct + "%", background: "#9e2c2c" } })), /* @__PURE__ */ React.createElement("ul", { className: "clean", style: { display: "flex", flexWrap: "wrap", gap: 8 } }, (caseObj.missing || []).map((m) => /* @__PURE__ */ React.createElement("li", { key: m, className: "pill pill-primary", style: { fontSize: 11.5 } }, /* @__PURE__ */ React.createElement(Icon, { name: "alertCircle", size: 11 }), " ", m))))), /* @__PURE__ */ React.createElement("div", { className: "card" }, /* @__PURE__ */ React.createElement("div", { style: { padding: "16px 20px 12px", borderBottom: "1px solid var(--stroke-1)", display: "flex", alignItems: "center", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", { className: "title-serif", style: { fontSize: 18 } }, "Timeline"), /* @__PURE__ */ React.createElement(Button, { variant: "ghost", size: "sm", iconRight: "arrowRight" }, "Full history")), /* @__PURE__ */ React.createElement("div", { style: { padding: "8px 24px 18px", position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 36, top: 22, bottom: 22, width: 1, background: "var(--stroke-1)" } }), timeline.map((t, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", gap: 14, padding: "12px 0", position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 24,
      height: 24,
      borderRadius: 999,
      background: "#fff",
      border: `2px solid ${t.type === "alert" ? "var(--destructive)" : t.type === "hearing" ? "#b75301" : t.type === "finance" ? "#9e2c2c" : "var(--stroke-2)"}`,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      marginLeft: 0,
      zIndex: 1
    } }, /* @__PURE__ */ React.createElement(Icon, { name: t.type === "alert" ? "alertCircle" : t.type === "hearing" ? "calendar" : t.type === "finance" ? "dollar" : "inbox", size: 11, style: { color: t.type === "alert" ? "var(--destructive)" : t.type === "hearing" ? "#b75301" : t.type === "finance" ? "#9e2c2c" : "var(--fg-2)" } })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, paddingTop: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13.5, fontWeight: 500 } }, t.label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--fg-2)", marginTop: 2 } }, t.detail), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--fg-2)", marginTop: 2, fontFamily: "IBM Plex Mono, monospace" } }, fmtDate(t.date))))))), /* @__PURE__ */ React.createElement("div", { className: "card" }, /* @__PURE__ */ React.createElement("div", { style: { padding: "16px 20px 12px", borderBottom: "1px solid var(--stroke-1)", display: "flex", alignItems: "center", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", { className: "title-serif", style: { fontSize: 18 } }, "Pending tasks \xB7 ", tasks.length), /* @__PURE__ */ React.createElement(Button, { variant: "ghost", size: "sm", icon: "plus" }, "Add task")), /* @__PURE__ */ React.createElement("div", null, tasks.length > 0 ? tasks.map((t) => /* @__PURE__ */ React.createElement("div", { key: t.id, className: "hover-row", style: { padding: "12px 20px", borderBottom: "1px solid var(--stroke-1)", display: "flex", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 16, height: 16, borderRadius: 4, border: `1.5px solid ${t.status === "overdue" ? "var(--destructive)" : "var(--stroke-2)"}`, flexShrink: 0 } }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13.5 } }, t.title), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11.5, color: "var(--fg-2)", marginTop: 2 } }, t.source, " \xB7 SLA ", t.sla)), /* @__PURE__ */ React.createElement(Pill, { tone: t.status === "overdue" ? "danger" : "muted" }, t.status === "overdue" ? "Overdue" : "Due " + fmtDate(t.due)))) : /* @__PURE__ */ React.createElement(EmptyState, { icon: "check", title: "No pending tasks", body: "Tasks auto-create when source events fire." })))), /* @__PURE__ */ React.createElement("div", { className: "col gap-5" }, /* @__PURE__ */ React.createElement("div", { className: "card card-pad" }, /* @__PURE__ */ React.createElement("div", { className: "title-serif", style: { fontSize: 18, marginBottom: 14 } }, "Snapshot"), /* @__PURE__ */ React.createElement(SnapRow, { label: "Case manager", value: D.users.me.name }), /* @__PURE__ */ React.createElement(SnapRow, { label: "AE", value: D.users.ae.name }), /* @__PURE__ */ React.createElement(SnapRow, { label: "Amount in dispute", value: caseObj.amountInDispute ? fmtMoney(caseObj.amountInDispute) : "\u2014" }), /* @__PURE__ */ React.createElement(SnapRow, { label: "Next hearing", value: caseObj.nextHearing ? fmtDateTime(caseObj.nextHearing) : /* @__PURE__ */ React.createElement("span", { style: { color: "var(--fg-2)" } }, "None scheduled") }), /* @__PURE__ */ React.createElement(SnapRow, { label: "Last activity", value: fmtTimeAgo(caseObj.lastActivity) + " \xB7 " + fmtDate(caseObj.lastActivity), last: true })), /* @__PURE__ */ React.createElement("div", { className: "card" }, /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 18px 8px", borderBottom: "1px solid var(--stroke-1)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 600, fontSize: 14 } }, "Activity")), /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 18px 12px" } }, activity.length > 0 ? activity.map((a) => /* @__PURE__ */ React.createElement("div", { key: a.id, className: "feed-item" }, /* @__PURE__ */ React.createElement("div", { className: "feed-icon" }, /* @__PURE__ */ React.createElement(Icon, { name: a.type === "intake" ? "inbox" : a.type === "hearing" ? "calendar" : a.type === "docusign" ? "check" : a.type === "email" ? "mail" : a.type === "finance" ? "dollar" : "refresh", size: 13 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12.5 } }, a.text), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--fg-2)", marginTop: 3, fontFamily: "IBM Plex Mono, monospace" } }, fmtTimeAgo(a.at), " \xB7 ", a.by)))) : /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 0", fontSize: 12.5, color: "var(--fg-2)" } }, "No activity yet.")))));
  }
  function SnapRow({ label, value, last }) {
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "7px 0", borderBottom: last ? 0 : "1px dashed var(--stroke-1)", fontSize: 13 } }, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--fg-2)" } }, label), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 500, textAlign: "right" } }, value));
  }
  function PartiesTab({ caseObj }) {
    const [editing, setEditing] = React.useState(null);
    const parties = [
      {
        role: "Claimant",
        name: caseObj.claimant,
        type: "firm",
        contact: "Daniel R. Whitaker",
        email: "dwhitaker@quincyreed.com",
        phone: "+1 (212) 555-0142",
        address: "410 Park Avenue, 14th Fl, New York, NY 10022"
      },
      {
        role: "Claimant counsel",
        name: "Quincy & Reed PC",
        type: "firm",
        merge: true,
        contact: "Lena Quincy",
        email: "lquincy@quincyreed.com",
        phone: "+1 (212) 555-0177",
        address: "410 Park Avenue, 14th Fl, New York, NY 10022"
      },
      {
        role: "Respondent",
        name: caseObj.respondent,
        type: "carrier",
        contact: caseObj.adjuster,
        email: "m.calderon@pinecrest.example",
        phone: "+1 (516) 555-0188",
        address: "85 Broad Street, Melville, NY 11747",
        claimNumber: caseObj.claimNumber
      },
      {
        role: "Respondent counsel",
        name: "Hartman, Loomis & Gao LLP",
        type: "firm",
        contact: "Robin Hartman",
        email: "rhartman@hl-gao.com",
        phone: "+1 (212) 555-0199",
        address: "230 W 41st Street, New York, NY 10036"
      }
    ];
    return /* @__PURE__ */ React.createElement("div", { style: { padding: "24px 28px 60px" } }, /* @__PURE__ */ React.createElement("div", { className: "row", style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { className: "title-serif", style: { fontSize: 22 } }, "Parties \xB7 ", parties.length), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--fg-2)" } }, "Single-record entities. Edits propagate across all related cases.")), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", icon: "plus" }, "Add party")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 } }, parties.map((p, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "card card-pad", style: { position: "relative" } }, /* @__PURE__ */ React.createElement("div", { className: "row", style: { marginBottom: 10 } }, /* @__PURE__ */ React.createElement(Pill, { tone: p.role.includes("Claimant") ? "cream" : p.role.includes("Respondent") ? "rust" : "muted" }, p.role), p.merge && /* @__PURE__ */ React.createElement(Pill, { tone: "amber", dot: true }, "3 records linked"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost btn-sm", style: { padding: 5 }, onClick: () => setEditing(editing === i ? null : i) }, /* @__PURE__ */ React.createElement(Icon, { name: "edit", size: 13 }))), /* @__PURE__ */ React.createElement("div", { className: "row gap-3", style: { marginBottom: 10 } }, /* @__PURE__ */ React.createElement(Avatar, { initials: p.name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase(), size: 36, color: p.type === "carrier" ? "rust" : "primary" }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, editing === i ? /* @__PURE__ */ React.createElement("input", { className: "input", defaultValue: p.name, style: { fontSize: 14, fontWeight: 500, padding: "5px 8px" } }) : /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 600, fontFamily: "Libre Baskerville, serif" } }, p.name), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--fg-2)", marginTop: 2 } }, p.type === "carrier" ? "Insurance carrier" : "Law firm"))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "92px 1fr", rowGap: 6, columnGap: 12, fontSize: 12.5 } }, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--fg-2)" } }, "Primary"), /* @__PURE__ */ React.createElement("span", null, p.contact), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--fg-2)" } }, "Email"), editing === i ? /* @__PURE__ */ React.createElement("input", { className: "input", defaultValue: p.email, style: { padding: "3px 6px", fontSize: 12.5 } }) : /* @__PURE__ */ React.createElement("span", { style: { color: "var(--primary)", textDecoration: "underline" } }, p.email), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--fg-2)" } }, "Phone"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "IBM Plex Mono, monospace" } }, p.phone), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--fg-2)" } }, "Address"), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--fg-2)" } }, p.address), p.claimNumber && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--fg-2)" } }, "Claim #"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "IBM Plex Mono, monospace" } }, p.claimNumber))), editing === i && /* @__PURE__ */ React.createElement("div", { className: "row", style: { marginTop: 12, justifyContent: "flex-end", gap: 6 } }, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", size: "sm", onClick: () => setEditing(null) }, "Cancel"), /* @__PURE__ */ React.createElement(Button, { variant: "primary", size: "sm", icon: "check", onClick: () => setEditing(null) }, "Save changes")), p.merge && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12, padding: "8px 12px", background: "#fef2c5", borderRadius: 6, border: "1px solid #e8d27a", fontSize: 12, color: "#7f201f", display: "flex", gap: 8, alignItems: "center" } }, /* @__PURE__ */ React.createElement(Icon, { name: "alertCircle", size: 13 }), "3 firm records were merged here. ", /* @__PURE__ */ React.createElement("a", { href: "#", style: { color: "#7f201f", textDecoration: "underline" } }, "View merge history"))))));
  }
  function DocumentsTab({ caseObj, onShowToast }) {
    const D = window.NAM_DATA;
    const [folder, setFolder] = React.useState("all");
    const [showUpload, setShowUpload] = React.useState(false);
    const docs = D.documents[caseObj.id] || [];
    const filtered = folder === "all" ? docs : docs.filter((d) => d.folder === folder);
    const folders = [
      { id: "all", label: "All documents", count: docs.length },
      { id: "submitting", label: "Submitting party", count: docs.filter((d) => d.folder === "submitting").length },
      { id: "opposing", label: "Opposing party", count: docs.filter((d) => d.folder === "opposing").length },
      { id: "neutral", label: "Neutral", count: docs.filter((d) => d.folder === "neutral").length }
    ];
    return /* @__PURE__ */ React.createElement("div", { style: { padding: "24px 28px 60px" } }, /* @__PURE__ */ React.createElement("div", { className: "row", style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { className: "title-serif", style: { fontSize: 22 } }, "Documents \xB7 ", docs.length), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--fg-2)" } }, "Three-folder model with per-folder access. DocuSign envelopes update document status automatically.")), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", icon: "link" }, "DocuSign"), /* @__PURE__ */ React.createElement(Button, { variant: "primary", size: "sm", icon: "upload", onClick: () => setShowUpload(true), style: { marginLeft: 8 } }, "Upload")), /* @__PURE__ */ React.createElement("div", { className: "row gap-2", style: { marginBottom: 14 } }, folders.map((f) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: f.id,
        className: `btn ${folder === f.id ? "btn-outline" : "btn-ghost"} btn-sm`,
        onClick: () => setFolder(f.id),
        style: { borderColor: folder === f.id ? "var(--primary)" : "transparent", color: folder === f.id ? "var(--primary)" : "inherit" }
      },
      f.label,
      /* @__PURE__ */ React.createElement("span", { className: "nav-count", style: { marginLeft: 6 } }, f.count)
    ))), /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 0, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("table", { className: "data" }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", { style: { paddingLeft: 18 } }, "Name"), /* @__PURE__ */ React.createElement("th", null, "Type"), /* @__PURE__ */ React.createElement("th", null, "Folder"), /* @__PURE__ */ React.createElement("th", null, "Size"), /* @__PURE__ */ React.createElement("th", null, "Uploaded"), /* @__PURE__ */ React.createElement("th", null, "By"), /* @__PURE__ */ React.createElement("th", { style: { textAlign: "right", paddingRight: 18 } }, "Actions"))), /* @__PURE__ */ React.createElement("tbody", null, filtered.map((d) => /* @__PURE__ */ React.createElement("tr", { key: d.id, onClick: (e) => e.preventDefault() }, /* @__PURE__ */ React.createElement("td", { style: { paddingLeft: 18 } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-3" }, /* @__PURE__ */ React.createElement(Icon, { name: "fileText", size: 16, style: { color: "var(--fg-2)" } }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, fontWeight: 500 } }, d.name), d.docusign === "completed" && /* @__PURE__ */ React.createElement(Pill, { tone: "success", dot: true }, "Signed"))), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Pill, { tone: "muted" }, d.type)), /* @__PURE__ */ React.createElement("td", { style: { fontSize: 12.5, color: "var(--fg-2)", textTransform: "capitalize" } }, d.folder), /* @__PURE__ */ React.createElement("td", { style: { fontSize: 12, color: "var(--fg-2)", fontFamily: "IBM Plex Mono, monospace" } }, d.size), /* @__PURE__ */ React.createElement("td", { style: { fontSize: 12.5, color: "var(--fg-2)" } }, fmtDate(d.uploaded)), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Avatar, { initials: d.by.length > 2 ? d.by.split(" ").map((w) => w[0]).join("") : d.by, size: 22, color: d.by === "system" ? "muted" : "primary" })), /* @__PURE__ */ React.createElement("td", { style: { textAlign: "right", paddingRight: 18 } }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost btn-sm", style: { padding: 4 } }, /* @__PURE__ */ React.createElement(Icon, { name: "eye", size: 13 })), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost btn-sm", style: { padding: 4 } }, /* @__PURE__ */ React.createElement(Icon, { name: "download", size: 13 })), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost btn-sm", style: { padding: 4 } }, /* @__PURE__ */ React.createElement(Icon, { name: "more", size: 13 }))))))), filtered.length === 0 && /* @__PURE__ */ React.createElement(EmptyState, { icon: "fileText", title: "No documents in this folder" })), /* @__PURE__ */ React.createElement(
      Modal,
      {
        open: showUpload,
        onClose: () => setShowUpload(false),
        title: "Upload document",
        subtitle: "Files attach to this case. Optionally link to a hearing, PMA, or intake step.",
        footer: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", onClick: () => setShowUpload(false) }, "Cancel"), /* @__PURE__ */ React.createElement(Button, { variant: "primary", icon: "upload", onClick: () => {
          setShowUpload(false);
          onShowToast("Document uploaded \xB7 linked to case");
        } }, "Upload"))
      },
      /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { border: "2px dashed var(--stroke-2)", borderRadius: 8, padding: "32px 20px", textAlign: "center", background: "#faf6ee" } }, /* @__PURE__ */ React.createElement(Icon, { name: "upload", size: 26, style: { color: "var(--fg-2)" } }), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8, fontSize: 14, fontWeight: 500 } }, "Drop files here or click to browse"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--fg-2)", marginTop: 4 } }, "PDF, Word, Excel, image, video \u2014 up to 50 MB per file")), /* @__PURE__ */ React.createElement(Field, { label: "Document type" }, /* @__PURE__ */ React.createElement("select", { className: "select" }, /* @__PURE__ */ React.createElement("option", null, "Intake submission"), /* @__PURE__ */ React.createElement("option", null, "Hearing document"), /* @__PURE__ */ React.createElement("option", null, "PMA / Decision"), /* @__PURE__ */ React.createElement("option", null, "Signed DRA"), /* @__PURE__ */ React.createElement("option", null, "Billing"), /* @__PURE__ */ React.createElement("option", null, "Evidence"))), /* @__PURE__ */ React.createElement(Field, { label: "Folder" }, /* @__PURE__ */ React.createElement("select", { className: "select" }, /* @__PURE__ */ React.createElement("option", null, "Submitting party"), /* @__PURE__ */ React.createElement("option", null, "Opposing party"), /* @__PURE__ */ React.createElement("option", null, "Neutral"))), /* @__PURE__ */ React.createElement(Field, { label: "Link to case event (optional)" }, /* @__PURE__ */ React.createElement("select", { className: "select" }, /* @__PURE__ */ React.createElement("option", null, "\u2014 No link \u2014"), /* @__PURE__ */ React.createElement("option", null, "Hearing \xB7 21 May 2026"), /* @__PURE__ */ React.createElement("option", null, "Intake step"), /* @__PURE__ */ React.createElement("option", null, "PMA"))))
    ));
  }
  function HearingsTab({ caseObj, onShowToast }) {
    const D = window.NAM_DATA;
    const hearings = D.hearings.filter((h) => h.case === caseObj.id);
    const [confirmModal, setConfirmModal] = React.useState(null);
    const [statusModal, setStatusModal] = React.useState(null);
    return /* @__PURE__ */ React.createElement("div", { style: { padding: "24px 28px 60px" } }, /* @__PURE__ */ React.createElement("div", { className: "row", style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { className: "title-serif", style: { fontSize: 22 } }, "Hearings \xB7 ", hearings.length), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--fg-2)" } }, "Past and future hearings with neutral, location, and confirmations.")), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement(Button, { variant: "primary", size: "sm", icon: "calendar" }, "Schedule new")), hearings.length === 0 ? /* @__PURE__ */ React.createElement(
      EmptyState,
      {
        icon: "calendar",
        title: "No hearings scheduled",
        body: "Open the scheduling module to find availability across neutrals and parties.",
        action: /* @__PURE__ */ React.createElement(Button, { variant: "primary", icon: "calendar" }, "Schedule hearing")
      }
    ) : hearings.map((h) => /* @__PURE__ */ React.createElement("div", { key: h.id, className: "card", style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 18, padding: 20, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 64, textAlign: "center", padding: "10px 8px", background: "var(--accent)", borderRadius: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 500, textTransform: "uppercase", color: "#7f201f", letterSpacing: "0.08em" } }, new Date(h.date).toLocaleDateString("en-US", { month: "short" })), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "Libre Baskerville, serif", fontSize: 26, fontWeight: 700, color: "#7f201f", lineHeight: 1.05 } }, new Date(h.date).getDate()), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10.5, color: "#7f201f", fontFamily: "IBM Plex Mono, monospace" } }, new Date(h.date).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }))), /* @__PURE__ */ React.createElement("div", { style: { minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-2", style: { marginBottom: 6 } }, /* @__PURE__ */ React.createElement(Pill, { tone: "muted" }, h.type), h.status === "today" && /* @__PURE__ */ React.createElement(Pill, { tone: "primary", dot: true }, "Today"), h.status === "confirmed" && /* @__PURE__ */ React.createElement(Pill, { tone: "success", dot: true }, "All confirmed"), h.status === "pending-confirmation" && /* @__PURE__ */ React.createElement(Pill, { tone: "amber", dot: true }, "Awaiting confirmations")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 600, fontFamily: "Libre Baskerville, serif" } }, h.neutral), /* @__PURE__ */ React.createElement("div", { className: "row gap-3", style: { fontSize: 12.5, color: "var(--fg-2)", marginTop: 4 } }, /* @__PURE__ */ React.createElement("span", { className: "row gap-1" }, /* @__PURE__ */ React.createElement(Icon, { name: h.location === "Zoom" ? "video" : "mapPin", size: 12 }), h.location), /* @__PURE__ */ React.createElement("span", null, "\xB7"), /* @__PURE__ */ React.createElement("span", null, h.confirmations.sent, "/", h.confirmations.total, " confirmations sent"))), /* @__PURE__ */ React.createElement("div", { className: "row gap-2" }, h.confirmations.sent < h.confirmations.total && /* @__PURE__ */ React.createElement(Button, { variant: "primary", size: "sm", icon: "send", onClick: () => setConfirmModal(h) }, "Send confirmations"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", icon: "edit", onClick: () => setStatusModal(h) }, "Update"), /* @__PURE__ */ React.createElement(Button, { variant: "ghost", size: "sm", icon: "more" }))))), /* @__PURE__ */ React.createElement(
      Modal,
      {
        open: !!confirmModal,
        onClose: () => setConfirmModal(null),
        width: 620,
        title: "Send hearing confirmations",
        subtitle: confirmModal ? `${confirmModal.neutral} \xB7 ${fmtDateTime(confirmModal.date)}` : "",
        footer: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", onClick: () => setConfirmModal(null) }, "Cancel"), /* @__PURE__ */ React.createElement(Button, { variant: "primary", icon: "send", onClick: () => {
          const total = confirmModal.confirmations.total;
          setConfirmModal(null);
          onShowToast(`${total} confirmations sent in 1 batch`);
        } }, "Send to all 4 parties"))
      },
      /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--fg-2)", marginBottom: 12 } }, "One click \u2014 all parties receive the same confirmation. Replaces 10\u201315 individual sends per hearing."),
      /* @__PURE__ */ React.createElement("div", { className: "card card-pad-sm", style: { background: "#faf6ee", marginBottom: 14 } }, [
        { name: "Daniel R. Whitaker \xB7 Quincy & Reed PC", role: "Claimant counsel", email: "dwhitaker@quincyreed.com" },
        { name: "Robin Hartman \xB7 Hartman, Loomis & Gao LLP", role: "Respondent counsel", email: "rhartman@hl-gao.com" },
        { name: "M. Calder\xF3n \xB7 Pinecrest Insurance Co.", role: "Adjuster", email: "m.calderon@pinecrest.example" },
        { name: "Hon. R. Calloway", role: "Neutral", email: "rcalloway@nam-neutrals.example" }
      ].map((p, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: i < 3 ? "1px dashed var(--stroke-1)" : 0 } }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", defaultChecked: true }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 500 } }, p.name), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11.5, color: "var(--fg-2)" } }, p.role, " \xB7 ", p.email)), /* @__PURE__ */ React.createElement(Pill, { tone: "cream" }, p.role.split(" ")[0])))),
      /* @__PURE__ */ React.createElement(Field, { label: "Email template" }, /* @__PURE__ */ React.createElement("select", { className: "select" }, /* @__PURE__ */ React.createElement("option", null, "Standard hearing confirmation"), /* @__PURE__ */ React.createElement("option", null, "Reschedule notice"), /* @__PURE__ */ React.createElement("option", null, "Custom\u2026")))
    ), /* @__PURE__ */ React.createElement(
      Modal,
      {
        open: !!statusModal,
        onClose: () => setStatusModal(null),
        width: 520,
        title: "Update hearing status",
        subtitle: statusModal ? `${statusModal.neutral} \xB7 ${fmtDateTime(statusModal.date)}` : "",
        footer: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", onClick: () => setStatusModal(null) }, "Cancel"), /* @__PURE__ */ React.createElement(Button, { variant: "primary", onClick: () => {
          setStatusModal(null);
          onShowToast("Hearing status updated \xB7 downstream actions queued");
        } }, "Apply update"))
      },
      /* @__PURE__ */ React.createElement(Field, { label: "New status" }, /* @__PURE__ */ React.createElement("select", { className: "select", defaultValue: "adjourned" }, /* @__PURE__ */ React.createElement("option", { value: "continued" }, "Continued"), /* @__PURE__ */ React.createElement("option", { value: "adjourned" }, "Adjourned"), /* @__PURE__ */ React.createElement("option", { value: "cancelled" }, "Cancelled"), /* @__PURE__ */ React.createElement("option", { value: "settled" }, "Settled"), /* @__PURE__ */ React.createElement("option", { value: "heard" }, "Heard / Decision pending"))),
      /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12 } }, /* @__PURE__ */ React.createElement(Field, { label: "Reason" }, /* @__PURE__ */ React.createElement("select", { className: "select" }, /* @__PURE__ */ React.createElement("option", null, "Party request"), /* @__PURE__ */ React.createElement("option", null, "Neutral conflict"), /* @__PURE__ */ React.createElement("option", null, "Discovery outstanding"), /* @__PURE__ */ React.createElement("option", null, "Settlement reached")))),
      /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12 } }, /* @__PURE__ */ React.createElement(Field, { label: "Notes" }, /* @__PURE__ */ React.createElement("textarea", { className: "textarea", placeholder: "Optional context for the audit log\u2026" }))),
      /* @__PURE__ */ React.createElement("div", { className: "card card-pad-sm", style: { marginTop: 14, background: "#fef2c5", border: "1px solid #e8d27a" } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-2", style: { color: "#7f201f", fontSize: 12.5 } }, /* @__PURE__ */ React.createElement(Icon, { name: "zap", size: 13 }), /* @__PURE__ */ React.createElement("strong", null, "Auto consequences when applied:")), /* @__PURE__ */ React.createElement("ul", { style: { margin: "6px 0 0 22px", padding: 0, fontSize: 12.5, color: "#7f201f" } }, /* @__PURE__ */ React.createElement("li", null, "Adjournment fee invoice generated"), /* @__PURE__ */ React.createElement("li", null, "Neutral availability released back to roster"), /* @__PURE__ */ React.createElement("li", null, "Case status updates: Scheduled \u2192 Adjourned"), /* @__PURE__ */ React.createElement("li", null, "Diary entry: 7-day reschedule follow-up")))
    ));
  }
  function FinanceTab({ caseObj }) {
    const D = window.NAM_DATA;
    const invoices = D.invoices.filter((i) => i.case === caseObj.id);
    const total = invoices.reduce((s, i) => s + i.amount, 0);
    const outstanding = invoices.filter((i) => i.status === "overdue" || i.status === "sent").reduce((s, i) => s + i.amount, 0);
    const paid = invoices.filter((i) => i.status === "paid").reduce((s, i) => s + i.amount, 0);
    return /* @__PURE__ */ React.createElement("div", { style: { padding: "24px 28px 60px" } }, /* @__PURE__ */ React.createElement("div", { className: "row", style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement("h2", { className: "title-serif", style: { fontSize: 22 } }, "Finance \xB7 ", invoices.length, " invoices"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", icon: "dollar" }, "Record payment"), /* @__PURE__ */ React.createElement(Button, { variant: "primary", size: "sm", icon: "plus", style: { marginLeft: 8 } }, "New invoice")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 20 } }, /* @__PURE__ */ React.createElement("div", { className: "stat-card" }, /* @__PURE__ */ React.createElement("div", { className: "stat-label" }, "Billed to date"), /* @__PURE__ */ React.createElement("div", { className: "stat-num" }, fmtMoney(total))), /* @__PURE__ */ React.createElement("div", { className: "stat-card" }, /* @__PURE__ */ React.createElement("div", { className: "stat-label" }, "Outstanding"), /* @__PURE__ */ React.createElement("div", { className: "stat-num", style: { color: outstanding > 0 ? "var(--primary)" : "inherit" } }, fmtMoney(outstanding))), /* @__PURE__ */ React.createElement("div", { className: "stat-card" }, /* @__PURE__ */ React.createElement("div", { className: "stat-label" }, "Paid"), /* @__PURE__ */ React.createElement("div", { className: "stat-num" }, fmtMoney(paid)))), /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 0, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("table", { className: "data" }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", { style: { paddingLeft: 18 } }, "Invoice #"), /* @__PURE__ */ React.createElement("th", null, "Issued"), /* @__PURE__ */ React.createElement("th", null, "Client"), /* @__PURE__ */ React.createElement("th", null, "Status"), /* @__PURE__ */ React.createElement("th", { style: { textAlign: "right", paddingRight: 18 } }, "Amount"))), /* @__PURE__ */ React.createElement("tbody", null, invoices.map((inv) => /* @__PURE__ */ React.createElement("tr", { key: inv.id }, /* @__PURE__ */ React.createElement("td", { style: { paddingLeft: 18, fontFamily: "IBM Plex Mono, monospace", fontSize: 12.5, fontWeight: 500 } }, inv.id), /* @__PURE__ */ React.createElement("td", { style: { fontSize: 12.5 } }, fmtDate(inv.issued)), /* @__PURE__ */ React.createElement("td", { style: { fontSize: 13 } }, inv.client), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(InvoiceStatusPill, { status: inv.status, daysOverdue: inv.daysOverdue })), /* @__PURE__ */ React.createElement("td", { style: { textAlign: "right", paddingRight: 18, fontFamily: "IBM Plex Mono, monospace", fontSize: 13, fontWeight: 500 } }, fmtMoney(inv.amount)))))), invoices.length === 0 && /* @__PURE__ */ React.createElement(EmptyState, { icon: "dollar", title: "No invoices yet", body: "Invoices auto-generate from hearings, settlements, and PMA/decisions." })));
  }
  function InvoiceStatusPill({ status, daysOverdue }) {
    const map = {
      "pending-review": { tone: "amber", label: "Pending review" },
      "approved": { tone: "cream", label: "Approved" },
      "sent": { tone: "muted", label: "Sent" },
      "paid": { tone: "success", label: "Paid" },
      "overdue": { tone: "danger", label: `Overdue \xB7 ${daysOverdue}d` },
      "flagged": { tone: "amber", label: "Flagged" }
    };
    const s = map[status] || { tone: "muted", label: status };
    return /* @__PURE__ */ React.createElement(Pill, { tone: s.tone, dot: true }, s.label);
  }
  function DiaryTab({ caseObj, onShowToast }) {
    const D = window.NAM_DATA;
    const tasks = D.tasks.filter((t) => t.case === caseObj.id);
    const [showAdd, setShowAdd] = React.useState(false);
    return /* @__PURE__ */ React.createElement("div", { style: { padding: "24px 28px 60px" } }, /* @__PURE__ */ React.createElement("div", { className: "row", style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { className: "title-serif", style: { fontSize: 22 } }, "Diary & tasks \xB7 ", tasks.length), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--fg-2)" } }, "First-class task model. Past-due items auto-roll until resolved. Linked source events auto-complete tasks.")), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement(Button, { variant: "primary", size: "sm", icon: "plus", onClick: () => setShowAdd(true) }, "Add task")), /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 0, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("table", { className: "data" }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", { style: { paddingLeft: 18, width: 40 } }), /* @__PURE__ */ React.createElement("th", null, "Task"), /* @__PURE__ */ React.createElement("th", null, "Source event"), /* @__PURE__ */ React.createElement("th", null, "Owner"), /* @__PURE__ */ React.createElement("th", null, "SLA"), /* @__PURE__ */ React.createElement("th", { style: { paddingRight: 18 } }, "Due"))), /* @__PURE__ */ React.createElement("tbody", null, tasks.map((t) => /* @__PURE__ */ React.createElement("tr", { key: t.id }, /* @__PURE__ */ React.createElement("td", { style: { paddingLeft: 18 } }, /* @__PURE__ */ React.createElement("input", { type: "checkbox" })), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13.5, fontWeight: 500 } }, t.title), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11.5, color: "var(--fg-2)", marginTop: 2 } }, "Auto-rolls until resolved \xB7 ", t.linkedEvent)), /* @__PURE__ */ React.createElement("td", { style: { fontSize: 12.5, color: "var(--fg-2)" } }, t.source), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Avatar, { initials: D.users.me.initials, size: 22 })), /* @__PURE__ */ React.createElement("td", { style: { fontSize: 12.5, color: "var(--fg-2)" } }, t.sla), /* @__PURE__ */ React.createElement("td", { style: { paddingRight: 18 } }, /* @__PURE__ */ React.createElement(Pill, { tone: t.status === "overdue" ? "danger" : "muted", dot: true }, t.status === "overdue" ? "Overdue" : fmtDate(t.due))))))), tasks.length === 0 && /* @__PURE__ */ React.createElement(EmptyState, { icon: "check", title: "No tasks for this case", body: "Tasks auto-create when source events fire." })), /* @__PURE__ */ React.createElement(
      Modal,
      {
        open: showAdd,
        onClose: () => setShowAdd(false),
        title: "Add task",
        width: 520,
        footer: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", onClick: () => setShowAdd(false) }, "Cancel"), /* @__PURE__ */ React.createElement(Button, { variant: "primary", onClick: () => {
          setShowAdd(false);
          onShowToast("Task added to case");
        } }, "Create task"))
      },
      /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } }, /* @__PURE__ */ React.createElement(Field, { label: "Title" }, /* @__PURE__ */ React.createElement("input", { className: "input", placeholder: "What needs to happen?", autoFocus: true })), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 } }, /* @__PURE__ */ React.createElement(Field, { label: "Owner" }, /* @__PURE__ */ React.createElement("select", { className: "select" }, /* @__PURE__ */ React.createElement("option", null, D.users.me.name, " (me)"), /* @__PURE__ */ React.createElement("option", null, D.users.sup.name))), /* @__PURE__ */ React.createElement(Field, { label: "Due date" }, /* @__PURE__ */ React.createElement("input", { className: "input", type: "date", defaultValue: "2026-05-12" }))), /* @__PURE__ */ React.createElement(Field, { label: "SLA" }, /* @__PURE__ */ React.createElement("select", { className: "select" }, /* @__PURE__ */ React.createElement("option", null, "24 hours"), /* @__PURE__ */ React.createElement("option", null, "48 hours"), /* @__PURE__ */ React.createElement("option", null, "3 business days"), /* @__PURE__ */ React.createElement("option", null, "7 business days"))), /* @__PURE__ */ React.createElement(Field, { label: "Description (optional)" }, /* @__PURE__ */ React.createElement("textarea", { className: "textarea", placeholder: "Context, links, party numbers\u2026" })))
    ));
  }
  function CommunicationsTab({ caseObj }) {
    const emails = [
      { id: "e1", from: "M. Calder\xF3n", email: "m.calderon@pinecrest.example", subject: "Re: missing claim filed date \u2014 " + caseObj.id, snippet: "Filed date is 14 March 2026. Apologies for the delay; the original notice never reached me. Sending claim file separately.", date: "2026-05-06T09:50", dir: "in", linked: "auto" },
      { id: "e2", from: "Jordan Avery", email: "j.avery@nam-cms.example", subject: "Missing intake fields \u2014 Acme Holdings v. Pinecrest", snippet: "Hi M., we still need the claim filed date and adjuster phone to complete intake. Could you send by EOD?", date: "2026-05-06T08:30", dir: "out", linked: "auto" },
      { id: "e3", from: "Daniel R. Whitaker", email: "dwhitaker@quincyreed.com", subject: "Demand for arbitration \u2014 submission", snippet: "Please find attached the demand and supporting documents. We are requesting expedited scheduling given client circumstances.", date: "2026-05-05T14:12", dir: "in", linked: "manual" }
    ];
    return /* @__PURE__ */ React.createElement("div", { style: { padding: "24px 28px 60px", display: "grid", gridTemplateColumns: "1fr 480px", gap: 24 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "row", style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement("h2", { className: "title-serif", style: { fontSize: 22 } }, "Communications"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", icon: "filter" }, "Filter"), /* @__PURE__ */ React.createElement(Button, { variant: "primary", size: "sm", icon: "send", style: { marginLeft: 8 } }, "New email")), /* @__PURE__ */ React.createElement("div", { className: "card" }, emails.map((m, i) => /* @__PURE__ */ React.createElement("div", { key: m.id, className: "hover-row", style: { padding: "14px 18px", borderBottom: i < emails.length - 1 ? "1px solid var(--stroke-1)" : 0, display: "flex", gap: 14, alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 32,
      height: 32,
      borderRadius: 999,
      background: m.dir === "in" ? "#fef2c5" : "var(--primary)",
      color: m.dir === "in" ? "#7f201f" : "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    } }, /* @__PURE__ */ React.createElement(Icon, { name: m.dir === "in" ? "mail" : "send", size: 14 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-2" }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, fontWeight: 600 } }, m.from), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11.5, color: "var(--fg-2)", fontFamily: "IBM Plex Mono, monospace" } }, "<", m.email, ">"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), m.linked === "auto" && /* @__PURE__ */ React.createElement(Pill, { tone: "success", dot: true }, "Auto-linked"), m.linked === "manual" && /* @__PURE__ */ React.createElement(Pill, { tone: "muted" }, "Manually linked"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11.5, color: "var(--fg-2)" } }, fmtTimeAgo(m.date))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 500, marginTop: 4 } }, m.subject), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12.5, color: "var(--fg-2)", marginTop: 4, lineHeight: 1.55 } }, m.snippet)))))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "card", style: { position: "sticky", top: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "16px 20px 12px", borderBottom: "1px solid var(--stroke-1)" } }, /* @__PURE__ */ React.createElement("div", { className: "title-serif", style: { fontSize: 18 } }, "Send from this case"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--fg-2)", marginTop: 2 } }, "Outbound auto-logged. Replies thread back here.")), /* @__PURE__ */ React.createElement("div", { style: { padding: 18, display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement(Field, { label: "To" }, /* @__PURE__ */ React.createElement("select", { className: "select", multiple: false }, /* @__PURE__ */ React.createElement("option", null, "All parties \xB7 4 recipients"), /* @__PURE__ */ React.createElement("option", null, "Claimant counsel"), /* @__PURE__ */ React.createElement("option", null, "Respondent counsel"), /* @__PURE__ */ React.createElement("option", null, "Adjuster only"))), /* @__PURE__ */ React.createElement(Field, { label: "Template" }, /* @__PURE__ */ React.createElement("select", { className: "select" }, /* @__PURE__ */ React.createElement("option", null, "Custom message"), /* @__PURE__ */ React.createElement("option", null, "48-hour follow-up"), /* @__PURE__ */ React.createElement("option", null, "Pre-hearing reminder"), /* @__PURE__ */ React.createElement("option", null, "Adjournment notice"))), /* @__PURE__ */ React.createElement(Field, { label: "Subject" }, /* @__PURE__ */ React.createElement("input", { className: "input", defaultValue: `Update \u2014 ${caseObj.id}` })), /* @__PURE__ */ React.createElement(Field, { label: "Message" }, /* @__PURE__ */ React.createElement("textarea", { className: "textarea", style: { minHeight: 120 }, defaultValue: "Hi all,\n\nFollowing up on the items below to keep this matter moving forward." })), /* @__PURE__ */ React.createElement("div", { className: "row", style: { justifyContent: "flex-end", gap: 6, marginTop: 4 } }, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", size: "sm", icon: "paperclip" }, "Attach"), /* @__PURE__ */ React.createElement(Button, { variant: "primary", size: "sm", icon: "send" }, "Send \xB7 log to case"))))));
  }
  Object.assign(window, { CaseDetail });
  function IntakeWizard({ onClose, onComplete }) {
    const [step, setStep] = React.useState(1);
    const [data, setData] = React.useState({
      caseType: "PI",
      matter: "Arbitration",
      voluntary: true,
      intakeMethod: "online",
      claimant: "",
      claimantFirm: "",
      claimantCounsel: "",
      respondent: "",
      respondentFirm: "Pinecrest Insurance Co.",
      adjuster: "",
      adjusterEmail: "",
      adjusterPhone: "",
      claimNumber: "",
      incidentDate: "",
      feeSheet: "PI Standard 2026",
      feeWaiver: false,
      documents: [
        { name: "Demand for Arbitration.pdf", size: "156 KB" }
      ]
    });
    const update = (k, v) => setData((d) => ({ ...d, [k]: v }));
    const stepDefs = [
      { n: 1, label: "Classification" },
      { n: 2, label: "Parties" },
      { n: 3, label: "Completeness" },
      { n: 4, label: "Fee & docs" },
      { n: 5, label: "Review" }
    ];
    const requiredMissing = (() => {
      const m = [];
      if (!data.claimant) m.push("Claimant");
      if (!data.respondentFirm) m.push("Respondent firm");
      if (!data.adjuster) m.push("Adjuster name");
      if (!data.adjusterPhone) m.push("Adjuster phone");
      if (!data.claimNumber) m.push("Claim number");
      if (!data.incidentDate) m.push("Incident date");
      return m;
    })();
    const canAdvance = step !== 3 || requiredMissing.length === 0;
    return /* @__PURE__ */ React.createElement("div", { className: "modal-scrim", onClick: onClose }, /* @__PURE__ */ React.createElement("div", { className: "modal", style: { width: 880, maxWidth: "94vw" }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("div", { style: { padding: "20px 28px 14px", borderBottom: "1px solid var(--stroke-1)" } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-3", style: { marginBottom: 6 } }, /* @__PURE__ */ React.createElement(Icon, { name: "filePlus", size: 16, style: { color: "var(--primary)" } }), /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, "New case \xB7 Intake"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost btn-sm", onClick: onClose }, /* @__PURE__ */ React.createElement(Icon, { name: "x", size: 14 }))), /* @__PURE__ */ React.createElement("h2", { className: "title-serif", style: { fontSize: 24 } }, "Open a new case"), /* @__PURE__ */ React.createElement("div", { className: "steps", style: { marginTop: 14 } }, stepDefs.map((s, i) => /* @__PURE__ */ React.createElement(React.Fragment, { key: s.n }, /* @__PURE__ */ React.createElement("div", { className: `step ${step === s.n ? "active" : ""} ${step > s.n ? "done" : ""}` }, /* @__PURE__ */ React.createElement("span", { className: "step-num" }, step > s.n ? "\u2713" : s.n), /* @__PURE__ */ React.createElement("span", null, s.label)), i < stepDefs.length - 1 && /* @__PURE__ */ React.createElement("span", { className: "step-line" }))))), /* @__PURE__ */ React.createElement("div", { style: { padding: "24px 28px", minHeight: 380 } }, step === 1 && /* @__PURE__ */ React.createElement(Step1, { data, update }), step === 2 && /* @__PURE__ */ React.createElement(Step2, { data, update }), step === 3 && /* @__PURE__ */ React.createElement(Step3, { data, update, missing: requiredMissing }), step === 4 && /* @__PURE__ */ React.createElement(Step4, { data, update }), step === 5 && /* @__PURE__ */ React.createElement(Step5, { data })), /* @__PURE__ */ React.createElement("div", { style: {
      padding: "14px 28px",
      borderTop: "1px solid var(--stroke-1)",
      background: "#fafaf8",
      display: "flex",
      alignItems: "center",
      gap: 10
    } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: "var(--fg-2)" } }, "Step ", step, " of 5", step === 3 && requiredMissing.length > 0 && /* @__PURE__ */ React.createElement("span", { style: { color: "#971b1b", marginLeft: 10 } }, "\xB7 ", requiredMissing.length, " required field", requiredMissing.length === 1 ? "" : "s", " missing")), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), step > 1 && /* @__PURE__ */ React.createElement(Button, { variant: "outline", onClick: () => setStep(step - 1), icon: "arrowLeft" }, "Back"), step < 5 ? /* @__PURE__ */ React.createElement(Button, { variant: "primary", disabled: !canAdvance, onClick: () => setStep(step + 1) }, "Continue", /* @__PURE__ */ React.createElement(Icon, { name: "arrowRight", size: 13 })) : /* @__PURE__ */ React.createElement(Button, { variant: "primary", onClick: () => onComplete(data), icon: "check" }, "Create case"))));
  }
  function Step1({ data, update }) {
    const types = [
      { v: "PI", label: "Personal Injury", desc: "Bodily injury claims under no-fault and tort" },
      { v: "Commercial", label: "Commercial", desc: "Contract, partnership, business disputes" },
      { v: "No-Fault", label: "No-Fault", desc: "NY no-fault arbitration" },
      { v: "Employment", label: "Employment", desc: "Workplace and labor disputes" }
    ];
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 22 } }, /* @__PURE__ */ React.createElement("label", { className: "field-label" }, "Case type"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 } }, types.map((t) => /* @__PURE__ */ React.createElement("label", { key: t.v, className: "hover-row", style: {
      padding: 14,
      border: data.caseType === t.v ? "2px solid var(--primary)" : "1px solid var(--stroke-2)",
      borderRadius: 8,
      cursor: "pointer",
      background: data.caseType === t.v ? "#fdf3f3" : "#fff",
      display: "flex",
      gap: 12
    } }, /* @__PURE__ */ React.createElement("input", { type: "radio", checked: data.caseType === t.v, onChange: () => update("caseType", t.v), style: { marginTop: 2 } }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13.5, fontWeight: 600 } }, t.label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--fg-2)", marginTop: 2 } }, t.desc)))))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "field-label" }, "Matter type"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, ["Arbitration", "Mediation"].map((m) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: m,
        type: "button",
        onClick: () => update("matter", m),
        className: "btn",
        style: {
          flex: 1,
          justifyContent: "center",
          background: data.matter === m ? "var(--bg-3)" : "#fff",
          border: "1px solid",
          borderColor: data.matter === m ? "var(--primary)" : "var(--stroke-2)",
          color: data.matter === m ? "var(--primary)" : "var(--fg-1)"
        }
      },
      m
    )))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "field-label" }, "Filing type"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => update("voluntary", true),
        className: "btn",
        style: {
          flex: 1,
          justifyContent: "center",
          background: data.voluntary ? "var(--bg-3)" : "#fff",
          border: "1px solid",
          borderColor: data.voluntary ? "var(--primary)" : "var(--stroke-2)",
          color: data.voluntary ? "var(--primary)" : "var(--fg-1)"
        }
      },
      "Voluntary"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => update("voluntary", false),
        className: "btn",
        style: {
          flex: 1,
          justifyContent: "center",
          background: !data.voluntary ? "var(--bg-3)" : "#fff",
          border: "1px solid",
          borderColor: !data.voluntary ? "var(--primary)" : "var(--stroke-2)",
          color: !data.voluntary ? "var(--primary)" : "var(--fg-1)"
        }
      },
      "Contractual"
    )))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "field-label" }, "Intake method"), /* @__PURE__ */ React.createElement("select", { className: "select", value: data.intakeMethod, onChange: (e) => update("intakeMethod", e.target.value) }, /* @__PURE__ */ React.createElement("option", { value: "online" }, "Online inquiry \xB7 myADR portal"), /* @__PURE__ */ React.createElement("option", { value: "email" }, "Email submission"), /* @__PURE__ */ React.createElement("option", { value: "phone" }, "Phone intake"), /* @__PURE__ */ React.createElement("option", { value: "referral" }, "AE referral"))));
  }
  function Step2({ data, update }) {
    return /* @__PURE__ */ React.createElement("div", null, data.respondentFirm && /* @__PURE__ */ React.createElement("div", { style: { background: "#fef2c5", border: "1px solid #f0d77a", borderRadius: 6, padding: "11px 14px", marginBottom: 18, display: "flex", gap: 10 } }, /* @__PURE__ */ React.createElement(Icon, { name: "alertTriangle", size: 15, style: { color: "#7e5403", flexShrink: 0, marginTop: 1 } }), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12.5, color: "#5a3a02" } }, /* @__PURE__ */ React.createElement("strong", null, "Possible duplicate detected."), ' "', data.respondentFirm, '" matches an existing firm record (3 prior cases, 2 active).', /* @__PURE__ */ React.createElement("a", { href: "#", onClick: (e) => e.preventDefault(), style: { color: "#7e5403", marginLeft: 4, textDecoration: "underline" } }, "Use existing record \u2192"))), /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 10 } }, "Claimant"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 18 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "field-label" }, "Claimant name"), /* @__PURE__ */ React.createElement("input", { className: "input", placeholder: "Acme Holdings LLC", value: data.claimant, onChange: (e) => update("claimant", e.target.value) })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "field-label" }, "Claimant counsel"), /* @__PURE__ */ React.createElement("input", { className: "input", placeholder: "Search firms or add new\u2026", value: data.claimantCounsel, onChange: (e) => update("claimantCounsel", e.target.value) }))), /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 10 } }, "Respondent"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 18 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "field-label" }, "Respondent firm"), /* @__PURE__ */ React.createElement("input", { className: "input", value: data.respondentFirm, onChange: (e) => update("respondentFirm", e.target.value) }), /* @__PURE__ */ React.createElement("div", { className: "field-help" }, "Linked to existing record \xB7 GEICO Group")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "field-label" }, "Claim number"), /* @__PURE__ */ React.createElement("input", { className: "input", placeholder: "PNC-2026-XXXXX", value: data.claimNumber, onChange: (e) => update("claimNumber", e.target.value) }))), /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 10 } }, "Adjuster"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "field-label" }, "Adjuster name"), /* @__PURE__ */ React.createElement("input", { className: "input", placeholder: "M. Calder\xF3n", value: data.adjuster, onChange: (e) => update("adjuster", e.target.value) })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "field-label" }, "Adjuster phone"), /* @__PURE__ */ React.createElement("input", { className: "input", placeholder: "(555) 555-0118", value: data.adjusterPhone, onChange: (e) => update("adjusterPhone", e.target.value) })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "field-label" }, "Adjuster email"), /* @__PURE__ */ React.createElement("input", { className: "input", placeholder: "m.calderon@\u2026", value: data.adjusterEmail, onChange: (e) => update("adjusterEmail", e.target.value) }))));
  }
  function Step3({ data, update, missing }) {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 18 } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: missing.length === 0 ? "#e1edd8" : "#fef2c5",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    } }, /* @__PURE__ */ React.createElement(
      Icon,
      {
        name: missing.length === 0 ? "check" : "alertTriangle",
        size: 26,
        style: { color: missing.length === 0 ? "#4a6b2a" : "#7e5403" }
      }
    )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "Libre Baskerville, serif", fontSize: 20, fontWeight: 700 } }, missing.length === 0 ? "Intake complete" : `${missing.length} required field${missing.length === 1 ? "" : "s"} missing`), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--fg-2)", marginTop: 2 } }, missing.length === 0 ? "You can proceed to fee selection and document upload." : "Complete these to prevent downstream rework. The system blocks creation until all required fields are filled."))), missing.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 0, marginBottom: 16 } }, missing.map((m, i) => /* @__PURE__ */ React.createElement("div", { key: m, className: "row gap-3", style: {
      padding: "12px 16px",
      borderBottom: i === missing.length - 1 ? 0 : "1px solid var(--stroke-1)"
    } }, /* @__PURE__ */ React.createElement("div", { style: { width: 6, height: 6, borderRadius: 999, background: "#971b1b", flexShrink: 0 } }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, fontWeight: 500 } }, m), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: "var(--fg-2)", marginLeft: "auto" } }, "Required for PI \xB7 NY"), /* @__PURE__ */ React.createElement(Button, { variant: "ghost", size: "sm", icon: "arrowLeft" }, "Step 2")))), /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 8, marginTop: 8 } }, "Soft warnings (non-blocking)"), /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 0 } }, [
      "Counsel email not provided \u2014 confirmation will go to firm general inbox.",
      "Incident date is more than 90 days ago \u2014 flag for SOL review."
    ].map((w, i) => /* @__PURE__ */ React.createElement("div", { key: w, className: "row gap-3", style: { padding: "12px 16px", borderBottom: i === 0 ? "1px solid var(--stroke-1)" : 0 } }, /* @__PURE__ */ React.createElement(Icon, { name: "alertTriangle", size: 14, style: { color: "#b75301" } }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: "var(--fg-1)" } }, w)))));
  }
  function Step4({ data, update }) {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 20 } }, /* @__PURE__ */ React.createElement("label", { className: "field-label" }, "Fee sheet"), /* @__PURE__ */ React.createElement("select", { className: "select", value: data.feeSheet, onChange: (e) => update("feeSheet", e.target.value) }, /* @__PURE__ */ React.createElement("option", null, "PI Standard 2026"), /* @__PURE__ */ React.createElement("option", null, "PI Express 2026"), /* @__PURE__ */ React.createElement("option", null, "PI No-Fault 2026"), /* @__PURE__ */ React.createElement("option", null, "Custom \u2014 admin override")), /* @__PURE__ */ React.createElement("div", { className: "field-help" }, "Auto-selected based on PI \xB7 NY \xB7 Voluntary. Admin can override.")), /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 16, marginBottom: 16, background: "var(--bg-3)", border: "1px solid var(--stroke-2)" } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-3" }, /* @__PURE__ */ React.createElement(Icon, { name: "dollar", size: 16, style: { color: "#7e5403" } }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 500 } }, "PI Standard 2026 \xB7 summary"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--fg-2)", marginTop: 2 } }, "$450 admin fee \xB7 $675/hr neutral \xB7 simultaneous-send to NY parties enabled")), /* @__PURE__ */ React.createElement(Button, { variant: "ghost", size: "sm", icon: "external" }, "Open fee sheet"))), /* @__PURE__ */ React.createElement("label", { style: { display: "flex", gap: 8, alignItems: "center", marginBottom: 22, fontSize: 13 } }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: data.feeWaiver, onChange: (e) => update("feeWaiver", e.target.checked) }), "Apply fee waiver (requires manager approval)"), /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 10 } }, "Intake documents"), /* @__PURE__ */ React.createElement("div", { style: {
      border: "2px dashed var(--stroke-2)",
      borderRadius: 8,
      padding: 28,
      textAlign: "center",
      background: "#fff",
      marginBottom: 12
    } }, /* @__PURE__ */ React.createElement(Icon, { name: "upload", size: 22, style: { color: "var(--fg-2)", marginBottom: 6 } }), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 500 } }, "Drop files here, or ", /* @__PURE__ */ React.createElement("a", { href: "#", onClick: (e) => e.preventDefault(), style: { color: "var(--primary)" } }, "browse")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11.5, color: "var(--fg-2)", marginTop: 4 } }, "PDF, MS Office, CSV, JPG, PNG, video \u2014 up to 50 MB each")), data.documents.map((d, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "row gap-3", style: { padding: "10px 14px", background: "#fff", border: "1px solid var(--stroke-1)", borderRadius: 6, marginBottom: 6 } }, /* @__PURE__ */ React.createElement(Icon, { name: "fileText", size: 14, style: { color: "var(--primary)" } }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, fontWeight: 500 } }, d.name), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11.5, color: "var(--fg-2)" } }, d.size), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement(Pill, { tone: "success", dot: true }, "Uploaded"))));
  }
  function Step5({ data }) {
    const Row = ({ k, v }) => /* @__PURE__ */ React.createElement("div", { className: "row", style: { padding: "8px 0", borderBottom: "1px dashed var(--stroke-1)", alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 170, fontSize: 12, color: "var(--fg-2)", textTransform: "uppercase", letterSpacing: "0.05em" } }, k), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13.5, fontWeight: 500 } }, v));
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "row gap-3", style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 16, style: { color: "#4a6b2a" } }), /* @__PURE__ */ React.createElement("h3", { className: "title-serif", style: { fontSize: 22 } }, "Review & confirm")), /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: "6px 18px", marginBottom: 16 } }, /* @__PURE__ */ React.createElement(Row, { k: "Case type", v: `${data.caseType} \xB7 ${data.matter} \xB7 ${data.voluntary ? "Voluntary" : "Contractual"}` }), /* @__PURE__ */ React.createElement(Row, { k: "Claimant", v: data.claimant || "\u2014" }), /* @__PURE__ */ React.createElement(Row, { k: "Respondent", v: `${data.respondentFirm} \xB7 Claim ${data.claimNumber || "\u2014"}` }), /* @__PURE__ */ React.createElement(Row, { k: "Adjuster", v: `${data.adjuster || "\u2014"} \xB7 ${data.adjusterPhone || "\u2014"}` }), /* @__PURE__ */ React.createElement(Row, { k: "Fee sheet", v: data.feeSheet }), /* @__PURE__ */ React.createElement(Row, { k: "Documents", v: `${data.documents.length} uploaded` })), /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 14, background: "#fef2c5", border: "1px solid #f0d77a" } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-2", style: { marginBottom: 6 } }, /* @__PURE__ */ React.createElement(Icon, { name: "zap", size: 14, style: { color: "#7e5403" } }), /* @__PURE__ */ React.createElement("strong", { style: { fontSize: 12.5 } }, "On creation, the system will automatically:")), /* @__PURE__ */ React.createElement("ul", { style: { margin: 0, paddingLeft: 20, fontSize: 12.5, color: "#5a3a02", lineHeight: 1.7 } }, /* @__PURE__ */ React.createElement("li", null, "Assign case number NAM-PI-204872"), /* @__PURE__ */ React.createElement("li", null, "Set 48-hour follow-up diary task"), /* @__PURE__ */ React.createElement("li", null, "Send intake confirmation to claimant counsel and respondent adjuster"), /* @__PURE__ */ React.createElement("li", null, "Notify your AE (C. Ulan)"), /* @__PURE__ */ React.createElement("li", null, "Run carrier-specific rules: GEICO stipulation field, NY simultaneous-send"))));
  }
  Object.assign(window, { IntakeWizard });
  function ScheduleHearingModal({ caseId, onClose, onScheduled }) {
    const D = window.NAM_DATA;
    const c = D.cases.find((x) => x.id === caseId);
    const [stage, setStage] = React.useState("grid");
    const [neutral, setNeutral] = React.useState("hon-calloway");
    const [slot, setSlot] = React.useState(null);
    const [location, setLocation] = React.useState("zoom");
    const [parties, setParties] = React.useState({
      claimant: true,
      claimantCounsel: true,
      respondent: true,
      respondentAdj: true,
      neutralCC: true
    });
    const days = ["Mon May 19", "Tue May 20", "Wed May 21", "Thu May 22", "Fri May 23"];
    const times = ["9:00", "10:00", "11:00", "13:30", "15:00"];
    const cells = {
      "Mon May 19_9:00": "open",
      "Mon May 19_10:00": "booked",
      "Mon May 19_11:00": "open",
      "Mon May 19_13:30": "restrict",
      "Mon May 19_15:00": "open",
      "Tue May 20_9:00": "vacation",
      "Tue May 20_10:00": "vacation",
      "Tue May 20_11:00": "vacation",
      "Tue May 20_13:30": "vacation",
      "Tue May 20_15:00": "vacation",
      "Wed May 21_9:00": "open",
      "Wed May 21_10:00": "open",
      "Wed May 21_11:00": "open",
      "Wed May 21_13:30": "open",
      "Wed May 21_15:00": "booked",
      "Thu May 22_9:00": "booked",
      "Thu May 22_10:00": "open",
      "Thu May 22_11:00": "open",
      "Thu May 22_13:30": "open",
      "Thu May 22_15:00": "open",
      "Fri May 23_9:00": "open",
      "Fri May 23_10:00": "restrict",
      "Fri May 23_11:00": "open",
      "Fri May 23_13:30": "open",
      "Fri May 23_15:00": "open"
    };
    const cellLabel = {
      open: "",
      booked: "Hearing",
      vacation: "Vacation",
      restrict: "Carrier"
    };
    const cellTone = {
      open: { bg: "#fff", color: "var(--fg-1)", border: "var(--stroke-2)" },
      booked: { bg: "#f8e3e3", color: "#7a1f1f", border: "#f0caca" },
      vacation: { bg: "#efeae4", color: "#56524d", border: "#e0d8cf" },
      restrict: { bg: "#fef2c5", color: "#7e5403", border: "#f0d77a" }
    };
    const Title = /* @__PURE__ */ React.createElement("div", { style: { padding: "20px 28px 14px", borderBottom: "1px solid var(--stroke-1)" } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-3", style: { marginBottom: 6 } }, /* @__PURE__ */ React.createElement(Icon, { name: "calendar", size: 16, style: { color: "var(--primary)" } }), /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, "Schedule hearing \xB7 ", c.id), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost btn-sm", onClick: onClose }, /* @__PURE__ */ React.createElement(Icon, { name: "x", size: 14 }))), /* @__PURE__ */ React.createElement("h2", { className: "title-serif", style: { fontSize: 24 } }, stage === "grid" && "Find an open hearing slot", stage === "location" && "Pick a location", stage === "confirm" && "Send confirmations"));
    return /* @__PURE__ */ React.createElement("div", { className: "modal-scrim", onClick: onClose }, /* @__PURE__ */ React.createElement("div", { className: "modal", style: { width: 920, maxWidth: "95vw" }, onClick: (e) => e.stopPropagation() }, Title, stage === "grid" && /* @__PURE__ */ React.createElement("div", { style: { padding: "20px 28px" } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-3", style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("label", { className: "field-label" }, "Neutral"), /* @__PURE__ */ React.createElement("select", { className: "select", value: neutral, onChange: (e) => setNeutral(e.target.value) }, /* @__PURE__ */ React.createElement("option", { value: "hon-calloway" }, "Hon. R. Calloway \xB7 NY \xB7 PI Roster \xB7 2/3 holds used"), /* @__PURE__ */ React.createElement("option", { value: "hon-marsh" }, "Hon. P. Marsh \xB7 NY, NJ \xB7 PI Roster \xB7 0/3 holds"), /* @__PURE__ */ React.createElement("option", { value: "hon-bauer" }, "Hon. T. Bauer \xB7 NY \xB7 Mediation \xB7 1/3 holds"))), /* @__PURE__ */ React.createElement("div", { style: { width: 200 } }, /* @__PURE__ */ React.createElement("label", { className: "field-label" }, "Week of"), /* @__PURE__ */ React.createElement("select", { className: "select", defaultValue: "may19" }, /* @__PURE__ */ React.createElement("option", { value: "may12" }, "May 12 \u2013 May 16"), /* @__PURE__ */ React.createElement("option", { value: "may19" }, "May 19 \u2013 May 23"), /* @__PURE__ */ React.createElement("option", { value: "may26" }, "May 26 \u2013 May 30")))), /* @__PURE__ */ React.createElement("div", { className: "row gap-4", style: { marginBottom: 10, fontSize: 11.5, color: "var(--fg-2)" } }, [
      ["open", "Available"],
      ["booked", "Booked"],
      ["vacation", "Vacation"],
      ["restrict", "Carrier-restricted"]
    ].map(([k, lbl]) => /* @__PURE__ */ React.createElement("div", { key: k, className: "row gap-2" }, /* @__PURE__ */ React.createElement("span", { style: { width: 12, height: 12, borderRadius: 3, background: cellTone[k].bg, border: "1px solid " + cellTone[k].border } }), lbl))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "60px repeat(5, 1fr)", gap: 6 } }, /* @__PURE__ */ React.createElement("div", null), days.map((d) => /* @__PURE__ */ React.createElement("div", { key: d, style: { fontSize: 11.5, fontWeight: 500, textAlign: "center", color: "var(--fg-2)", padding: "4px 0" } }, d)), times.map((t) => /* @__PURE__ */ React.createElement(React.Fragment, { key: t }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11.5, color: "var(--fg-2)", fontFamily: "IBM Plex Mono, monospace", textAlign: "right", paddingRight: 6, alignSelf: "center" } }, t), days.map((d) => {
      const k = `${d}_${t}`;
      const tone = cells[k] || "open";
      const sel = slot === k;
      const t1 = cellTone[tone];
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          key: k,
          type: "button",
          disabled: tone !== "open",
          onClick: () => setSlot(k),
          style: {
            height: 48,
            borderRadius: 6,
            padding: 6,
            background: sel ? "var(--primary)" : t1.bg,
            color: sel ? "#fff" : t1.color,
            border: "1px solid",
            borderColor: sel ? "var(--primary)" : t1.border,
            fontFamily: "inherit",
            fontSize: 11.5,
            fontWeight: 500,
            cursor: tone === "open" ? "pointer" : "default",
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }
        },
        sel ? "\u2713 Selected" : cellLabel[tone] || "Open"
      );
    })))), /* @__PURE__ */ React.createElement("div", { className: "row gap-3", style: { marginTop: 16, padding: "10px 14px", background: "var(--bg-3)", borderRadius: 6, fontSize: 12.5, color: "#5a3a02" } }, /* @__PURE__ */ React.createElement(Icon, { name: "alertTriangle", size: 14 }), "Three-hold cap: this neutral has 2 of 3 holds. One more allowed before manager approval.")), stage === "location" && /* @__PURE__ */ React.createElement("div", { style: { padding: "24px 28px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 18 } }, [
      { v: "nam", label: "NAM office", desc: "Manhattan \xB7 Long Island \xB7 NJ", icon: "home" },
      { v: "zoom", label: "Zoom", desc: "Auto-generated meeting link", icon: "video" },
      { v: "external", label: "External venue", desc: "Custom address", icon: "mapPin" }
    ].map((opt) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: opt.v,
        type: "button",
        onClick: () => setLocation(opt.v),
        style: {
          padding: 18,
          textAlign: "left",
          background: location === opt.v ? "#fdf3f3" : "#fff",
          border: "2px solid",
          borderColor: location === opt.v ? "var(--primary)" : "var(--stroke-2)",
          borderRadius: 8,
          cursor: "pointer",
          fontFamily: "inherit",
          display: "flex",
          flexDirection: "column",
          gap: 8
        }
      },
      /* @__PURE__ */ React.createElement(Icon, { name: opt.icon, size: 20, style: { color: location === opt.v ? "var(--primary)" : "var(--fg-2)" } }),
      /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 600, fontSize: 14 } }, opt.label),
      /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--fg-2)" } }, opt.desc)
    ))), location === "zoom" && /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 16, background: "#fafaf8" } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-2", style: { marginBottom: 6 } }, /* @__PURE__ */ React.createElement(Icon, { name: "video", size: 14, style: { color: "var(--primary)" } }), /* @__PURE__ */ React.createElement("strong", { style: { fontSize: 12.5 } }, "Zoom meeting will be auto-created")), /* @__PURE__ */ React.createElement("ul", { style: { margin: 0, paddingLeft: 20, fontSize: 12.5, color: "var(--fg-2)", lineHeight: 1.7 } }, /* @__PURE__ */ React.createElement("li", null, "Meeting URL generated and embedded in confirmation email"), /* @__PURE__ */ React.createElement("li", null, "Waiting room enabled \xB7 passcode auto-set"), /* @__PURE__ */ React.createElement("li", null, "Recording controls visible to neutral only")))), stage === "confirm" && /* @__PURE__ */ React.createElement("div", { style: { padding: "20px 28px" } }, /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 14, marginBottom: 16, background: "#fafaf8" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12.5, color: "var(--fg-2)" } }, "Hearing summary"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 600, marginTop: 4 } }, slot || "Wed May 21 \xB7 10:00", " \xB7 Hon. R. Calloway \xB7 ", location === "zoom" ? "Zoom" : location === "nam" ? "NAM Manhattan" : "External venue")), /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 8 } }, "Send confirmations to"), /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 0, marginBottom: 14 } }, [
      ["claimant", "Claimant", c.claimant, "a.birch@example.com"],
      ["claimantCounsel", "Claimant counsel", "Quinn & Reed PC", "jquinn@quinnreed.example"],
      ["respondent", "Respondent firm", c.respondent, "service@pinecrest.example"],
      ["respondentAdj", "Respondent adjuster", c.adjuster, "m.calderon@pinecrest.example"],
      ["neutralCC", "Neutral (cc)", "Hon. R. Calloway", "r.calloway@neutrals.nam"]
    ].map(([k, role, name, email], i, arr) => /* @__PURE__ */ React.createElement("label", { key: k, className: "row gap-3", style: {
      padding: "12px 16px",
      cursor: "pointer",
      borderBottom: i === arr.length - 1 ? 0 : "1px solid var(--stroke-1)"
    } }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: parties[k], onChange: (e) => setParties((p) => ({ ...p, [k]: e.target.checked })) }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 500 } }, role, " \xB7 ", name), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11.5, color: "var(--fg-2)", fontFamily: "IBM Plex Mono, monospace", marginTop: 2 } }, email)), /* @__PURE__ */ React.createElement(Pill, { tone: "muted" }, "Email")))), /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 14, background: "var(--bg-3)", border: "1px solid #f0d77a" } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-2", style: { marginBottom: 6 } }, /* @__PURE__ */ React.createElement(Icon, { name: "zap", size: 14, style: { color: "#7e5403" } }), /* @__PURE__ */ React.createElement("strong", { style: { fontSize: 12.5, color: "#5a3a02" } }, "Old way \xB7 10\u201315 individual sends. New way \xB7 one click.")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12.5, color: "#5a3a02" } }, "Sending will also: place calendar holds, sync to NP2, create confirmation follow-up diary (24h before hearing), update case status to Scheduled."))), /* @__PURE__ */ React.createElement("div", { style: {
      padding: "14px 28px",
      borderTop: "1px solid var(--stroke-1)",
      background: "#fafaf8",
      display: "flex",
      alignItems: "center",
      gap: 10
    } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: "var(--fg-2)" } }, stage === "grid" && (slot ? `Selected: ${slot}` : "Pick an open slot to continue"), stage === "location" && `Location: ${location}`, stage === "confirm" && `${Object.values(parties).filter(Boolean).length} recipients \xB7 1 click`), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), stage !== "grid" && /* @__PURE__ */ React.createElement(Button, { variant: "outline", icon: "arrowLeft", onClick: () => setStage(stage === "location" ? "grid" : "location") }, "Back"), stage === "grid" && /* @__PURE__ */ React.createElement(Button, { variant: "primary", disabled: !slot, onClick: () => setStage("location") }, "Continue", /* @__PURE__ */ React.createElement(Icon, { name: "arrowRight", size: 13 })), stage === "location" && /* @__PURE__ */ React.createElement(Button, { variant: "primary", onClick: () => setStage("confirm") }, "Continue", /* @__PURE__ */ React.createElement(Icon, { name: "arrowRight", size: 13 })), stage === "confirm" && /* @__PURE__ */ React.createElement(Button, { variant: "primary", icon: "send", onClick: () => onScheduled({ slot, location, parties }) }, "Send all confirmations"))));
  }
  Object.assign(window, { ScheduleHearingModal });
  function Finance({ onShowToast }) {
    const D = window.NAM_DATA;
    const [view, setView] = React.useState("queue");
    const [selected, setSelected] = React.useState(/* @__PURE__ */ new Set());
    const [paymentModal, setPaymentModal] = React.useState(false);
    const [statementModal, setStatementModal] = React.useState(false);
    return /* @__PURE__ */ React.createElement("div", { style: { overflow: "auto", height: "100%" } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "24px 28px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-3", style: { marginBottom: 6 } }, /* @__PURE__ */ React.createElement("h1", { className: "title-serif", style: { fontSize: 28 } }, "Finance"), /* @__PURE__ */ React.createElement(Pill, { tone: "muted" }, "Revenue ops \xB7 May 2026"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement(Button, { variant: "outline", icon: "dollar", onClick: () => setPaymentModal(true) }, "Record payment"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", icon: "play", onClick: () => setStatementModal(true) }, "Run statements")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--fg-2)", marginBottom: 18 } }, "Rules-driven invoicing \xB7 bulk eBilling \xB7 background statements \xB7 month-end reconciliation"), /* @__PURE__ */ React.createElement("div", { className: "tabs", style: { marginBottom: 0 } }, /* @__PURE__ */ React.createElement("button", { className: `tab ${view === "queue" ? "active" : ""}`, onClick: () => setView("queue") }, /* @__PURE__ */ React.createElement(Icon, { name: "fileText", size: 13 }), "Invoice queue", /* @__PURE__ */ React.createElement("span", { className: "tab-count" }, D.invoices.filter((i) => i.status === "pending-review" || i.status === "flagged").length)), /* @__PURE__ */ React.createElement("button", { className: `tab ${view === "ebilling" ? "active" : ""}`, onClick: () => setView("ebilling") }, /* @__PURE__ */ React.createElement(Icon, { name: "send", size: 13 }), "eBilling", /* @__PURE__ */ React.createElement("span", { className: "tab-count" }, "2")), /* @__PURE__ */ React.createElement("button", { className: `tab ${view === "dashboard" ? "active" : ""}`, onClick: () => setView("dashboard") }, /* @__PURE__ */ React.createElement(Icon, { name: "trending", size: 13 }), "Month-end"), /* @__PURE__ */ React.createElement("button", { className: `tab`, onClick: () => {
    } }, /* @__PURE__ */ React.createElement(Icon, { name: "alertTriangle", size: 13 }), "AR collections", /* @__PURE__ */ React.createElement("span", { className: "tab-count" }, "1")))), /* @__PURE__ */ React.createElement("div", { style: { padding: "20px 28px 40px" } }, view === "queue" && /* @__PURE__ */ React.createElement(InvoiceQueue, { D, selected, setSelected, onShowToast }), view === "ebilling" && /* @__PURE__ */ React.createElement(EBillingQueue, { D, onShowToast }), view === "dashboard" && /* @__PURE__ */ React.createElement(MonthEndDashboard, { D })), paymentModal && /* @__PURE__ */ React.createElement(PaymentModal, { onClose: () => setPaymentModal(false), onShowToast }), statementModal && /* @__PURE__ */ React.createElement(StatementRunModal, { onClose: () => setStatementModal(false), onShowToast }));
  }
  function InvoiceQueue({ D, selected, setSelected, onShowToast }) {
    const toggleSel = (id) => {
      const n = new Set(selected);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      setSelected(n);
    };
    const tone = {
      "pending-review": "amber",
      "approved": "success",
      "sent": "muted",
      "paid": "success",
      "flagged": "danger",
      "overdue": "danger"
    };
    const label = {
      "pending-review": "Pending review",
      "approved": "Approved \xB7 queued",
      "sent": "Sent \xB7 eBilling",
      "paid": "Paid",
      "flagged": "Flagged \xB7 review",
      "overdue": "Overdue"
    };
    const total = D.invoices.filter((i) => selected.has(i.id)).reduce((s, i) => s + i.amount, 0);
    return /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 0 } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-3", style: { padding: "14px 18px", borderBottom: "1px solid var(--stroke-1)", background: "#faf6ee" } }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, "Pending invoices"), /* @__PURE__ */ React.createElement(Pill, { tone: "amber" }, D.invoices.filter((i) => i.status === "pending-review").length, " need review"), /* @__PURE__ */ React.createElement(Pill, { tone: "danger" }, D.invoices.filter((i) => i.status === "flagged").length, " flagged by rules"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), selected.size > 0 ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12.5, color: "var(--fg-2)" } }, selected.size, " selected \xB7 ", /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "IBM Plex Mono, monospace", color: "var(--fg-1)", fontWeight: 500 } }, fmtMoney(total))), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", icon: "x", onClick: () => {
      setSelected(/* @__PURE__ */ new Set());
      onShowToast("Rejected and returned to queue.");
    } }, "Reject"), /* @__PURE__ */ React.createElement(Button, { variant: "primary", size: "sm", icon: "check", onClick: () => {
      onShowToast(`${selected.size} invoices approved \xB7 queued for eBilling.`);
      setSelected(/* @__PURE__ */ new Set());
    } }, "Approve & queue")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", size: "sm", icon: "filter" }, "Filters"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", icon: "download" }, "Export"))), /* @__PURE__ */ React.createElement("table", { className: "data" }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", { style: { width: 32, paddingLeft: 18 } }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "checkbox",
        checked: selected.size === D.invoices.filter((i) => i.status === "pending-review" || i.status === "flagged").length,
        onChange: (e) => setSelected(e.target.checked ? new Set(D.invoices.filter((i) => i.status === "pending-review" || i.status === "flagged").map((i) => i.id)) : /* @__PURE__ */ new Set())
      }
    )), /* @__PURE__ */ React.createElement("th", null, "Invoice"), /* @__PURE__ */ React.createElement("th", null, "Case \xB7 client"), /* @__PURE__ */ React.createElement("th", null, "Issued"), /* @__PURE__ */ React.createElement("th", null, "Status"), /* @__PURE__ */ React.createElement("th", null, "Rule"), /* @__PURE__ */ React.createElement("th", { style: { textAlign: "right", paddingRight: 18 } }, "Amount"))), /* @__PURE__ */ React.createElement("tbody", null, D.invoices.map((inv) => /* @__PURE__ */ React.createElement("tr", { key: inv.id }, /* @__PURE__ */ React.createElement("td", { style: { paddingLeft: 18 }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "checkbox",
        checked: selected.has(inv.id),
        onChange: () => toggleSel(inv.id),
        disabled: !["pending-review", "flagged"].includes(inv.status)
      }
    )), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "IBM Plex Mono, monospace", fontSize: 12.5, fontWeight: 500 } }, inv.id), inv.warning && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11.5, color: "#971b1b", marginTop: 3 } }, /* @__PURE__ */ React.createElement(Icon, { name: "alertTriangle", size: 11 }), " ", inv.warning)), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 500 } }, inv.client), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11.5, color: "var(--fg-2)", fontFamily: "IBM Plex Mono, monospace", marginTop: 2 } }, inv.case)), /* @__PURE__ */ React.createElement("td", { style: { fontSize: 12.5, color: "var(--fg-2)" } }, fmtDate(inv.issued)), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement(Pill, { tone: tone[inv.status], dot: true }, label[inv.status]), inv.daysOverdue && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#971b1b", marginTop: 3 } }, inv.daysOverdue, " days past due"), inv.sentVia && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--fg-2)", marginTop: 3 } }, inv.sentVia)), /* @__PURE__ */ React.createElement("td", { style: { fontSize: 12, color: "var(--fg-2)" } }, inv.rule || "\u2014"), /* @__PURE__ */ React.createElement("td", { style: { textAlign: "right", paddingRight: 18, fontFamily: "IBM Plex Mono, monospace", fontSize: 13, fontWeight: 500 } }, fmtMoney(inv.amount)))))));
  }
  function EBillingQueue({ D, onShowToast }) {
    const ready = D.invoices.filter((i) => i.status === "approved").concat([
      { id: "INV-2026-04420", case: "NAM-PI-204760", client: "Heritage Mutual", amount: 1850, status: "approved" },
      { id: "INV-2026-04421", case: "NAM-PI-204306", client: "GeoSurety Insurance", amount: 2100, status: "approved" }
    ]);
    const [batch, setBatch] = React.useState(new Set(ready.map((i) => i.id)));
    const [running, setRunning] = React.useState(false);
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 18, marginBottom: 16, background: "var(--bg-3)", border: "1px solid #f0d77a" } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-3" }, /* @__PURE__ */ React.createElement(Icon, { name: "zap", size: 20, style: { color: "#7e5403" } }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "Libre Baskerville, serif", fontSize: 17, fontWeight: 700, color: "#5a3a02" } }, "No 20-invoice cap."), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12.5, color: "#5a3a02", marginTop: 2 } }, "Send any number in a single batch. Background processing \u2014 navigate away while it runs.")))), /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 0 } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-3", style: { padding: "14px 18px", borderBottom: "1px solid var(--stroke-1)", background: "#faf6ee" } }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, "Ready to send"), /* @__PURE__ */ React.createElement(Pill, { tone: "success" }, batch.size, " of ", ready.length, " selected"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement(
      Button,
      {
        variant: "primary",
        icon: "send",
        disabled: running || batch.size === 0,
        onClick: () => {
          setRunning(true);
          setTimeout(() => {
            setRunning(false);
            onShowToast(`${batch.size} invoices sent via eBilling. Background batch complete.`);
            setBatch(/* @__PURE__ */ new Set());
          }, 2400);
        }
      },
      running ? `Sending ${batch.size}\u2026` : `Send batch (${batch.size})`
    )), running && /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 18px", background: "#fdf3f3", borderBottom: "1px solid var(--stroke-1)" } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-3", style: { marginBottom: 6 } }, /* @__PURE__ */ React.createElement(Icon, { name: "play", size: 13, style: { color: "var(--primary)" } }), /* @__PURE__ */ React.createElement("strong", { style: { fontSize: 12.5 } }, "Batch running in background"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11.5, color: "var(--fg-2)", fontFamily: "IBM Plex Mono, monospace", marginLeft: "auto" } }, "est. 30s")), /* @__PURE__ */ React.createElement("div", { style: { height: 4, background: "#f0caca", borderRadius: 999, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { className: "ebill-progress", style: { height: "100%", background: "var(--primary)", width: "0%" } }))), /* @__PURE__ */ React.createElement("table", { className: "data" }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", { style: { paddingLeft: 18, width: 32 } }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: batch.size === ready.length, onChange: (e) => setBatch(e.target.checked ? new Set(ready.map((i) => i.id)) : /* @__PURE__ */ new Set()) })), /* @__PURE__ */ React.createElement("th", null, "Invoice"), /* @__PURE__ */ React.createElement("th", null, "Client"), /* @__PURE__ */ React.createElement("th", null, "Case"), /* @__PURE__ */ React.createElement("th", { style: { textAlign: "right", paddingRight: 18 } }, "Amount"))), /* @__PURE__ */ React.createElement("tbody", null, ready.map((i) => /* @__PURE__ */ React.createElement("tr", { key: i.id }, /* @__PURE__ */ React.createElement("td", { style: { paddingLeft: 18 }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: batch.has(i.id), onChange: () => {
      const n = new Set(batch);
      n.has(i.id) ? n.delete(i.id) : n.add(i.id);
      setBatch(n);
    } })), /* @__PURE__ */ React.createElement("td", { style: { fontFamily: "IBM Plex Mono, monospace", fontSize: 12.5, fontWeight: 500 } }, i.id), /* @__PURE__ */ React.createElement("td", null, i.client), /* @__PURE__ */ React.createElement("td", { style: { fontFamily: "IBM Plex Mono, monospace", fontSize: 12, color: "var(--fg-2)" } }, i.case), /* @__PURE__ */ React.createElement("td", { style: { textAlign: "right", paddingRight: 18, fontFamily: "IBM Plex Mono, monospace", fontSize: 13, fontWeight: 500 } }, fmtMoney(i.amount))))))), /* @__PURE__ */ React.createElement("style", null, `@keyframes ebillFill{0%{width:0%}100%{width:100%}}.ebill-progress{animation:ebillFill 2.4s linear forwards}`));
  }
  function MonthEndDashboard({ D }) {
    const stats = [
      { label: "Revenue \xB7 MTD", val: "$184,210", delta: "+12% vs forecast", tone: "success" },
      { label: "Outstanding AR", val: "$48,920", delta: "5 invoices > 30 days", tone: "warn" },
      { label: "Invoices sent", val: "317", delta: "across 4 batches", tone: "muted" },
      { label: "Exceptions", val: "3", delta: "down from 18 last month", tone: "success" }
    ];
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 18 } }, stats.map((s) => /* @__PURE__ */ React.createElement("div", { key: s.label, className: "stat-card" }, /* @__PURE__ */ React.createElement("div", { className: "stat-label" }, s.label), /* @__PURE__ */ React.createElement("div", { className: "stat-num" }, s.val), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11.5, color: s.tone === "warn" ? "#971b1b" : "var(--fg-2)" } }, s.delta)))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16, marginBottom: 16 } }, /* @__PURE__ */ React.createElement("div", { className: "card card-pad" }, /* @__PURE__ */ React.createElement("div", { className: "section-h" }, /* @__PURE__ */ React.createElement("h3", { className: "title-serif" }, "Actuals vs. expected"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: "var(--fg-2)" } }, "through May 7")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-end", gap: 14, height: 160, paddingTop: 10 } }, [
      ["Wk 1", 88, 92],
      ["Wk 2", 76, 71],
      ["Wk 3", 94, 98],
      ["Wk 4", 102, 110],
      ["Wk 5", 42, 48]
    ].map(([w, exp, act]) => /* @__PURE__ */ React.createElement("div", { key: w, style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4, alignItems: "flex-end", height: 130 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 18, height: `${exp}%`, background: "#e5d9bf", borderRadius: "4px 4px 0 0" }, title: "Expected" }), /* @__PURE__ */ React.createElement("div", { style: { width: 18, height: `${act}%`, background: "var(--primary)", borderRadius: "4px 4px 0 0" }, title: "Actual" })), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--fg-2)", fontFamily: "IBM Plex Mono, monospace" } }, w)))), /* @__PURE__ */ React.createElement("div", { className: "row gap-4", style: { marginTop: 14, fontSize: 11.5, color: "var(--fg-2)" } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-2" }, /* @__PURE__ */ React.createElement("span", { style: { width: 10, height: 10, background: "#e5d9bf" } }), "Expected"), /* @__PURE__ */ React.createElement("div", { className: "row gap-2" }, /* @__PURE__ */ React.createElement("span", { style: { width: 10, height: 10, background: "var(--primary)" } }), "Actual"))), /* @__PURE__ */ React.createElement("div", { className: "card card-pad" }, /* @__PURE__ */ React.createElement("div", { className: "section-h" }, /* @__PURE__ */ React.createElement("h3", { className: "title-serif" }, "AR aging")), [
      ["0\u201330 days", 38420, 84, "success"],
      ["31\u201360 days", 7800, 12, "warn"],
      ["61\u201390 days", 1850, 3, "rust"],
      ["90+ days", 850, 1, "danger"]
    ].map(([bucket, amt, pct, tone]) => /* @__PURE__ */ React.createElement("div", { key: bucket, style: { marginBottom: 10 } }, /* @__PURE__ */ React.createElement("div", { className: "row", style: { marginBottom: 4 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12.5 } }, bucket), /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "IBM Plex Mono, monospace", fontSize: 12.5, fontWeight: 500 } }, fmtMoney(amt))), /* @__PURE__ */ React.createElement("div", { style: { height: 6, background: "var(--bg-2)", borderRadius: 999, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: {
      height: "100%",
      width: `${pct}%`,
      background: tone === "success" ? "#7a9b4a" : tone === "warn" ? "#b75301" : tone === "rust" ? "#8f4113" : "#971b1b"
    } })))))), /* @__PURE__ */ React.createElement("div", { className: "card card-pad" }, /* @__PURE__ */ React.createElement("div", { className: "section-h" }, /* @__PURE__ */ React.createElement("h3", { className: "title-serif" }, "Exceptions to investigate"), /* @__PURE__ */ React.createElement(Pill, { tone: "amber" }, "3 open")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column" } }, [
      { rule: "$0 invoice deletion rule", case: "NAM-PI-204411", detail: "INV-2026-04414 is $0 \u2014 flagged before posting." },
      { rule: "NY simultaneous send", case: "NAM-PI-204760", detail: "Send to claimant + respondent in one transaction." },
      { rule: "Express rate uprate", case: "NAM-PI-204306", detail: "Admin fee should reflect express schedule (+$120)." }
    ].map((e, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "row gap-3", style: { padding: "12px 0", borderBottom: i === 2 ? 0 : "1px dashed var(--stroke-1)" } }, /* @__PURE__ */ React.createElement(Icon, { name: "alertTriangle", size: 14, style: { color: "#b75301" } }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 500 } }, e.rule), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--fg-2)", marginTop: 2 } }, e.case, " \xB7 ", e.detail)), /* @__PURE__ */ React.createElement(Button, { variant: "ghost", size: "sm" }, "Resolve"))))));
  }
  function PaymentModal({ onClose, onShowToast }) {
    const D = window.NAM_DATA;
    const [amount, setAmount] = React.useState("3950.00");
    const [method, setMethod] = React.useState("check");
    const [applyTo, setApplyTo] = React.useState({
      "INV-2026-04419": 1850,
      "INV-2026-04418": 2100
    });
    const [overpay, setOverpay] = React.useState("apply");
    const total = Object.values(applyTo).reduce((s, n) => s + Number(n || 0), 0);
    const diff = Number(amount) - total;
    return /* @__PURE__ */ React.createElement("div", { className: "modal-scrim", onClick: onClose }, /* @__PURE__ */ React.createElement("div", { className: "modal", style: { width: 640, maxWidth: "94vw" }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("div", { style: { padding: "20px 28px 14px", borderBottom: "1px solid var(--stroke-1)" } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-3" }, /* @__PURE__ */ React.createElement(Icon, { name: "dollar", size: 16, style: { color: "var(--primary)" } }), /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, "Record payment"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost btn-sm", onClick: onClose }, /* @__PURE__ */ React.createElement(Icon, { name: "x", size: 14 }))), /* @__PURE__ */ React.createElement("h2", { className: "title-serif", style: { fontSize: 22, marginTop: 6 } }, "Apply payment to invoices")), /* @__PURE__ */ React.createElement("div", { style: { padding: "20px 28px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "field-label" }, "Amount received"), /* @__PURE__ */ React.createElement("input", { className: "input", value: amount, onChange: (e) => setAmount(e.target.value), style: { fontFamily: "IBM Plex Mono, monospace" } })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { className: "field-label" }, "Method"), /* @__PURE__ */ React.createElement("select", { className: "select", value: method, onChange: (e) => setMethod(e.target.value) }, /* @__PURE__ */ React.createElement("option", { value: "check" }, "Check (#84012 \xB7 Heritage Mutual)"), /* @__PURE__ */ React.createElement("option", { value: "ach" }, "ACH / Lockstep"), /* @__PURE__ */ React.createElement("option", { value: "cc" }, "Credit card"), /* @__PURE__ */ React.createElement("option", { value: "portal" }, "Client portal payment")))), /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 8 } }, "Apply to invoices"), /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 0, marginBottom: 14 } }, Object.keys(applyTo).map((id, i, arr) => {
      const inv = D.invoices.find((x) => x.id === id) || { id, client: "Heritage Mutual", case: "NAM-PI-204760", amount: applyTo[id] };
      return /* @__PURE__ */ React.createElement("div", { key: id, className: "row gap-3", style: { padding: "12px 16px", borderBottom: i === arr.length - 1 ? 0 : "1px solid var(--stroke-1)" } }, /* @__PURE__ */ React.createElement(Icon, { name: "fileText", size: 14, style: { color: "var(--primary)" } }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 500, fontFamily: "IBM Plex Mono, monospace" } }, id), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11.5, color: "var(--fg-2)" } }, inv.client, " \xB7 ", inv.case)), /* @__PURE__ */ React.createElement(
        "input",
        {
          className: "input",
          value: applyTo[id],
          style: { width: 110, textAlign: "right", fontFamily: "IBM Plex Mono, monospace" },
          onChange: (e) => setApplyTo({ ...applyTo, [id]: e.target.value })
        }
      ));
    })), /* @__PURE__ */ React.createElement("div", { className: "row gap-3", style: {
      padding: "12px 14px",
      borderRadius: 6,
      background: diff > 0 ? "#fef2c5" : diff < 0 ? "#f8d6d6" : "#e1edd8",
      border: "1px solid",
      borderColor: diff > 0 ? "#f0d77a" : diff < 0 ? "#f0caca" : "#c0d3a6"
    } }, /* @__PURE__ */ React.createElement(Icon, { name: diff === 0 ? "check" : "alertTriangle", size: 14, style: { color: diff > 0 ? "#7e5403" : diff < 0 ? "#971b1b" : "#4a6b2a" } }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, fontSize: 12.5 } }, diff === 0 && /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("strong", null, "Fully applied."), " ", fmtMoney(Number(amount)), " matches invoices."), diff > 0 && /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("strong", null, "Overpayment of ", fmtMoney(diff), "."), " Choose what to do with the surplus."), diff < 0 && /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("strong", null, fmtMoney(-diff), " short."), " Reduce applied amounts or change total.")), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "IBM Plex Mono, monospace", fontSize: 12.5, fontWeight: 500 } }, fmtMoney(total), " of ", fmtMoney(Number(amount)))), diff > 0 && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12, display: "flex", gap: 8 } }, [["apply", "Apply to balance"], ["ledger", "Hold in ledger"], ["refund", "Issue refund"]].map(([v, lbl]) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: v,
        type: "button",
        onClick: () => setOverpay(v),
        className: "btn",
        style: {
          flex: 1,
          justifyContent: "center",
          background: overpay === v ? "var(--bg-3)" : "#fff",
          border: "1px solid",
          borderColor: overpay === v ? "var(--primary)" : "var(--stroke-2)",
          color: overpay === v ? "var(--primary)" : "var(--fg-1)"
        }
      },
      lbl
    )))), /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 28px", borderTop: "1px solid var(--stroke-1)", background: "#fafaf8", display: "flex", gap: 10 } }, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", onClick: onClose }, "Cancel"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement(Button, { variant: "primary", icon: "check", onClick: () => {
      onShowToast(`Payment of ${fmtMoney(Number(amount))} recorded across ${Object.keys(applyTo).length} invoices.`);
      onClose();
    } }, "Record payment"))));
  }
  function StatementRunModal({ onClose, onShowToast }) {
    const [running, setRunning] = React.useState(false);
    const [progress, setProgress] = React.useState(0);
    const [done, setDone] = React.useState(false);
    React.useEffect(() => {
      if (!running) return;
      const t = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            clearInterval(t);
            setDone(true);
            setRunning(false);
            return 100;
          }
          return p + 3;
        });
      }, 60);
      return () => clearInterval(t);
    }, [running]);
    return /* @__PURE__ */ React.createElement("div", { className: "modal-scrim", onClick: onClose }, /* @__PURE__ */ React.createElement("div", { className: "modal", style: { width: 540 }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("div", { style: { padding: "20px 24px 14px", borderBottom: "1px solid var(--stroke-1)" } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-3" }, /* @__PURE__ */ React.createElement(Icon, { name: "play", size: 16, style: { color: "var(--primary)" } }), /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, "Statement generation"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost btn-sm", onClick: onClose }, /* @__PURE__ */ React.createElement(Icon, { name: "x", size: 14 }))), /* @__PURE__ */ React.createElement("h2", { className: "title-serif", style: { fontSize: 22, marginTop: 6 } }, "Run monthly statements")), /* @__PURE__ */ React.createElement("div", { style: { padding: "20px 24px" } }, /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 14, marginBottom: 14, background: "var(--bg-3)", border: "1px solid #f0d77a" } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-2", style: { marginBottom: 4 } }, /* @__PURE__ */ React.createElement(Icon, { name: "zap", size: 14, style: { color: "#7e5403" } }), /* @__PURE__ */ React.createElement("strong", { style: { fontSize: 12.5, color: "#5a3a02" } }, "Background job \xB7 runs any time of day.")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "#5a3a02" } }, "No after-hours requirement. No system crash. You can navigate away.")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", { className: "row", style: { marginBottom: 6 } }, /* @__PURE__ */ React.createElement("span", null, "Cycle"), /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement("strong", null, "April 2026 \xB7 1,247 statements")), /* @__PURE__ */ React.createElement("div", { className: "row", style: { marginBottom: 6 } }, /* @__PURE__ */ React.createElement("span", null, "Eligible accounts"), /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement("strong", null, "1,184")), /* @__PURE__ */ React.createElement("div", { className: "row", style: { marginBottom: 6 } }, /* @__PURE__ */ React.createElement("span", null, "Holds / suppressions"), /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement("strong", null, "63")), /* @__PURE__ */ React.createElement("div", { className: "row" }, /* @__PURE__ */ React.createElement("span", null, "Estimated runtime"), /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement("strong", null, "~28 minutes"))), (running || done) && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 8 } }, /* @__PURE__ */ React.createElement("div", { className: "row", style: { marginBottom: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12.5 } }, done ? "Complete" : `Running\u2026 ${Math.round(progress * 11.84)} of 1,184`), /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "IBM Plex Mono, monospace", fontSize: 12.5, fontWeight: 500 } }, progress, "%")), /* @__PURE__ */ React.createElement("div", { style: { height: 6, background: "var(--bg-2)", borderRadius: 999, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { height: "100%", width: `${progress}%`, background: done ? "#7a9b4a" : "var(--primary)", transition: "width 60ms linear" } })))), /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 24px", borderTop: "1px solid var(--stroke-1)", background: "#fafaf8", display: "flex", gap: 10 } }, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", onClick: onClose }, done ? "Close" : "Cancel"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), !running && !done && /* @__PURE__ */ React.createElement(Button, { variant: "primary", icon: "play", onClick: () => setRunning(true) }, "Start run"), running && /* @__PURE__ */ React.createElement(Button, { variant: "outline", disabled: true }, "Running\u2026"), done && /* @__PURE__ */ React.createElement(Button, { variant: "primary", icon: "check", onClick: () => {
      onShowToast("Statement run complete \xB7 1,184 statements pushed to client portal.");
      onClose();
    } }, "Done"))));
  }
  Object.assign(window, { Finance });
  function StatusChangeModal({ caseId, onClose, onConfirm }) {
    const D = window.NAM_DATA;
    const c = D.cases.find((x) => x.id === caseId);
    const cur = D.statuses[c.status];
    const allowed = cur.next;
    const [newStatus, setNewStatus] = React.useState(allowed[0] || "");
    const [reason, setReason] = React.useState("");
    const [note, setNote] = React.useState("");
    const reasonsByStatus = {
      "open": ["Intake complete", "Returned from hold", "Re-opened by manager"],
      "scheduled": ["Hearing date confirmed", "Date hold converted", "Rescheduled"],
      "on-hold": ["Awaiting respondent counsel", "Awaiting party documentation", "Settlement discussion in progress", "Adjuster unreachable"],
      "adjourned": ["Party request", "Neutral conflict", "Court of competent jurisdiction", "Settlement pending"],
      "settled": ["Settled before hearing", "Settled at hearing", "Settled post-hearing"],
      "closed": ["No further action", "Withdrawn", "Administratively closed"],
      "hearing": ["Hearing in session"]
    };
    const reasons = reasonsByStatus[newStatus] || [];
    const consequences = {
      "open": ["Case removed from new-intake queue", "48-hour follow-up diary closed if open"],
      "scheduled": ["Confirmation diary created \xB7 24h before hearing", "Calendar holds released except chosen slot"],
      "on-hold": ["SLA timer paused", "Diary auto-rolls until manually advanced", "AE notified"],
      "adjourned": ["Adjournment fee invoice auto-generated", "New scheduling diary created"],
      "settled": ["Final settlement invoice generated", "Neutral payable run triggered", "Documents flagged for archival"],
      "closed": ["Case archived after 30-day retention", "Removed from active queues", "Final statement queued"]
    };
    const cons = consequences[newStatus] || [];
    return /* @__PURE__ */ React.createElement("div", { className: "modal-scrim", onClick: onClose }, /* @__PURE__ */ React.createElement("div", { className: "modal", style: { width: 560 }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("div", { style: { padding: "20px 24px 14px", borderBottom: "1px solid var(--stroke-1)" } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-3", style: { marginBottom: 6 } }, /* @__PURE__ */ React.createElement(Icon, { name: "refresh", size: 16, style: { color: "var(--primary)" } }), /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, "Change case status"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost btn-sm", onClick: onClose }, /* @__PURE__ */ React.createElement(Icon, { name: "x", size: 14 }))), /* @__PURE__ */ React.createElement("div", { className: "row gap-3", style: { marginTop: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "IBM Plex Mono, monospace", fontSize: 12, color: "var(--fg-2)" } }, c.id), /* @__PURE__ */ React.createElement(StatusPill, { status: c.status }), /* @__PURE__ */ React.createElement(Icon, { name: "arrowRight", size: 13, style: { color: "var(--fg-2)" } }), newStatus && /* @__PURE__ */ React.createElement(StatusPill, { status: newStatus }))), /* @__PURE__ */ React.createElement("div", { style: { padding: "20px 24px" } }, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 16 } }, /* @__PURE__ */ React.createElement("label", { className: "field-label" }, "New status"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 } }, allowed.map((s) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: s,
        type: "button",
        onClick: () => {
          setNewStatus(s);
          setReason("");
        },
        style: {
          padding: "10px 14px",
          textAlign: "left",
          background: newStatus === s ? "#fdf3f3" : "#fff",
          border: "2px solid",
          borderColor: newStatus === s ? "var(--primary)" : "var(--stroke-2)",
          borderRadius: 6,
          cursor: "pointer",
          fontFamily: "inherit"
        }
      },
      /* @__PURE__ */ React.createElement(StatusPill, { status: s })
    ))), /* @__PURE__ */ React.createElement("div", { className: "field-help" }, "Only allowed transitions are shown \u2014 admin-configurable.")), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement("label", { className: "field-label" }, "Reason"), /* @__PURE__ */ React.createElement("select", { className: "select", value: reason, onChange: (e) => setReason(e.target.value) }, /* @__PURE__ */ React.createElement("option", { value: "" }, "Select a reason\u2026"), reasons.map((r) => /* @__PURE__ */ React.createElement("option", { key: r, value: r }, r)))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 16 } }, /* @__PURE__ */ React.createElement("label", { className: "field-label" }, "Note (optional \xB7 visible to case team)"), /* @__PURE__ */ React.createElement(
      "textarea",
      {
        className: "textarea",
        value: note,
        onChange: (e) => setNote(e.target.value),
        placeholder: "Any context for the team\u2026"
      }
    )), cons.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 14, background: "var(--bg-4)", border: "1px solid #f0d77a" } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-2", style: { marginBottom: 6 } }, /* @__PURE__ */ React.createElement(Icon, { name: "zap", size: 14, style: { color: "#7e5403" } }), /* @__PURE__ */ React.createElement("strong", { style: { fontSize: 12.5, color: "#5a3a02" } }, "What happens automatically:")), /* @__PURE__ */ React.createElement("ul", { style: { margin: 0, paddingLeft: 18, fontSize: 12.5, color: "#5a3a02", lineHeight: 1.7 } }, cons.map((c2, i) => /* @__PURE__ */ React.createElement("li", { key: i }, c2))))), /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 24px", borderTop: "1px solid var(--stroke-1)", background: "#fafaf8", display: "flex", gap: 10 } }, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", onClick: onClose }, "Cancel"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement(
      Button,
      {
        variant: "primary",
        icon: "check",
        disabled: !newStatus || !reason,
        onClick: () => onConfirm(newStatus, reason)
      },
      "Confirm change"
    ))));
  }
  Object.assign(window, { StatusChangeModal });
  var TWEAK_DEFAULTS = (
    /*EDITMODE-BEGIN*/
    {
      "density": "comfy",
      "serifTitles": true,
      "showFlags": true,
      "primary": "#0A264D"
    }
  );
  function App() {
    const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
    const [route, setRoute] = React.useState({ view: "dashboard" });
    const [intakeOpen, setIntakeOpen] = React.useState(false);
    const [scheduleOpen, setScheduleOpen] = React.useState(null);
    const [statusOpen, setStatusOpen] = React.useState(null);
    const [toasts, setToasts] = React.useState([]);
    const [openTab, setOpenTab] = React.useState("overview");
    const showToast = React.useCallback((msg) => {
      const id = Date.now() + Math.random();
      setToasts((ts) => [...ts, { id, msg }]);
      setTimeout(() => setToasts((ts) => ts.filter((t2) => t2.id !== id)), 3800);
    }, []);
    const densityPad = { compact: "12px 18px", regular: "14px 14px", comfy: "18px 16px" }[t.density];
    const goToCase = (id) => {
      setRoute({ view: "case", id });
      setOpenTab("overview");
    };
    const goBack = () => setRoute({ view: "cases" });
    return /* @__PURE__ */ React.createElement("div", { style: {
      display: "grid",
      gridTemplateColumns: "232px 1fr",
      height: "100vh",
      "--primary": t.primary
    } }, /* @__PURE__ */ React.createElement(
      Sidebar,
      {
        active: route.view === "dashboard" ? "home" : route.view,
        counts: { tasks: 14, cases: 23, inbox: 6 },
        onNav: (v) => {
          if (v === "intake") {
            setIntakeOpen(true);
            return;
          }
          if (typeof v === "string" && v.startsWith("case:")) {
            goToCase(v.slice(5));
            return;
          }
          if (v === "home") {
            setRoute({ view: "dashboard" });
            return;
          }
          setRoute({ view: v });
        }
      }
    ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", overflow: "hidden", background: "var(--bg-1)" } }, /* @__PURE__ */ React.createElement(TopBar, { onSearch: () => setRoute({ view: "cases" }) }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflow: "hidden" } }, route.view === "dashboard" && /* @__PURE__ */ React.createElement(
      Dashboard,
      {
        onOpenCase: goToCase,
        onIntake: () => setIntakeOpen(true),
        onOpenList: () => setRoute({ view: "cases" }),
        showFlags: t.showFlags
      }
    ), route.view === "cases" && /* @__PURE__ */ React.createElement(CaseList, { onOpenCase: goToCase }), route.view === "case" && /* @__PURE__ */ React.createElement(
      CaseDetail,
      {
        caseId: route.id,
        onBack: goBack,
        openTab,
        setOpenTab,
        onOpenStatusModal: () => setStatusOpen(route.id),
        onOpenSchedule: () => setScheduleOpen(route.id),
        onShowToast: showToast
      }
    ), route.view === "finance" && /* @__PURE__ */ React.createElement(Finance, { onShowToast: showToast }), (route.view === "tasks" || route.view === "hearings" || route.view === "reports" || route.view === "admin") && /* @__PURE__ */ React.createElement(PlaceholderView, { label: route.view, onBack: () => setRoute({ view: "dashboard" }) }))), intakeOpen && /* @__PURE__ */ React.createElement(
      IntakeWizard,
      {
        onClose: () => setIntakeOpen(false),
        onComplete: () => {
          setIntakeOpen(false);
          showToast("Case NAM-PI-204872 created \xB7 48-hour follow-up diary set \xB7 AE notified.");
        }
      }
    ), scheduleOpen && /* @__PURE__ */ React.createElement(
      ScheduleHearingModal,
      {
        caseId: scheduleOpen,
        onClose: () => setScheduleOpen(null),
        onScheduled: ({ slot }) => {
          setScheduleOpen(null);
          showToast(`Hearing scheduled for ${slot || "Wed May 21 \xB7 10:00"} \xB7 all confirmations sent.`);
        }
      }
    ), statusOpen && /* @__PURE__ */ React.createElement(
      StatusChangeModal,
      {
        caseId: statusOpen,
        onClose: () => setStatusOpen(null),
        onConfirm: (s, r) => {
          setStatusOpen(null);
          showToast(`Status changed \u2192 ${s} \xB7 reason: ${r}`);
        }
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "toast-stack" }, toasts.map((t2) => /* @__PURE__ */ React.createElement("div", { key: t2.id, className: "toast" }, /* @__PURE__ */ React.createElement(Icon, { name: "check", size: 14, style: { color: "#7a9b4a" } }), t2.msg))), /* @__PURE__ */ React.createElement(TweaksPanel, { title: "Prototype tweaks" }, /* @__PURE__ */ React.createElement(TweakSection, { label: "Density" }), /* @__PURE__ */ React.createElement(
      TweakRadio,
      {
        label: "Row density",
        value: t.density,
        options: ["compact", "regular", "comfy"],
        onChange: (v) => setTweak("density", v)
      }
    ), /* @__PURE__ */ React.createElement(TweakSection, { label: "Visual" }), /* @__PURE__ */ React.createElement(
      TweakColor,
      {
        label: "Primary",
        value: t.primary,
        options: ["#0A264D", "#1E2430", "#9e2c2c", "#b75301"],
        onChange: (v) => setTweak("primary", v)
      }
    ), /* @__PURE__ */ React.createElement(
      TweakToggle,
      {
        label: "Serif page titles",
        value: t.serifTitles,
        onChange: (v) => setTweak("serifTitles", v)
      }
    ), /* @__PURE__ */ React.createElement(
      TweakToggle,
      {
        label: "Show NY flag bars",
        value: t.showFlags,
        onChange: (v) => setTweak("showFlags", v)
      }
    ), /* @__PURE__ */ React.createElement(TweakSection, { label: "Demo" }), /* @__PURE__ */ React.createElement(TweakButton, { label: "Trigger toast", onClick: () => showToast("Toast preview \xB7 this is what notifications look like.") })), /* @__PURE__ */ React.createElement("style", null, `
        ${!t.serifTitles ? ".title-serif{font-family:var(--font-sans)!important;font-weight:600!important;letter-spacing:-0.01em!important}" : ""}
        ${!t.showFlags ? ".row-flag{box-shadow:none!important}" : ""}
        ${t.density === "compact" ? "table.data td{padding:8px 14px}table.data th{padding:8px 14px}.feed-item{padding:9px 0}.nav-row{padding:5px 10px}" : ""}
        ${t.density === "comfy" ? "table.data td{padding:16px 14px}.feed-item{padding:16px 0}.nav-row{padding:9px 10px}" : ""}
      `));
  }
  function PlaceholderView({ label, onBack }) {
    const titles = {
      tasks: { title: "My tasks", desc: "First-class task model \xB7 auto-rollover \xB7 SLA \xB7 linked to source events." },
      hearings: { title: "Hearings", desc: "Combined availability grid \xB7 bulk confirmations \xB7 NP2 sync." },
      reports: { title: "Reports", desc: "Self-service reporting \xB7 saved views \xB7 favorites." },
      admin: { title: "Admin & configuration", desc: "Statuses \xB7 fee sheets \xB7 roles \xB7 client-specific rules \u2014 all front-end editable." }
    };
    const m = titles[label] || { title: label, desc: "" };
    return /* @__PURE__ */ React.createElement("div", { style: { padding: 40, maxWidth: 720 } }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost btn-sm", onClick: onBack }, /* @__PURE__ */ React.createElement(Icon, { name: "arrowLeft", size: 13 }), "Back to dashboard"), /* @__PURE__ */ React.createElement("h1", { className: "title-serif", style: { fontSize: 32, marginTop: 18 } }, m.title), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 15, color: "var(--fg-2)", marginTop: 8, maxWidth: 520 } }, m.desc), /* @__PURE__ */ React.createElement("div", { className: "card card-pad", style: { marginTop: 20, background: "var(--bg-3)", border: "1px solid #f0d77a" } }, /* @__PURE__ */ React.createElement("div", { className: "row gap-2", style: { marginBottom: 6 } }, /* @__PURE__ */ React.createElement(Icon, { name: "zap", size: 14, style: { color: "#7e5403" } }), /* @__PURE__ */ React.createElement("strong", { style: { fontSize: 13, color: "#5a3a02" } }, "Out of P1 scope for this prototype.")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "#5a3a02" } }, "The PI Case Manager daily flow lives in Dashboard, Cases, Case Detail, and Finance. This module would be designed in a follow-up pass.")));
  }
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
})();
