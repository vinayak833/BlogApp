

#JWT_SECRET=your_secret_key
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
## Authentication

1. Users register or log in.
2. A JWT is generated after successful authentication.
3. The token is stored in an HTTP-only cookie.
4. Protected routes are verified using the authentication middleware.
5. Only authenticated users can create blog posts and add comments.

---

## Core Functionality

- User signup and login
- Create blog posts
- Upload cover images
- Read blog articles
- Comment on blog posts
- JWT authentication
- Server-side rendering with EJS

---

## Future Enhancements

- Edit and delete blog posts
- User profile pages
- Like and bookmark posts
- Rich text editor
- Search and filtering
- Categories and tags
- Pagination
- Admin dashboard

---

## Author

Vinayak S
