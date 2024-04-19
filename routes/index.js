const authMiddleware = require('../middlewares/authenticate')

module.exports = function (app) {
    app.use('/conversations/:conversation_id/messages', authMiddleware.authenticate, require('./messages'))
    app.use('/conversations', authMiddleware.authenticate, require('./conversations'))
    app.use('/statistics', authMiddleware.authenticate, require('./statistics'))
    app.use('/', require('./auth'))
    app.use('/**', (req, res, next) => {
        res.status(400).json({message: 'Endpoint not found'})
    })
}