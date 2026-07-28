# 🏥 Care Connect — Hospital Management System

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Razorpay-02042B?style=flat-square&logo=razorpay&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white" />
</p>

<p align="center">
  A modern, full-stack Hospital Management System that connects <b>Patients, Doctors, and Administrators</b><br/>
  through a secure, role-based platform with doctor discovery, appointment booking, and integrated payments.
</p>

<p align="center">
  <a href="https://careconnecthospital.vercel.app/"><img src="https://img.shields.io/badge/Patient Portal-111827?style=flat-square&logo=vercel&logoColor=white" /></a>
  &nbsp;
  <a href="https://care-connect-admin-panel.vercel.app/"><img src="https://img.shields.io/badge/Admin Panel-2563EB?style=flat-square&logo=vercel&logoColor=white" /></a>
</p>

---

## Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Authentication](#authentication)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Application Workflow](#application-workflow)
- [Highlights](#highlights)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Developer](#developer)

---

## Overview

Care Connect simplifies healthcare management by bringing patients, doctors, and administrators onto one platform. It covers doctor discovery, appointment scheduling, secure online payments via Razorpay, and full administrative control — all through dedicated, role-based dashboards.

The application follows a scalable architecture with separate frontend, backend, and admin applications, making it suitable for real-world healthcare environments.

---

## Live Demo

| Service | URL |
|---|---|
| Patient Portal | https://careconnecthospital.vercel.app |
| Admin Panel | https://care-connect-admin-panel.vercel.app |

---

## Features

### 👤 Patient Features

- Secure JWT authentication
- User registration & login
- Browse doctors by specialization
- Doctor profile with experience & consultation fee
- Online appointment booking with date & time slot selection
- Appointment management and cancellation
- Online payment via Razorpay (UPI, cards, netbanking)
- Profile management
- Responsive user interface

### 👨‍⚕️ Doctor Features

- Dedicated doctor dashboard
- Appointment overview and status tracking
- Earnings dashboard
- Patient management
- Appointment history
- Doctor profile and availability status

### 🛠️ Admin Features

- Secure admin authentication
- Dashboard analytics
- Add, edit, and manage doctor profiles
- View all doctors and appointments
- Appointment status monitoring
- Complete hospital management

### 💳 Payments

Integrated Razorpay payment gateway supporting UPI, cards, and netbanking, with all amounts processed in **INR**.

---

## Tech Stack

**Frontend**

| Tool | Purpose |
|---|---|
| React.js + Vite | UI framework and build tool |
| Tailwind CSS | Utility-first styling |
| React Router | Client-side routing |
| Axios | HTTP requests |

**Backend**

| Tool | Purpose |
|---|---|
| Node.js + Express.js | Server and REST API |
| MongoDB + Mongoose | Database and ODM |
| JWT + bcrypt | Authentication & password hashing |
| Cloudinary | Image storage |
| Razorpay | Payment processing |

**Deployment**

| Service | Usage |
|---|---|
| Vercel | Frontend, Admin Panel |
| Vercel / Render | Backend API |
| MongoDB Atlas | Cloud database |

---

## Architecture

```
┌──────────────────────────────────┐
│   React Frontend  (Patient)      │
│   React Frontend  (Admin)        │
└─────────────────┬────────────────┘
                  │  Axios  REST API
┌─────────────────▼────────────────┐
│   Express + Node.js  Server      │
└──────┬──────────────────┬────────┘
       │                  │
  ┌────▼──────┐   ┌───────▼──────────────┐
  │  MongoDB  │   │  Cloudinary           │
  │  Atlas    │   │  (Image Storage)      │
  └───────────┘   └──────────────────────┘
       │
┌──────▼─────────────────────┐
│  Razorpay Payment Gateway  │
└────────────────────────────┘
```

---

## Authentication

Role-based authentication is implemented using JWT.

### Patient

- Register
- Login
- Book appointment
- Manage appointments

### Doctor

- Login
- Dashboard access
- Appointment management

### Admin

- Login
- Complete system management

---

## Folder Structure

```
Care Connect
│
├── frontend
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── admin
    ├── src
    ├── public
    ├── App.jsx
    └── package.json
```

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/care-connect.git
cd care-connect
```

### 2. Backend

```bash
cd backend
npm install
npm run server
```

### 3. Frontend

```bash
cd ../frontend
npm install
npm run dev
```

### 4. Admin Panel

```bash
cd ../admin
npm install
npm run dev
```

The frontend and admin panels each run on their own Vite dev server. The backend runs as a separate Node process. Make sure all environment variables are configured before starting.

---

## Environment Variables

Create a `.env` file in each application before running the project.

### Backend — `backend/.env`

```env
MONGODB_URI=
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_SECRET_KEY=
ADMIN_EMAIL=
ADMIN_PASSWORD=
JWT_SECRET=
RAZORPAY_KEY_SECRET=
RAZORPAY_KEY_ID=
CURRENCY=INR
```

### Frontend — `frontend/.env`

```env
VITE_BACKEND_URL=
VITE_RAZORPAY_KEY_ID=
```

### Admin Panel — `admin/.env`

```env
VITE_BACKEND_URL=
```

> Replace all values with your own credentials before running the application.

---

## Application Workflow

```
Patient Login
      │
      ▼
Browse Doctors
      │
      ▼
View Doctor Profile
      │
      ▼
Choose Date & Time
      │
      ▼
Book Appointment
      │
      ▼
Razorpay Payment
      │
      ▼
Appointment Confirmation
      │
      ▼
Doctor Dashboard
      │
      ▼
Admin Monitoring
```

---

## Highlights

- Modern & responsive UI
- Role-based authentication
- Secure REST APIs with JWT authorization
- MongoDB database with Mongoose ODM
- Integrated Razorpay payment gateway
- Appointment scheduling system
- Dedicated admin, doctor, and patient dashboards
- Mobile-friendly design
- Scalable project structure

---

## Future Enhancements

- Email notifications
- SMS appointment alerts
- Video consultation
- Medical records management
- Electronic prescriptions
- Search & filter improvements
- Doctor availability calendar
- Appointment reminder system
- AI chat assistant
- Medical report upload
- Hospital analytics dashboard

---

## Contributing

Contributions are welcome. Please follow the steps below.

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push the branch

```bash
git push origin feature-name
```

5. Open a Pull Request with a clear description of what was changed and why.

---

## License

This project is licensed under the **MIT License**.

---

## Developer

**Rankela Venkata Arjun**

- Full Stack Developer
- B.Tech Information Technology

| | |
|---|---|
| Patient Portal | https://careconnecthospital.vercel.app |
| Admin Panel | https://care-connect-admin-panel.vercel.app |

---

<p align="center">⭐ If you found this project helpful, don't forget to star the repository!</p>
