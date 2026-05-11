# NAM CMS 2.0 — Neutrals Portal 2.0
## Product Requirements Document

| | |
|---|---|
| **Version** | 1.0 — Discovery Synthesis |
| **Status** | Draft — Design Ready |
| **Date** | May 2026 |
| **Author** | Johan Sadie, Symphony |
| **Client** | NAM (National Arbitration Management) |
| **Scope** | Neutrals Portal (External — Neutrals-facing) |
| **Source** | Session transcripts, flow maps, NP2 codebase analysis, frustration themes |
| **Purpose** | Design prototype spec |

> **How to use this document:** This PRD gives a designer enough information to build a clickable prototype of the Neutrals Portal 2.0. Each module section contains: the current state (what NP2 does today and where it breaks), the requirements (what the new system must do), the screens to design (what to prototype), and the key interactions and states to include.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Product Context](#2-product-context)
3. [Users & Personas](#3-users--personas)
4. [Problem Statement](#4-problem-statement)
5. [Product Scope & Phasing](#5-product-scope--phasing)
6. [Core User Flows](#6-core-user-flows)
7. [Feature Requirements by Module](#7-feature-requirements-by-module)
8. [Screens to Design — Prototype Checklist](#8-screens-to-design--prototype-checklist)
9. [Design Requirements](#9-design-requirements)
10. [Integration Requirements](#10-integration-requirements)
11. [Non-Functional Requirements](#11-non-functional-requirements)
12. [Success Metrics](#12-success-metrics)
13. [Open Questions](#13-open-questions-for-next-discovery-phase)
- [Appendix: Discovery Sources](#appendix-discovery-sources)

---

## 1. Executive Summary

The Neutrals Portal (NP2) is the interface used by NAM's arbitrators, mediators, and hearing officers to manage their caseload. It already exists and is live. It is, in fact, the **most-loved product in NAM's ecosystem** — the one thing the internal team cites as working well and as the proof point for what CMS 2.0 should feel like.

The goal for Neutrals Portal 2.0 is not to rebuild what works. It is to:

1. **Replace the fragile ADF sync layer** — NP2 currently talks to CMS 1.0 through dozens of Azure Data Factory pipelines. These need to be replaced with real-time API integration with CMS 2.0.
2. **Fix the gaps that exist in NP2 today** — availability data is split, PMA templates are hard-coded, pre-hearing conferences aren't recorded, some workflows break when neutrals don't comply with the digital path.
3. **Elevate the experience** — NP2 proved the model. NP2 should be the benchmark for polish and clarity, not just for internal tools.

The phasing is clear: **Phase 1 is integration** (NP2 stays live, connects to CMS 2.0 instead of CMS 1.0). **Phase 2 is migration** (NP2 is rebuilt on the CMS 2.0 tech stack, fully unified with the same platform).

This PRD covers the **Phase 2 target state** — what NP2 should look and work like as a first-class interface on the CMS 2.0 platform.

| What works today in NP2 | What needs to change |
|---|---|
| Neutrals can see assigned cases | Cases arrive via fragile ADF pipelines, not real-time |
| Timesheets and decisions uploaded through portal | PMA template is hard-coded — any change is a dev deployment |
| Pending tasks visible to neutral | Pending task list rebuilt by a background job on a timer, not event-driven |
| Vacation/availability submitted through portal | Availability is split — NP2 has vacation, CMS1 has hearing bookings |
| DocuSign integrated for agreements | No fallback for neutrals who mail physical documents |
| Proof point for the whole CMS 2.0 vision | Built on a different stack, synced via brittle pipelines |

---

## 2. Product Context

### 2.1 NP2's Place in the CMS 2.0 Ecosystem

CMS 2.0 is a three-interface platform on a shared data foundation:

| Interface | Audience | Phase |
|---|---|---|
| Case Manager Portal | Internal NAM staff | Phase 1 build |
| myADR Client Portal | External clients, claimants, respondents | Phase 1 build |
| **Neutrals Portal 2.0** | **Arbitrators, mediators, hearing officers** | **Phase 1: integrate · Phase 2: migrate to shared stack** |

The Neutrals Portal sits in a unique position: it is the only one of the three that already exists as a working product. It must not be disrupted during Phase 1. The Phase 1 mandate is **integration without breaking anything**. Phase 2 is the opportunity to rebuild it on the shared platform and add the features that NP2's current architecture can't support.

### 2.2 What NP2 Does Today

NP2 is a .NET application backed by Cosmos DB, synced to CMS 1.0's SQL database via Azure Data Factory (ADF) pipelines. The key capabilities it delivers today:

- **Case view** — neutrals see cases assigned to them with basic case details
- **Pending tasks** — a task list rebuilt on a timer showing what the neutral needs to do
- **Timesheet upload** — neutrals submit time directly through the portal
- **Vacation/availability** — neutrals submit vacation with a PENDINGFORAPPROVAL state
- **PMA drafting** — neutrals draft Post-Mediation Agreements through a template UI
- **DocuSign** — agreements and decisions can be signed electronically

### 2.3 What "Neutrals" Means at NAM

NAM's neutrals are licensed professionals — judges, retired judges, attorneys, and mediators. They are **external contractors**, not employees. They:
- Handle multiple cases simultaneously across multiple ADR providers
- Have varying levels of digital fluency (some file everything electronically; some still mail physical documents)
- Have their own calendars, practices, and availability constraints
- Are recruited, vetted, and managed by NAM's Marketing/Recruiting team
- Are compensated via NAM-managed fee structures (standard, bifurcated, and express rates)

---

## 3. Users & Personas

### 3.1 Arbitrator

| Attribute | Detail |
|---|---|
| **Who they are** | Licensed attorneys, retired judges, and ADR professionals who render binding decisions in arbitration matters |
| **Primary job in NP2** | Review case materials, conduct hearings, issue awards/decisions, track availability |
| **Case types** | Commercial, PI, No-Fault, employment, consumer, healthcare malpractice |
| **Digital behaviour** | Mixed — some highly digital, some still prefer physical documents. Judge Sweeney mails things in. This is a known workflow edge case. |
| **Pain today** | Cases arrive with a delay (ADF sync lag). Availability calendar is separate from hearing bookings. Decision release gated on payment — arbitrators wait without knowing why. |
| **What "good" looks like** | Case details available immediately on assignment. Clear task list. Decision submitted and tracked. Know when decision is released. |
| **Key design need** | Clean case workspace with document access, decision/award submission, and clear status of each active case |

### 3.2 Mediator

| Attribute | Detail |
|---|---|
| **Who they are** | Professional mediators who facilitate negotiated resolutions in mediation matters |
| **Primary job in NP2** | Review case materials, conduct mediation sessions, draft and submit PMA (Post-Mediation Agreement) |
| **Case types** | Commercial, PI, voluntary mediation matters |
| **Pain today** | PMA template is hard-coded — if a case requires a non-standard clause, it needs a developer change. DocuSign works well when parties comply; no fallback for non-digital cases. Decision release held until payments clear — mediators not informed of reason. |
| **What "good" looks like** | Configurable PMA template. Clear guidance when a case is in payment-hold. Easy escalation path for non-compliant signatories. |
| **Key design need** | PMA drafting flow with configurable clauses, DocuSign trigger, and case closure status tracking |

### 3.3 Hearing Officer

| Attribute | Detail |
|---|---|
| **Who they are** | Neutral professionals who preside over hearings but may not render final decisions (e.g., pre-hearing conferences, discovery hearings) |
| **Primary job in NP2** | See assigned hearings, submit timesheets, manage availability |
| **Pain today** | Pre-hearing conferences are not recorded in the system — hearing officers know about them, the system doesn't. Timesheets require manual upload with no validation. |
| **What "good" looks like** | All hearing types (including pre-hearing conferences) visible in their case list. Timesheet submission with auto-validation against hearing records. |
| **Key design need** | Case/hearing list that includes all hearing types, plus a streamlined timesheet submission flow |

### 3.4 NAM Neutral Recruiter (Internal — secondary user)

While not a portal user themselves, the Neutral Recruiter's work directly shapes what data is available in the portal.

| Attribute | Detail |
|---|---|
| **Who they are** | NAM's Marketing team responsible for identifying, vetting, and onboarding new neutrals |
| **Pain today** | New-neutral onboarding manually transcribes structured questionnaire data into profile fields. Multi-state licensure requires duplicate records. Conflict checks require 4+ separate searches. Rates and PI roster caps live in free-text notes. |
| **Impact on portal** | If the neutral's profile in CMS is incomplete, wrong, or duplicated, the neutral sees broken data in their portal. A clean single-record entity model (owned in the Case Manager Portal) directly improves the neutral's experience. |

---

## 4. Problem Statement

NP2 is working. The problems are not in the user experience per se — they are in the **data layer, the sync architecture, and the gaps where the system doesn't handle edge cases gracefully**.

### P1 — Availability data is split across two systems

Neutrals submit vacation and availability preferences through NP2. NAM books hearing slots against neutrals in CMS 1.0. These two sources of "unavailability" never fully merge. Scheduling can book a neutral on a day they've blocked as vacation, and there's no single unified view to prevent it.

### P2 — Case data arrives with a delay

NP2 gets case and hearing data from CMS 1.0 via ADF sync pipelines. These pipelines run on schedules — not in real time. A neutral can be assigned to a case in CMS 1.0 and not see it in their portal for minutes or hours.

### P3 — Pending tasks are rebuilt, not event-driven

The list of tasks a neutral sees (cases to review, timesheets to submit, PMAs to draft) is rebuilt by a background job that runs on a timer. If a task is created between rebuilds, the neutral doesn't see it. If the job fails, the task list is stale.

### P4 — PMA templates are hard-coded

Changing a PMA clause or adding a client-specific agreement format requires a developer deployment. This means NAM cannot adapt PMA language to case type, client, or jurisdiction without engineering involvement.

### P5 — No fallback for non-digital compliance

DocuSign works well when neutrals engage digitally. But some neutrals still mail physical documents, call in decisions, or refuse digital signing. There is no graceful fallback path in the system — these cases fall into manual workarounds on the NAM side with no visibility to the neutral about what's happening.

### P6 — Decision release logic is opaque to the neutral

The rule is: a decision or PMA is only released to parties after payment clears. This is correct business logic. But the neutral is not told why their submitted decision hasn't been released — they see it submitted and then nothing. This causes confusion and unnecessary follow-up calls to NAM.

### P7 — Pre-hearing conferences are invisible

Pre-hearing conferences happen regularly but are not recorded in the system. The neutral knows about them (they were told directly), but there's no hearing record, no task, and no document folder for them. This is a gap between real operations and system state.

---

## 5. Product Scope & Phasing

### 5.1 Phase 1 — Integration (NP2 stays live)

NP2 continues operating. The ADF sync pipelines to CMS 1.0 are **replaced with real-time API calls to CMS 2.0**. From the neutral's perspective, nothing changes visually — but data arrives in real time, tasks are event-driven, and availability is unified.

**Phase 1 scope:**
- Replace ADF pipelines with CMS 2.0 API integration (case sync, hearing sync, task sync, demographic sync)
- Unify availability: NP2 vacation + CMS 2.0 hearing bookings shown in one view
- Event-driven pending tasks (task created when event fires, not rebuilt on timer)
- Decision release status communicated to neutral (transparent payment-hold state)

### 5.2 Phase 2 — Migration (NP2 rebuilt on CMS 2.0 stack)

NP2 is rebuilt as a first-class interface on the CMS 2.0 platform, sharing the same data layer, design system, and component library as the Case Manager Portal and Client Portal.

**Phase 2 scope (this PRD covers the target state):**
- Full Neutrals Portal experience on CMS 2.0 stack
- Configurable PMA templates (no dev deployment for clause changes)
- All hearing types visible (including pre-hearing conferences)
- Structured timesheet submission with hearing-record validation
- Graceful fallback flows for non-digital compliance
- Neutral profile self-service (update availability, contact details, banking info)

### 5.3 Out of Scope

- Case Manager Portal — covered in the Case Manager Portal PRD
- myADR Client Portal — covered in the Client Portal PRD
- Neutral recruiting and onboarding admin — managed in the Case Manager Portal (Admin module)
- Payment processing to neutrals — fee calculation in Case Manager Portal; payment disbursement is an Acumatica integration concern

---

## 6. Core User Flows

### 6.1 Neutral Daily Flow

1. Neutral logs in with MFA → lands on **My Cases Dashboard**
2. Dashboard shows: My Active Cases (with status badges), Pending Tasks (due today, overdue), Upcoming Hearings (next 7 days), Recent Notifications
3. Sees a new case assigned → opens Case View
4. Case View: parties, case type, documents, hearing details, assigned tasks
5. Reviews documents for upcoming hearing → downloads or previews inline
6. Checks availability conflict → availability view shows hearing bookings + submitted vacation in one calendar
7. Completes a pending task (e.g., timesheet submission) → task auto-completes, NAM notified
8. Decision submitted → system shows "Awaiting payment clearance" status with estimated timeline

### 6.2 Timesheet Submission Flow

1. Hearing concludes → pending task auto-created: "Submit timesheet for [Case #] hearing [date]"
2. Neutral opens task → Timesheet form pre-populated with hearing date, case number, hearing type
3. Neutral enters hours (start time, end time, travel time if applicable)
4. System validates: checks hours against scheduled hearing length; warns if > 10% discrepancy
5. Neutral submits → NAM Finance notified → neutral fee calculation triggered
6. Timesheet status shown: Submitted → Under Review → Approved → Payment Scheduled

### 6.3 PMA Drafting Flow (Mediator)

1. Mediation hearing concludes with resolution → pending task auto-created: "Draft PMA for [Case #]"
2. Mediator opens PMA drafting workspace
3. Template loads: pre-populated with case details (parties, case number, hearing date, NAM office)
4. Mediator selects applicable clauses from a configurable clause library (not hard-coded)
5. Drafts resolution terms in structured fields
6. Previews rendered PMA document
7. Submits for NAM review → NAM Case Manager notified
8. NAM approves → DocuSign envelope sent to parties
9. PMA signed by all parties → case status updated → payment triggered → PMA released

### 6.4 Vacation / Availability Submission Flow

1. Neutral opens Availability tab
2. Sees unified calendar: existing hearing bookings (from CMS 2.0), previously submitted vacation, available days
3. Selects date range for vacation → adds optional note
4. Submits → status shown as "Pending Approval" until NAM confirms
5. NAM approves → vacation blocked; conflicts with upcoming hearings flagged immediately
6. Neutral receives notification if approved vacation overlaps with a newly scheduled hearing

### 6.5 Non-Digital Compliance Fallback (Physical Document)

1. Neutral submits decision/PMA physically (mails, faxes, or calls it in)
2. NAM scans/transcribes the physical document
3. Case Manager uploads it to the case record in Case Manager Portal, links to the decision event
4. Neutral's portal shows the decision as "Submitted (via NAM)" — same status as a digital submission
5. Neutral can view the scanned version in their portal to confirm accuracy
6. Normal payment-gated release flow continues from this point

---

## 7. Feature Requirements by Module

Requirements marked **[MUST]** are non-negotiable for the prototype. Requirements marked **[SHOULD]** are important but negotiable for phasing.

---

### Module 01 — Login & Authentication
*Secure, frictionless access for external contractors with varying device and browser setups.*

**Current state:** NP2 has MFA login. This works. The flow needs to carry forward.

**Requirements:**
- [MUST] Multi-factor authentication (email or authenticator app)
- [MUST] Persistent session with configurable session length (neutrals shouldn't have to re-login daily)
- [MUST] Forgot password / self-service account recovery
- [MUST] Clear error messages (wrong credentials, locked account, expired link)
- [SHOULD] SSO option for law firms or organisations managing multiple neutrals
- [SHOULD] Device trust — remember this device for 30 days (reduces MFA friction for regular users)

**Screens to design:**
- Login screen — email + password
- MFA verification screen
- Forgot password flow
- Account locked / recovery state

---

### Module 02 — My Cases Dashboard
*The first screen after login. Everything a neutral needs to know, in one view.*

**Current state:** NP2 shows a cases list. Pending tasks are rebuilt on a timer. No unified view of what needs attention today.

**Requirements:**
- [MUST] Active cases list: case number, case type, parties (claimant vs. respondent), matter type (arb/med), current status, next hearing date
- [MUST] Pending tasks widget: tasks requiring neutral action today, overdue tasks highlighted
- [MUST] Upcoming hearings widget: next 7 days of scheduled hearings with date, time, format (in-person/Zoom), location
- [MUST] Recent notifications: last 10 notifications (new case assigned, hearing scheduled, document uploaded, task due)
- [MUST] Tasks are **event-driven** — created when an event fires (hearing scheduled, case assigned), not rebuilt on a timer
- [SHOULD] Quick filters: filter My Cases by status (active, awaiting decision, closed), matter type (arb/med), or case type
- [SHOULD] Notification preferences: neutral can choose which events generate email vs. in-app notifications

**Screens to design:**
- My Cases Dashboard — default view
- My Cases Dashboard — with overdue task state
- My Cases — filtered view
- Dashboard empty state (newly onboarded neutral, no cases assigned yet)

---

### Module 03 — Case View
*The neutral's workspace for a single case. All case context, their tasks, and their documents.*

**Current state:** NP2 shows basic case details. Documents are accessible. But data arrives via delayed sync, and the view doesn't include all hearing types.

**Requirements:**
- [MUST] Case header: case number, case type, matter type, parties, status badge
- [MUST] All hearing types visible: arbitration hearings, mediation sessions, **pre-hearing conferences** (currently invisible in NP2)
- [MUST] Documents section: all documents the neutral is permitted to see (based on folder permissions set in Case Manager Portal). Download and preview.
- [MUST] My Tasks for this case: tasks assigned to this neutral, with due dates and status
- [MUST] Case timeline: key events visible to the neutral (case assigned, hearings scheduled, PMA submitted, decision released)
- [MUST] Hearing details: date, time, location or Zoom link, parties attending, format
- [MUST] Real-time data: case data reflects CMS 2.0 state — no sync lag
- [SHOULD] Case notes: neutral can add private notes to their view of a case (not visible to parties or NAM unless shared)
- [SHOULD] Communication: neutral can send a message to their NAM case manager directly from the case view

**Screens to design:**
- Case View — Overview (with all hearing types listed)
- Case View — Documents tab
- Case View — My Tasks tab
- Case View — Timeline tab
- Case View — empty state (case assigned but no documents yet)

---

### Module 04 — Pending Tasks
*A first-class task list — not a background-job artefact.*

**Current state:** NP2 has a pending tasks view (pendingTasks.js) rebuilt by a background job on a timer. If the job is between runs, tasks are stale.

**Requirements:**
- [MUST] Tasks are created by events in CMS 2.0 — not rebuilt periodically
- [MUST] Task types: Submit Timesheet, Draft PMA, Upload Decision, Sign Agreement (DocuSign), Review Documents, Respond to Selection Request
- [MUST] Each task shows: title, linked case, due date, SLA countdown, status (open / in progress / overdue / complete)
- [MUST] Overdue tasks: flagged prominently in red with days overdue
- [MUST] Task completion: when neutral completes a task (e.g., submits timesheet), task auto-completes and NAM is notified
- [MUST] Tasks accessible from both the Dashboard (summary widget) and a full Tasks page
- [SHOULD] Task history: neutral can see completed tasks for the past 90 days
- [SHOULD] Task notifications: email or push notification when a new task is assigned or when a task is approaching due date

**Screens to design:**
- Pending Tasks — full-page view
- Task detail — with linked case, SLA countdown, action button
- Task history view

---

### Module 05 — Timesheet Submission
*Structured submission, validated against hearing records — not a freeform upload.*

**Current state:** Neutrals upload timesheets via NP2. There is no validation against the scheduled hearing. Finance receives the timesheet and reviews manually.

**Requirements:**
- [MUST] Timesheet form pre-populated from hearing record: case number, hearing date, hearing type — neutral fills in time, not case context
- [MUST] Time fields: start time, end time, break duration, travel time (if applicable per fee structure)
- [MUST] System validates against scheduled hearing: warns if submitted hours are significantly longer than the scheduled block (configurable threshold)
- [MUST] Timesheet status tracking: Submitted → Under Review → Approved → Payment Scheduled
- [MUST] Neutral can see all timesheet submissions (past and pending) from their Timesheets tab
- [MUST] Multi-hearing support: if a neutral has multiple hearings on the same case, they submit a separate timesheet per hearing
- [SHOULD] Pre-populated rate: neutral's applicable rate shown on submission form (not editable by neutral — for transparency only)
- [SHOULD] Submission history with payment dates: neutral can see when previous timesheets were paid

**Screens to design:**
- Timesheet submission form — pre-populated state
- Timesheet submission form — validation warning (hours mismatch)
- Timesheets list — all submissions with status
- Timesheet detail — approved state with payment date

---

### Module 06 — PMA Drafting (Mediator)
*A configurable drafting workspace, not a hard-coded template.*

**Current state:** PMA drafting exists in NP2 (pmaTemplate.js). The template is hard-coded — any clause change requires a developer. No configurable clause library.

**Requirements:**
- [MUST] PMA drafting workspace: structured fields for resolution terms (settlement amount, payment terms, release language)
- [MUST] Case context pre-populated: parties, case number, hearing date, NAM office — neutral should not re-enter known facts
- [MUST] Configurable clause library: NAM admin can add, edit, and activate/deactivate clauses in the Case Manager Portal Admin module; mediator selects applicable clauses (no dev deployment required for new clauses)
- [MUST] Preview: mediator can preview the rendered PMA document before submitting
- [MUST] Submission → NAM review: PMA goes to NAM Case Manager for review before DocuSign is sent to parties
- [MUST] DocuSign integration: NAM triggers DocuSign from the Case Manager Portal; neutral can view signing status from their portal
- [MUST] Physical fallback: if parties or the mediator submit a physically signed PMA, NAM uploads the scanned version; mediator sees "Submitted via NAM" status
- [MUST] Decision release transparency: after PMA is signed, mediator sees status "Awaiting payment clearance" with explanation, not a blank state
- [SHOULD] Arbitration award: separate flow for arbitration decisions — simpler than PMA (award text, findings, remedy) but same submit → review → release pattern
- [SHOULD] Draft saving: mediator can save a draft PMA and return to it

**Screens to design:**
- PMA drafting workspace — blank state with pre-populated case context
- PMA drafting workspace — clause selection panel
- PMA preview — rendered document
- PMA submitted — awaiting NAM review state
- PMA status — awaiting payment clearance (with explanation)
- PMA released — complete state

---

### Module 07 — Availability & Vacation
*A unified calendar that shows both hearing bookings and submitted vacation — not two separate systems.*

**Current state:** NP2 has a vacation submission UI (NeutralVacation.js) with a PENDINGFORAPPROVAL state. Hearing bookings live in CMS 1.0. These are never fully merged — a coordinator can book a neutral on a day they've blocked as vacation.

**Requirements:**
- [MUST] Unified calendar view: shows hearing bookings (from CMS 2.0) AND submitted vacation in the same calendar — no toggling between systems
- [MUST] Vacation submission: select date range, add optional note, submit for approval
- [MUST] Approval status visible: submitted vacation shows as "Pending" until NAM approves
- [MUST] Conflict alert: if approved vacation overlaps with a newly booked hearing, neutral is notified immediately
- [MUST] Availability preferences: neutral can indicate preferred hearing formats (in-person / Zoom) and preferred days/locations — used by scheduling as a preference signal, not a hard constraint
- [MUST] Vacation history: neutral can see all submitted vacation requests (approved, pending, denied) for the current year
- [SHOULD] iCal export: neutral can export their hearing schedule to Outlook/Google Calendar
- [SHOULD] Block dates for personal reasons: quick "block this date" without full vacation workflow — for one-off unavailability

**Screens to design:**
- Availability calendar — unified view (hearings + vacation + blocks)
- Submit vacation — date range picker + note
- Vacation pending/approved/denied states
- Conflict alert — hearing booked during vacation state

---

### Module 08 — Documents
*Case documents the neutral is permitted to see, with inline preview.*

**Current state:** NP2 shows documents linked to cases. Access control is basic. No inline preview.

**Requirements:**
- [MUST] Document list per case: shows only documents the neutral is permitted to see (document-folder permissions set by NAM in Case Manager Portal)
- [MUST] Three-folder model respected: submitting party folder, opposing party folder, neutral folder — neutral sees only neutral-folder documents and those explicitly shared with them
- [MUST] Supported formats: PDF (inline preview), MS Office (download), images (inline preview)
- [MUST] Document upload: neutral can upload their own documents to a case (timesheet, decision, award, PMA draft, notes) — these go to the neutral folder
- [MUST] DocuSign: neutral can sign documents sent to them via DocuSign directly from the portal (no external tool required)
- [SHOULD] Document notification: neutral notified when a new document is added to a case they're assigned to
- [SHOULD] Document search: search across their cases' documents by file name or type

**Screens to design:**
- Case Documents — neutral view (only permitted documents visible)
- Document preview — inline PDF viewer
- Upload document modal
- DocuSign signing flow (embedded in portal)

---

### Module 09 — Notifications & Profile
*Stay informed without inbox overload. Keep profile data accurate.*

**Current state:** NP2 sends email notifications for key events. No in-app notification centre. Profile data managed by NAM, not self-service.

**Requirements — Notifications:**
- [MUST] In-app notification centre: all notifications with read/unread state
- [MUST] Notification types: new case assigned, hearing scheduled or changed, new document uploaded, task created, PMA/decision released, payment scheduled
- [MUST] Email notifications: each notification type can be set to email / in-app / both
- [SHOULD] Digest option: daily summary email instead of per-event emails

**Requirements — Profile:**
- [MUST] View own profile: name, contact details, jurisdictions, specialities, active case types
- [MUST] Self-service updates: neutral can update contact details, preferred communication method, bank account details (for payment) — changes go to NAM for approval before updating
- [SHOULD] Licensure details: neutral can view their registered states/jurisdictions (maintained by NAM Recruiting)
- [SHOULD] Rate transparency: neutral can see their current rate structure (read-only — rates are set by NAM)

**Screens to design:**
- Notification centre — unread and read states
- Notification preferences — per-type settings
- Profile view
- Profile edit — with "pending approval" state for sensitive changes (bank account)

---

## 8. Screens to Design — Prototype Checklist

| Priority | Module | Screen |
|---|---|---|
| **P1** | Login | Login screen — email + password |
| **P1** | Login | MFA verification |
| **P1** | Login | Forgot password flow |
| **P1** | Dashboard | My Cases Dashboard — default view |
| **P1** | Dashboard | Dashboard — with overdue task highlighted |
| **P1** | Case View | Case Overview (all hearing types including pre-hearing conferences) |
| **P1** | Case View | Case Documents tab |
| **P1** | Case View | Case My Tasks tab |
| **P1** | Pending Tasks | Full-page task list |
| **P1** | Pending Tasks | Task detail with action |
| **P1** | Timesheet | Submission form — pre-populated |
| **P1** | Timesheet | Timesheets list with status |
| **P1** | PMA Drafting | Drafting workspace — blank with pre-populated context |
| **P1** | PMA Drafting | Clause selection panel |
| **P1** | PMA Drafting | PMA preview |
| **P1** | PMA Drafting | Awaiting payment clearance state (with explanation) |
| **P1** | Availability | Unified calendar — hearings + vacation |
| **P1** | Availability | Submit vacation — date picker + note |
| **P2** | Login | Account locked / recovery |
| **P2** | Dashboard | Dashboard empty state (new neutral) |
| **P2** | Dashboard | My Cases — filtered view |
| **P2** | Case View | Case Timeline tab |
| **P2** | Case View | Empty state (assigned, no documents yet) |
| **P2** | Pending Tasks | Task history view |
| **P2** | Timesheet | Validation warning (hours mismatch) |
| **P2** | Timesheet | Approved state with payment date |
| **P2** | PMA Drafting | PMA submitted — awaiting NAM review |
| **P2** | PMA Drafting | PMA released — complete state |
| **P2** | PMA Drafting | Arbitration award submission flow |
| **P2** | Availability | Conflict alert — hearing booked during vacation |
| **P2** | Availability | Vacation history |
| **P2** | Documents | Inline PDF preview |
| **P2** | Documents | Upload document modal |
| **P2** | Documents | DocuSign embedded signing flow |
| **P2** | Notifications | Notification centre — unread state |
| **P2** | Notifications | Notification preferences settings |
| **P2** | Profile | Profile view |
| **P2** | Profile | Profile edit — with pending approval state |

---

## 9. Design Requirements

### 9.1 Design System

The Neutrals Portal uses the same Symphony Design System token set as the Case Manager Portal. The visual language should feel **unified with the platform** while being **calibrated for external users** — less dense than the case manager's operational interface, more breathing room, clearer guidance.

| Token | Value | Usage |
|---|---|---|
| Brand color | `#6C69FF` (Indigo) | Primary actions, active states |
| Primary text | `#0B0B14` (Ink) | Body text, headings |
| Secondary text | `#5A5A6B` (Ink-3) | Labels, meta |
| Surface | `#FFFFFF` (White) | Cards and content areas |
| Background | `#F6F6F9` (Paper) | Page background |
| Border | `#E6E6EC` (Line) | Dividers, card borders |
| Success | `#18A957` | Completed tasks, approved states |
| Warning | `#C77700` | Pending approval, upcoming deadlines |
| Error | `#D6334B` | Overdue tasks, failed submissions |
| Font | Poppins | All text |

### 9.2 Key Interaction Principles

- **External user calibration:** Neutrals are not daily power users of this system. The interface should require no training. Labels should be plain English, not NAM-internal jargon. ("Submit your timesheet" not "Create NAM billing event.")
- **Progressive disclosure:** Show the neutral only what they need for their current task. Don't surface internal case details (AE initials, billing codes, finance status) that are irrelevant to them.
- **Status transparency:** Every submitted action should have a visible status. "Submitted", "Under Review", "Approved", "Awaiting Payment", "Released" — the neutral should never be left wondering what happened to something they sent.
- **Graceful fallback language:** When a digital workflow isn't possible (e.g., physical document), give the neutral clear instructions for the alternative path rather than a dead end.
- **Decision release transparency:** The rule (decision released after payment clears) should be explained in plain language — not as an error state, but as an informational status. "This decision has been submitted and will be released to parties once payment is received."
- **Mobile-friendly:** Neutrals access the portal from varying devices, including tablets during hearings. The interface must be responsive. All key actions (view case, submit timesheet, check tasks) must work well at tablet-width.

### 9.3 Empty States

Every list and tab must have a designed empty state with guidance:

- My Cases (no active cases assigned): "You have no active cases. New assignments will appear here."
- Pending Tasks (all caught up): "You're all caught up. Tasks will appear here when action is required."
- Documents (no documents on a case): "No documents have been shared with you on this case yet."
- Availability calendar (no hearings scheduled): "No hearings scheduled. Your confirmed hearing dates will appear here."

---

## 10. Integration Requirements

The Neutrals Portal 2.0 must integrate with CMS 2.0 as a real-time API consumer, replacing the current ADF pipeline architecture.

### 10.1 Phase 1 — Integration Layer (NP2 stays on its current stack)

| Integration | Current (ADF pipeline) | Phase 1 target (CMS 2.0 API) |
|---|---|---|
| Case assignment | Scheduled sync from CMS 1.0 SQL → NP2 Cosmos | Webhook: case assigned event → NP2 immediately |
| Hearing data | Scheduled sync of hearing records | Webhook: hearing created/updated/cancelled → NP2 |
| Pending tasks rebuild | Background timer job in NP2 | Event-driven task creation via CMS 2.0 events |
| Timesheet submission | NP2 → ADF → CMS 1.0 | NP2 → CMS 2.0 Finance API |
| PMA data sync | ADF pipeline (pmacasesdatasynccms*) | NP2 → CMS 2.0 case document API |
| Availability data | NP2 Cosmos only (vacation) | NP2 + CMS 2.0 hearing bookings merged |
| Neutral demographic data | Hourly ADF sync | CMS 2.0 neutral profile API (read/write) |

### 10.2 Phase 2 — Migration (NP2 rebuilt on CMS 2.0 stack)

When NP2 is rebuilt on the CMS 2.0 stack, it reads and writes directly to the CMS 2.0 data layer with no intermediate pipelines. Key integration points become internal API calls rather than cross-system syncs.

### 10.3 DocuSign

- DocuSign webhooks update the CMS 2.0 case record in real time when documents are signed
- Neutral's portal status updates automatically when their signature is received
- NAM triggers DocuSign from Case Manager Portal; neutral receives the request in NP2

### 10.4 Zoom

- When a Zoom meeting is created in the Case Manager Portal for a hearing, the Zoom link is pushed to the Neutrals Portal hearing record in real time
- Neutral sees the Zoom link on the hearing detail — no separate email required (email notification is a fallback)

---

## 11. Non-Functional Requirements

| Category | Requirement |
|---|---|
| **Performance** | Case list loads in < 2 seconds. Task list is real-time (event-driven, not rebuilt). Document preview loads in < 3 seconds. |
| **Reliability** | NP2 must not go down when CMS 2.0 is deployed or updated. Phase 1 keeps NP2 on its own stack for this reason. |
| **Mobile / responsive** | All key flows (case view, task completion, timesheet, availability) must work at tablet-width (768px+). No native mobile app required for Phase 1. |
| **Access control** | Neutrals see only their own assigned cases. They see only documents in folders they are permitted to access. They cannot see other neutrals' cases, rates, or profiles. |
| **Data isolation** | Confidentiality rule strictly enforced: in the selection process, neutral A cannot see neutral B's selection preferences. |
| **Session security** | Session timeout after configurable idle period. Device trust option for trusted devices. |
| **Audit trail** | All neutral actions (timesheet submitted, PMA submitted, document uploaded, availability submitted) logged with timestamp. |
| **Availability** | Portal must be available 99.5% uptime. Hearings happen during business hours; planned maintenance must be outside of business hours. |

---

## 12. Success Metrics

| Metric | Current state | Target |
|---|---|---|
| Case data sync lag | Minutes to hours (ADF schedule delay) | < 30 seconds (event-driven) |
| Pending task staleness | Tasks can be stale between timer runs | Tasks appear in < 1 minute of event firing |
| Timesheet submission completion rate | Unknown — no structured validation | > 90% of timesheets submitted within 24h of hearing |
| PMA drafting cycle time | Unknown — template hard-coded, bottlenecks on dev | Measured from Phase 2 baseline; target 20% reduction |
| Neutral-reported confusion about decision release | Regular follow-up calls to NAM | < 5% of submitted decisions trigger a follow-up call |
| Availability conflict rate | Unknown — two systems never merge | Zero hearings booked on NAM-approved vacation dates |
| Portal-related support contacts to NAM | Unmeasured | Measured at Phase 2 launch; target 30% reduction from baseline |

---

## 13. Open Questions for Next Discovery Phase

| Area | Open question | Blocking? |
|---|---|---|
| Neutral roster | Where is the authoritative neutral roster — CMS 1.0's `judges` table, NP2's Cosmos containers, or both? Which wins on conflict? | Yes — data migration and single-record model |
| Availability | Who owns a neutral's availability — the neutral (via NP2 vacation submission) or NAM scheduling (via hearing bookings)? What is the tiebreaker? | Yes — unified availability model |
| Neutral fees | Should neutral fees (what NAM pays the neutral) be owned by the Neutral Assignment bounded context or by Finance? | Yes — PMA and timesheet module design |
| PMA ownership | Is PMA owned by the Hearing Scheduling lifecycle or Neutral Service Delivery? This affects where the PMA draft and release state machines live. | Yes — Phase 2 data model |
| Selection process | How does the "eliminate-3" / iterative elimination process work exactly, and does it vary by case type or client contract? | Yes — neutral selection module |
| Physical document fallback | What is the current SLA for NAM to scan and upload a physical document? Who receives it, who scans it, and who triggers the upload? | No — can document current process and design fallback |
| Override authority | Who at NAM can override the "decision released after payment" rule? Under what circumstances? | No — edge case, can be handled in admin config |
| Pre-hearing conferences | What data should a pre-hearing conference record contain? Who creates it — NAM Scheduling or the neutral? | Yes — Case View completeness |
| Neutral self-service | Which profile fields can neutrals update themselves vs. only NAM can update? Specifically: rates, jurisdictions, deactivation status. | Yes — Profile module design |

---

## Appendix: Discovery Sources

| Source | Description | Key NP2 relevance |
|---|---|---|
| Frustration & Delight Themes | Synthesized from CMS 1.0 rewrite sessions (Kickoff–Day 45, Jun–Aug 2023) | "The Neutrals Portal is the proof point" — delight theme #1; DocuSign fallback pain — frustration theme #10 |
| Human E2E Flow | Complete case lifecycle in plain English | Sections 6 (Neutral selection), 9 (PMA decision), 15 (Portals and identity), 17 (Sync and data movement) |
| Neutral Selection Flow | Detailed flow: slate publication, party selection, confidentiality rule, NAM final decision | Full flow with pain points: split roster, availability split, fee ownership question |
| PMA Decision Flow | Detailed flow: hearing concludes → PMA drafted → synced → released after payment | Pain points: payment-gate opacity, hard-coded template, Judge Sweeney physical-mail case |
| Hearing Scheduling Flow | Detailed flow: date selection → NP2 sync → confirmation → 2-day re-confirmation | Pain: scheduling is the #1 operational need; pre-hearing conferences not recorded |
| Day-in-the-Life Discovery Report | 60 recordings, 17h 24m | Marketing section (neutral recruiting): duplicate records, free-text rates, manual conflict checks |
| NP2 Codebase (via ADF repo) | Azure Data Factory pipelines, NP2 source code references | pendingTasks.js, pmaTemplate.js, NeutralVacation.js, NAM_Hearings_Service — confirms current architecture and pain points |
| CMS 2 Capability & Sizing Inquiry | NAM's formal scope document for vendors | NP2 described as "Newly migrated application that is currently in use and must integrate" — Phase 1 integration mandate explicit |

---

*NAM CMS 2.0 — Neutrals Portal 2.0 PRD · Symphony × NAM · May 2026 · CONFIDENTIAL*
