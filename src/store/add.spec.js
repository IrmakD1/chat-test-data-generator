const addInitialData = require('./add');
const { User, Conversation } = require('./mongo');

jest.mock('./mongo', () => ({
  User: {
    insertMany: jest.fn(),
  },
  Conversation: {
    insertMany: jest.fn(),
  },
}));

describe('addInitialData function', () => {
  test('successfully inserts User documents', async () => {
    await addInitialData();
    expect(User.insertMany).toHaveBeenCalled();
  });
  test('error message is triggered if unsuccesful', async () => {
    User.insertMany.mockImplementationOnce(() =>
      Promise.reject(Error('blah'))
    );
    try {
      await addInitialData();
    } catch (err) {
      expect(err).toEqual(Error('blah'));
    }
  });
  test('successfully inserts Conversation documents', async () => {
    await addInitialData();
    expect(Conversation.insertMany).toHaveBeenCalled();
  });
  test('error message is triggered if unsuccesful', async () => {
    Conversation.insertMany.mockImplementationOnce(() =>
      Promise.reject(Error('blah'))
    );
    try {
      await addInitialData();
    } catch (err) {
      expect(err).toEqual(Error('blah'));
    }
  });
});
