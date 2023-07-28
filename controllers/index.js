const express = require('express');
const router = express.Router();

// Define  routes 
router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

module.exports = router;