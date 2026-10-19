# 🌿 Lendora — Peer-to-Peer Rental Marketplace

> **Own the experience, not the price tag.**  
> Lendora is a full-featured peer-to-peer rental marketplace built on the **PERN stack** (PostgreSQL, Express.js, React, Node.js). Everyday users can list high-value items they own (cinema cameras, power tools, party gear, drones, camping equipment, and fashion) and rent them out to verified community members for flexible date ranges instead of buying retail.

---

## 📸 Overview & Value Proposition

Traditional e-commerce is built for one-time purchases, leaving expensive gear sitting idle in closets for 95% of the year. **Lendora** transforms idle gear into passive income while giving renters access to pro equipment at a fraction of the cost.

### 🌟 Key Differentiators
- **Rental by Date Range, Not Sale:** Bookings operate on inclusive start and end dates with real-time rate calculations.
- **Deterministic Availability Engine:** Prevents double-bookings with PostgreSQL row locking (`SELECT ... FOR UPDATE`) and inclusive date overlap validation.
- **Role Progression (Renter ➔ Lister ➔ Admin):** Any authenticated user can rent; creating their first listing automatically promotes them to **Lister** (dual guest/host capability).
- **Booking State Machine:** Strict transitions (`pending` → `confirmed` → `ongoing` → `completed` / `rejected` / `cancelled`).
- **Trust & Reputation Layer:** Reviews and 1–5 star ratings are unlocked strictly after a booking reaches `completed` status.
- **Modern Light UI:** Styled in crisp light mode with an electric lime theme (`#7DCF00`), custom lighting spread glow effects, and modern typography (`Plus Jakarta Sans`).

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 19 (Vite), JavaScript (ESM), Tailwind CSS v4, Lucide React, React Hook Form, Zod |
| **Backend** | Node.js (v20+), Express.js (v4/v5), `pg` (node-postgres), CORS, Helmet, Morgan |
| **Database** | PostgreSQL 15+ (Raw parameterized SQL, ACID transactions, B-Tree & GIN indexes) |
| **Authentication** | Custom JWT (Short-lived access tokens + HTTP-only rotating refresh tokens with SHA-256 hash storage), bcrypt |
| **File Storage** | Multer local storage / Cloudinary-ready CDN architecture |

---

## 📐 Architecture & Repository Layout

```
lendora/
├── AGENTS.md                  # Comprehensive engineering build specification
├── implementation_plan.md     # Landing page & component roadmap
├── README.md                  # Project overview & setup guide
├── frontend/                  # React 19 + Vite frontend application
│   ├── index.html             # App entry, Plus Jakarta Sans font, 1:1 favicon
│   ├── vite.config.js         # Vite configuration with Tailwind CSS plugin
│   ├── package.json           # Dependencies: react, tailwindcss, lucide-react, zod...
│   ├── public/
│   │   ├── Lendora-icon.png   # 1:1 theme green squircle brand mark
│   │   ├── favicon.svg        # Scalable vector favicon
│   │   └── Lendora-logo.png   # Original transparent logo
│   └── src/
│       ├── main.jsx           # React DOM root mounting
│       ├── App.jsx            # Main app shell & landing page container
│       ├── index.css          # Design system tokens, @theme, .btn-primary-glow
│       ├── components/
│       │   ├── common/
│       │   │   ├── Navbar.jsx # Minimalist light-mode navigation & brand header
│       │   │   └── Footer.jsx # Multi-column directory & newsletter footer
│       │   └── landing/
│       │       ├── Hero.jsx            # Value proposition, kicker badge & live metrics
│       │       ├── RentalSearchBar.jsx # Seamless multi-field rental query bar
│       │       ├── Categories.jsx      # 8 equipment rental categories
│       │       ├── FeaturedGear.jsx    # Trending items with daily rates & ratings
│       │       ├── HowItWorks.jsx      # 3-step rental journey
│       │       ├── TrustSecurity.jsx   # Protection guarantee & deposit safety
│       │       └── ListerCTA.jsx       # Lister monetization calculator banner
│       ├── hooks/             # Custom React hooks
│       ├── pages/             # Route views
│       ├── services/          # API client services (Axios / Fetch)
│       └── utils/             # Date helpers, pricing formulas & currency formatters
└── server/                    # Express REST API & Database migrations (Phase 2)
    ├── package.json
    ├── db/
    │   ├── migrations/        # 001_init.sql (DDL schema)
    │   └── seed.js            # Sample data (categories, users, items, bookings)
    └── src/
        ├── app.js             # Express app setup & middleware
        ├── server.js          # HTTP server listener
        ├── controllers/       # HTTP route handlers
        ├── services/          # Business logic & SQL queries
        └── middleware/        # JWT auth, role validation, error handling
```

---

## ⚡ Core Business Rules & Pricing Engine

### 1. Authoritative Pricing Formula
Calculated **authoritatively on the server** (client only shows live previews):
```
total_days  = (end_date - start_date) + 1          // inclusive dates
subtotal    = total_days * item.price_per_day
service_fee = round(subtotal * 0.05, 2)            // 5% platform service fee
total_price = subtotal + service_fee
```

### 2. Overlap & Anti-Double-Booking Formula
Two date ranges overlap if and only if:
```sql
existing.start_date <= requested.end_date AND existing.end_date >= requested.start_date
```
An item is strictly **unavailable** if any overlapping reservation exists with status `confirmed` or `ongoing`, or an active row in `availability_blocks`. Pending requests do not lock dates until accepted by the owner.

### 3. Booking State Machine

```
              ┌───────────┐
              │  PENDING  │
              └─────┬─────┘
         ┌──────────┴──────────┐
         ▼                     ▼
   ┌───────────┐         ┌───────────┐
   │ CONFIRMED │         │ REJECTED  │
   └─────┬─────┘         └───────────┘
         │
   ┌─────┴─────┐
   ▼           ▼
┌─────────┐ ┌───────────┐
│ ONGOING │ │ CANCELLED │
└────┬────┘ └───────────┘
     ▼
┌───────────┐
│ COMPLETED │ ──▶ [ Review Allowed ]
└───────────┘
```

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js** v20.x or higher
- **npm** v10.x or higher
- **PostgreSQL** v15+ (for backend integration)

---

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build production bundle:**
   ```bash
   npm run build
   ```

---

## 🎨 Design System Tokens

- **Theme Color:** `#7DCF00` (Electric Lime)
- **Hover / Contrast Green:** `#6EB800` & `#457300`
- **Backgrounds:** Clean Light Canvas (`#FAFCF8`), Pure White (`#FFFFFF`), Soft Green Tint (`#F2FCE2`)
- **Typography:** `Plus Jakarta Sans` via Google Fonts
- **Lighting Glow Spread:** `.btn-primary-glow` custom CSS utility with radiant lime shadow spread and shimmer animation
- **Icons:** Minimalist vector line icons via `lucide-react`

---

## 🔒 Security & Best Practices

- **Zero SQL Injections:** 100% parameterized queries (`$1, $2, ...`) without raw string concatenation.
- **Token Security:** JWT access token stored in memory; refresh token stored hashed (SHA-256) and transmitted via `httpOnly`, `SameSite=Lax` cookies.
- **Soft Deletes:** Listings with historical bookings are flagged `removed` rather than purged to preserve financial and audit records.
- **Atomic Operations:** Confirmation transitions execute inside PostgreSQL transactions with row-level locks (`FOR UPDATE`).

---

## 📄 License

This project is developed for educational and demonstration purposes. All rights reserved.
