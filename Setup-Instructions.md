# Project Setup Instructions

Follow these steps to set up and run the application:

## Prerequisites
- Download and install the latest version of [Node.js](https://nodejs.org/).

## Installation

1. **Unzip the Project Folder**
   - Unzip the contents of the project folder to your desired location.

2. **Environment Setup**
   - Navigate to the `server` directory within the unzipped folder.
   - Create a `.env` file here.
   - Add the following content to the `.env` file:
     ```
     MONGO_URL=mongodb://localhost:27017
     JWT_SECRET=fsociety
     PORT=3001
     ```

3. **Open the Project in VS Code**
   - Open the root directory of the project in Visual Studio Code.

4. **Setup Terminals**
   - Open the integrated terminal in VS Code.
   - Create a split terminal for accessing both the server and the client directories.

5. **Install Dependencies**
   - In each terminal, navigate to the `server` and `client` directories respectively.
   - Run `npm i` in both terminals to install the necessary Node modules.

6. **Install Nodemon Globally (Server Side)**
   - In the terminal for the server, run `npm i -g nodemon`.

7. **Start the Application**
   - Run `npm run start` in both the server and client terminals.

## Database Setup

1. **Open MongoDB Compass**
   - Open MongoDB Compass to manage the database.

2. **Database Initialization**
   - In Compass, check for the local test file.
   - Ensure it contains two empty collections: `user` and `posts`.

3. **Activate Database Seed**
   - In the `server` directory, open `index.js`.
   - Uncomment lines 66 and 67 to enable database seeding.

4. **Verify Database Content**
   - After running the server, check the MongoDB collections.
   - They should now contain preloaded user data.

## Usage

1. **Access the Web Interface**
   - Open a web browser and navigate to the application URL.

2. **User Registration**
   - Create a new user account by providing the required information.

3. **User Login**
   - Log in using the newly created user's email and password.

---

For more information or if you encounter issues, please check the project documentation or contact the support team.
