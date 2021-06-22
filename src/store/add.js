const { User, Conversation } = require('./mongo');
const logger = require('../logger');
const users = require('../../data/users.json');
const conversations = require('../../data/conversations.json');

const addData = async () => {
  logger.log('info', 'Adding User data to db');

  try {
    await User.insertMany(users);
    logger.log('info', 'User data added to db');
  } catch (err) {
    logger.error(new Error('Unable to add User Data to db: ', err));
    throw err;
  }

  logger.log('info', 'Adding Conversation data to db');

  try {
    await Conversation.insertMany(conversations);
    logger.log('info', 'Conversation data added to db');
  } catch (err) {
    logger.error(new Error('Unable to add Conversation Data to db: ', err));
    throw err;
  }
};

module.exports = addData;
