# 🐦 Twitter Clone (MERN Stack)

A fully functional Twitter-like social media application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). Users can create accounts, post tweets, like posts, and explore content — all in real-time with a responsive UI.

---

## 🚀 Features

- 🔐 User Authentication (JWT based)
- 📝 Create and Delete Tweets
- ❤️ Like and Unlike Tweets
- 👤 View Other Users’ Tweets
- 🖼️ User Profile with Bio and Picture
- 📱 Fully Responsive Design
- ⚡ Fast and Minimal UI

---

## 🧰 Tech Stack

### 💻 Frontend
- React.js
- Redux Toolkit (for state management)
- React Router DOM
- Axios
- Tailwind CSS

### 🌐 Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (JSON Web Token)
- Multer (for profile image upload)
- bcrypt (for password hashing)

root
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── server.js
│
└── client/
├── src/
├── components/
├── features/ (Redux slices)
├── pages/
├── App.jsx
└── main.jsx

yaml
Copy
Edit



---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js & npm
- MongoDB (local or cloud)
- Git

### 1. Clone the repository
```bash
git clone https://github.com/your-username/twitter-clone.git
cd twitter-clone

cd backend
npm install
# Add your MongoDB URI and JWT_SECRET in .env
npm start



---

## 📂 Folder Structure

