<div align="center">
  <img src="https://i.ibb.co.com/1G2S1PQT/Screenshot-3.png" height="400" width="800" alt="Crowd-Funding"/>
</div>

# 🎯 Crowd Funding - Client-Side

Crowdcube is a dynamic and user-friendly crowdfunding platform that enables users to raise funds for personal causes, creative ideas, startups, and more. It also allows users to contribute to ongoing campaigns by donating and supporting others.

## 🌐 Live Site

🔗 [Crowd Funding Client](https://crowd-funding-b2152.web.app/)

---

## 📖 Table of Contents

- [Key Features](#-key-features)
- [Technologies Used](#-technologies-used)
- [Setup Instructions](#-setup-instructions)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 Key Features

✅ **Fully Responsive Design** – Works seamlessly on mobile, tablet, and desktop devices.  
✅ **User Authentication** – Secure login and registration with email/password or Google authentication.  
✅ **Campaign Management** – Create, view, and manage fundraising campaigns.  
✅ **Donation System** – Users can contribute to campaigns easily.  
✅ **Dark/Light Theme Toggle** – Enhances the user experience with theme switching.  
✅ **Toast Alerts** – Real-time success/error notifications.  

### **Navigation Bar**
- Contains links to Home, All Campaigns, Add New Campaign (protected), My Campaign (protected), My Donations (protected), and Login/Register.
- Displays user profile picture and name when logged in, with a **Logout** button.

### **Home Page Features**
- **Banner/Slider** – Highlights top campaigns.
- **Running Campaigns Section** – Displays ongoing campaigns with a "See More" button.
- **Extra Sections** – Additional content and updates.

### **Campaign Details Page**
- Displays in-depth information about each campaign.
- Users can **donate** via the **Donate** button.

### **Protected Routes**
- **Add New Campaign** – Allows only logged-in users to create campaigns.
- **My Campaigns** – View and manage campaigns created by the logged-in user.
- **My Donations** – Track donations made by the user.

---

## 🛠️ Technologies Used

- **Frontend**: React.js, React Router, React Context API, Axios  
- **State Management**: React Context API  
- **Authentication**: Firebase Authentication  
- **UI Components**: React Bootstrap, Lottie React (for animations)  
- **Styling**: Custom CSS, React Simple Typewriter (for animations)  
- **Database**: Firebase Firestore, MongoDB (for campaign & donation data)  

---

## 🔧 Setup Instructions

### **Prerequisites**
- Node.js (v14 or later)  
- NPM or Yarn  
- Firebase Project (for authentication and storage)  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/smmaksudulhaque2000/Crowd-Funding
```

### **2️⃣ Navigate to the Project Directory**  
```bash
cd crowd-cube-client
```

### **3️⃣ Install Dependencies**  
```bash
npm install
```

### **4️⃣ Configure Firebase**  
Create a `.env` file in the root directory and add the Firebase configuration keys:  

```bash
REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-firebase-app-id
```

### **5️⃣ Start the Development Server**  
```bash
npm start
```

---

## 🎨 Screenshots

🔹 **Home Page**  
🔹 **Campaign Details Page**  
🔹 **Login Page**  
🔹 **Dark/Light Theme Toggle**  

_(Include images as needed)_

---

## 🤝 Contributing

Want to contribute? Follow these steps:  

1. **Fork** the repository.  
2. **Create a new branch** (`git checkout -b feature-name`).  
3. **Commit your changes** (`git commit -am 'Add new feature'`).  
4. **Push to the branch** (`git push origin feature-name`).  
5. **Create a pull request**.  

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for more details.  

---

# 🛠 Crowd Funding - Server-Side

Crowdcube's server-side is built with **Node.js, Express, and MongoDB**, handling campaign data, user authentication, and donations securely.

## 🌐 Live Site

🔗 [Crowd Funding Server](https://crowd-funding-server-two.vercel.app/)

---

## 🚀 Key Features

✅ **User Authentication** – Firebase Authentication for secure login.  
✅ **Protected Routes** – Only authenticated users can access certain features.  
✅ **Campaign Management** – Users can create, update, and delete campaigns.  
✅ **Donation Handling** – Donations are securely recorded in MongoDB.  
✅ **Error Handling** – Ensures smooth user experience with clear error messages.  
✅ **Data Validation** – Prevents invalid data entries in the database.  

---

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB, Mongoose  
- **Authentication**: Firebase Admin SDK  
- **Deployment**: Vercel  

---

## 🔧 Setup Instructions

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/smmaksudulhaque2000/Crowd-Funding
```

### **2️⃣ Navigate to the Project Directory**  
```bash
cd crowd-cube-server
```

### **3️⃣ Install Dependencies**  
```bash
npm install
```

### **4️⃣ Configure Environment Variables**  
Create a `.env` file and add:  

```bash
MONGO_URI=your-mongodb-uri
FIREBASE_ADMIN_SDK=your-firebase-admin-sdk-credentials
```

### **5️⃣ Start the Server**  
```bash
npm start
```

---

## 🌍 API Endpoints

- `POST /auth/register` – Registers a new user.  
- `POST /auth/login` – Logs in a user.  
- `GET /campaigns` – Fetches all campaigns.  
- `GET /campaigns/:id` – Fetches details of a specific campaign.  
- `POST /campaigns` – Creates a new campaign (requires authentication).  
- `PUT /campaigns/:id` – Updates a campaign (requires authentication).  
- `DELETE /campaigns/:id` – Deletes a campaign (requires authentication).  
- `POST /donate` – Handles donations (requires authentication).  

---

## ❗ Error Handling

🔴 **401 Unauthorized** – User is not logged in.  
🔴 **404 Not Found** – Campaign or resource does not exist.  
🔴 **500 Internal Server Error** – Server issues.  

---

## 🤝 Contributing

Want to improve the backend? Follow the same **Contributing** steps as above!  

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for details.  

---

🎉 **Happy Coding!** 🚀  