const express = require('express');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();
const port = process.env.APP_PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Bienvenu sur la messagerie omnicanale !')
})

require('./routes')(app);
