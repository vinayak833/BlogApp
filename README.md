

# Blog Application

A modern full-stack blogging platform built with **Node.js**, **Express.js**, **MongoDB**, and **EJS**. The application enables users to create accounts, publish blog posts with cover images, and engage with readers through comments using secure JWT-based authentication.

---

## Features

### User Authentication
- User Registration
- User Login
- JWT-Based Authentication
- Secure Cookie-Based Sessions
- Protected Routes

### Blog Management
- Create Blog Posts
- Publish Articles
- Upload Cover Images
- View All Blogs
- Read Individual Blog Posts

### Community Interaction
- Comment on Blog Posts
- View Reader Discussions
- Authenticated User Access

### User Experience
- Dynamic Server-Side Rendering
- Responsive Interface
- Clean and Modern Design

---

## Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Frontend
- EJS
- HTML5
- CSS3
- JavaScript

### Authentication
- JSON Web Token (JWT)
- Cookie Parser

### File Upload
- Multer

---

## Project Structure

```text
BlogApp/
│
├── controllers/
│
├── middlewares/
│   └── authentication.js
│
├── models/
│   ├── user.js
│   ├── blog.js
│   └── comment.js
│
├── routes/
│
├── views/
│
├── public/
│
├── uploads/
│
├── index.js
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

Before running the project, make sure you have:

- Node.js (v16 or later)
- MongoDB (Local Installation or MongoDB Atlas)
- npm

---

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
```

### 2. Navigate to the Project Directory

```bash
cd BlogApp
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=8000
MONGO_URL=mongodb://localhost:27017/blogapp
JWT_SECRET=your_secret_key
```

### 5. Run the Application

#### Development Mode

```bash
npm run dev
```

#### Production Mode

```bash
npm start
```

### 6. Open in Browser

```text
http://localhost:8000
```

---

## Authentication Workflow

### Registration
Users can create an account by providing their details.

### Login
Registered users can log in using their credentials.

### JWT Generation
A JWT token is generated upon successful authentication.

### Secure Storage
The token is stored in an HTTP-only cookie for enhanced security.

### Authorization
Protected routes validate the token before granting access.

---

## Core Functionalities

### User Management
- Sign Up
- Login
- Logout
- Session Handling

### Blog Features
- Create New Blogs
- Upload Cover Images
- Publish Articles
- View Blog Listings
- Read Blog Details

### Comment System
- Add Comments
- View Comments
- User-Based Interactions

### Security
- JWT Authentication
- Protected Routes
- Secure Cookies
- Input Validation

---

## Learning Outcomes

This project demonstrates practical implementation of:

- RESTful Routing
- Authentication and Authorization
- MongoDB Data Modeling
- Mongoose ODM
- Middleware Integration
- File Upload Handling
- Server-Side Rendering
- MVC Architecture
- Full-Stack Web Development

---

## Future Enhancements

### Blog Features
- Edit Blog Posts
- Delete Blog Posts
- Draft Saving
- Rich Text Editor

### User Features
- User Profiles
- Author Dashboards
- Profile Pictures

### Engagement Features
- Like Posts
- Bookmark Articles
- Share Blogs
- Follow Authors

### Advanced Features
- Categories and Tags
- Search Functionality
- Pagination
- Admin Dashboard
- Analytics Dashboard

---

## Why This Project?

This project is ideal for learning:

- Backend Development with Node.js
- Express.js Routing and Middleware
- MongoDB Database Operations
- JWT Authentication
- File Upload Management
- Server-Side Rendering with EJS
- Full-Stack Application Development

---

## Author

### Vinayak S
