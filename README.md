# Real Estate Aggregator

This project is a real estate aggregator application that scrapes property listings from other websites, stores them in a PostgreSQL database, and displays them on a user-friendly dashboard. The application is built using **React** for the frontend, **Next.js** for server-side rendering, **NestJS** (or **Express**) for the backend, **PostgreSQL** as the database, **Sequelize** for ORM, **Redis** for caching, and **Bull** for job queues.

## Stack

- **Frontend**: React/Next.js, Material UI, Tailwind CSS
- **Backend**: NestJS, Sequelize, PostgreSQL, Redis, Puppeteer, Bull (for job queues)
- **Deployment**: Vercel (Frontend), Heroku (Backend)

## Features

- **Real-time property listing aggregation** from multiple external sources.
- **User-friendly dashboard** built with React, Next.js, and Material UI.
- **Backend API** for data management and scraping, built using NestJS or Express.
- **Seamless integration** with PostgreSQL to store property listings.
- **Caching** with Redis for improved performance.
- **Job queues** for handling scraping tasks in the background using Bull.

## Project Structure

```text
/my-project
  /frontend            # Frontend application
  /backend             # Backend API
  /tests               # Unit and integration tests
  /public              # Public assets (images, fonts, etc.)
  package.json         # Project metadata and dependencies
  .gitignore           # Git ignore file
  README.md            # Project documentation
```

## Setup Instructions

### Project Setup

Clone the repository and initialize the project:

```bash
git clone https://github.com/mdefeo/real-estate-aggregator
cd real-estate-aggregator
git init
```

#### Run Install

In the parent project folder, run the commands below. You will be prompted to add database information to be created, as well as a JWT token.

```bash
chmod +x setup.sh
./setup.sh
```

This will build and start the frontend, backend, PostgreSQL, and Redis containers. The frontend will be accessible at <http://localhost:3000>, and the backend at <http://localhost:5000>.
