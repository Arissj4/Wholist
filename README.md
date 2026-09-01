# WhoList

A user directory app built with Next.js 14 and TypeScript, used as a hands-on project for learning Redux Toolkit, RTK Query, and testing with Jest and React Testing Library.

**Live demo:** [wholist.vercel.app](https://wholist.vercel.app/)

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Redux Toolkit** — global state management
- **RTK Query** — data fetching and caching
- **Jest** + **React Testing Library** — unit and integration testing
- **GitHub Actions** — CI pipeline (lint, typecheck, test, build on every push/PR)

## Features

- Fetches and displays a list of users
- Search/filter users by name, powered by a Redux slice
- Loading and error states handled via RTK Query

## What I Learned / Built

This project started as a way to practice Jest testing (mocking `fetch`, async hooks, React Testing Library queries, snapshot testing, achieving full coverage) and a GitHub Actions CI/CD pipeline.

It later became a practical exercise in Redux Toolkit: adding a search slice with `useSelector`/`useDispatch`, then migrating the data-fetching logic from a manual `useState` + `useEffect` + `fetch()` hook over to **RTK Query** (`createApi`, generated hooks, automatic loading/error state). I also wrote unit tests for the Redux reducer in isolation, separate from the component tests that exercise it through a real store.

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/Arissj4/Wholist.git
cd Wholist
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

Run the test suite:

```bash
npm test
npm run test:coverage
```

## License

This project is for personal learning and portfolio purposes.
