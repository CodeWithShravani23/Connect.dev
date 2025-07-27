# 🔗 Connect.dev – A Social Media Platform for Developers

**Connect.Dev** is a full-stack social media application tailored for developers. Inspired by Akshay Saini’s *DevTinder* project from the **Namaste NodeJS** course, this platform helps students master real-world development skills by building a scalable, feature-rich app using the **MERN stack**.

---

## 🚀 Project Goals

The idea behind Connect.Dev is to build a project that is:

- ✅ **Relatable** to the developer community
- ✅ **Beginner-friendly** yet **challenging enough** to learn from
- ✅ **Full-stack oriented** (Frontend + Backend)
- ✅ **Extendable** – easily add more features over time
- ✅ **Fun to build** – keeps you engaged and motivated
- ✅ A **real-world showcase** project for portfolios and resumes

---

## 🛠️ Tech Stack

| Layer       | Tech Used           |
|-------------|---------------------|
| Frontend    | React.js, Tailwind CSS |
| Backend     | Node.js, Express.js |
| Database    | MongoDB (with Mongoose) |
| Auth        | JWT, bcrypt         |
| Tools       | Nodemon, Axios, Postman |

---

## ✨ Features

- 🔐 **User Authentication** (Register/Login with JWT)
- 🧑‍💻 **Developer Profiles** (bio, skills, GitHub link, etc.)
- 📝 **Posts and Feeds** (create, edit, delete, view)
- ❤️ **Like & Comment System**
- 👫 **Follow / Unfollow other developers**
- 📎 **Profile pictures & cover photos**
- 🌐 **Responsive UI** for all devices
- 📦 **Modular code structure** (for future scalability)

---

## 📁 Folder Structure

```bash
connect-dev/
├── client/              # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.js
├── server/              # Node.js backend
│   └── src/
│       ├── controllers/
│       ├── routes/
│       ├── models/
│       ├── middlewares/
│       ├── config/
│       ├── app.js       # Express app setup
│       └── index.js     # Entry point
├── .env
├── package.json
└── README.md
