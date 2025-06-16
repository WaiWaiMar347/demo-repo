const express = require('express');
const app = express();
app.use(express.json());

let items = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' }
];

// CREATE
app.post('/items', (req, res) => {
  const newItem = { id: items.length+1 , name: req.body.name };
  items.push(newItem);
  res.status(201).json(newItem);
});

// READ all
app.get('/items', (req, res) => {
  res.json(items);
});

// READ one
app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');
  res.json(item);
});

// UPDATE
app.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');
  item.name = req.body.name;
  res.json(item);
});

// DELETE
app.delete('/items/:id', (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Item not found');
  const deletedItem = items.splice(index, 1);
  res.json(deletedItem[0]);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:3000{PORT}`);
});
