# Stock Portfolio Tracker

This is a Stock Portfolio Tracker application built with **Next.js** for the frontend and **Spring Boot** for the backend. The application allows users to manage their stock investments, view stock performance, and track the overall value of their portfolio.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add, edit, and delete stock entries.
- View detailed stock metrics including buy price, current price, and percentage change.
- Visualize stock performance over time with charts.
- Display overall portfolio value.
- Responsive design for mobile and desktop views.

## Technologies Used

- **Frontend**: 
  - Next.js
  - React
  - Axios (for API calls)
  - Recharts (for data visualization)
  - Tailwind CSS (for styling)

- **Backend**: 
  - Spring Boot
  - Java
  - JPA and Hibernate (for database interactions)
  - MySQL (for data storage)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- Java (v11 or later)
- MySQL (or any relational database)
- Maven (for building the Spring Boot application)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/liteeqation/portfolio.git
   cd stock-portfolio-tracker
   ```

2. **Set up the backend**:

   - Navigate to the `backend` directory.
   - Update the `application.properties` file with your MySQL database credentials.
   - Run the Spring Boot application:

   ```bash
   ./mvnw spring-boot:run
   ```

3. **Set up the frontend**:

   - Navigate to the `frontend` directory.
   - Install the dependencies:

   ```bash
   npm install
   ```

   - Create a `.env.local` file in the root of the frontend directory and add your Alpha Vantage API key:

   ```
   ALPHA_VANTAGE_API_KEY=your_api_key_here
   ```

   - Start the Next.js development server:

   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

## Usage

- Use the **Add/Edit Stock** form to input new stock information.
- View your stock holdings in the **Portfolio Summary** section.
- Check the **Stock Performance** chart to visualize stock trends.
- The **Total Portfolio Value** section displays the current value of your investments.

## API Integration

The application integrates with the Alpha Vantage API to fetch real-time stock data. The API key is stored in the `.env.local` file for security. The backend is built with Spring Boot, providing RESTful endpoints for managing stock data.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request..
