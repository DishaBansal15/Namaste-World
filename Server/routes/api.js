const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from Namaste World API!');
});

module.exports = router;
