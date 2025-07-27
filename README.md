# 🔗 Connect.Dev – A Social Media Platform for Developers

**Connect.Dev** is a full-stack social platform designed specifically for developers. Built with the **MERN stack**, this application allows users to create profiles, post updates, follow others, and engage with developer content — all in a modern, scalable architecture.

---

## 🚀 Project Goals

- ✅ Relatable to the developer community  
- ✅ Beginner-friendly yet packed with intermediate complexity  
- ✅ Covers full-stack development (frontend + backend)  
- ✅ Easily extendable for future features  
- ✅ Practical for portfolios and real-world learning  

---

## 🛠️ Tech Stack

| Layer       | Tech Used              |
|-------------|------------------------|
| Frontend    | React.js, Tailwind CSS |
| Backend     | Node.js, Express.js    |
| Database    | MongoDB (Mongoose)     |
| Auth        | JWT, bcrypt            |
| Tools       | Axios, Nodemon, Postman|

---

## ✨ Features

- 🔐 **User Authentication**: Register/Login with JWT  
- 👤 **Developer Profiles**: Bio, skills, GitHub links  
- 📝 **Posts Feed**: Create, update, delete, and view posts  
- ❤️ **Engagement**: Like and comment system  
- 🔄 **Follow System**: Follow and unfollow developers  
- 🖼️ **Media Upload**: Profile pictures, cover photos (optional)  
- 🌐 **Responsive Design**: Works well on all devices  
- 📦 **Modular Codebase**: Clean and scalable structure  

---

## 📁 Folder Structure

```bash
connect-dev/
├── client/              # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── utils/
│       ├── App.js
│       └── index.js
├── server/              # Node backend
│   └── src/
│       ├── controllers/
│       ├── models/
│       ├── routes/
│       ├── middlewares/
│       ├── config/
│       ├── app.js       # App config and middleware
│       └── index.js     # Server entry point
├── .env
├── package.json
└── README.md

## 🧠 Learning Outcomes

- 📌 Learned how to **structure and organize** a scalable full-stack project
- 🔐 Gained hands-on experience with **authentication using JWT and bcrypt**
- 🗃️ Understood how to perform **CRUD operations** using MongoDB and Mongoose
- 🔗 Connected **React frontend with Express backend** using Axios
- ♻️ Built **reusable components** and implemented protected routes in React
- 🧱 Managed **middleware and error handling** in Express.js
- 🧪 Practiced API testing using **Postman**
- 🚀 Improved understanding of **deployment-ready code structure**



## 🏁 Getting Started

Follow these steps to run the project locally.

---

### 📂 1. Clone the repository

```bash
git clone https://github.com/yourusername/connect-dev.git
cd connect-dev


### 2.Install dependencies
2.1 For the frontend:
bash
Copy
Edit
cd client
npm install

2.2 For the backend:
bash
Copy
Edit
cd ../server
npm install
