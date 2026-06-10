# SQUADFLOW — דרישות עתידיות
**תאריך:** 2026-06-10 | מסמך חי — מתעדכן לפי החלטות מוצריות

---

## Phase 2 — Tenant Portal (לקוחות)

### 2.1 Dashboard לקוח
- KPI cards: משתמשים פעילים, פרויקטים פתוחים, עלות חודשית
- Kendo Charts: activity over time, tasks by status, burn rate
- Quick actions: יצירת פרויקט, הוספת משתמש

### 2.2 פרויקטים ומשימות
**spec:** `spec-project-environment.md` (אושר 2026-06-09)

5 שכבות:
1. **Project Card** — שם, תיאור, טנאנט, סטטוס (PLANNING/ACTIVE/PAUSED/DONE)
2. **AI Team Config** — הגדרת סוכנים AI לפרויקט (from DevTools)
3. **Tasks / Sprints** — משימות, sprint planning, burndown
4. **Environments** — DEV/STG/PROD, URLs, secrets
5. **Activity Log** — timeline פעילות הפרויקט

**DB:** `tblProjects`, `tblProjectTeam`, `tblSprints`, `tblTasks`, `tblTaskAssignments`, `tblEnvironments`

### 2.3 לידים ולקוחות
**spec:** `spec-packages-products.md` (אושר 2026-06-07)

- `tblLeads` — לידים נכנסים (מושגים ממודולי Marketing)
- `tblCustomers` — לקוחות מקושרים לטנאנט
- Pipeline CRM לייט: LEAD → PROSPECT → CUSTOMER → CHURNED
- כרטיסי ביקור דיגיטליים (vCard)
- ייבוא/ייצוא Excel

### 2.4 Billing & Subscriptions
**spec:** `spec-packages-products.md`

- `tblSubscriptions` — מנויים פעילים per טנאנט
- `tblOrders`, `tblOrderItems` — חשבוניות
- תמיכת usage billing (per API call / per user / flat)
- Webhook לPaddle / Stripe
- מייל אוטומטי: התראת חידוש, קבלה

---

## Phase 3 — DevTools Platform

**spec:** `products-devtools.md` — 12+ רכיבים

### 3.1 מחולל ישויות (Entity Generator)
- GUI להגדרת model: שדות, טיפוסים, validations, relations
- יצירת: DB migration SQL + Node.js route + Angular component
- מבוסס `tblScreenFieldConfig`

### 3.2 מחולל מסכים (Screen Generator)
- ממשק drag-and-drop לבניית מסכי CRUD
- מייצר Angular standalone component עם Kendo Grid
- שיוך הרשאות RBAC אוטומטי

### 3.3 מחולל טפסים (Form Builder)
- Visual form designer
- תמיכה בtypes: text, number, date, dropdown, file, checkbox
- ולידציה: required, regex, range
- שמירה ל-`tblScreenFieldConfig`

### 3.4 Workflow Engine
- Visual node-based flow builder
- Triggers: CRON / EVENT / WEBHOOK / MANUAL
- Actions: HTTP call / DB write / email / notify / SP call
- מבוסס `spec-task-scheduler.md` (אושר 2026-06-09)

### 3.5 AI Agent Manager
- הגדרת Agent: שם, model (Claude/GPT/Gemini), system prompt
- MCP tools assignment
- API key per agent (מוצפן ב-DB)
- Log כל invocation

### 3.6 Connectors
**spec:** `spec-connectors.md` (אושר 2026-06-09)

- AI connectors: Anthropic, OpenAI, Google Gemini
- DB connectors: MSSQL, PostgreSQL, MySQL, MongoDB
- Email: SMTP, SendGrid, Mailgun
- Storage: S3, Azure Blob, local
- Webhooks: Outbound + Inbound
- Auth: OAuth2, API Key, Basic
- Test Connection button
- AES-256 encryption לcredentials

### 3.7 Task Scheduler (CRON)
**spec:** `spec-task-scheduler.md` (אושר 2026-06-09)

- 4 סוגי trigger: CRON / INTERVAL / WEBHOOK / EVENT
- `tblScheduledTasks`, `tblTaskExecutionLog`
- UI: רשימת tasks + toggle + run manual + log viewer
- Backend worker: `node-cron` + retry logic

### 3.8 Platform Services Monitor
**spec:** `spec-platform-services.md` (אושר 2026-06-09)

- מסך מרכז: כל שירותי הפלטפורמה בtime
- Status: ONLINE / DEGRADED / OFFLINE
- Last run / Next run / Manual refresh
- `tblPlatformServices`, `tblServiceHealthLog`

### 3.9 Document Manager
- `tblDocuments` — מסמכים per פרויקט/ישות
- תמיכת: PDF, DOCX, XLSX, images
- version control (soft)
- preview inline (iFrame / PDF.js)

### 3.10 RBAC Groups (Phase 2 already implemented base)
- UI מלא לshared permission templates
- שיוך group לproject / product
- Inherited permissions display

---

## Phase 4 — Marketing & Public

### 4.1 Landing Page Builder
- מודולרי, drag-and-drop
- Hero / Features / Pricing / CTA sections
- Export כ-HTML סטטי

### 4.2 Pricing Page (Public)
- הצגת חבילות מ-`tblPackages WHERE IsPublic=1`
- Feature comparison table
- CTA → lead capture form

### 4.3 Lead Capture API
- `POST /api/public/leads` — ללא auth
- ReCaptcha v3 validation
- Auto-email לsales

---

## חובות טכניים (Technical Debt)

### עדיפות גבוהה
| פריט | תיאור | אחראי |
|------|--------|--------|
| Password hashing | עבור לbcrypt (ריצה חד-פעמית migration) | Backend |
| Email notifications | SMTP config + templates | Backend |
| Error logging | Winston / Sentry integration | Backend |
| Rate limiting | express-rate-limit per IP + per tenant | Backend |
| Input sanitization | DOMPurify לכל HTML input | Frontend |

### עדיפות בינונית
| פריט | תיאור |
|------|--------|
| WebSockets | real-time notifications (socket.io) |
| Soft delete audit | מי מחק + מתי בכל soft delete |
| File storage | העלאת קבצים לAzure Blob במקום local |
| 2FA | TOTP (Google Authenticator) לmfaEnabled users |
| API versioning | `/api/v1/` prefix |

### עדיפות נמוכה
| פריט | תיאור |
|------|--------|
| GraphQL layer | על גבי REST הקיים |
| Mobile app | React Native / Capacitor wrapper |
| Offline mode | Service Worker + IndexedDB cache |

---

## Security Hardening

- [ ] CSP headers (מוחרג כעת ב-Helmet)
- [ ] CORS restrict לdomain ספציפי (לא `*`)
- [ ] SQL injection — כל input מוגן via parameterized queries ✅
- [ ] XSS — DOMPurify על כל `[innerHTML]`
- [ ] CSRF token על forms משמעותיים
- [ ] Session invalidation ב-DB (token blacklist)
- [ ] Audit log tamper-proof (append-only table)
- [ ] IP Whitelist per tenant (settings placeholder קיים)
- [ ] Login hours restriction per tenant (settings placeholder קיים)

---

## Roadmap תמציתי

```
Q3 2026:  Dashboard + Projects + Tasks basic
Q4 2026:  Billing + Subscriptions + Leads CRM
Q1 2027:  DevTools Phase 1 (Entity/Screen/Form generators)
Q2 2027:  DevTools Phase 2 (AI agents, Connectors, Scheduler)
Q3 2027:  Marketing + Public site + Landing builder
```

---

## החלטות מוצריות מאושרות (לא לשנות ללא אישור PM)

1. **RBAC 4-שכבתי** — Frontend directive + guard + RbacService + Backend middleware
2. **OrgType אחיד** — PLATFORM / SOFTWARE_HOUSE / IMPLEMENTER / CLIENT (spec-org-architecture.md)
3. **Groups** = שכבת grouping מעל roles (לא תחליף)
4. **Packages** = חבילת מוצרים לתמחור (לא bundler)
5. **Task Scheduler** — DevTools #13, נפרד מCRON הקיים לexchange rates
6. **Platform Services** — read-only monitor, לא management console
7. **Field RBAC** — based on `RequiredAction` field, not blanket hide/show
