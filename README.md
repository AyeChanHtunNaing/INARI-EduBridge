# INARI EduBridge — Your Gateway to Study in Japan

INARI EduBridge is a premium, full-stack education information ecosystem developed on behalf of **INARI Japanese Language Hub**. 

The platform aggregates Japanese university profiles, scholarship schemes, step-by-step chronological timelines, cost of living breakdowns, and an educational news hub into a unified, responsive interface.

🌐 **Live Website Link:** [https://inari-edubridge.netlify.app](https://inari-edubridge.netlify.app)

---

## ✨ Core Key Features

### 🏫 Unified Japanese University Directory
* Fully searchable directory of national and private universities across Japan.
* Multi-criteria filters: region prefectures, university type (National vs Private), degree levels, language of instruction (English vs Japanese programs), and scholarship eligibility.
* Tabbed detail sheets for campuses detailing: Programs, Admissions, Tuition fees, and counseling contacts.
* STATEFUL client bookmarks saving system to compare target choices instantly.

### 💰 Scholarship Finder
* Cataloged database of fully-funded MEXT government awards, JASSO stipends, and institutional tuition-reduction schemes.
* Highlighted coverage categories (Full vs Partial coverage) and country-abroad application eligibility alerts.

### 📅 Chronological Step-by-Step Study Guide
* Interactive 9-step timeline from setting goals to EJU/JLPT preparations, Certificate of Eligibility (COE) submittals, visas, and airline arrivals.
* Guidelines for standardized examinations and Study/Research plan drafting.

### 🏠 Student Life & Budgeting Calculator
* Detail sheets for lodging types (Dormitories, Shared houses, and Private apartments) with monthly budgets.
* Comprehensive living costs tables (Rent, Food, Utilities, Health insurance, and Commuters passes).
* Official legal guidelines for student part-time employment (28-hour weekly limits, Shikakugai-katsudo work permits).

### 💬 Admissions counseling Inquiry
* Interactive counseling intake form featuring client-side reactive input state checks, email validations, and successful submissions.

---

## 🛠️ Technology Stack & Resilient Architecture

* **Framework:** React + Next.js (App Router routing structures)
* **Styling:** Tailwind CSS (Custom color maps, Outfit headings, Inter body text, seigaiha visual waveform layers)
* **Database & API:** Next.js Server API endpoints connected to AWS DynamoDB document client query scans
* **Resilient DB Fallback:** Data queries check for active AWS access credentials. If env files are absent, they seamlessly and silently fall back to the rich static mockup catalog inside our database services layer to ensure 100% serverless compile uptime.

---

## 📂 Project Structure Map

```text
├── src/
│   ├── app/                      # Next.js App Router Page directories
│   │   ├── api/contact/          # Server API endpoints
│   │   ├── about/                # About page
│   │   ├── blog/                 # Blog list & Dynamic blog detail page
│   │   ├── contact/              # Interactive counseling form
│   │   ├── scholarships/         # Scholarships list & Scholarship details
│   │   ├── student-life/         # Living expenses & Job rules
│   │   ├── study-guide/          # Chronological 9-step timeline
│   │   └── universities/         # Universities list & Campus detail tabs
│   ├── components/
│   │   ├── cards/                # Reusable display cards
│   │   ├── layout/               # Navbars, Footers, mobile drawers
│   │   ├── sections/             # Landing Hero, Accordions, CTA components
│   │   └── ui/                   # Badges, Breadcrumbs, search/filter forms
│   ├── lib/
│   │   ├── data.ts               # Complete fallback mock database
│   │   └── dynamodb.ts           # AWS Client service queries
│   └── types/
│       ├── university.ts         # TypeScript types definitions
│       └── scholarship.ts
└── public/                       # Static public assets
```

---

## 🚀 Getting Started Locally

Follow these quick commands to spin up the local development environment:

### 1. Install Dependencies
```bash
npm install
```

### 2. Run local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your browser to inspect the application.

### 3. Compile Production Bundle
```bash
npm run build
```
This performs dynamic page optimization, TypeScript checks, and builds static pre-rendered pages.
