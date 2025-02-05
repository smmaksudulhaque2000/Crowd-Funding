# Crowd Funding - Client-Side

Crowdcube is a dynamic and user-friendly crowdfunding platform that allows users to raise funds for various personal causes, creative ideas, startups, and more. Users can also contribute to ongoing campaigns by donating and supporting others.

## Live Site

- [Crowd Funding Client](https://crowd-funding-b2152.web.app/)

## Key Features

- **Responsive Design**: Fully responsive for mobile, tablet, and desktop views, ensuring seamless navigation across devices.
- **Navbar**:
  - Contains the website name/logo, Home, All Campaigns, Add New Campaign (protected), My Campaign (protected), My Donations (protected), and Login/Register buttons.
  - If the user is logged in, their photo and display name will be shown along with a "Logout" button.
- **Home Page**:
  - **Banner/Slider**: A carousel showcasing the most important updates or campaigns.
  - **Running Campaign Section**: Displays active campaigns that are still open for donations. Includes a "See More" button to access detailed information.
  - **Extra Sections**: Additional sections on the homepage for highlighting important content or news.
- **Login & Registration**:
  - Users can register and log in using their email/password or Google login.
  - Password must include an uppercase letter, lowercase letter, and a minimum length of 6 characters.
- **Campaign Cards**: Each campaign card displays essential information with a "See More" button, redirecting the user to the campaign's detailed page.
- **Details Page**:
  - Users can view detailed information about each campaign and donate through the "Donate" button.
- **User Authentication**: Protected routes (Add New Campaign, My Campaign, My Donations) ensure that only logged-in users can access these features.
- **Dark/Light Theme Toggle**: A button to switch between dark and light themes for a better user experience.
- **Toast Alerts**: Toast messages show success or error notifications when users add campaigns, donate, or register/login.

## Technologies Used

- **Frontend**: React.js, React Router, React Context API, Axios
- **State Management**: React Context API
- **Authentication**: Firebase Authentication
- **UI Components**: React Bootstrap, CSS, Lottie React (for animations)
- **Styling**: Custom CSS for styling, React Simple Typewriter for text animations
- **Third-Party Services**: Firebase for authentication and database, MongoDB for storing campaign data and donations

## Setup Instructions

### Prerequisites

- Node.js (v14 or later)
- NPM or Yarn
- Firebase Project (for authentication and storage)

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/programming-hero-web-course2/b10-a10-client-side-smmaksudulhaque2000
   ```
2. Navigate to the project directory:
   ```bash
   cd crowd-cube-client
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a .env file in the root directory and add the following Firebase configuration values:
   ```env
   REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
   REACT_APP_FIREBASE_APP_ID=your-firebase-app-id
   ```
5. Run the app in development mode:
   ```bash
   npm start
   ```

### Screenshots

Here are some screenshots showcasing the different pages and functionalities of the website:

- Home Page:
- Campaign Details:
- Login Page:
- Dark/Light Theme Toggle:

### Contributing

1. Fork the repository.
2. Create a new branch (git checkout -b feature-name).
3. Commit your changes (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature-name).
5. Create a new pull request.

### License

Distributed under the MIT License. See LICENSE for more information.
