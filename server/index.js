const express = require('express');
const dotenv = require('dotenv');
const { graphqlHTTP } = require('express-graphql');
const colors = require('colors');

const schema = require('./schema/schema');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const port = process.env.PORT || 5000;

const app = express();

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: process.env.NODE_ENV === 'development',
	})
);

app.listen(port, () => {
	console.log(`Server is running at localhost:${port}`);
});
