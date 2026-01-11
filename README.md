# TaskFlow 🗂️  
A modern task management web application with authentication, dashboard, and CRUD functionality.

## 🚀 Overview
**TaskFlow** is a full-stack task management platform designed to help users organize, track, and manage their tasks efficiently. It features secure authentication, protected routes, an intuitive dashboard, and a clean, responsive UI.

The application uses **Supabase** as a Backend-as-a-Service (BaaS) for authentication and database management, enabling secure and scalable frontend–backend integration.

---

## ✨ Features

### 🔐 Authentication
- Email & password authentication using Supabase Auth
- Secure session handling
- Protected routes (dashboard access requires login)
- Logout flow

### 📊 Dashboard
- Task summary cards (Total, Pending, In Progress, Completed)
- Personalized welcome message
- Search and filter tasks
- Clean task overview

### 📝 Task Management
- Create, Read, Update, Delete (CRUD) tasks
- Task status tracking (Pending, In Progress, Completed)
- Priority levels (Low, Medium, High)
- Due date support

### 👤 Profile Management
- View and update user profile
- Email locked for security
- Account metadata (member since)

### 🎨 UI/UX
- Fully responsive design
- Modern and minimal interface
- Consistent design system
- Smooth navigation and interactions

---

## 🛠️ Tech Stack

### Frontend
- **React.js**
- **TypeScript**
- **Tailwind CSS**
- React Router

### Backend / BaaS
- **Supabase**
  - Supabase Auth
  - PostgreSQL Database
  - Row Level Security (RLS)

---

## 📁 Project Structure
``` bash
taskflow/
├── src/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   └── styles/
├── public/
└── README.md
```

⚙️ Installation & Setup
Prerequisites

Node.js (v18+)
Supabase account

## Clone Repository
git clone https://github.com/your-username/taskflow.git
cd taskflow

## Install Dependencies
npm install

## Environment Variables
Create a .env file in the root directory:
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

## Run the Application
npm run dev

### 🔐 Security Practices

1. Supabase-managed authentication
2. Secure session handling
3. Row Level Security (RLS) for database access
4. Protected frontend routes
5. Input validation and error handling

### 📈 Scalability Notes

1. Modular and maintainable frontend architecture
2. Supabase PostgreSQL for reliable data storage
3. Easy extension to role-based access control
4. Ready for real-time features using Supabase subscriptions
5. API-first approach supports future mobile or web clients

### 🧪 Future Enhancements

1. Real-time task updates
2. Task reminders & notifications
3. Team collaboration
4. Dark mode
5. Analytics and productivity insights
