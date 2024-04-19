const { check, validationResult } = require('express-validator')

module.exports = [
    check('name')
        .exists()
        .isLength({ min: 3 })
        .trim()
        .escape(),
    check('email')
        .exists()
        .isEmail()
        .normalizeEmail()
        .trim()
        .escape(),
    check('password')
        .exists()
        .isLength({ min: 8 })
]