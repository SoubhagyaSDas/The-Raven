# The Raven

A modern, full-stack social networking application built with the MERN stack, featuring real-time messaging, file uploads, and a responsive UI.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Local Development Setup](#local-development-setup)
- [Environment Variables](#environment-variables)
- [Deployment (Render)](#deployment-render)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- User authentication (JWT-based)
- Profile and post image uploads
- Add/remove friends
- Real-time messaging between friends
- Responsive, modern UI (Material UI)
- RESTful API with secure endpoints
- MongoDB Atlas integration

---

## Tech Stack
- **Frontend:** React, Redux Toolkit, Redux Persist, Material UI, Formik, Yup, React Dropzone
- **Backend:** Node.js, Express.js, Mongoose, Multer, JWT, Helmet, Morgan
- **Database:** MongoDB Atlas
- **Deployment:** Render.com

---

## Project Structure
```
The-Raven/
├── client/           # React frontend
│   ├── src/
│   └── ...
├── server/           # Express backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── ...
├── public/assets/    # Uploaded images
├── render.yaml       # Render deployment config
├── Technologies-used.md
├── Setup-Instructions.md
└── README.md
```

---

## Local Development Setup

### 1. **Clone the Repository**
```bash
git clone https://github.com/your-username/the-raven.git
cd the-raven
```

### 2. **Install Dependencies**
- **Backend:**
  ```bash
  cd server
  npm install
  ```
- **Frontend:**
  ```bash
  cd ../client
  npm install
  ```

### 3. **Set Up Environment Variables**
- Create a `.env` file in the `server/` directory:
  ```env
  MONGO_URL=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  PORT=3001
  ```
- (Optional) For local development, you can use a local MongoDB instance or MongoDB Atlas.

### 4. **Run the App Locally**
- **Backend:**
  ```bash
  cd server
  npm run dev
  ```
- **Frontend:**
  ```bash
  cd ../client
  npm start
  ```
- The frontend will be available at [http://localhost:3000](http://localhost:3000)
- The backend API will run at [http://localhost:3001](http://localhost:3001)

---

## Environment Variables
| Variable      | Location   | Description                        |
| -------------|------------|------------------------------------|
| MONGO_URL    | server/.env| MongoDB connection string           |
| JWT_SECRET   | server/.env| JWT secret for authentication       |
| PORT         | server/.env| Backend server port (default: 3001) |
| REACT_APP_API_URL | client | API base URL for frontend           |

---

## Deployment (Render)

### 1. **Push Your Code to GitHub**

### 2. **Configure `render.yaml`**
- The provided `render.yaml` sets up both backend and frontend services.

### 3. **Create Services on Render**
- Go to [render.com](https://render.com) and sign up/log in.
- Click "New +" → "Web Service" and connect your GitHub repo.
- For **backend**:
  - Build Command: `cd server && npm install`
  - Start Command: `cd server && npm start`
  - Add environment variables: `MONGO_URL`, `JWT_SECRET`, `PORT`, `NODE_ENV`
- For **frontend**:
  - Build Command: `cd client && npm install && npm run build`
  - Start Command: `cd client && serve -s build`
  - Add environment variable: `REACT_APP_API_URL` (set to your backend Render URL)

### 4. **Set Up MongoDB Atlas**
- Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Whitelist Render's IPs and get your connection string
- Use this string for `MONGO_URL`

### 5. **Update CORS in Backend**
- The backend is configured to allow requests from your frontend Render domain.

### 6. **Monitor Deployments**
- Render will auto-deploy on every push to your repo.
- Check logs for errors and verify both services are live.

---

## Usage
- Register a new user or log in
- Add friends and start messaging
- Create posts with images
- View and interact with your feed

---

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## License
This project is licensed under the MIT License. 