
# TourFinder

TourFinder is a web application that helps users discover and book tours to specific destinations. It is built using Node.js with a MySQL database, utilizing the Sequelize library for ORM (Object-Relational Mapping).

## Tech Stack

- **Node.js**: JavaScript runtime environment for building server-side applications.
- **Express.js**: Web application framework for Node.js, used for routing and middleware.
- **MySQL**: Relational database management system for storing tour, user, and booking data.
- **Sequelize**: Promise-based ORM for Node.js, used to interact with the MySQL database through models and queries.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/dharmi04/tourfinder.git
   ```

   #Backend
   ```bash
   cd Backend
   ```

   2. Install dependencies using npm 
   ```bash
   npm install
   ```
   3. Set up mysql database named "Tourfinder"
   4. Create a `.env` file in the Backend Folder containing:
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD= your_password
   DB_NAME= database_name
   PORT=8000
   SECRET= secret_key_for_auth

   4. Start the server
   ```bash
   npm run dev```