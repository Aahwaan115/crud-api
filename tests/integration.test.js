const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Item = require('../models/Item');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('Integration Test: Item Model', () => {
  it('should save an item to the database', async () => {
    const item = new Item({ name: 'Apple', description: 'Fresh' });
    const savedItem = await item.save();
    expect(savedItem._id).toBeDefined();
    expect(savedItem.name).toBe('Apple');
  });
});
