# NAM CMS 2.0 — Case Manager Portal
## Product Requirements Document

| | |
|---|---|
| **Version** | 1.0 — Discovery Synthesis |
| **Status** | Draft — Design Ready |
| **Date** | May 2026 |
| **Author** | Johan Sadie, Symphony |
| **Client** | NAM (National Arbitration Management) |
| **Scope** | Case Manager Portal (Internal) |
| **Source** | 60 session recordings, 17h 24m observed |
| **Purpose** | Design prototype spec |

> **How to use this document:** This PRD gives a designer enough information to build a clickable prototype of the Case Manager Portal. Each module section contains: the current pain (what is broken today), the requirements (what the new system must do), the screens to design (what to prototype), and the key interactions and states to include.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Product Context](#2-product-context)
3. [Users & Personas](#3-users--personas)
4. [Problem Statement](#4-problem-statement)
5. [Product Scope](#5-product-scope)
6. [Core User Flows](#6-core-user-flows)
7. [Feature Requirements by Module](#7-feature-requirements-by-module)
8. [Screens to Design — Prototype Checklist](#8-screens-to-design--prototype-checklist)
9. [Design Requirements](#9-design-requirements)
10. [Non-Functional Requirements](#10-non-functional-requirements)
11. [Success Metrics](#11-success-metrics)
12. [Open Questions](#12-open-questions-for-next-discovery-phase)
- [Appendix: Discovery Sources](#appendix-discovery-sources)

---

## 1. Executive Summary

NAM is replacing a 30-year-old ColdFusion case management system with a modern three-interface platform. The **Case Manager Portal** is the internal operations hub — the single interface used by case managers, finance, scheduling coordinators, and operations leadership every day.

The current system (myADR / CMS 1.0) forces users to do work the computer should do. Business logic lives in people's heads. Workflows span 6+ tools. Documents are hunted across drives. Status transitions are manual. Finance is a daily exercise in compensating workarounds.

CMS 2.0 Case Manager Portal is not a visual refresh. It is a structural redesign that eliminates system-imposed limits, encodes business rules into the product, and makes the case workflow feel like one coherent experience rather than a patchwork of screens and workarounds.

| What we heard | What we're building |
|---|---|
| Email is the de facto workflow hub | Case-linked communications and inbox integration |
| "I have to do this manually every month" | Automated status transitions, rules-driven billing |
| "There should be no system-imposed limits" | Bulk actions throughout — no batch-of-20 caps |
| "The diary is my real task queue" | First-class task model with SLA, owner, auto-rollover |
| "I could create GEICO Melville 4,000 times" | Smart deduplication and a single-record entity model |
| Reporting is a graveyard of one-off reports | Filter-based, self-service reporting with saved views |

---

## 2. Product Context

### 2.1 About NAM

National Arbitration Management (NAM) is a leading alternative dispute resolution provider administering arbitration and mediation cases across personal injury, commercial, no-fault, employment, consumer, and healthcare malpractice matters. NAM processes approximately **10,000 new cases per year**, with roughly **3,000 active cases** open at any given time.

### 2.2 The CMS 2.0 Ecosystem

CMS 2.0 is a three-interface platform, all built on the same underlying data platform with role-based access slices:

| Interface | Audience | This PRD? |
|---|---|---|
| **Case Manager Portal** | Internal NAM staff: case managers, finance, scheduling, operations | ✅ Yes — full scope |
| myADR Client Portal | External clients, claimants, respondents, attorneys | No — separate PRD |
| Neutrals Portal | Arbitrators and mediators (NP2 exists; integration required) | No — separate PRD |

> **Design principle — One platform, three views:** All three interfaces are branded views of the same underlying case data. The Case Manager Portal has full visibility. The client portal shows only what the client can see. The Neutrals Portal shows only neutral-facing tasks. This architecture must be reflected in the data model and permissions design.

### 2.3 Scale & Constraints

| Dimension | Current state | Notes |
|---|---|---|
| Internal users | ~75 today | Case managers, finance, scheduling, AEs, management, admin |
| External users | ~2,000 today | Clients, parties, neutrals — not this portal's audience |
| New cases/year | ~10,000 | Plus high-volume mass filings (hundreds to thousands at once) |
| Active cases | ~3,000 open at any time | Mix of PI, Commercial, No-Fault, employment, consumer |
| Docs per case | ~5 average | PDF, MS Office, CSV, images, video — wide format support |
| Case types | PI, Commercial, No-Fault, Employment, Consumer, Healthcare | Different workflows per type |

---

## 3. Users & Personas

Six primary personas use the Case Manager Portal. Each has a distinct primary job, pain profile, and set of daily workflows. Design should be built persona-first — screens and flows should map to what each role actually does, not to the system's database structure.

### 3.1 PI Case Manager

| Attribute | Detail |
|---|---|
| **Real people** | Jackie Strafasio (VP Ops), Supervisor Client Services, Account Executives |
| **Primary job** | Coordinate cases from intake through scheduling: party contact, signed agreements, adjuster follow-up, diary management, date holds |
| **Top daily tools** | NAM CMS, Outlook, CRM, PDFs, NY State eCourts, phone |
| **Biggest pain** | Phone-tag as a workflow. Case data split across 4+ systems. Missing intake data causes mid-flow rework. Date holds sit for weeks with no SLA enforcement. |
| **What "good" looks like** | Intake completeness validated at submission. Hearing dates confirmed with one click. Diaries auto-roll over. Status transitions happen automatically when source events occur. |
| **Key design need** | Case detail view with complete party context, inline communications, guided status transitions, and auto-populated diary reminders |

### 3.2 Commercial Case Manager

| Attribute | Detail |
|---|---|
| **Real people** | Randy Sosa, Marinos Constanti, Liz Reid |
| **Primary job** | End-to-end case work: intake, party/client creation, DocuSign, panel letters, invoices, payments, diary queues |
| **Top daily tools** | NAM, Outlook, CRM, Excel, Word, OneDrive, DocuSign, Gmail, Google Drive |
| **Biggest pain** | Fragmented case work across 8+ tools. Diary past-due items don't auto-roll. Invoices can't be saved until posted. Routine permissions (case initials change) require email tickets. |
| **What "good" looks like** | All case context in one screen. Email parsed and linked to case. Inline DocuSign. Permissions self-served with audit trail. |
| **Key design need** | Unified case workspace with integrated email thread, inline DocuSign trigger, and a diary that acts like a real task manager |

### 3.3 Finance (Revenue Ops & Accounting)

| Attribute | Detail |
|---|---|
| **Real people** | Sharon (Finance Ops), Pat (Finance leadership), Emily Gilson (Revenue Ops Mgr) |
| **Primary job** | Invoice review, eBilling, neutral payable runs, month-end reconciliation, statement distribution, accounting export to Acumatica |
| **Top daily tools** | NAM, CRM, Excel, Google Sheets, eBillingQ, Judge Report Tool, Acumatica |
| **Biggest pain** | eBilling sends only 20 invoices at a time. Month-end close requires manual comparison and subtraction. Business rules are memorized. Prepaid and multi-party billing have no native support. Statement runs must happen after hours or they crash the system. |
| **What "good" looks like** | Rules-enforced invoicing. Bulk eBilling with no arbitrary cap. Month-end dashboard shows actuals vs. expected. Statements run in background, any time, without crashing. |
| **Key design need** | Finance module with a rules engine, batch eBilling UI, and a statement/reconciliation dashboard |

### 3.4 Scheduling Coordinator

| Attribute | Detail |
|---|---|
| **Real people** | Senior Scheduling Coordinator, Scheduling Coordinator (Crystena, Tracy) |
| **Primary job** | Coordinate case scheduling, hearing confirmations, calendar holds, judge availability entry, Zoom meeting setup |
| **Top daily tools** | NAM, Outlook, Google Calendar, Microsoft Bookings, myADR |
| **Biggest pain** | Scheduling forms manually populated from email. Confirmations sent one party at a time (10–15 per case). Judge availability entered one date at a time (25+ entries/judge/month). Calendar holds in 3 separate systems. |
| **What "good" looks like** | "Send all confirmations" with one click. Bulk date entry for judge availability. Unified availability view in NAM. One hold placed in one system. |
| **Key design need** | Scheduling module with availability grid, bulk confirmation sending, and a unified calendar view |

### 3.5 Operations Manager / AE

| Attribute | Detail |
|---|---|
| **Real people** | Dawn Lack (VP Client Services), Jacqueline Streffacio (VP Ops) |
| **Primary job** | Manage AEs, monitor queues and case health, quarter-close metrics, account reporting, commission visibility |
| **Top daily tools** | NAM, reporting dashboards, email |
| **Biggest pain** | Reporting is a library of static, often broken reports. No real-time view of intake, scheduling, or billing queues. Commission program tied to volume only — no configurable program. |
| **What "good" looks like** | Real-time operational dashboard. Self-service reporting with filters and saved views. AE-level metrics and commissions at a glance. |
| **Key design need** | Management dashboard and self-service reporting module with filter, group-by, sort, and save-view capability |

### 3.6 System Administrator

| Attribute | Detail |
|---|---|
| **Real people** | IT team (Michael Hara, Shaun Cutter, Manish Rottela, Windy, Andre) |
| **Primary job** | Manage configuration: fee sheets, status lists, workflow rules, user permissions, integration settings |
| **Top daily tools** | NAM back-end, database tools |
| **Biggest pain** | Every configuration change requires a code deployment. Hard-coded client rules (GEICO custom stipulation field on every case). Status drop-downs with duplicates and dead values. No front-end admin interface. |
| **What "good" looks like** | Every drop-down, rule, fee, status, and permission configurable from a front-end admin panel without touching code. |
| **Key design need** | Admin module with visual configuration of rules, statuses, fee sheets, and user/role management |

---

## 4. Problem Statement

The current system (myADR / CMS 1.0) was built incrementally over 30 years and leaks its architectural limitations directly into users' working days. The problems are structural, not cosmetic.

*Source: 60 session recordings, 17h 24m observed across Commercial, Finance, Marketing, PI, and Scheduling & Ops.*

### P1 — Email and phone are the integration layer

Commercial, PI, and Scheduling all use Outlook and Gmail as the source of truth for case context, handoffs, client communication, scheduling requests, and follow-up. Users repeatedly copy party names, case numbers, documents, and invoice context between email and NAM — sometimes 4–6 times per case event.

### P2 — Swivel-chair verification dominates the day

Every functional area shows users toggling between 2–6 systems to validate the same case, party, invoice, rate, calendar, or document data. The repeated pattern: read email → search NAM → verify in another tool → copy/retype → return to form → document the action.

### P3 — Batch work is performed one item at a time

Scheduling confirmations, judge availability entries, eBilling sends, portal statement pushes, and invoice reviews all expose high-volume work through single-item interactions. The eBilling system sends 20 invoices at a time. Statement runs are scheduled at night to avoid crashing the system during business hours.

### P4 — Business rules live in people's heads

California simultaneous invoice send, $0/negative invoice deletion rules, express-rate-discount admin-fee logic, special PI rates, full-day fee handling, PI roster caps, bifurcated neutral rates, attorney contact protocols, and date-hold practices are all memorized by specific individuals. None are enforced by the system.

### P5 — Diaries and spreadsheets substitute for task management

The diary system is used as a task queue but past-due items don't auto-roll over, diary context is thin, and users rely on personal fail-safes (backward scanning, double-click-save habits) to compensate. Finance prints deleted-invoice pages to track follow-ups. Teams use inbox folders and spreadsheets to manage unresolved work.

### P6 — Intake gaps cause downstream rework throughout

Missing respondent details, missing adjusters and claim numbers, wrong case types, duplicate submissions, and incomplete online inquiries create phone calls, eCourts lookups, rejections, delayed invoices, and follow-up diary loops across all functional areas.

### P7 — Data model mismatches leak into daily work

Pro se parties require duplicate firm/client records. Multi-state neutrals require separate profiles per state. Licensure state is conflated with residence state. Bifurcated rates live in free-text notes. A case could have GEICO Melville entered 4,000 times as separate records.

---

## 5. Product Scope

### 5.1 In Scope

The Case Manager Portal covers all modules used by NAM staff in their daily work:

- **Home Dashboard** — personal queue, case health at a glance, pending tasks
- **Case List & Search** — filterable, searchable view of all cases
- **Case Intake** — guided intake wizard for voluntary, contractual, and mass filing
- **Case Detail** — unified case workspace with all case context in one view
- **Party & Contact Management** — single-record entity model with deduplication
- **Document Management** — upload, link, search, and version control for case documents
- **Hearing Scheduling** — availability grid, bulk confirmations, calendar holds
- **Neutral Selection & Assignment** — search, filter, conflict-check, assign
- **Finance Module** — invoicing, payments, eBilling, statements, AR collections
- **Reporting & Analytics** — filter-based, self-service reporting with saved views
- **Notifications & Email** — case-linked communications, automated notification rules
- **Admin & Configuration** — rules engine, status config, fee sheets, user management

### 5.2 Out of Scope (for this PRD)

- myADR Client Portal — separate PRD required
- Neutrals Portal 2.0 — NP2 exists and must integrate; migration to CMS 2.0 stack is a future phase
- Public intake / website — external intake form is a client portal concern
- Acumatica integration — finance export scope defined in integration spec
- Mobile application — web-responsive required; native mobile app out of scope for Phase 1

### 5.3 Core Design Principles

| Principle | What it means in practice |
|---|---|
| **No system-imposed limits** | No batch of 20. No "run this after hours." Bulk operations are first-class, not workarounds. |
| **Configurable, not hard-coded** | Every status, rule, drop-down, fee, and workflow is admin-configurable through a front-end interface — not buried in code. |
| **No dead-end screens** | Every screen has a clear next action. Browser back never traps users. Navigation is always available. |
| **Rules-enforced, not memory-dependent** | Business rules are encoded as system logic, not memorized by specific people and applied inconsistently. |
| **Single source of truth** | One record per firm, person, and neutral. No duplicates. All data consistent across modules. |
| **Case as the anchor** | Everything connects to the case record. Documents, communications, tasks, invoices, hearings — all linked. |
| **PFLA-style guided workflow** | Multi-step guided forms with validation at each step, not multi-screen mazes with dead ends. |

---

## 6. Core User Flows

### 6.1 Case Manager Daily Flow

1. Case Manager logs in → lands on **Home Dashboard**
2. Dashboard shows: My Queue (tasks due today/overdue), Flagged Cases (New York, urgent), Pending Diary items, Recent Activity
3. Opens a flagged new case → Case Detail view loads with all context in one screen
4. Reviews intake completeness — missing fields highlighted with required-field gates
5. Sends follow-up to party directly from case screen → email logged to case thread
6. Updates case status → guided status transition (selects reason, next step auto-suggested)
7. Creates diary entry → auto-reminder set → visible to all case team members
8. Marks diary complete → status updates downstream automatically

### 6.2 Case Intake Flow (Voluntary)

1. Case Manager opens New Case → selects **Intake Type** (Voluntary / Contractual / Mass Filing)
2. **Step 1 — Classification:** case type (PI / Commercial / No-Fault / etc.), matter type (Arb / Med), voluntary or contractual
3. **Step 2 — Parties:** add claimant, respondent, counsel, firm, insurance carrier — smart search against existing records with duplicate detection
4. **Step 3 — Completeness Gate:** system highlights required fields, blocks progress until minimum data is entered
5. **Step 4 — Fee & Documents:** select fee sheet, attach intake documents, flag if fee waiver applies
6. **Step 5 — Review & Submit:** full case summary shown, case manager confirms → case created with unique case number
7. **Auto-actions:** intake confirmation sent, 48-hour follow-up diary set, AE notified

### 6.3 Mass Filing Intake Flow

1. Case Manager opens Mass Filing → uploads CSV or structured file
2. System validates file: checks required columns, detects duplicates, flags data quality errors
3. **Validation report shown:** X cases valid, Y cases with errors (viewable inline), Z duplicate candidates
4. Case Manager reviews/corrects errors inline — no need to re-upload entire file
5. Confirms batch → system creates all valid cases simultaneously with **no cap**
6. Batch progress shown in background — Case Manager can navigate away and return
7. Completion notification sent — batch summary report available

### 6.4 Hearing Scheduling Flow

1. Scheduling Coordinator opens Case → Hearings tab → Schedule Hearing
2. System shows **combined availability:** neutral's booked hearings + vacation + party restrictions + facility availability — all in one grid
3. Coordinator selects date/time → system validates against three-hold cap and carrier-specific restrictions
4. Sets location: NAM office, Zoom (auto-generates link), or external venue
5. Parties to notify shown automatically — Coordinator sends **all confirmations with one click**
6. Hearing record created → NP2 synced → calendar hold placed → Zoom meeting auto-created
7. **Auto-actions:** case status updated, diary created for confirmation follow-up

### 6.5 Invoice & Finance Flow

1. Finance opens Finance module → Invoice Queue shows all pending invoices
2. Invoice **auto-generated** when: hearing scheduled, adjournment recorded, settlement reached, PMA/decision received (rules-driven — no dummy hearings)
3. Finance reviews invoice → system validates against rules (California dual-send check, $0 deletion rule, express-rate admin-fee uprate)
4. Finance posts invoice → eBilling queue for client portal delivery (**no 20-invoice cap**)
5. Payment received → Finance applies to invoice(s) — one payment can cover multiple invoices
6. Overpayment: system offers apply-to-balance, hold-in-ledger, or issue-refund options
7. Statement generation: runs in background, any time — **no after-hours requirement**
8. Month-end reconciliation dashboard: actuals vs. expected, exceptions highlighted, AR aging

---

## 7. Feature Requirements by Module

Requirements marked **[MUST]** are non-negotiable for the prototype. Requirements marked **[SHOULD]** are important but negotiable for phasing.

---

### Module 01 — Home Dashboard
*The first screen every user sees. Replaces the diary-and-email morning ritual.*

**Current pain:** There is no home dashboard. Users start by opening email, then navigating to case lists or diary screens separately. There is no single view showing what needs attention today.

**Requirements:**
- [MUST] My Queue: tasks assigned to me, sorted by due date, overdue items flagged prominently
- [MUST] Case health summary: count of new cases, scheduled hearings today, overdue diaries, pending invoices
- [MUST] Flagged cases widget: New York cases highlighted, cases with urgent status changes, SLA-at-risk cases
- [MUST] Recent Activity feed: last 20 actions across my cases (status changes, payments received, documents uploaded)
- [SHOULD] Quick Actions: intake new case, search case, schedule hearing — accessible from dashboard without navigation
- [SHOULD] Management view: when role is Operations Manager, show team queue across all AEs
- [SHOULD] 48-hour nudge: new cases assigned to me unactioned in 48+ hours surfaced prominently

**Screens to design:**
- Home Dashboard — Case Manager view (personal queue + flagged cases + activity feed)
- Home Dashboard — Manager view (team queue + operational metrics)
- Dashboard empty state (new user, no assigned cases)

---

### Module 02 — Case List & Search
*The primary navigation into any case. Search must surface the right case immediately.*

**Current pain:** Search results lack decision-critical fields. Users must click into each record to get basic context. Status drop-downs contain duplicates and dead values. No concept of saved views or filtered queues.

**Requirements:**
- [MUST] Search by: case number, party name, firm name, attorney, claim number, adjuster
- [MUST] Filters: case type, case status, case manager (AE), date range (opened, last activity, hearing date), matter type (arb/med), voluntary/contractual
- [MUST] List columns: case number, parties, type, status, case manager, last activity, next hearing date
- [MUST] Color coding: New York cases highlighted (admin-configurable), overdue cases, new cases unactioned 48+ hours
- [MUST] No dead-end states: all statuses visible in list are active and meaningful — duplicate/dead statuses removed
- [SHOULD] Saved views: users save filter + sort + column combinations and name them
- [SHOULD] Bulk select: select multiple cases for bulk assignment, bulk status update, or bulk export
- [SHOULD] Multi-AE visibility: management sees all cases; AEs see their own by default

**Screens to design:**
- Case List — default view
- Case List — filtered view with active filters shown
- Case List — search results
- Case List — saved views sidebar

---

### Module 03 — Case Intake
*Guided intake wizard that prevents downstream rework by enforcing completeness at the front door.*

**Current pain:** Missing intake data is the single biggest driver of downstream rework across all teams. Mass filing required manual keying one case at a time. No duplicate detection at intake. GEICO custom stipulation field appears on every case even though it only applies to one client.

**Requirements — Voluntary & Contractual:**
- [MUST] Step-by-step guided wizard — PFLA-style (one clear form per step, progress indicator, no dead ends)
- [MUST] Step 1: Case classification — type, matter type, intake method, voluntary vs. contractual
- [MUST] Step 2: Party entry — smart search against existing records with duplicate detection (fuzzy match on firm/party name); alert if potential duplicate found
- [MUST] Step 3: Completeness gate — required fields enforced per case type; cannot proceed without minimum data; missing fields listed explicitly
- [MUST] Step 4: Fee & documents — fee sheet auto-selected by case type (overrideable); document upload; fee waiver flag
- [MUST] Step 5: Review & confirm — full case summary shown, case manager must explicitly confirm before case is created
- [MUST] Auto-actions on creation: 48-hour follow-up diary set, intake confirmation sent, AE notified
- [SHOULD] Client-specific field rules: GEICO stipulation field only appears for GEICO cases (admin-configurable, not hard-coded)
- [SHOULD] Case cloning: create a new case from a prior case template for repeated fact patterns

**Requirements — Mass Filing:**
- [MUST] CSV/structured file upload — system validates column schema on upload
- [MUST] Pre-create validation: checks all rows for required fields, duplicate detection, and data format errors before creating any cases
- [MUST] Validation report: shows valid count, error count, warnings — errors viewable and correctable inline
- [MUST] Background batch processing — no cap on batch size; progress tracked; user can navigate away
- [MUST] Completion notification with batch summary (created count, error count, report download)

**Screens to design:**
- Intake wizard — Step 1: Classification
- Intake wizard — Step 2: Parties (with duplicate detected state)
- Intake wizard — Step 3: Completeness gate (errors and missing fields highlighted)
- Intake wizard — Step 4: Fee & documents
- Intake wizard — Step 5: Review & confirm
- Mass filing upload screen
- Mass filing validation report
- Mass filing progress / background processing

---

### Module 04 — Case Detail
*The primary workspace for all case work. One screen, all context.*

**Current pain:** Case context is spread across multiple screens, tabs, and external tools. Users navigate away from the case record to get party details, billing info, hearing history, or documents. There is no unified case workspace.

**Requirements — Case Header (always visible):**
- [MUST] Case number, case type, matter type, status badge, case manager, AE
- [MUST] Parties summary (claimant, respondent — click-through to party detail)
- [MUST] Next hearing date (if scheduled), or "No hearing scheduled" with CTA
- [MUST] Quick Action bar: Schedule Hearing, Add Diary, Upload Document, Add Invoice, Change Status
- [MUST] Guided status change: select new status → select reason (from configured list) → confirm; system enforces allowed transitions only

**Requirements — Tabs:**
- [MUST] **Overview:** case summary, timeline of key events, pending tasks
- [MUST] **Parties:** all parties, counsel, firms, adjusters, billing contacts — with inline editing
- [MUST] **Documents:** all documents linked to case, grouped by type (intake, hearing, PMA, billing); upload, download, preview, link to case event
- [MUST] **Hearings:** list of all hearings (past and future), status, parties, neutral, location, outcome
- [MUST] **Finance:** invoices, payment status, outstanding balance, statement history
- [MUST] **Diary / Tasks:** all diary entries and tasks for this case — owner, due date, status, linked event
- [MUST] **Communications:** email thread linked to this case, outbound emails sent from the case
- [SHOULD] **Notes:** internal case notes — visible to case team, not to clients or neutrals
- [SHOULD] **History:** full audit trail of all changes to the case record (who, what, when)

**Screens to design:**
- Case Detail — Overview tab
- Case Detail — Parties tab (with inline edit state)
- Case Detail — Documents tab
- Case Detail — Hearings tab
- Case Detail — Finance tab
- Case Detail — Diary/Tasks tab
- Case Detail — Status change modal
- Case Detail — Add document modal
- Case Detail — Communications tab (email thread view)

---

### Module 05 — Party & Contact Management
*Single-record entity model — one record per real-world firm or person, across all cases.*

**Current pain:** "I could create GEICO Melville 4,000 times." The same firm or party can exist as hundreds of separate records in CMS 1.0, making account history, revenue roll-up, conflict checks, and marketing lists unreliable.

**Requirements:**
- [MUST] Single firm record: one canonical record per real-world firm, with aliases (GEICO / GEICO Melville / Government Employees Insurance)
- [MUST] Duplicate detection on creation: fuzzy match on firm name, address, and phone before allowing new record creation
- [MUST] Merge workflow: authorized users can merge duplicate records with case re-linkage
- [MUST] Pro se support: one person can be both claimant and their own counsel — no duplicate record required
- [MUST] Attorney/firm churn: when an attorney changes firms, case-level reassignment without losing history
- [SHOULD] Conflict check: when adding a neutral, system checks against all parties, firms, and counsel on the case and warns on match
- [SHOULD] Account view: from a firm record, see all cases, revenue history, and contacts associated with that firm

**Screens to design:**
- Firm/Party search — with duplicate detected state
- Firm/Party detail view — with linked cases and contact list
- Merge duplicates workflow

---

### Module 06 — Hearing Scheduling
*Unified availability grid that replaces Outlook, Google Calendar, Microsoft Bookings, and NAM scheduling.*

**Current pain:** Scheduling coordinators manually populate forms from email, send confirmations one party at a time (10–15 per case), enter judge availability one date at a time (25+ per judge per month), and manage calendar holds in 3 separate systems.

**Requirements:**
- [MUST] Availability grid: show neutral's booked hearings, submitted vacation, party restrictions, and facility availability in one view
- [MUST] Carrier-specific date restrictions visible in grid (admin-configurable per client)
- [MUST] Date range entry for judge availability: enter Mon–Fri for an entire month in one action
- [MUST] Bulk confirmation send: "Send all confirmations" sends to all parties on the hearing with one click
- [MUST] Zoom auto-generation: when Zoom is selected, meeting is auto-created and link distributed in confirmation
- [MUST] Three-hold cap enforced: system prevents exceeding the three-hold-per-neutral cap and explains why
- [MUST] Hearing status transitions: continue, adjourn, cancel, settle, hear — each with reason selection and auto-consequences (fee calculation, neutral release, case status update)
- [MUST] Auto-sync to NP2 when hearing is scheduled or changed
- [SHOULD] Calendar view: all hearings across all cases in a day/week/month calendar
- [SHOULD] SLA enforcement for date holds: holds exceeding configured age auto-escalate to coordinator's manager

**Screens to design:**
- Schedule Hearing — availability grid view
- Schedule Hearing — location selection (NAM office / Zoom / external)
- Schedule Hearing — bulk confirmation send (party list with "Send all" action)
- Judge availability entry — bulk date range entry
- Hearing status change modal (with reason and consequences preview)
- Calendar view — all hearings

---

### Module 07 — Neutral Selection & Assignment
*Search, filter, conflict-check, and assign the right neutral — without duplicate profiles or free-text rate notes.*

**Current pain:** Neutral search views omit critical assignment data (rate, city, case type, roster eligibility). Multi-state licensure requires duplicate profiles. Rates and PI roster caps live in free-text notes. Conflict checks require separate searches across 4+ screens.

**Requirements:**
- [MUST] Single neutral record: one profile per neutral with structured multi-state licensure (not duplicate records)
- [MUST] Search and filter by: rate (range), city, case type eligibility, matter type (arb/med), roster status, availability, deactivation status
- [MUST] Structured rates: rate fields for standard, bifurcated (PI/commercial), and express rates — not free-text notes
- [MUST] Conflict check: one-click check against all case parties, counsel, and firms — result shown inline
- [MUST] Neutral-selection workflow: parties submit selections (eliminate-3 / iterative elimination); parties must NOT see each other's selections
- [MUST] NAM assigns final neutral after party selection round
- [SHOULD] Roster management: PI roster cap tracked and enforced per configuration
- [SHOULD] Availability view: see neutral's booked hearings across all cases before assigning

**Screens to design:**
- Neutral search — with filter panel (rate, location, type, roster status)
- Neutral profile — single record with structured licensure and rates
- Conflict check result — match/no-match with matched records shown
- Party selection panel — (internal CM view of the selection round)
- Neutral assignment confirmation

---

### Module 08 — Document Management
*Case-linked documents, centralized and searchable — no more file hunting across drives.*

**Current pain:** Document workflows depend on manual file hunting across OneDrive, local folders, Google Drive, prior-case templates, and downloads. Signed agreements require visual inspection, manual status changes, forwarding to scanning staff, and diary reminders to verify completion.

**Requirements:**
- [MUST] All documents linked to a case — not stored in external drives
- [MUST] Document types: intake submission, hearing documents, PMA/decision, billing, signed DRA, neutral timesheet
- [MUST] Three-folder model: submitting party / opposing party / neutral (with configurable access permissions per folder)
- [MUST] Upload from: browser drag-and-drop, email attachment, scanner
- [MUST] Supported formats: PDF, MS Office (Word, Excel, PowerPoint), CSV, common image formats (JPG, PNG), video
- [MUST] Document linked to case event: when a document is uploaded, it can be linked to a hearing, PMA, or intake step
- [MUST] DocuSign integration: trigger DocuSign envelope from case screen for DRA, PMA, and decision documents
- [SHOULD] Document search: search documents across cases by file name, type, date, or case number
- [SHOULD] Auto-status update: when DocuSign envelope is completed, DRA status updates automatically

**Screens to design:**
- Documents tab — case-level document list (grouped by type)
- Upload document modal — with event linking
- DocuSign trigger modal — envelope preview and recipient selection
- Document preview (inline, not download-only)

---

### Module 09 — Finance Module
*Rules-driven billing, batch eBilling without caps, and a month-end dashboard that replaces the Excel ritual.*

**Current pain:** Finance carries the highest density of manual pain. eBilling limited to 20 at a time. Month-end close requires manual line-by-line comparison. Business rules are memorized. Dummy hearings required to trigger commercial invoices. Statement runs must happen after hours. Prepaid and multi-party billing require spreadsheet workarounds.

**Requirements — Invoice Generation:**
- [MUST] Invoice auto-generated by events: hearing scheduled, adjournment recorded, cancellation, settlement, PMA/decision received — **no dummy hearings required**
- [MUST] Rules engine enforces: California dual-party send, $0/negative deletion rules, express-rate admin-fee uprates, scheduled-invoice suppression windows
- [MUST] Invoice can be linked to a billing event (settlement, mediation, monthly billing) — decoupled from hearing dependency
- [MUST] Monthly billing: cases on monthly billing plans generate invoices on schedule without a hearing event
- [MUST] Mass invoice review: Finance can review and approve/reject invoices in bulk
- [SHOULD] Native prepaid support: prepaid advance tracked as a balance, applied automatically against new invoices

**Requirements — Payments:**
- [MUST] One payment applied across multiple invoices — Finance selects which invoices to apply
- [MUST] Payment methods: credit card, ACH/Lockstep, check (with check image attachment), client portal payment
- [MUST] Overpayment options: apply to balance, hold in ledger (GL "holding pen"), or issue refund
- [MUST] Refunds: refunds-payable workflow with approval step, no MP duplicate artifacts on report

**Requirements — eBilling & Statements:**
- [MUST] eBilling queue: **no 20-invoice cap** — Finance can send any number in a single batch
- [MUST] Statement generation: runs as a background job at **any time of day** — no after-hours requirement, no system crash
- [MUST] Statement progress visible: Finance can see run progress and pick up from a partial failure
- [MUST] Month-end dashboard: actual revenue vs. expected, payment totals, AR aging, exceptions

**Requirements — AR Collections:**
- [MUST] AR aging report: past-due balances by age bucket (30/60/90/120+ days)
- [MUST] Collections queue: Finance sees which cases have overdue invoices and can act (escalate, write off, resolve with AE)
- [SHOULD] AE visibility: AE can see their accounts' AR status without full billing detail access

**Screens to design:**
- Invoice Queue — all pending invoices with bulk review/approve
- Invoice detail — line items, rules applied, send history
- eBilling queue — bulk send with progress indicator
- Payment entry modal — apply to invoice(s), overpayment options
- Statement generation — background job trigger + progress
- Month-end dashboard — actuals, AR aging, exceptions
- AR Collections queue — overdue invoices with action options

---

### Module 10 — Diary & Task Management
*A first-class task model that replaces the diary-and-spreadsheet workaround system.*

**Current pain:** The diary system lacks auto-rollover, SLA enforcement, owner assignment, or auto-completion triggers. Teams use inbox folders, printed pages, and personal spreadsheets to compensate. Diary context is thin — no link back to the case event that created the task.

**Requirements:**
- [MUST] Task fields: title, description, owner, due date, SLA (hours/days), source event (what triggered this task), status (open / in progress / complete / escalated), linked case
- [MUST] Auto-rollover: overdue tasks remain in queue, flagged red, until explicitly resolved
- [MUST] Auto-creation triggers: intake received → 48-hour follow-up; hearing scheduled → confirmation follow-up; date hold placed → expiry reminder
- [MUST] Auto-completion: when source event is resolved, linked task auto-completes
- [MUST] Case-linked: all tasks visible from the linked case's Diary/Tasks tab
- [MUST] Team visibility: manager can see all tasks assigned to their team
- [SHOULD] Escalation: tasks overdue past configured threshold automatically escalate to manager
- [SHOULD] Task templates: common task patterns (new case checklist, hearing preparation checklist) available as templates

**Screens to design:**
- My Tasks view — personal queue (dashboard widget and full-page view)
- Task detail — with source event, linked case, SLA countdown
- Add task modal — with case link and owner assignment
- Team task view — manager view of all tasks across team

---

### Module 11 — Reporting & Analytics
*Self-service reporting with filters, group-bys, saved views, and favorites — not a library of static one-off reports.*

**Current pain:** The report library contains hundreds of static reports — many broken, many never used, many duplicate. Users export to Excel and reformat manually. Management has no real-time operational visibility.

**Requirements:**
- [MUST] Base reports with filter and group-by: small set of authoritative base reports, each with configurable filters, group-bys, sorts, and column selection
- [MUST] Saved views: users save filter/sort/column combinations and name them; viewable from My Reports
- [MUST] Favorites: mark reports or saved views as favorites for quick access from dashboard
- [MUST] Export: export any report view to CSV or Excel without manual reformatting
- [MUST] Key base reports: Case Status, AR Aging, Revenue by Period, Invoices by Status, Neutral Summary, AE Billing Summary, Hearing Schedule
- [SHOULD] Real-time operational metrics: intake volume, scheduling queue depth, open tasks by owner, pending invoices value — visible to management on dashboard
- [SHOULD] Report audit: system tracks which reports were last run and by whom — basis for pruning dead reports

**Screens to design:**
- Reports home — base report list + My Reports / Favorites
- Report view — base report with filter panel open
- Save view modal — name + description + share option
- My Reports — personal saved views and favorites

---

### Module 12 — Admin & Configuration
*Front-end configuration for everything that is currently hard-coded — statuses, rules, fee sheets, permissions.*

**Current pain:** Every configuration change requires a code deployment. Status drop-downs have duplicate and dead values only a developer can remove. Client-specific rules are hard-coded. User permissions are buried "5,000 places in the code."

**Requirements:**
- [MUST] Status configuration: add, edit, deactivate case and hearing statuses; configure allowed transitions between statuses
- [MUST] Drop-down management: manage all configurable drop-down lists (case types, matter types, hearing types, payment types)
- [MUST] Fee sheet management: create and edit fee sheets per case type and client; configure rates, express discounts, admin fee rules
- [MUST] Client-specific rules: configure client-specific fields and rules (e.g., GEICO stipulation) that appear only on cases for that client
- [MUST] User management: create users, assign roles, set permissions at role level
- [MUST] Role-based access: define what each role can see, create, edit, and delete — at module and field level
- [MUST] Notification rules: configure which events trigger which automated notifications and to whom
- [SHOULD] Commission plan configuration: configure AE commission programs (not limited to volume-only)
- [SHOULD] Workflow rules: configure business rules (e.g., which status changes require Finance approval)

**Screens to design:**
- Admin home — navigation to all config sections
- Status configuration — list of statuses with allowed transitions visualized
- Fee sheet editor — create/edit fee sheet with line items and rules
- User management — user list with role assignment
- Role permissions matrix — role × permission grid
- Notification rules — event → recipient → template configuration

---

## 8. Screens to Design — Prototype Checklist

| Priority | Module | Screen |
|---|---|---|
| **P1** | Home Dashboard | Case Manager view — queue + flagged + activity |
| **P1** | Home Dashboard | Manager view — team queue + metrics |
| **P1** | Case List | Default list view with filters and color coding |
| **P1** | Case List | Search results |
| **P1** | Case Intake | Step 1: Classification |
| **P1** | Case Intake | Step 2: Parties (with duplicate detected state) |
| **P1** | Case Intake | Step 3: Completeness gate |
| **P1** | Case Intake | Step 4: Fee & documents |
| **P1** | Case Intake | Step 5: Review & confirm |
| **P1** | Case Detail | Overview tab |
| **P1** | Case Detail | Parties tab |
| **P1** | Case Detail | Documents tab |
| **P1** | Case Detail | Hearings tab |
| **P1** | Case Detail | Finance tab |
| **P1** | Case Detail | Diary/Tasks tab |
| **P1** | Case Detail | Status change modal |
| **P1** | Hearing Scheduling | Availability grid |
| **P1** | Hearing Scheduling | Bulk confirmation send |
| **P1** | Hearing Scheduling | Hearing status change modal |
| **P1** | Finance | Invoice queue |
| **P1** | Finance | Payment entry modal |
| **P1** | Finance | Month-end dashboard |
| **P2** | Home Dashboard | Empty state (new user) |
| **P2** | Case List | Saved views sidebar |
| **P2** | Case Intake | Mass filing upload + validation report |
| **P2** | Case Intake | Mass filing progress |
| **P2** | Case Detail | Communications tab |
| **P2** | Case Detail | Add document modal |
| **P2** | Neutral Selection | Neutral search with filters |
| **P2** | Neutral Selection | Neutral profile |
| **P2** | Neutral Selection | Conflict check result |
| **P2** | Finance | eBilling queue |
| **P2** | Finance | Statement generation + progress |
| **P2** | Finance | AR Collections queue |
| **P2** | Task Management | My Tasks full-page view |
| **P2** | Task Management | Add task modal |
| **P2** | Reporting | Reports home |
| **P2** | Reporting | Report view with filter panel |
| **P2** | Reporting | Save view modal |
| **P2** | Admin | Status configuration |
| **P2** | Admin | Fee sheet editor |
| **P2** | Admin | Role permissions matrix |

---

## 9. Design Requirements

### 9.1 Design System

The Case Manager Portal follows the Symphony Design System token set:

| Token | Value | Usage |
|---|---|---|
| Brand color | `#6C69FF` (Indigo) | Primary actions, active states, highlights |
| Primary text | `#0B0B14` (Ink) | Body text, headings |
| Secondary text | `#5A5A6B` (Ink-3) | Labels, meta information |
| Surface | `#FFFFFF` (White) | Cards and content areas |
| Background | `#F6F6F9` (Paper) | Page background, sidebar |
| Border | `#E6E6EC` (Line) | Dividers, card borders |
| Success | `#18A957` | Positive status, completed tasks |
| Warning | `#C77700` | Overdue items, SLA warnings |
| Error | `#D6334B` | Errors, missed SLAs |
| Font | Poppins | All text in the product |

### 9.2 Key Interaction Patterns

- **No dead-end screens:** every screen has a clear way to go back, cancel, or proceed
- **Guided status transitions:** show allowed next statuses only, with a reason drop-down and consequences preview before confirming
- **Inline editing:** party and contact data editable inline in case detail — no separate edit screen required
- **Toast notifications:** confirmations (case created, invoice sent, status updated) shown as non-blocking toasts
- **Background job progress:** long-running operations (mass filing, statement generation) show progress and allow user to navigate away
- **Persistent navigation:** global navigation always accessible — user is never lost in a deep workflow
- **Color-coded states:** overdue items in warning color; New York cases highlighted per configurable rule; new unactioned cases in a distinct state

### 9.3 Empty States

Every list view and module must have a designed empty state with a clear CTA. Priority empty states:

- My Tasks (new user)
- Invoice Queue (no pending invoices)
- Case List (no results for current filter)
- Reports (no saved views yet)
- Hearings tab (no hearings scheduled — with "Schedule Hearing" CTA)

---

## 10. Non-Functional Requirements

| Category | Requirement |
|---|---|
| **Performance** | Case list with 3,000 active cases loads in < 2 seconds. Search results return in < 1 second. Statement generation runs in background — no frontend blocking. |
| **Scalability** | Sized for 10,000+ cases/year with headroom for mass filing spikes. No hard limits on batch operations. |
| **Reliability** | No operations blocked during business hours. System must not require off-hours use to avoid crashes. |
| **Access control** | Role-based access enforced at the API level — not just the UI. Field-level permissions for sensitive data (finance, billing rates). |
| **Audit trail** | Every data change recorded with user, timestamp, and before/after values. Audit log viewable by admin. |
| **Data integrity** | Single-record entity model enforced — no duplicate firm/person records can be created without explicit merge workflow. |
| **Integration** | NP2 sync on case and hearing changes. DocuSign status webhooks update case record in real time. Acumatica export on demand. |
| **Browser support** | Chrome, Firefox, Safari, Edge — latest two versions. Web-responsive (not mobile-first for Phase 1). |
| **Compliance** | Audit trail, role-based access, and document access controls meet NAM's legal and data governance requirements. |

---

## 11. Success Metrics

Success is measured against the operational pain the current system creates. Baseline-measure before launch; track post-launch.

| Metric | Current state | Target |
|---|---|---|
| Intake completeness rate | Unknown — missing data discovered mid-workflow | > 90% of cases submitted with required fields complete |
| Time from intake to first hearing scheduled | Unknown — delayed by data chasing | Measurable baseline; reduce by 20% |
| Manual finance exceptions per month-end | "Very behind, every month" (Sharon) | < 5 manual exceptions per close cycle |
| Statement generation time | Must run after hours; can crash | Runs in < 30 min, any time of day, no crashes |
| Hearing confirmation time | 10–15 individual sends per case | < 2 minutes per hearing (bulk send) |
| eBilling throughput | Max 20 invoices per batch | Unlimited batch size |
| Duplicate contact records created | High — "could create GEICO 4,000 times" | < 1% new intake records flagged as duplicates post-creation |
| User-reported workaround usage | High across all 5 functional areas | 70% reduction in named workarounds (quarterly survey) |

---

## 12. Open Questions for Next Discovery Phase

These questions were not fully answered in discovery and should be resolved before detailed design of the modules they affect.

| Area | Open question | Blocking? |
|---|---|---|
| Finance | What is the correct invoice lifecycle — exactly which events trigger which invoice types? | Yes — invoice module design |
| Finance | Which billing rules are universal and which are client-specific? How many client-specific variations exist? | Yes — rules engine scope |
| Neutrals | Where is the authoritative neutral roster — CMS1, NP2, or both? | Yes — data model |
| Scheduling | Which status transitions can Scheduling do alone vs. requiring Finance or Management approval? | Yes — status transition config |
| Scheduling | What is the three-hold-per-neutral cap based on — hard policy or configurable? | No — can default and configure later |
| Reporting | Which existing reports are audit/legal artifacts that must be preserved vs. one-offs that can be retired? | No — report migration phase |
| Permissions | What is the full role matrix — which roles need to exist in 2.0? Role-based or user-specific? | Yes — admin module design |
| Intake | What exactly makes a case PI vs. Commercial when the category is ambiguous? | Yes — intake classifier logic |

---

## Appendix: Discovery Sources

| Source | Description | Coverage |
|---|---|---|
| Day-in-the-Life Recordings | 60 recordings, 17h 24m of observed workflows | Commercial (21), Finance (11), Marketing (4), PI (10), Scheduling & Ops (14) |
| Frustration & Delight Themes | Synthesized from CMS 1.0 rewrite sessions (Kickoff–Day 45, Jun–Aug 2023) | 10 frustration themes, 6 delight themes — all structural |
| Session Cast & Personas | Inferred from transcripts — speaker roles, contributions, confidence ratings | 13 named NAM stakeholders, 5 Fulcrum consultants |
| Human E2E Flow | Complete case lifecycle in plain English — 23 sections from intake to collections | Intake, parties, neutral selection, scheduling, PMA, finance, reporting, sync |
| Case Lifecycle Map | Mermaid flow diagrams of intake-to-scheduling and hearing-to-finance flows | Full E2E with node-to-page mapping |
| CMS 2 Capability & Sizing Inquiry | NAM's formal scope document for vendors | User base, case volume, integration list, AI scope |
| NAM Discovery Prep | Symphony's session prep document for the May 2026 stakeholder session | Attendee list, session structure, discovery questions, design talking points |

---

*NAM CMS 2.0 — Case Manager Portal PRD · Symphony × NAM · May 2026 · CONFIDENTIAL*
