<div align="center">

# 𝙀𝙭𝙖𝙖𝙢𝘿𝙤𝙨𝙩𝘼𝙄

### AI-Powered Exam Notes Generator

Generate exam-focused notes, revision material, diagrams & printable PDFs using AI — faster, cleaner, and smarter.

![Made with React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Stripe](https://img.shields.io/badge/Payments-Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white)
![Google Gemini](https://img.shields.io/badge/AI-Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)

</div>

---

## 🚀 What is ExaamDostAI?

**ExaamDostAI** is a full-stack AI-powered web application that helps students generate high-quality, exam-focused notes on any topic in seconds. Just enter your topic, select your class level and exam type — and let AI do the rest.

> Built for students who want to study smarter, not harder.

---

## ✨ Features

| Feature | Description |
|---|---|
| 📒 **Exam Notes** | AI-generated, exam-oriented notes with headings & bullet points |
| ⚡ **Revision Mode** | Ultra-short revision points for last-day preparation |
| 📊 **Charts & Diagrams** | Auto-generated Mermaid flowcharts and Recharts graphs |
| ⬇️ **PDF Download** | Download clean, printable PDFs instantly |
| 💎 **Credits System** | Pay-per-use credits via Stripe payment gateway |
| 📒 **Notes History** | Access all your previously generated notes anytime |
| 🔐 **Google Auth** | One-click login with Google via Firebase |
| 🌟 **Priority Topics** | Sub-topics ranked by exam importance (⭐ ⭐⭐ ⭐⭐⭐) |

---

## 🛠️ Tech Stack

### Frontend
- **React.js** — UI framework
- **Tailwind CSS** — Styling
- **Framer Motion** — Animations
- **Redux Toolkit** — State management
- **Firebase** — Google Authentication
- **Mermaid.js** — Diagram rendering
- **Recharts** — Chart rendering
- **React Markdown** — Markdown rendering

### Backend
- **Node.js + Express.js** — REST API
- **MongoDB + Mongoose** — Database
- **JWT** — Authentication tokens
- **Google Gemini API** — AI note generation
- **Stripe** — Payment processing
- **PDFKit** — PDF generation

---

## 📁 Project Structure

```
AINotes/
├── Frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── FinalResult.jsx
│   │   │   ├── MermaidSetup.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── TopicForm.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Auth.jsx
│   │   │   ├── Notes.jsx
│   │   │   ├── History.jsx
│   │   │   ├── Pricing.jsx
│   │   │   ├── PaymentSuccess.jsx
│   │   │   └── PaymentFailed.jsx
│   │   ├── redux/
│   │   │   ├── store.js
│   │   │   └── userSlice.js
│   │   ├── services/
│   │   │   └── api.js
│   │   └── utils/
│   │       └── firebase.js
│   └── .env.example
│
└── Backend/
    ├── controllers/
    │   ├── auth.controller.js
    │   ├── credits.controller.js
    │   ├── generate.controller.js
    │   ├── notes.controller.js
    │   ├── pdf.controller.js
    │   └── user.controller.js
    ├── middleware/
    │   └── isAuth.js
    ├── models/
    │   ├── user.model.js
    │   └── notes.model.js
    ├── routes/
    │   ├── auth.routes.js
    │   ├── credits.routes.js
    │   ├── generate.routes.js
    │   ├── pdf.routes.js
    │   └── user.routes.js
    ├── services/
    │   └── gemini.services.js
    ├── utils/
    │   ├── db.js
    │   ├── token.js
    │   └── promptBuilder.js
    ├── index.js
    └── .env.example
```

---

## ⚙️ Local Setup

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- Stripe account
- Google Gemini API key
- Firebase project

---

### 1. Clone the repo
```bash
git clone https://github.com/Utkarsh-Singh01/ReactJs.git
cd AINotes
```

### 2. Backend Setup
```bash
cd Backend
npm install
```

Create `.env` file (see `.env.example`):
```env
PORT=8000
MONGODB_URL=your_mongodb_url
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_key
STRIPE_SECRET_KEY=sk_test_your_stripe_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
CLIENT_URL=http://localhost:5173
```

Start backend:
```bash
npm run dev
```

---

### 3. Frontend Setup
```bash
cd Frontend
npm install
```

Create `.env` file (see `.env.example`):
```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
```

Start frontend:
```bash
npm run dev
```

---

## 💳 Credits System

| Plan | Price | Credits |
|---|---|---|
| 🌱 Starter | ₹100 | 50 Credits |
| 🔥 Popular | ₹200 | 120 Credits |
| 🚀 Pro Learner | ₹500 | 300 Credits |

> Each note generation costs **10 credits**. New users get **50 free credits** on signup.

---

## 🔐 Environment Variables

### Backend `.env.example`
```
PORT=
MONGODB_URL=
JWT_SECRET=
GEMINI_API_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
CLIENT_URL=
```

### Frontend `.env.example`
```
VITE_FIREBASE_APIKEY=
```

> ⚠️ Never commit your actual `.env` files. Always use `.env.example` as reference.

---

## 📸 App Flow

```
User Login (Google)
      ↓
Enter Topic + Options
      ↓
AI generates Notes (Gemini API)
      ↓
View Notes + Diagram + Charts
      ↓
Download PDF / Save to History
      ↓
Buy Credits via Stripe (if needed)
```

---

## 👨‍💻 Author

**Utkarsh Singh**

> Made with ❤️ for students who want to crack every exam!

---

<div align="center">

© 2026 𝙀𝙭𝙖𝙖𝙢𝘿𝙤𝙨𝙩𝘼𝙄 — All rights reserved.

</div>
