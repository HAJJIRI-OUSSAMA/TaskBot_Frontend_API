
# Taskbot Frontend API

This project is a frontend application for the Taskbot system, developed using modern JavaScript frameworks and libraries. It features a chatbot interface, task management functionalities, and integration with backend APIs.

---

## Table of Contents
- [Directory Structure](#directory-structure)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup and Installation](#setup-and-installation)
- [Running the Application](#running-the-application)
- [Building for Production](#building-for-production)
- [Contributing](#contributing)
- [License](#license)

---

## Directory Structure
```plaintext
hajjiri-oussama-taskbot_frontend_api/
├── README.md
├── Dockerfile
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public/
└── src/
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── assets/
    ├── components/
    │   ├── ChatPopup.jsx
    │   ├── Chatbot.jsx
    │   ├── Navbar.jsx
    │   └── TaskCard.jsx
    ├── pages/
    │   ├── Auth.jsx
    │   ├── Dashboard.jsx
    │   └── Home.jsx
    └── services/
        └── api.js
```

---

## Features
- **Responsive UI**: Built with Tailwind CSS for modern, responsive design.
- **Chatbot Integration**: Chatbot functionality with the `ChatPopup` and `Chatbot` components.
- **Task Management**: Manage tasks effectively using the `TaskCard` and `Dashboard` pages.
- **Authentication**: User login and registration through the `Auth` page.
- **API Integration**: Communicates with backend APIs through the `services/api.js` module.

---

## Prerequisites
Ensure you have the following installed:
- Node.js 18 or higher
- npm 8 or higher
- Docker (optional for containerization)

---

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/hajjiri-oussama/taskbot_frontend_api.git
   cd hajjiri-oussama-taskbot_frontend_api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables (if needed) by creating a `.env` file in the project root.

---

## Running the Application
1. Start the development server:
   ```bash
   npm run dev
   ```

2. Access the application in your browser at:
   ```
   http://localhost:5173
   ```

---

## Building for Production
1. Build the production-ready application:
   ```bash
   npm run build
   ```

2. Use Docker for deployment:
   ```bash
   docker build -t taskbot-frontend .
   docker run -p 3000:3000 taskbot-frontend
   ```

---

## Contributing
1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push to your fork:
   ```bash
   git push origin feature-name
   ```
4. Create a pull request.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
