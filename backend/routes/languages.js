const express = require('express');
const router = express.Router();
const Language = require('../models/Language');

router.get('/', async (req, res) => {
  const data = await Language.find();
  res.json(data);
});

router.post('/', async (req, res) => {
  const newLang = new Language(req.body);
  await newLang.save();
  res.json(newLang);
});

router.put('/:id', async (req, res) => {
  const updated = await Language.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Language.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
