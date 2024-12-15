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

Install parent-level modules:

```bash
yarn
```

### Frontend Setup

To set up the frontend, run the following command inside the frontend folder:

#### Create a Next.js project

```bash
cd frontend
yarn create next-app . --typescript --use-npm
```

#### Install Dependencies

After setting up the Next.js project, install the necessary dependencies:

```bash
yarn add @mui/material @emotion/react @emotion/styled
yarn add tailwindcss@latest postcss@latest autoprefixer@latest
yarn add eslint eslint-define-config @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-prettier prettier @next/eslint-plugin-next --dev
```

### Set Up Tailwind

```bash
npx tailwindcss init -p
```

Update tailwind.config.js and postcss.config.js as needed.

### Backend Setup

#### Install NestJS and Setup

Navigate to the backend folder and initialize a NestJS project:

```bash
yarn add @nestjs/cli
nest new backend --package-manager yarn --skip-git
```

#### Install Backend Dependencies

Install the necessary backend dependencies:

```bash
yarn add express sequelize pg pg-hstore cors dotenv reflect-metadata
yarn add @nestjs/common@latest @nestjs/core@latest @nestjs/platform-express@latest
yarn add typescript@latest @typescript-eslint/eslint-plugin@latest reflect-metadata
yarn add -D typescript ts-node @types/express @types/node eslint-define-config
```

#### PostgreSQL Setup

Create a new PostgreSQL user and database for the backend:

```bash
psql postgres
```

```sql
CREATE USER your-user-here WITH PASSWORD 'your-password-here';
CREATE DATABASE your-dev-db-name-here;
CREATE DATABASE your-test-db-name-here;
CREATE DATABASE your-prod-db-name-here;

GRANT ALL PRIVILEGES ON DATABASE your-dev-db-name-here TO your-user-here;
GRANT ALL PRIVILEGES ON DATABASE your-test-db-name-here TO your-user-here;
GRANT ALL PRIVILEGES ON DATABASE your-prod-db-name-here TO your-user-here;

\q
```

#### Sequelize Setup

Initialize Sequelize and generate models:

```bash
yarn sequelize init
yarn sequelize model:generate --name Listing --attributes title:string,price:float,location:string
```

Run migration:

```bash
yarn sequelize db:migrate
```

#### Scraping and Queues Setup

Install Puppeteer, Cheerio, Bull, and Redis for scraping and queues:

```bash
yarn add puppeteer cheerio axios
yarn add bull ioredis
yarn add -D @types/bull
```

#### Redis Setup

Set up Redis caching and configure Redis connections:

```tsx
import Redis from 'ioredis';
const redis = new Redis();
redis.set('listing:123', JSON.stringify({ title: 'Listing 1', price: 100000 }));
const cachedListing = await redis.get('listing:123');
```

### Environment Variables

Create a .env file in both the frontend and backend folders to store the necessary environment variables.

For the backend, you will need:

```txt
DATABASE_URL=postgres://DB_USER:DB_PASSWORD@localhost:5432/DB_NAME
REDIS_HOST=localhost
REDIS_PORT=6379
JWT_SECRET=your_jwt_secret
```

For the frontend, you will need:

```txt
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Docker Setup

#### Backend Dockerfile

To build and run the backend in Docker, create a Dockerfile inside the backend folder:

```dockerfile
# Backend Dockerfile
FROM node:22.12.0

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 5000

CMD ["yarn", "start"]
```

#### Frontend Dockerfile

To build and run the frontend in Docker, create a Dockerfile inside the frontend folder:

```dockerfile
# Frontend Dockerfile
FROM node:22.12.0

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
```

#### Docker Compose

At the parent level, create a docker-compose.yml file to orchestrate the frontend, backend, and database containers:

```yaml
version: '3'
services:
  frontend:
    build:
      context: ./frontend
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_API_URL=http://localhost:5000/api

  backend:
    build:
      context: ./backend
    ports:
      - "5000:5000"
    environment:
      - DATABASE_URL=postgres://DB_USER:DB_PASSWORD@db:5432/DB_NAME
      - REDIS_HOST=redis
      - REDIS_PORT=6379
    depends_on:
      - db
      - redis

  db:
    image: postgres:latest
    environment:
      POSTGRES_USER: aggregator_user
      POSTGRES_PASSWORD: sY1-kj5Zhe0yc_aom0ma
      POSTGRES_DB: ra_aggregator_dev
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:
    driver: local
```

## Running the Project with Docker

Run the application with Docker Compose:

```bash
docker-compose up --build
```

This will build and start the frontend, backend, PostgreSQL, and Redis containers. The frontend will be accessible at <http://localhost:3000>, and the backend at <http://localhost:5000>.
