const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../index');
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

describe('API Tests', () => {
  let itemId;

  it('POST /items - creates an item', async () => {
    const res = await request(app).post('/items').send({ name: 'Apple', description: 'Fresh' });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Apple');
    itemId = res.body._id;
  });

  it('GET /items - returns an array of items', async () => {
    const res = await request(app).get('/items');
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /items/:id - returns a single item', async () => {
    const res = await request(app).get(`/items/${itemId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body._id).toBe(itemId);
  });

  it('GET /items/:id - returns 404 for invalid id', async () => {
    const res = await request(app).get(`/items/${new mongoose.Types.ObjectId()}`);
    expect(res.statusCode).toBe(404);
  });

  it('PUT /items/:id - updates an item', async () => {
    const res = await request(app).put(`/items/${itemId}`).send({ name: 'Updated Item' });
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Updated Item');
  });

  it('PUT /items/:id - returns 404 for invalid id', async () => {
    const res = await request(app).put(`/items/${new mongoose.Types.ObjectId()}`).send({ name: 'Invalid' });
    expect(res.statusCode).toBe(404);
  });

  it('DELETE /items/:id - deletes an item', async () => {
    const res = await request(app).delete(`/items/${itemId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body._id).toBe(itemId);
  });

  it('DELETE /items/:id - returns 404 for invalid id', async () => {
    const res = await request(app).delete(`/items/${new mongoose.Types.ObjectId()}`);
    expect(res.statusCode).toBe(404);
  });
});
