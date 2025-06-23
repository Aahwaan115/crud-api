const Item = require('../models/Item');

describe('Unit Test: Item Model', () => {
  it('should create an Item instance', () => {
    const item = new Item({ name: 'Apple', description: 'Fresh' });
    expect(item.name).toBe('Apple');
    expect(item.description).toBe('Fresh');
  });
});
