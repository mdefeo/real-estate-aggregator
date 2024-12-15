# Real Estate Aggregator

This project is a real estate aggregator application that scrapes property listings from other websites, stores them in a PostgreSQL database, and displays them on a user-friendly dashboard. The application is built using **React** for the frontend, **Next.js** for server-side rendering, **NestJS** (or **Express**) for the backend, **PostgreSQL** as the database, **Sequelize** for ORM, **Redis** for caching, and **Bull** for job queues.

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

Install parent-level modules:

```bash
yarn
```

### Frontend

The front end uses React, Next.js, and Material UI. It is deployed to Vercel

#### Create a Next.js project

```bash
cd frontend
yarn create next-app . --typescript --use-npm
```

#### Install Dependencies

```bash
yarn add react-redux axios @mui/material @emotion/react @emotion/styled
```

#### Deploy Frontend to Vercel

After setting up the frontend, you can deploy it to Vercel using the command:

```bash
cd frontend
vercel login
vercel --prod
```

Vercel will automatically detect the configuration and deploy your project.

### Backend

The backend uses Node, NestJS, Sequelize, and Postgres. It is deployed to Heroku.

#### Create project and install dependencies

```bash
yarn global add @nestjs/cli
nest new backend --package-manager yarn --skip-git
yarn add express sequelize sequelize-cli pg pg-hstore dotenv bcryptjs jsonwebtoken supertest
yarn add --dev @babel/parser acorn ts-jest @types/express @types/node @typescript-eslint/parser
```

#### Create a PostgreSQL User and Database

```bash
psql postgres
```

```sql
CREATE USER aggregator_user WITH PASSWORD 'sY1-kj5Zhe0yc_aom0ma';
CREATE DATABASE ra_aggregator_dev;
CREATE DATABASE ra_aggregator_test;
CREATE DATABASE ra_aggregator;

GRANT ALL PRIVILEGES ON DATABASE ra_aggregator_dev TO aggregator_user;
GRANT ALL PRIVILEGES ON DATABASE ra_aggregator_test TO aggregator_user;
GRANT ALL PRIVILEGES ON DATABASE ra_aggregator TO aggregator_user;

\q
```

#### Sequelize Setup

Configure Sequelize in config/config.json for all environments. Rename the config.json.example file to config.json and fill in the variables.

```json
{
  "development": {
    "username": "your-user-here",
    "password": "your-password-here",
    "database": "your-dev-db-name here",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "your-user-here",
    "password": "your-password-here",
    "database": "your-test-db-name here",

    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "your-user-here",
    "password": "your-password-here",
    "database": "your-prod-db-name here",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

#### Run the migration

```bash
yarn sequelize init
yarn sequelize model:generate --name Listing --attributes title:string,price:float,location:string
yarn sequelize db:migrate
```

#### Queue and Scraping Setup

##### Install Dependencies for Puppeteer and Bull

```bash
yarn add puppeteer cheerio axios bull ioredis
```

#### Caching with Redis

##### Install Redis

```bash
yarn add redis ioredis
```

### Deploy Backend to Heroku

```bash
heroku create
git push heroku master
```

#### Environment Variables

Make sure you set the following environment variables in Heroku for your production environment:

```text
DATABASE_URL
REDIS_URL (if using Redis)
```

## Notes

Ensure you have Redis running on your local machine for caching.
Ensure your PostgreSQL instance is running and the connection is properly configured.
Job queues (via Bull) handle background tasks like scraping and processing listings.

## Final Recommendations

1. **Section Titles**: Ensure all section titles (e.g., "Frontend Setup", "Backend Setup") are clearly separated for readability.
2. **Consistent Formatting**: Keep code blocks consistent throughout the README, especially for installation commands, code examples, and configurations.
3. **Detailed Steps**: Make sure each step is numbered and explained clearly for ease of use by others.
