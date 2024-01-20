const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');

const PORT = 4000;
const app = express();
const REDIS_HOST = 'redis';
const REDIS_PORT = 6379;
//connect to redis
const redisClient = redis.createClient({
	url: `redis://${REDIS_HOST}:${REDIS_PORT}`,
});
redisClient.on('error', (err) => console.log('redis Client error ', err));
redisClient.on('connect', () => console.log('redis connected secessfully'));
redisClient.connect();

// connect database
const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_PORT = 27017;
const DB_HOST = 'mongo';

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose.connect(URI).then(() => console.log('connected to DB *_*')).catch((err) => console.log('failed to connect to DB :('));


app.get('/', (req, res) => {
	redisClient.set('title','BMW');
	res.send('<h1>Test and Test3 + test 3</h1>')
});
app.get('/data', async (req, res) => {
	const book = await redisClient.get('title');
	res.send(`<h1>Title is : <h2>${book}</h2></h1>`);
});
app.listen(PORT, () => console.log(`app is running and listening on port ${PORT}`));
