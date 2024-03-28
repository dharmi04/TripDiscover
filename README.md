
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

2. Install dependencies:

   ```bash
   cd tourfinder
   npm install
   ```

3. Set up the MySQL database:

   - Create a MySQL database.
   - Update the database configuration in `config.js` with your database credentials.

4. Run the application:

   ```bash
   npm start
   ```

5. Visit `http://localhost:3000` in your web browser to access the TourFinder application.

## Usage

- Explore tours: Discover available tours by searching for specific destinations.
- Book tours: Reserve your spot on a tour by providing your details and completing the booking process.


