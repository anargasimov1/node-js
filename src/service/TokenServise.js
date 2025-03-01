const jwt = require('jsonwebtoken');
require('dotenv').config();
const tokenModel = require('../models/tokenModel')


class TokenService {
    generateToken(payload) {

        const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "40m" });
        return token;
    }

    async saveToken(user, token) {
        await tokenModel.create({ user, token })
    }
}

module.exports = new TokenService();

// hələki access token genararte eledim refresh token gələcəkdə
// həll edərəm vaxt məhdiyyəti ilə əlaqədar