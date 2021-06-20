const connectDb = require('./connect-db');
const addData = require('./add');
const { Institute, Submission } = require('./mongo');

module.exports = { connectDb, addData, Institute, Submission };
