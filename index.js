const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const Item = require('./models/Item');

// Middleware
app.use(cors());
app.use(express.json());

// Create
app.post('/items', async (req, res) => {
  try {
    const item = new Item(req.body);
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all
app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Read one
app.get('/items/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    item ? res.json(item) : res.status(404).send('Not Found');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Update
app.put('/items/:id', async (req, res) => {
  try {
    const updated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    updated ? res.json(updated) : res.status(404).send('Not Found');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Delete
app.delete('/items/:id', async (req, res) => {
  try {
    const deleted = await Item.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).send({ error: 'Item not found' });
    }
    res.json(deleted);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = app;

