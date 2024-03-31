
# TourFinder

TourFinder is a web application that helps users discover and book tours to specific destinations. It is built using Node.js with a MySQL database, utilizing the Sequelize library for ORM (Object-Relational Mapping).

## Tech Stack

- **Node.js**: JavaScript runtime environment for building server-side applications.
- **Express.js**: Web application framework for Node.js, used for routing and middleware.
- **MySQL**: Relational database management system for storing tour, user, and booking data.
- **Sequelize**: Promise-based ORM for Node.js, used to interact with the MySQL database through models and queries.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/dharmi04/tourfinder.git
   ```

2. **Navigate to the Backend directory:**

   ```bash
   cd Backend
   ```

3. **Install dependencies using npm:**

   ```bash
   npm install
   ```

4. **Set up MySQL database named "Tourfinder"**

5. **Create a `.env` file in the Backend folder containing:**

   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=database_name
   PORT=8000
   SECRET=secret_key_for_auth
   ```

6. **Start the server:**

   ```bash
   npm run dev
   ```

