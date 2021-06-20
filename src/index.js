const { connectDb, addData } = require('./store');
const logger = require('./logger');

connectDb()
  .then(() => {
    addData();
  })
  .catch((err) => {
    logger.error(new Error(`Unable to add data: ${err.message}`));
  });
