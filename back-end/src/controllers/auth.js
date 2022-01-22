const jwt = require('jsonwebtoken')
const User = require('../models/users')
const bcrypt = require('bcrypt')

module.exports = {
    async generateAuthToken (payload) {
        try {
            return jwt.sign(payload, process.env.SECRET_KEY_JWT)
        } catch (e) {
            return e
        }
    },

    async decodeToken (token) {
        try {
            if (token) {
                return await jwt.verify(token, process.env.SECRET_KEY_JWT)
            } else {
                return {
                    error: true,
                    code: 102,
                    message: 'Token not valid'
                }
            }
        } catch (e) {
            return e
        }
    },

    async login (req, res) {
        try {
            const user = await User.findOne({
                raw: true,
                where: {
                    email: req.body.email
                }
            })

            if (!user) {
                return res.send({
                    status: 400,
                    message: 'User not found.'
                })
            }

            const isPasswordMatch = await bcrypt.compare(req.body.password, user.password)

            if (!isPasswordMatch) {
                return res.send({
                    status: 400,
                    message: 'Invalid password!'
                })
            }

            user.token = await module.exports.generateAuthToken(req.body)

            return res.send({
                status:200,
                data: user
            })
        } catch (e) {
            console.error(e)
            return e
        }
    }
}