const mongoose = require('mongoose');
const { USer, COnversation } = require('./mongo');

jest.mock('mongoose', () => ({
  connect: jest.fn(() => ({ catch: jest.fn() })),
  Schema: jest.fn(() => ({ index: jest.fn(), plugin: jest.fn() })),
  model: jest.fn(),
}));

describe('Mongoose schema and model setup', () => {
  test('correct methods are setup', () => {
    expect(mongoose.Schema).toHaveBeenCalledTimes(2);
    expect(mongoose.model).toHaveBeenCalledTimes(2);
  });
});
