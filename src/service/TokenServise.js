const jwt = require('jsonwebtoken');
require('dotenv').config()


class TokenService {
    generateToken(payload) {

        const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "10m" });
        return token;
    }
}

module.exports = new TokenService();

// hələki access token genararte eledim refresh token gələcəkdə
// həll edərəm vaxt məhdiyyəti ilə əlaqədar