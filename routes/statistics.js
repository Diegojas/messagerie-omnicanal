const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    // Logic to retrieve statistics
    res.send('GET request to retrieve statistics');
});

module.exports = router