const express = require("express");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const { User } = require("../models");

const saltRounds = 10;

const registerUser = async (req, res) => {
    // Handle validator rules errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
  
    try {
        const email = req.body.email;
        const salt = await bcrypt.genSalt(saltRounds);
        const crypted_password = await bcrypt.hash(req.body.password, salt);

        let userExist = User.findOne({ where: { email } });
        if (userExist) {
            return res.status(422).json({ errors: "This email is already registered" });
        }

        const user = await this.userRepository.create({
            name: req.body.name,
            email: req.body.email,
            password: crypted_password
        });

        res.status(200).json({
            message: "You've been successfully registered!",
            data: user
        })
    } catch (error) {
        res.status(500).json({ error: "SERVER ERROR" });
    }
};

module.exports = {
    registerUser,
};