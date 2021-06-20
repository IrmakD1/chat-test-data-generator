const { User, Conversation } = require('./mongo');
const logger = require('../logger');
const users = require('../../data/users.json');
const conversations = require('../../data/conversations.json');

const addData = async () => {
  logger.log('info', 'Adding Institute data to db');

  try {
    await User.insertMany(users);
    logger.log('info', 'Institute data added to db');
  } catch (err) {
    logger.error(new Error('Unable to add Institute Data to db: ', err));
    throw err;
  }

  logger.log('info', 'Adding Submission data to db');

  try {
    await Conversation.insertMany(conversations);
    logger.log('info', 'Submission data added to db');
  } catch (err) {
    logger.error(new Error('Unable to add Submission Data to db: ', err));
    throw err;
  }
};

module.exports = addData;
