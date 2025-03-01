const bcrypt = require('bcrypt');
const user = require('../models/UserModels');
const userDto = require('../dto/UserDto');
const TokenService = require('./TokenServise');
const userInfo = require('../dto/UserInfo');

class UserService {
    async register(name, surname, password, email, role) {

        try {
            const userName = await user.findOne({ email });
            if (userName) {
                throw new Error("user is already have");
            }

            const hashPassword = await bcrypt.hash(password, 8);
            const newUser = await user.create({ name, surname, password: hashPassword, email, role });

            const dto = new userDto(newUser);
            const token = TokenService.generateToken({ ...dto });
            const info = new userInfo(newUser);

            return { token, info };
        } catch (error) {
            console.log(error.message);
        }
    }
    async getUsers() {
        try {
            const allUsers = await user.find();
            return allUsers;
        } catch (err) {
            console.log(err);
        }
    }

    async upDate(id, name) {
        try {
            const upDateUser = await user.findByIdAndUpdate(id, name);
            return upDateUser && null;
        } catch (error) {
            console.log(err);
        }
    }
}

module.exports = new UserService();