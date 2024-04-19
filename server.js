const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
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

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

require('./routes')(app);
