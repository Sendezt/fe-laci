# LACI — Frontend

Frontend application for **LACI**, a web application designed to manage and store product information and prices for a small retail shop.

The frontend is responsible for providing the user interface and communicating with the backend through a REST API.

## Tech Stack

- [Next.js](https://nextjs.org/)
- TypeScript
- Tailwind CSS
- ESLint

## Features

The frontend will provide the following features:

- View product list
- Search products
- Filter products by category
- View product details
- Add new products
- Edit product information
- Update product prices
- Delete products
- Manage product categories
- View dashboard information

## Architecture

The frontend follows a client-server architecture:

```text
┌──────────────────────┐
│       Next.js        │
│      Frontend        │
└──────────┬───────────┘
           │
           │ REST API
           ▼
┌──────────────────────┐
│       NestJS         │
│       Backend        │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  Supabase PostgreSQL │
└──────────────────────┘
```

The frontend does not directly access the database. All data operations are performed through the NestJS backend API.

## Project Structure

```text
frontend/
├── public/
│
├── src/
│   └── app/
│       ├── products/
│       ├── categories/
│       ├── layout.tsx
│       ├── page.tsx
│       └── globals.css
│
├── .env.local
├── package.json
├── tsconfig.json
└── ...
```

The project structure will evolve as new features are implemented.

## Environment Variables

Create a `.env.local` file in the root of the frontend project:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

### Environment Variables

| Variable              | Description                | Example                     |
| --------------------- | -------------------------- | --------------------------- |
| `NEXT_PUBLIC_API_URL` | Base URL of the NestJS API | `http://localhost:3001/api` |

Do not store sensitive credentials in frontend environment variables.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

### 3. Run development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
```

Run the development server.

```bash
npm run build
```

Build the application for production.

```bash
npm run start
```

Run the production build.

```bash
npm run lint
```

Run ESLint.

## Backend

The frontend requires the LACI backend to be running.

Backend repository:

`be-laci`

The backend is built using NestJS and provides the REST API used by this application.

## Development Status

This project is currently under development.

Current development phase:

```text
Phase 1 — Project Setup
```

Planned development phases:

- Project Setup
- Database Setup
- Backend API Development
- API Testing
- Frontend Development
- Frontend–Backend Integration
- Testing & Improvement
- Deployment

## License

This project is currently intended for personal learning and development.
