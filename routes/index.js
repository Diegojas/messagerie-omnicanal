const authMiddleware = require('../middlewares/authenticate')

module.exports = function (app) {
    app.use('/conversations', authMiddleware, require('./conversations'));
    app.use('/messages', authMiddleware, require('./messages'));
    app.use('/statistics', authMiddleware, require('./statistics'));
    app.use('/', require('./auth'));
    app.use('/**', (req, res, next) => {
        res.status(400).json({message: 'Endpoint not found'})
    })
}