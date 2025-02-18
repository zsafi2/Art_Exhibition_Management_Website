# Art Exhibition Management System

## Scenario Group 8 - Victor Escudero, Mark Cirineo, Zaheer Safi, Diego Ramirez

The **Art Exhibition Management System (AEMS)** is a web-based platform designed to assist organizers in managing art exhibitions. The system allows for the oversight of **artists, artworks, attendees, payments, and permissions**, ensuring a seamless and efficient experience.

The platform is built with:
- **Frontend**: React.js with Tailwind CSS
- **Backend**: Python Flask with SQLite
- **Authentication & Payments**: Firebase and Stripe API
- **Styling**: Tailwind CSS and DaisyUI

## Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Core Functionalities](#core-functionalities)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

✅ **Secure User Authentication** using Firebase  
✅ **Exhibition Management** – Add, edit, and manage exhibitions  
✅ **Artist & Artwork Management** – View, approve, or reject artwork submissions  
✅ **Attendee Registration & Check-ins** – Track attendees and send notifications  
✅ **Payment & Ticket Sales** – Integrated Stripe API for processing payments  
✅ **Responsive UI** – Built with Tailwind CSS for cross-platform compatibility  
✅ **Role-based Access Control** – Assign permissions to exhibition staff  
✅ **Settings & Customization** – Customize dashboard colors and preferences  

---

## Technology Stack

### 🖥️ Frontend (React)
- **React.js** (v18.3.1)
- **React Router** (for navigation)
- **Tailwind CSS** (for styling)
- **DaisyUI** (for UI components)
- **Firebase** (for authentication & real-time data)
- **React Testing Library** (for testing)

### ⚙️ Backend (Flask)
- **Python 3** with Flask
- **SQLite** (lightweight database)
- **Flask-Restful** (for API management)
- **Flask-CORS** (for cross-origin requests)

### 💳 Payment & Security
- **Stripe API** (for ticket sales & transactions)
- **Firebase Authentication** (secure user logins)

---

## Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/YourUsername/Art-Exhibition-Management-System.git
cd Art-Exhibition-Management-System
```

### 2️⃣ Install Frontend Dependencies
Navigate to the **frontend** folder and install dependencies:
```bash
cd frontend
npm install
```

### 3️⃣ Install Backend Dependencies
Navigate to the **backend** folder and install Flask:
```bash
cd backend
pip install -r requirements.txt
```
*(If `requirements.txt` is not available, manually install Flask and dependencies: `pip install flask flask-cors flask-restful`.)*

---

## Running the Application

### 🚀 Start the Frontend (React)
Run the following command inside the `frontend/` folder:
```bash
npm start
```
This starts the development server on `http://localhost:3000/`.

### 🖥️ Start the Backend (Flask)
Run the following inside the `backend/` folder:
```bash
python3 app.py
```
This starts the backend server at `http://127.0.0.1:5000/`.

The React frontend will interact with the Flask backend via REST API.

---

## Core Functionalities

### 🔐 **Authentication & Access Control**
- Users register with **email & password** (Firebase authentication).
- Secure login process with **encrypted connections**.
- Admins manage **roles & permissions** for exhibition staff.

### 🖼️ **Exhibition & Artwork Management**
- Dashboard displays **exhibitions, artists, and pending artwork**.
- Exhibition managers can **add, edit, and delete** exhibition details.
- Artists submit artworks for approval before being featured in an exhibition.

### 🎟️ **Attendee Management**
- Users register to attend exhibitions.
- Admins can track **attendee check-ins** and send **event notifications**.

### 💰 **Payments & Ticket Sales**
- Stripe API handles **ticket sales** and **payment tracking**.
- Users can purchase **exhibition passes** through the integrated payment system.

### 🎨 **Customizable Dashboard**
- Users can personalize **UI themes** (dark/light mode, color themes).
- Admins can configure **system settings** for different exhibitions.

---

## Project Structure

```
📂 Art-Exhibition-Management-System/
│
├── 📂 frontend/          # React-based frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Individual pages (Home, Exhibitions, Artists, etc.)
│   │   ├── styles/       # Tailwind CSS styles
│   │   ├── App.js        # Main React component
│   │   ├── index.js      # React entry point
│   ├── package.json      # Frontend dependencies
│   ├── tailwind.config.js # Tailwind CSS configuration
│
├── 📂 backend/           # Flask-based backend
│   ├── app.py           # Main Flask API
│   ├── models.py        # Database models
│   ├── routes.py        # API endpoints
│   ├── database.db      # SQLite database file
│   ├── requirements.txt # Backend dependencies
│
├── README.md            # Project documentation
└── .gitignore           # Files to ignore in version control
```

---

## Contributing

We welcome contributions! Follow these steps to contribute:

1. **Fork the Repository**  
   ```bash
   git fork https://github.com/YourUsername/Art-Exhibition-Management-System.git
   ```
2. **Create a Feature Branch**  
   ```bash
   git checkout -b feature/my-new-feature
   ```
3. **Commit Your Changes**  
   ```bash
   git commit -m "Add new feature"
   ```
4. **Push to GitHub**  
   ```bash
   git push origin feature/my-new-feature
   ```
5. **Submit a Pull Request**  
   - Go to GitHub and create a **Pull Request** for review.

---

## License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---

## 🚀 Future Enhancements

✅ **Enhanced Reporting & Analytics** for exhibition insights  
✅ **AI-powered Artwork Recommendations** for attendees  
✅ **Multilingual Support** to accommodate international users  

---

This **Art Exhibition Management System** provides an efficient and secure way to manage art exhibitions, ensuring smooth **artist interactions, attendee registrations, and exhibition oversight**. 🎨 🏛️

Happy coding! 💻✨
