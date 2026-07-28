# Blog Application

A modern full-stack blogging platform built with **Node.js**, **Express.js**, **MongoDB**, and **EJS**. The application allows users to create accounts, publish blog posts with cover images, and interact through comments using secure JWT-based authentication.

---

## Features

- User registration and login
- JWT-based authentication
- Secure cookie-based session management
- Create and publish blog posts
- Upload cover images for articles
- View all blogs and individual blog pages
- Authenticated users can comment on blog posts
- Dynamic server-side rendering with EJS
- Image upload support using Multer

---

## Tech Stack

| Category | Technologies |
|----------|--------------|
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Frontend** | EJS, HTML5, CSS3 |
| **Authentication** | JSON Web Token (JWT), Cookie Parser |
| **File Upload** | Multer |

---

## Project Structure

```text
BlogApp/
├── controllers/
├── middlewares/
│   └── authentication.js
├── models/
│   ├── blog.js
│   ├── comment.js
│   └── user.js
├── public/
├── views/
├── routes/
├── index.js
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- MongoDB (Local or MongoDB Atlas)
- npm

### Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project directory

```bash
cd BlogApp
```

3. Install dependencies

```bash
npm install
```

4. Create a `.env` file

```env
PORT=8000
MONGO_URL=mongodb://localhost:27017/blogapp
JWT_SECRET=your_secret_key
```

5. Start the application

Development:

```bash
npm run dev
```

Production:

```bash
npm start
```

6. Open your browser and visit:

```
http://localhost:8000
```

---

