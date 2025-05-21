# Technologies Used

This project is a full-stack social networking application built with the **MERN** stack and enhanced with modern libraries and best practices for scalability, security, and user experience.

---

## Frontend

- **React**  
  Modern JavaScript library for building user interfaces.

- **Material UI (MUI)**  
  Provides a rich set of accessible, customizable UI components.

- **Redux Toolkit & Redux Persist**  
  State management and persistence for seamless user experience.

- **React Router DOM**  
  Declarative routing for single-page applications.

- **Formik & Yup**  
  Form state management and schema-based validation.

- **React Dropzone**  
  Drag-and-drop file uploads for user profile pictures and posts.

- **Custom Components & Architecture**  
  - Modular component structure (`components/`, `scenes/`, `widgets/`)
  - Reusable UI elements (e.g., `UserImage`, `Friend`, `WidgetWrapper`)
  - Theming and responsive design via MUI and custom `theme.js`

---

## Backend

- **Node.js & Express.js**  
  RESTful API server with robust routing and middleware support.

- **MongoDB & Mongoose**  
  NoSQL database with schema modeling and validation.

- **JWT (JSON Web Token)**  
  Secure authentication and authorization.

- **Multer**  
  Handles file uploads (profile images, post images).

- **Helmet & Morgan**  
  Security headers and HTTP request logging.

- **CORS & Body-Parser**  
  Cross-origin resource sharing and JSON parsing.

- **Custom Middleware & Controllers**  
  - Authentication middleware (`auth.js`)
  - Modular controllers for users, posts, authentication, and messaging

---

## Messaging & Real-Time Features

- **Custom Message Model**  
  Enables direct messaging between users, with chat history stored in MongoDB.

- **RESTful Messaging Endpoints**  
  Fetch and send messages between friends.

---

## Deployment & Environment

- **Environment Variables**  
  Managed via `.env` for sensitive configuration (MongoDB URI, JWT secret, etc.).

- **Production Build Support**  
  Express serves the React build in production mode.

- **Ready for Cloud Hosting**  
  Designed for deployment on platforms like Render, with MongoDB Atlas integration.

---

## Development & Tooling

- **Nodemon**  
  Auto-restarts the server during development.

- **ESLint & EditorConfig**  
  (Add if present) For code consistency and linting.

- **Git**  
  Version control with `.gitignore` for node modules and environment files.

---

## Summary

This stack was chosen to deliver a modern, scalable, and maintainable social platform. The architecture supports modular development, robust security, and a seamless user experience, both on desktop and mobile.

---

**Tip:**  
For more details on setup and deployment, see `Setup-Instructions.md`.
