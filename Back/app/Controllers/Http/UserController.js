'use strict'

const User = use('App/Models/User');

class UserController {

    async store({ request }) {
        const { email, password, username } = request.all();
        const user = await User.create({
            email,
            password,
            username
        })
        return user;
    };

    async login({ request, auth }) {
        const { email, password } = request.all();
        const token = await auth.attempt(email, password);
        return token;
    }

}

module.exports = UserController