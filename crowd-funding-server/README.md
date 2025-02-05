# Crowd Funding - Server-Side

Crowdcube's server-side is built with Node.js, Express, and MongoDB to handle campaign data, user authentication, and donations securely. The API serves as the backbone of the platform, enabling users to manage campaigns, donate, and interact with the system.

## Live Site

- [Crowd Funding Server](https://crowd-funding-server-two.vercel.app/)

## Key Features

- **User Authentication**: Uses Firebase Authentication for secure user login and registration.
- **Protected Routes**: Routes such as `Add New Campaign`, `My Campaign`, and `My Donations` are protected, ensuring that only authenticated users can access them.
- **Campaign Management**: Users can create, update, and delete campaigns. All data is stored in MongoDB.
- **Donation Handling**: Users can donate to campaigns, and their donations are recorded in the database with their user information.
- **Error Handling**: Comprehensive error handling ensures smooth user experience with clear feedback on any issues.
- **Data Validation**: Ensures that campaign data and user data meet the necessary requirements before being saved to the database.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: Firebase Admin SDK (for handling server-side authentication)
- **Environment Variables**: Secure Firebase and MongoDB credentials
- **Deployment**: Vercel for server hosting
- **API Documentation**: RESTful API design for handling HTTP requests

## Setup Instructions

### Prerequisites

- Node.js (v14 or later)
- NPM or Yarn
- MongoDB Cluster (for campaign data and donations)
- Firebase Project (for authentication)

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/programming-hero-web-course2/b10-a10-server-side-smmaksudulhaque2000
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

### API Endpoints

- POST /auth/register: Registers a new user.
- POST /auth/login: Logs in a user.
- GET /campaigns: Fetches all campaigns.
- GET /campaigns/:id: Fetches a specific campaign's details.
- POST /campaigns: Creates a new campaign (requires authentication).
- PUT /campaigns/:id: Updates a campaign (requires authentication).
- DELETE /campaigns/:id: Deletes a campaign (requires authentication).
- POST /donate: Handles donations to campaigns (requires authentication).

### Error Handling

- API returns clear error messages and status codes for invalid requests or server issues.
- Common errors:
  1. 401 Unauthorized: If the user is not logged in or does not have permission.
  2. 404 Not Found: When a campaign or resource is not found.
  3. 500 Internal Server Error: General server error.

### Contributing

1. Fork the repository.
2. Create a new branch (git checkout -b feature-name).
3. Commit your changes (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature-name).
5. Create a new pull request.

### License

Distributed under the MIT License. See LICENSE for more information.
```bash
This enhanced version includes more details on features, setup instructions, and contributing guidelines. Feel free to make any changes according to your specific needs!
