const express = require('express');
require('dotenv').config();

// app
const app = express();

// execute database connection
const db = require('./database');

// connect to database
db.connect();

// create session
require('./middlewares').init(app, db);

const apolloServer = require('./graphql').createApolloServer();

apolloServer.applyMiddleware({
  app,
  cors: { credentials: true, origin: `${process.env.DOMAIN}` },
});

// port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
