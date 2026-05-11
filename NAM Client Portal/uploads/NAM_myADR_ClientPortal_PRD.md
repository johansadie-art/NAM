# NAM CMS 2.0 — myADR Client Portal
## Product Requirements Document

| | |
|---|---|
| **Version** | 1.0 — Discovery Synthesis |
| **Status** | Draft — Design Ready |
| **Date** | May 2026 |
| **Author** | Johan Sadie, Symphony |
| **Client** | NAM (National Arbitration Management) |
| **Scope** | myADR Client Portal (External — Parties-facing) |
| **Source** | Session transcripts, flow maps, intake flows, discovery report, frustration themes |
| **Purpose** | Design prototype spec |

> **How to use this document:** This PRD gives a designer enough information to build a clickable prototype of the myADR Client Portal. Each module covers: the current state, the requirements, the screens to design, and the key states and interactions to include.

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

myADR is NAM's external client portal — the interface used by claimants, respondents, attorneys, insurance carriers, and enterprise clients to submit cases, track status, upload documents, manage hearings, and pay invoices.

Today, **most intake still arrives by email and phone, not through the portal**. This is not because clients prefer it that way — it is because the portal does not make the structured path easy enough to be worth using. Case managers end up as the manual processing layer for work the portal should handle.

myADR 2.0 is the opportunity to make the portal the primary intake and communication channel. A well-designed client portal reduces NAM's manual intake workload, improves data quality (structured submissions over unstructured emails), accelerates case activation, and gives clients the self-service transparency they expect from a modern ADR provider.

The portal serves fundamentally different audiences with different needs: **attorneys filing on behalf of clients** who need efficiency and bulk capability; **respondents being served a demand** who need clarity and a guided response path; **enterprise clients** (insurance carriers, corporations) who need account-level visibility; and **individuals (pro se)** who need the most guidance of all.

| Problem today | What the portal must solve |
|---|---|
| Most intake arrives by email — CMs manually re-enter data | Structured intake wizard that captures complete data the first time |
| Missing adjuster, claim number, billing contact discovered mid-workflow | Required fields enforced at submission — completeness gates before NAM receives the case |
| Respondent confirmation is manual and slow | Automated respondent notification and guided response flow |
| Neutral selection requires CMs to manage party preferences manually | Parties submit selections directly through portal — with confidentiality enforced |
| Parties call NAM to ask about case status | Real-time status tracking — no phone call needed |
| Decision/PMA access requires contacting NAM | Released documents available in portal immediately once payment clears |
| Mass filing required manual keying one case at a time | Bulk upload for enterprise clients and law firms |

---

## 2. Product Context

### 2.1 myADR's Place in the CMS 2.0 Ecosystem

| Interface | Audience | Relationship to this PRD |
|---|---|---|
| Case Manager Portal | Internal NAM staff | Creates and manages cases; sets what clients can see |
| Neutrals Portal 2.0 | Arbitrators, mediators, hearing officers | Receives cases from NAM; not visible to clients |
| **myADR Client Portal** | **Claimants, respondents, attorneys, carriers, enterprise clients** | **This PRD — full scope** |

myADR is a **read/write interface** — clients both submit to NAM (cases, documents, payments, neutral selections) and receive from NAM (status updates, hearing details, invoices, decisions). It is not a passive tracking dashboard.

### 2.2 The Access Model

The client portal enforces strict data isolation:

- A user sees **only cases they are a party to** — not cases from other companies or individuals
- A party sees **only their own folder of documents** — not the opposing party's submissions
- In the neutral selection process, **parties cannot see each other's selections** — this is a hard confidentiality rule
- Enterprise clients (law firms, carriers) can have **account-level views** spanning multiple cases, subject to role permissions

### 2.3 Scale

| Dimension | Value |
|---|---|
| External user accounts | ~2,000 today — sized for growth |
| New cases/year through portal | ~10,000 (full volume if portal becomes primary channel) |
| Case types requiring portal support | PI, Commercial, No-Fault, Employment, Consumer, Healthcare Malpractice |
| Intake types | Voluntary, Contractual (Arb + Med), Mass Filing |
| Document access | Intake documents, hearing materials, PMA/decisions — per-folder permissions |

---

## 3. Users & Personas

### 3.1 Attorney / Counsel (Filing Party)

| Attribute | Detail |
|---|---|
| **Who they are** | Plaintiff or defendant attorneys filing cases on behalf of their clients, or managing their clients' participation in a case |
| **Primary jobs** | Submit new cases, upload documents, track status across many cases, access decisions |
| **Case types** | Primarily PI (plaintiff attorneys), Commercial (corporate counsel) |
| **Volume** | Power users — some attorneys file dozens of cases per month |
| **Pain today** | Intake by email because the wizard is too rigid. Missing form fields require follow-up calls. No bulk submission for law firms handling mass filings. Can't see status without calling NAM. |
| **What "good" looks like** | Intake wizard that captures everything in one pass. Real-time status. Decision accessible the moment it's released. Bulk upload for mass filings. |
| **Key design need** | Case list with cross-case visibility (all my cases at a glance), fast intake flow, and clear document access |

### 3.2 Respondent (Demand Recipient)

| Attribute | Detail |
|---|---|
| **Who they are** | The party receiving a demand — often an insurance carrier, employer, or respondent individual; sometimes a corporate defendant in commercial matters |
| **Primary jobs** | Respond to a demand (confirm participation, agree to rules, sign DRA), access case materials, track hearing status |
| **Trigger** | Receives a notification from NAM that a demand has been filed against them |
| **Pain today** | Respondent notification and response is manual — NAM chases via phone and email. No portal-based response path. Respondents don't know what they need to do or by when. |
| **What "good" looks like** | Clear, guided email notification with a direct link to the response page. Simple one-page response: accept/decline/request extension. No account required for the initial response step. |
| **Key design need** | Frictionless respondent response flow — minimal barriers to responding, with clear instructions at every step |

### 3.3 Enterprise Client / Insurance Carrier

| Attribute | Detail |
|---|---|
| **Who they are** | Large organisations (GEICO, carriers, corporations) that regularly file or participate in many NAM cases |
| **Primary jobs** | Submit mass filings, view account-level case dashboard, pay invoices via eBilling, access billing history |
| **Volume** | Can file hundreds to thousands of cases at once (mass filing) |
| **Pain today** | Mass filings required manual keying one case at a time. eBilling limited to 20 invoices per batch. No account-level dashboard — each case must be tracked individually. |
| **What "good" looks like** | CSV-based bulk submission with validation report. Account dashboard showing all cases across the organisation. eBilling with no batch cap. |
| **Key design need** | Account-level view spanning all cases, bulk upload, and eBilling management |

### 3.4 Individual / Pro Se Party

| Attribute | Detail |
|---|---|
| **Who they are** | Individuals filing without legal representation — claimants or respondents acting on their own behalf |
| **Primary jobs** | Submit a case (often for the first time), understand what's happening, respond to communications, access decisions |
| **Pain today** | The portal assumes familiarity with ADR process. Decision tree is complex. Fee structures are confusing. No plain-language guidance. |
| **What "good" looks like** | Step-by-step guided wizard with plain-language explanations at each step. Fee calculator. Clear status. Help/FAQ accessible at every point. |
| **Key design need** | Maximum guidance, minimum jargon, clear escalation path to NAM for questions |

### 3.5 Adjuster (Insurance Industry)

| Attribute | Detail |
|---|---|
| **Who they are** | Insurance adjusters managing specific claims — often named on a case as the billing or contact person |
| **Primary jobs** | Track case status for their claims, receive hearing confirmations, manage payment |
| **Pain today** | Missing adjuster name and claim number is one of the top causes of intake rework across all teams. Adjusters are often not in the portal at all — they communicate by email. |
| **What "good" looks like** | Adjuster can be linked to a case during intake (by the filing attorney) and then receives case communications and status updates directly. |
| **Key design need** | Adjuster-role support — linked to cases, receives targeted notifications, accesses billing without full case manager access |

---

## 4. Problem Statement

### P1 — The portal is not the primary intake channel, but it should be

Most new cases arrive by email, phone, fax, or mail — not through the portal wizard. NAM case managers manually re-enter this data into CMS. Every email intake is a data quality risk (missing fields, wrong case type, unstructured format) and a source of rework. The portal will only become the primary intake channel if it is easier and faster than sending an email.

### P2 — Respondent confirmation is entirely manual

When a demand is filed, NAM notifies the respondent and waits for them to confirm participation. This is done by phone and email — there is no portal response path for respondents. Chasing respondents is one of the highest-friction manual workflows in NAM's operations. A non-responding respondent means the case sits in limbo until NAM gets confirmation.

### P3 — Mass filing is a manual bottleneck

Enterprise clients can send hundreds or thousands of cases at once. Currently, mass filings require someone to manually enter each case into CMS — or build workarounds. The portal has no native bulk submission capability. This is the most extreme version of the "system-imposed limit" problem.

### P4 — Parties have no self-service visibility

Parties check case status by calling or emailing NAM. There is no portal-based status tracking. This drives inbound contact volume to NAM's case managers, consuming time that should be spent on case work.

### P5 — Neutral selection is managed by NAM on behalf of parties

Parties submit neutral preferences by email or phone. NAM manually enters these into the system. The confidentiality requirement (parties cannot see each other's selections) means NAM must act as an intermediary — but this is an avoidable overhead if parties can submit directly through a portal that enforces confidentiality automatically.

### P6 — Document submission is uncontrolled

Parties submit documents by email, fax, mail, and occasionally through the portal. Documents arrive out of context — no automatic case-linking, no folder structure, no validation that the right document was submitted. Case managers spend time hunting for documents and manually attaching them to cases.

### P7 — Decision access requires manual NAM action

When a PMA or arbitration decision is ready to be released, NAM must manually notify the parties and provide access. The portal should handle this automatically once payment clears — but currently, it does not.

---

## 5. Product Scope

### 5.1 In Scope

- **Account & Authentication** — login, MFA, account creation for first-time filers
- **Case Submission (Voluntary)** — guided wizard for PI and voluntary matters
- **Case Submission (Contractual)** — decision-tree wizard for arbitration and mediation via contract
- **Mass Filing** — bulk case submission for enterprise clients
- **Respondent Response** — guided response path (accept, decline, request extension)
- **Case Dashboard** — case list with status, linked to all cases the user is a party to
- **Case Status Tracking** — real-time status per case
- **Document Submission** — upload intake and case documents to the right folder
- **Neutral Selection** — parties submit preferences with confidentiality enforced
- **Hearing Management** — view scheduled hearings, access Zoom links, request adjournments
- **Invoice & Payment** — view invoices, pay online, access billing history
- **Decision & Document Access** — access released PMA/decisions and shared case documents
- **Notifications** — email and in-app notifications for case events

### 5.2 Out of Scope

- Case Manager Portal — internal NAM operations (separate PRD)
- Neutrals Portal — neutral-facing functions (separate PRD)
- Public-facing marketing website — portal assumes user has navigated to submit or log in
- Acumatica integration — finance export is a backend concern
- Native mobile app — web-responsive for Phase 1

### 5.3 Core Design Principles

| Principle | What it means for myADR |
|---|---|
| **Structured over unstructured** | Every interaction that currently happens by email should have a structured portal path that captures the right data the first time |
| **Guided over expert** | Pro se individuals and first-time filers must be able to complete the portal without calling NAM. Plain language, contextual help, no jargon. |
| **Minimal barriers for respondents** | Responding to a demand should be possible without an account, without a login, and without reading a manual |
| **Strict data isolation** | Parties see only their data. Opposing party documents and neutral selections are never visible. This is a hard rule. |
| **Status transparency** | Parties should never need to call NAM to ask "what's happening with my case?" Every case event should have a visible, plain-language status |
| **Portal-first channel** | The portal should be easier and more complete than filing by email. Make the structured path the obvious path. |

---

## 6. Core User Flows

### 6.1 First-Time Case Submission (Voluntary — PI Attorney)

1. Attorney navigates to myADR → clicks "Submit a Case"
2. **No login required to start** — intake wizard opens without authentication barrier
3. **Step 1 — Case type selection:** Voluntary or contractual? Arbitration or mediation? PI / Commercial / Employment / Consumer / Healthcare?
4. **Step 2 — Parties:** Enter claimant, respondent, counsel details; system checks for existing records and suggests matches to prevent duplicates
5. **Step 3 — Case details:** Claim number, adjuster, date of incident, brief description, applicable rules
6. **Step 4 — Documents:** Upload demand form, proof of service, supporting documents. Drag-and-drop. Each document type labelled.
7. **Step 5 — Fee:** System calculates applicable fee based on case type. Pay via credit card / ACH. Fee waiver application if eligible.
8. **Step 6 — Review & submit:** Full summary shown. Attorney confirms.
9. **On submission:** Case reference number issued. Confirmation email sent. Account creation prompt (saves attorney's details for future filings).
10. **NAM receives** structured case for review — no manual data re-entry required.

### 6.2 Contractual Intake (Commercial — via Contract)

1. Party (claimant's attorney or the claimant directly) navigates to "File a Demand" or "Request Mediation"
2. **Decision tree:** Arbitration or mediation? Is NAM named in the contract? Which contract type (employment, consumer, healthcare, commercial)?
3. System surfaces the **correct demand form, rules of procedure, and fee schedule** based on answers
4. Party fills and uploads signed demand form + supporting documents + proof of service
5. Pays filing fee (or applies for waiver)
6. Case submitted to NAM → **respondent automatically notified** via email with a response link
7. Respondent follows link → guided response flow (no account required) → confirms or declines participation
8. Once respondent confirms and payment clears → case activated, parties can track status

### 6.3 Respondent Response Flow

1. Respondent receives an email from NAM: "A demand has been filed. Action required."
2. Email contains a **direct response link** — no account, no login, no password required for the initial response
3. Respondent clicks link → response page shows: case summary (enough context to understand the claim), response options, deadline
4. **Response options:** Accept (agree to proceed) / Decline (with reason) / Request extension (with reason)
5. If accepting → guided DRA signing (DocuSign or print/sign/upload)
6. On completion → NAM notified, case progresses, respondent receives confirmation
7. System auto-sends reminder if no response after configured number of days

### 6.4 Mass Filing (Enterprise Client)

1. Enterprise user logs in → account dashboard → "Submit bulk filing"
2. Downloads template CSV or uses their own format (system provides field mapping)
3. Uploads CSV → system validates: checks required fields, party data format, duplicate detection
4. **Validation report:** valid rows, error rows (with specific errors shown per row), duplicate candidates
5. User corrects errors inline — no re-upload of the whole file
6. Confirms submission → batch processing runs in background with progress indicator
7. Completion notification with summary (accepted cases, errors, case numbers assigned)

### 6.5 Neutral Selection (Party Submitting Preferences)

1. Party receives notification: "Please submit your neutral preferences for Case #XXXXX"
2. Logs in → navigates to case → Neutral Selection tab
3. Views published slate of candidate neutrals: name, speciality, jurisdiction, experience (no rates, no other party's selections — strictly controlled)
4. Selects up to N preferences using eliminate-3 or rank-order method (configured per case type)
5. Submits preferences → system confirms receipt, tells the party when NAM will make the final decision
6. **Confidentiality enforced:** at no point does the party see the opposing party's selections
7. Once NAM assigns a neutral → party receives notification with neutral's name and any relevant bio

### 6.6 Payment Flow

1. Party receives invoice notification: "Invoice ready for Case #XXXXX"
2. Logs in → invoices tab → sees outstanding balance with itemised detail
3. Selects payment method: credit card, ACH, or existing payment method on file
4. Reviews invoice → confirms payment
5. Receipt issued → case status updates (e.g. if decision was in payment-hold, it is now released)
6. Payment history accessible for all past invoices

---

## 7. Feature Requirements by Module

Requirements marked **[MUST]** are non-negotiable for the prototype. Requirements marked **[SHOULD]** are important but negotiable for phasing.

---

### Module 01 — Account & Authentication
*Frictionless access — including for first-time filers who don't yet have an account.*

**Current state:** myADR has a login. First-time filers must create an account before they can submit anything — creating an unnecessary barrier at the most critical moment (intake).

**Requirements:**
- [MUST] Submit a case **without requiring login first** — account creation is offered after submission, not before
- [MUST] Standard login: email + password with MFA
- [MUST] Account types: Individual, Attorney / Law Firm, Enterprise / Organisation
- [MUST] Self-service account recovery: forgot password, locked account, expired link
- [MUST] Enterprise accounts: organisation-level account with multiple user seats, each with a role (admin, filer, read-only)
- [MUST] Session persistence: remember me option for returning users; session timeout after configurable idle period
- [SHOULD] SSO for large enterprise clients (law firms, carriers)
- [SHOULD] Account linking: individual attorney accounts can be associated with a firm account

**Screens to design:**
- Login screen
- Account creation — individual and firm variants
- MFA verification
- Forgot password flow
- First-time filer prompt (after guest submission — "Save your details for next time")

---

### Module 02 — Case Submission — Voluntary Intake
*The front door for PI and voluntary matters. Must be easier than sending an email.*

**Current state:** The intake wizard exists but is rigid and hard to use. Most cases arrive by email. Unstructured emails are hard to extract data from. Missing fields create rework.

**Requirements:**
- [MUST] Intake wizard is accessible without login (guest submission)
- [MUST] Step 1 — Case type: voluntary or contractual? Arbitration or mediation? Case category (PI, commercial, employment, consumer, healthcare, no-fault)?
- [MUST] Step 2 — Parties: claimant, respondent, counsel, firm, adjuster, claim number, insurance carrier — smart search against existing records; duplicate detection with suggested matches
- [MUST] Step 3 — Case details: date of incident, matter description, applicable jurisdiction, special circumstances (e.g. fee waiver)
- [MUST] Step 4 — Documents: upload demand/request form and supporting documents. Each document slot labelled with what's required and what formats are accepted.
- [MUST] Step 5 — Fee: fee calculated automatically from case type and matter details. Pay via credit card or ACH. Fee waiver application with guided criteria.
- [MUST] Step 6 — Review & submit: full case summary with edit links back to each step. Explicit submission confirmation.
- [MUST] On submission: unique case reference number issued immediately. Confirmation email sent. Account creation prompt.
- [MUST] Rework link: if NAM sends back a case for rework, the submitter receives a link that reopens the submission at the specific step requiring correction
- [SHOULD] Save and return: partially completed submissions can be saved and resumed (requires account)
- [SHOULD] Fee calculator: before starting intake, user can estimate the applicable fee based on case type

**Screens to design:**
- Intake wizard — landing / case type selection
- Intake wizard — Step 2: Parties (with duplicate detection state)
- Intake wizard — Step 3: Case details
- Intake wizard — Step 4: Document upload (labelled slots + drag-and-drop)
- Intake wizard — Step 5: Fee + payment
- Intake wizard — Step 6: Review & confirm
- Submission confirmation (with case reference number)
- Rework request — specific step re-opened with NAM's rework note shown
- Fee calculator (pre-intake)

---

### Module 03 — Case Submission — Contractual Intake
*The commercial front door. Decision tree must surface the right form, rules, and fee — no manual interpretation required.*

**Current state:** Contractual intake has a decision tree but the available rule sets are hard-coded (adding a new rule set requires a developer). The respondent confirmation step is entirely manual.

**Requirements:**
- [MUST] Decision tree: arbitration or mediation? Is NAM named in the contract? Contract type (employment, consumer, healthcare malpractice, commercial, self-storage, seafarer, other)?
- [MUST] System surfaces the **correct demand form and rules of procedure** automatically based on decision tree answers — not a list the user must pick from
- [MUST] Configurable rule sets: NAM admin can add, edit, and activate/deactivate rule sets from the Admin module — no dev deployment required
- [MUST] Proof of service upload: contractual cases require proof of service on respondent
- [MUST] Payment: Authorize.Net integration for filing fees. Fee waiver flow.
- [MUST] Respondent auto-notification: on case submission, respondent is automatically notified with a response link — no manual NAM action required
- [MUST] Guided respondent response: see Section 7.4 (Respondent Response module)
- [SHOULD] Contract upload: claimant can upload a copy of the relevant contract clause for NAM's reference
- [SHOULD] Pre-fill from contract: if an enterprise client has a registered contract on file with NAM, the system can pre-fill case type and rule set

**Screens to design:**
- Contractual intake — decision tree (question by question, progress shown)
- Contractual intake — correct form surfaced (based on answers)
- Contractual intake — document upload (demand + proof of service + supporting docs)
- Contractual intake — fee + payment
- Contractual intake — review & submit
- Submission confirmation + respondent notification sent

---

### Module 04 — Respondent Response
*The most friction-sensitive flow in the portal. Must work without an account.*

**Current state:** No portal-based respondent response path exists. Respondents are contacted by phone and email. Chasing responses is one of NAM's highest-friction manual workflows.

**Requirements:**
- [MUST] Respondent receives an email with a **direct response link** — no account or login required to use it
- [MUST] Response page shows: who filed the demand, what matter it relates to, what NAM is asking the respondent to do, and by when
- [MUST] Response options: Accept (agree to proceed) / Decline (with reason) / Request extension (with reason)
- [MUST] Accept path: guided DRA/agreement signing — DocuSign preferred; print/sign/upload fallback
- [MUST] Decline path: respondent selects decline reason (from configurable list); NAM notified automatically
- [MUST] Extension request: respondent requests more time; NAM receives request and approves/denies (with notification back to respondent)
- [MUST] Auto-reminder: if no response after N days (configurable), system automatically re-sends reminder — no manual NAM chase
- [MUST] Escalation: if no response after M days (configurable), NAM is alerted to escalate manually
- [MUST] Account prompt: after completing response, respondent is prompted to create an account to track the case going forward
- [SHOULD] Multiple respondents: if a case has multiple respondents, each receives their own response link and the response status for each is tracked separately

**Screens to design:**
- Respondent response page — email link landing (no login, case summary shown)
- Response options — Accept / Decline / Request extension
- Accept path — DocuSign flow (embedded)
- Accept path — Upload signed document (fallback)
- Decline — reason selection
- Extension request form
- Response confirmed state
- Account creation prompt (post-response)

---

### Module 05 — Mass Filing
*Bulk case submission for law firms and enterprise clients. No manual keying.*

**Current state:** Mass filing requires someone to manually key each case into CMS or build ad hoc workarounds. No structured bulk upload path exists in the portal today.

**Requirements:**
- [MUST] CSV template available for download: pre-defined column structure matching the required case fields
- [MUST] Custom field mapping: enterprise clients can map their own CSV column names to NAM's required fields (one-time setup, saved for future uploads)
- [MUST] Upload and validate: system checks all rows for required fields, data format errors, and duplicate detection **before creating any cases**
- [MUST] Validation report: shows valid rows, error rows (with specific field-level errors per row), and duplicate candidates — all viewable inline
- [MUST] Inline correction: user can correct individual row errors directly in the browser — no need to re-upload the full file
- [MUST] Batch submission: confirm → all valid rows submitted simultaneously with no cap on batch size
- [MUST] Background processing: batch runs in background; user can navigate away and return. Progress indicator shown.
- [MUST] Completion notification: email when batch completes, with summary (accepted, failed, case numbers for accepted cases)
- [MUST] Batch history: enterprise users can see all previous bulk submissions with status and downloadable reports
- [SHOULD] Recurring filing templates: save a batch template for matters that follow the same structure every time

**Screens to design:**
- Mass filing landing — template download + upload
- Field mapping setup (first time)
- Validation report — valid/error/duplicate summary with inline corrections
- Batch submission confirmation
- Background processing — progress indicator
- Batch history list

---

### Module 06 — Case Dashboard
*All my cases, at a glance. Status without calling NAM.*

**Current state:** No client-facing case dashboard exists. Parties check case status by calling or emailing NAM.

**Requirements:**
- [MUST] Case list: all cases the logged-in user is a party to — case number, parties, case type, status (plain-language label), last activity, next hearing date
- [MUST] Status labels in plain language: not internal NAM codes. "Hearing Scheduled", "Awaiting Your Response", "Decision Pending", "Closed" — not "HEARD/PMA" or "WAIT2"
- [MUST] Search and filter: search by case number, party name, matter type. Filter by status (open / awaiting action / closed), date range.
- [MUST] "Action required" badge: cases where the user has a pending action (submit documents, respond to demand, submit neutral selection, pay invoice) prominently highlighted
- [MUST] Enterprise account view: organisation-level view spanning all cases across the organisation, with the ability to filter by filer, case manager, or matter type
- [SHOULD] Case export: export case list to CSV for internal use
- [SHOULD] Saved filters: save frequently used filter combinations

**Screens to design:**
- Case Dashboard — individual attorney view
- Case Dashboard — enterprise/organisation view
- Case Dashboard — filtered by "Action Required"
- Case Dashboard — empty state (no cases yet)

---

### Module 07 — Case View
*Everything a party needs to know about one case. Only what they're allowed to see.*

**Current state:** Case status is not accessible through the portal. Parties must contact NAM.

**Requirements:**
- [MUST] Case header: case number, matter type, case status (plain-language), filing date, NAM case manager contact
- [MUST] Parties section: the parties listed on the case — names and roles. No opposing party documents or contact details shown beyond what NAM has permitted.
- [MUST] Timeline: key events in plain language ("Case filed", "Respondent confirmed", "Neutral assigned", "Hearing scheduled for [date]", "Decision pending", "Decision released")
- [MUST] Hearings section: all scheduled hearings — date, time, format (in-person / Zoom), location or Zoom link
- [MUST] Documents section: documents the user is permitted to access — their own submissions, documents NAM has shared with them, decisions once released
- [MUST] Invoices section: outstanding and paid invoices; pay now CTA on outstanding invoices
- [MUST] Pending actions: if the user needs to do something ("Submit your neutral selection by [date]", "Invoice due"), shown as a prominent banner
- [SHOULD] Messaging: user can send a message to their NAM case manager directly from the case view — structured message, not open email
- [SHOULD] Notifications history: log of all notifications sent to this user about this case

**Screens to design:**
- Case View — Overview (timeline + parties + next action)
- Case View — Documents tab (party's own folder)
- Case View — Hearings tab (upcoming + past)
- Case View — Invoices tab (outstanding + paid)
- Case View — "Action required" banner state (e.g. neutral selection due)

---

### Module 08 — Document Submission
*Upload the right document to the right place — without emailing it to NAM.*

**Current state:** Documents arrive by email, fax, and mail. No portal-based submission path for most documents. Case managers manually attach documents to cases.

**Requirements:**
- [MUST] Document upload from Case View: user can upload documents directly to their case
- [MUST] Document slot model: each document has a defined type (intake form, proof of service, evidence, signed agreement, etc.) — user selects the type, system places it in the correct folder
- [MUST] Only the user's own folder is writable: party A cannot see or write to party B's document folder
- [MUST] Supported formats: PDF, MS Office (Word, Excel), common image formats (JPG, PNG), CSV
- [MUST] Upload confirmation: user sees uploaded documents immediately with a "received by NAM" status
- [MUST] Document access: user can download or preview their own submissions and any documents NAM has shared with them (e.g., confirmed hearing details, released decisions)
- [SHOULD] DocuSign embedded: when a document requires signing (DRA, PMA), the signing flow is embedded in the portal — not redirected to an external tool

**Screens to design:**
- Case View — Documents tab (with upload action)
- Document upload modal — type selection + drag-and-drop
- DocuSign embedded signing flow
- Document confirmed / received state

---

### Module 09 — Neutral Selection
*Parties submit preferences directly. Confidentiality enforced by the system, not by manual NAM intermediation.*

**Current state:** Parties submit neutral preferences by email or phone. NAM manually enters these into the system. The confidentiality requirement makes NAM the manual intermediary.

**Requirements:**
- [MUST] Party receives notification when neutral selection is open: "Please submit your neutral preferences for Case #XXXXX by [date]"
- [MUST] Selection page: shows the slate of candidate neutrals published by NAM — name, speciality, jurisdiction, relevant experience (no rates, no private information)
- [MUST] Selection method: eliminate-3 (remove up to 3 from the list) or rank-order (rank in order of preference) — method set by NAM per case type, not chosen by party
- [MUST] Submission deadline shown and enforced: deadline displayed prominently; submission blocked after deadline
- [MUST] Confidentiality strictly enforced: at no point does a party see the opposing party's selections, preferences, or any indication of what they chose
- [MUST] Confirmation: party receives confirmation that their selections were received
- [MUST] NAM assigns neutral: once NAM makes the final decision, both parties receive a notification with the assigned neutral's name
- [SHOULD] Conflict disclosure: if a party knows of a conflict with a candidate neutral, they can flag it during the selection step with a brief note

**Screens to design:**
- Neutral selection notification (email → portal link)
- Neutral selection page — candidate slate (eliminate-3 method)
- Neutral selection page — rank-order method
- Deadline passed — selection closed state
- Neutral assigned — notification and confirmation state

---

### Module 10 — Hearing Management
*Know when, where, and how — without calling the scheduler.*

**Current state:** Hearing confirmations are sent by NAM to parties one at a time. Zoom links are distributed separately. Parties have no self-service access to hearing details.

**Requirements:**
- [MUST] Upcoming hearings visible on Case View: date, time, format (in-person / Zoom), location or Zoom link, list of confirmed attendees
- [MUST] Two-day re-confirmation: system sends a reminder to all parties 2 days before the hearing (this already happens operationally; the portal should reflect this and allow parties to confirm)
- [MUST] Zoom link: if hearing is virtual, Zoom link is accessible directly in the portal — not just in the email
- [MUST] Adjournment request: party can request a change to a scheduled hearing through the portal — provides reason, requests new date range. NAM receives and approves/declines.
- [SHOULD] Calendar export: party can add a hearing to their calendar (iCal / Google Calendar) from the portal
- [SHOULD] Location details: for in-person hearings, full address, room, parking information shown

**Screens to design:**
- Hearing detail view — virtual (Zoom link + attendees)
- Hearing detail view — in-person (address + room details)
- Adjournment request form (reason + proposed date range)
- Adjournment request confirmation

---

### Module 11 — Invoice & Payment
*Pay online. No phone call to finance.*

**Current state:** Parties receive invoices by email and pay by check, credit card (manually entered into Authorize.Net by Sharon), or ACH. No self-service payment portal for clients.

**Requirements:**
- [MUST] Invoice list: all invoices for the user's cases — invoice number, case reference, amount, due date, status (outstanding / paid / overdue)
- [MUST] Invoice detail: itemised breakdown — filing fees, hearing fees, adjournment fees, other line items
- [MUST] Online payment: pay via credit card or ACH directly in the portal — Authorize.Net integration
- [MUST] Payment confirmation: receipt issued, case status updated. If payment clears a decision hold, the decision becomes accessible immediately.
- [MUST] Payment history: all past payments with receipt download
- [MUST] Enterprise eBilling: enterprise clients can receive invoices and pay in batch — no 20-invoice cap
- [SHOULD] Saved payment methods: store card/ACH details for faster future payments
- [SHOULD] Payment plan: for large invoices, a payment plan option can be offered (NAM-configured per case type)

**Screens to design:**
- Invoice list — outstanding + paid
- Invoice detail — line items + pay now
- Payment flow — credit card / ACH
- Payment confirmation + receipt
- Decision unlocked state (payment cleared, decision now accessible)
- Enterprise eBilling queue

---

### Module 12 — Notifications & Settings
*Stay informed. Control what you receive.*

**Requirements:**
- [MUST] In-app notification centre: all notifications with read/unread state; links directly to the relevant case or action
- [MUST] Notification types: case submission confirmed, respondent response received, neutral assigned, hearing scheduled, document uploaded, invoice issued, decision released, action required (with deadline)
- [MUST] Email notifications: sent for every notification type by default; user can opt out of specific types
- [MUST] Action-required notifications are non-suppressible: notifications requiring user action (selection deadline, invoice due, respond to demand) cannot be turned off
- [SHOULD] Notification digest: option to receive a daily summary email instead of per-event emails
- [SHOULD] Account settings: update email, password, contact details, notification preferences

**Screens to design:**
- Notification centre — unread state
- Notification preferences settings
- Account settings — contact details + password

---

## 8. Screens to Design — Prototype Checklist

| Priority | Module | Screen |
|---|---|---|
| **P1** | Account | Login screen |
| **P1** | Account | Account creation — individual |
| **P1** | Account | First-time filer prompt (post-guest submission) |
| **P1** | Voluntary Intake | Landing / case type selection |
| **P1** | Voluntary Intake | Step 2: Parties (with duplicate detection) |
| **P1** | Voluntary Intake | Step 3: Case details |
| **P1** | Voluntary Intake | Step 4: Document upload |
| **P1** | Voluntary Intake | Step 5: Fee + payment |
| **P1** | Voluntary Intake | Step 6: Review & confirm |
| **P1** | Voluntary Intake | Submission confirmation |
| **P1** | Voluntary Intake | Rework — step re-opened with NAM note |
| **P1** | Contractual Intake | Decision tree |
| **P1** | Contractual Intake | Correct form surfaced |
| **P1** | Contractual Intake | Submission confirmation + respondent notified |
| **P1** | Respondent Response | Response page (no login — email link) |
| **P1** | Respondent Response | Accept path — DocuSign |
| **P1** | Respondent Response | Decline — reason selection |
| **P1** | Respondent Response | Response confirmed state |
| **P1** | Case Dashboard | Individual attorney view |
| **P1** | Case Dashboard | "Action required" filtered view |
| **P1** | Case View | Overview (timeline + parties + next action) |
| **P1** | Case View | Documents tab |
| **P1** | Case View | Hearings tab |
| **P1** | Case View | Invoices tab |
| **P1** | Invoice & Payment | Invoice detail + pay now |
| **P1** | Invoice & Payment | Payment confirmation + decision unlocked state |
| **P2** | Account | Account creation — firm / enterprise |
| **P2** | Account | MFA verification |
| **P2** | Account | Forgot password |
| **P2** | Voluntary Intake | Fee calculator (pre-intake) |
| **P2** | Contractual Intake | Document upload (demand + proof of service) |
| **P2** | Respondent Response | Extension request form |
| **P2** | Respondent Response | Account creation prompt (post-response) |
| **P2** | Respondent Response | Multiple respondents — per-respondent tracking |
| **P2** | Mass Filing | Template download + upload |
| **P2** | Mass Filing | Validation report with inline corrections |
| **P2** | Mass Filing | Batch progress indicator |
| **P2** | Mass Filing | Batch history list |
| **P2** | Case Dashboard | Enterprise / organisation view |
| **P2** | Case Dashboard | Empty state (no cases) |
| **P2** | Case View | "Action required" banner |
| **P2** | Document Submission | Upload modal — type selection |
| **P2** | Document Submission | DocuSign embedded signing |
| **P2** | Neutral Selection | Candidate slate — eliminate-3 method |
| **P2** | Neutral Selection | Candidate slate — rank-order method |
| **P2** | Neutral Selection | Deadline passed state |
| **P2** | Neutral Selection | Neutral assigned notification |
| **P2** | Hearing Management | Hearing detail — virtual (Zoom link) |
| **P2** | Hearing Management | Hearing detail — in-person |
| **P2** | Hearing Management | Adjournment request form |
| **P2** | Invoice & Payment | Enterprise eBilling queue |
| **P2** | Notifications | Notification centre — unread state |
| **P2** | Notifications | Notification preferences |

---

## 9. Design Requirements

### 9.1 Design System

myADR uses the same Symphony Design System tokens as the Case Manager Portal and Neutrals Portal. As the external-facing portal, it should feel the **most polished and approachable** of the three — designed for users who may be filing a case for the first time and have no training.

| Token | Value | Usage |
|---|---|---|
| Brand color | `#6C69FF` (Indigo) | Primary actions, progress indicators, active states |
| Primary text | `#0B0B14` (Ink) | Body text, headings |
| Secondary text | `#5A5A6B` (Ink-3) | Labels, help text, meta |
| Surface | `#FFFFFF` (White) | Cards, form areas |
| Background | `#F6F6F9` (Paper) | Page background |
| Success | `#18A957` | Submission confirmed, payment received, task complete |
| Warning | `#C77700` | Action required, deadline approaching |
| Error | `#D6334B` | Validation errors, missing required fields |
| Font | Poppins | All text |

### 9.2 Key Interaction Principles

- **Plain language throughout:** No ADR jargon visible to parties. "Post-Mediation Agreement" → "Mediation Resolution Document". "DRA" → "Agreement to Arbitrate". Use the right legal term where precision matters, but explain it in parentheses on first use.
- **Progressive disclosure for complexity:** The contractual decision tree surfaces only one question at a time — not a multi-field form. Each step is simple; complexity is accumulated gradually.
- **Validation at each step, not at the end:** Required fields are validated when the user tries to move to the next step — not when they try to submit the entire form. Errors are explained in plain language ("We need the respondent's address to deliver the demand").
- **Guest-first for intake:** Requiring account creation before filing is the single biggest barrier to portal adoption. Login is never the first step.
- **Action-required callouts:** Any case where the user needs to act should surface a prominent, dated, plain-language call to action. Never let a deadline pass silently.
- **Status that explains itself:** Status labels must be plain English and self-explanatory. Include a one-sentence explanation for less obvious statuses (e.g., "Awaiting payment clearance — your decision will be released once the outstanding invoice is paid").
- **Mobile-responsive:** Many parties and adjusters will access the portal on mobile — particularly for status checks, document uploads, and payment. All flows must work at mobile width.

### 9.3 Empty States

| Screen | Empty state copy |
|---|---|
| Case Dashboard (no cases) | "You don't have any cases yet. Ready to file? [Submit a Case]" |
| Documents tab (no documents) | "No documents have been shared with you on this case yet." |
| Invoices tab (no invoices) | "No invoices have been issued for this case yet." |
| Hearings tab (no hearings scheduled) | "No hearings have been scheduled yet. You'll see hearing details here once NAM confirms a date." |
| Notification centre (all read) | "You're all caught up. We'll notify you here when something needs your attention." |

### 9.4 Accessibility

- WCAG 2.1 AA minimum — especially important for the respondent response flow, which may be used by individuals under legal and time pressure
- Error messages must identify the specific field and explain what's needed — never "something went wrong"
- All interactive elements keyboard-navigable
- Document upload must support assistive technology (screen readers, keyboard-only navigation)

---

## 10. Non-Functional Requirements

| Category | Requirement |
|---|---|
| **Performance** | Case list loads in < 2 seconds. Document upload progress visible in real time. Payment processing response in < 5 seconds. |
| **Security** | HTTPS everywhere. Payment handled via Authorize.Net tokenisation — no card numbers stored by NAM. Document transmission encrypted in transit and at rest. |
| **Data isolation** | Strict per-case access control enforced at the API level — not just the UI. Party A cannot access Party B's documents or neutral selections under any path. |
| **Respondent link security** | Response links are time-limited (configurable expiry), single-use, and tied to the specific case. A respondent cannot access other cases via the link. |
| **Reliability** | Portal available 99.5% uptime. Filing window failures must result in a clear error with retry option — never silent data loss. |
| **Browser/device** | Chrome, Firefox, Safari, Edge (latest 2 versions). Mobile-responsive — key flows (status, payment, documents) must work at 375px width. |
| **Audit trail** | All submissions, payments, document uploads, and neutral selections logged with user, timestamp, and IP. Available to NAM admin. |
| **File handling** | Max file size: 50MB per document. Bulk filing CSV: no row cap (processed in background). Document storage encrypted at rest. |

---

## 11. Success Metrics

| Metric | Current state | Target |
|---|---|---|
| Portal intake rate | Most intake arrives by email/phone | > 60% of new cases submitted through portal within 12 months of launch |
| Intake data completeness | Missing fields discovered mid-workflow | > 90% of portal submissions pass required-field validation on first attempt |
| Respondent response time | Manual chase — days to weeks | Median respondent response time < 5 business days from notification |
| Inbound status enquiries to NAM | Unmeasured — anecdotally high | 30% reduction in "what's the status of my case" calls within 6 months |
| Neutral selection cycle time | Manual intermediation — days | Selection round complete in < 3 business days from slate publication |
| Online payment rate | Near zero — most payments by check or manual card entry | > 50% of invoices paid through portal within 12 months |
| Mass filing adoption | Zero (no native path exists) | 100% of enterprise mass filings submitted via portal within 6 months of launch |

---

## 12. Open Questions for Next Discovery Phase

| Area | Open question | Blocking? |
|---|---|---|
| Intake | What is the exact decision tree logic for contractual intake? How many distinct paths are there (employment, consumer, healthcare, commercial, self-storage, seafarer)? | Yes — contractual intake wizard design |
| Respondent | What is the current SLA for respondent response? When does NAM escalate? | Yes — auto-reminder and escalation logic |
| Documents | What is the exact permission model for document access? Which document types does each party role see? Who can see the neutral's folder? | Yes — document module design |
| Payments | Which cases require upfront payment vs. post-hearing invoicing? Can parties see the fee schedule before starting intake? | Yes — fee calculator and payment flow |
| Neutral selection | Is the selection method (eliminate-3 vs. rank-order) fixed per case type, or configurable per case? Does it vary by PI vs. Commercial? | Yes — neutral selection UI |
| Enterprise accounts | What is the permission model for enterprise accounts? Can a firm admin see all cases filed by any attorney at the firm? | Yes — enterprise dashboard design |
| Pro se | Are there specific intake paths or form variants for pro se (unrepresented) parties? | Yes — pro se intake flow |
| Decision release | Who at NAM can override the payment-hold on a decision? Under what circumstances? Should the client portal explain why the decision is held? | No — edge case |
| Rework | What is the full list of reasons NAM sends a case back for rework, and what information do they include in the rework note? | No — affects rework screen content but not structure |

---

## Appendix: Discovery Sources

| Source | Description | Key myADR relevance |
|---|---|---|
| Frustration & Delight Themes | Synthesized from CMS 1.0 rewrite sessions (Kickoff–Day 45, Jun–Aug 2023) | Mass filing pain (#1 frustration); hard-coded client rules; GEICO stipulation; unified portal vision as delight theme |
| Human E2E Flow | Complete case lifecycle in plain English | Section 1 (Before a case exists — intake channels), Section 15 (Portals and identity — access model), Section 3 (Contact cleanup — duplicate detection) |
| Voluntary Intake Flow | Detailed flow: submission → review → case creation | Pain: unstructured email intake, manual re-entry, bogus/invalid case judgement |
| Contractual Intake Flow | Detailed flow: decision tree → form → respondent confirmation → activation | Pain: hard-coded rule sets, PI vs. Commercial categorisation, manual respondent chasing |
| Neutral Selection Flow | Full flow: slate publication, party selection, confidentiality rule, NAM final decision | Confidentiality requirement, party-facing selection experience, eliminate-3 method |
| Day-in-the-Life Discovery Report | 60 recordings, 17h 24m | PI section: missing adjuster/claim number at intake; phone-tag as core workflow; date hold SLA gap |
| CMS 2 Capability & Sizing Inquiry | NAM's formal scope document | External Client Portal described explicitly; user base ~2,000 external; mass filing scenario; integration list |
| Case Lifecycle Map | End-to-end flow diagram | Three intake doors, respondent confirmation step, PMA release after payment |
| PMA Decision Flow | PMA lifecycle: draft → NAM review → DocuSign → release | Decision released only after payment clears — must be transparent to client portal user |

---

*NAM CMS 2.0 — myADR Client Portal PRD · Symphony × NAM · May 2026 · CONFIDENTIAL*
