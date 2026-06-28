# 🚀 MeetFlow

> **MeetFlow** is a modern, full-stack video conferencing platform that enables seamless virtual meetings with secure authentication, instant meeting creation, scheduling, personal meeting rooms, and recordings—all wrapped in a clean, responsive user interface.

<p align="center">
  <img src="./public/banner.png" alt="MeetFlow Banner" width="100%" />
</p>

<p align="center">
  <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" /></a>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Stream-Video-005FFF?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Clerk-Authentication-6C47FF?style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-success?style=for-the-badge" />
</p>

---

## 🌟 Overview

MeetFlow is a scalable video conferencing application inspired by modern meeting platforms. It provides a smooth and intuitive meeting experience with secure user authentication, HD video calls, meeting scheduling, and personal meeting rooms.

---

## ✨ Features

- 🔐 Secure Authentication with Clerk
- 📹 High-Quality Video & Audio Calls
- 🚀 Instant Meeting Creation
- 📅 Schedule Future Meetings
- 👤 Personal Meeting Room
- 🔗 Share Meeting Links
- 📺 Meeting Recordings
- 📜 View Upcoming & Previous Meetings
- 📱 Responsive Design
- 🌙 Modern UI with Tailwind CSS
- ⚡ Fast Performance with Next.js
- 🔒 Protected Routes & Middleware

---

## 🛠️ Tech Stack

| Technology       | Purpose                 |
| ---------------- | ----------------------- |
| Next.js 16       | React Framework         |
| TypeScript       | Type Safety             |
| Tailwind CSS     | Styling                 |
| Stream Video SDK | Real-time Video Calling |
| Clerk            | Authentication          |
| shadcn/ui        | Reusable UI Components  |
| React DatePicker | Meeting Scheduling      |

---

## 📁 Project Structure

```text
MeetFlow/
│
├── app/
├── actions/
├── components/
├── hooks/
├── providers/
├── lib/
├── public/
├── middleware.ts
├── package.json
└── README.md
```

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/pragatipandey25/Meet-Flow.git
```

Navigate into the project

```bash
cd Meet-Flow
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Open your browser

```text
http://localhost:3000
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the root directory.

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=

NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

---

## 🚀 Deployment

Deploy easily on **Vercel**.

```bash
npm run build
```

After deployment, remember to update your environment variables in Vercel.

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push your branch.
5. Open a Pull Request.

---

## 👩‍💻 Author

**Pragati Pandey**

- GitHub: https://github.com/pragatipandey25
- LinkedIn: https://www.linkedin.com/in/pragati-pandey-25f2006/

---

## ⭐ Show Your Support

If you found this project useful, consider giving it a ⭐ on GitHub.

Your support helps the project reach more developers and motivates future improvements.

---

<p align="center">
Built with ❤️ using Next.js, TypeScript, Clerk & Stream Video SDK
</p>
