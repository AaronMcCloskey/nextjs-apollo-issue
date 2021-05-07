# Setup

## Environment Files


- Create an `.env` file on the `server` directory
- Follows the `.env-example` structure
```
  DB_URI=
  SESSION_SECRET=
  NODE_ENV=development
  DOMAIN=http://localhost:3000
```
- set `DB_URI` to your local datbase
  - i.e `mongodb://localhost:27017/<name-of-db>`
  - or a cloud connection string, i.e mongodb atlas
- set `SESSION_SECRET` to a random string of your choice

## Install dependencies

- I am using `yarn` but can also use `npm`
- in a terminal window in the root directory then run `cd server`
- then run `yarn` or `npm i`
- then open another terminal window in the root directory then run `cd client`
- then run `yarn` or `npm i`

## Populate Database

- To populate your Database with example data
- Open a terminal in the root directory and navigate to the server folder `cd server`
- Then run the command `yarn populateDb` or `npm run populateDb`
- This will populate all the relevant collections with data

## Running the server

- To run the server, open a terminal in the root directory and navigate to the `server` folder `cd server`
- Then run `yarn dev` or `npm run dev`
- In the terminal you should see
```
🚀 Server is running on port 8000
Connected to DB
```
- The graphQL playground should be available on `http://localhost:8000/graphql`
- A quick query to ensure that is working is to run
```
query GetAllPortfolios {
  portfolios {
    title
  }
}
```

## Running the client

- To run the client, open a terminal in the root directory and naviagte to the `client` folder `cd client`
- Then run `yarn dev` or `npm run dev`
- In the terminal you should see
```
ready - started server on http://localhost:3000
event - compiled successfully
```
- In your browser of choice, navigate to `http://localhost:3000/`

## Logging in as admin

- To login as an admin user
- navigate to `http://localhost:3000/login`
- Fill in the login inputs as follows;
  - Email
    - `admin@admin.com`
  - Password
    - `123456`

## Current Issue

- Login as an admin user
- Once logged in, click on the `Manage` dropdown in the Navigation and select `Dashboard`
- Now reload the page
- You get redirected to `http://localhost:3000/login?message=NOT_AUTHENTICATED`
- This seems to occur because in the `withAuth` file `user` is not returned in the `req` object