const User = require('../models/users')
const crypto = require("crypto")
const bcrypt = require('bcrypt')
const Auth = require('../controllers/auth')

module.exports = {
    async generateUUID () {
        return crypto.randomUUID()
    },

    async create(req, res) {
        try {
            const { name, email } = req.body
            const id = await module.exports.generateUUID()
            const password = await bcrypt.hash(req.body.password, 12)

            if ( name && email && password ) {
                const user = await User.create({id, name, email, password })

                if(!user) {
                    return res.send({
                        status: 400,
                        message: 'Error to create user'
                    })
                }

                return res.send({
                    status: 201,
                    message: 'User created successfully',
                })
            } else {
                return res.send({
                    status: 422,
                    message: 'Error to create user, please fill name, email and password field'
                })
            }
        } catch (e) {
            console.error(e)
            return e
        }
    },

    async list(req, res) {
        try {
            if (req.headers['authorization']) {
                let decodedToken = await Auth.decodeToken(req.headers['authorization'])
                if (decodedToken) {
                    const user = await User.findAll()

                    if(!user) {
                        return res.send({
                            status: 200,
                            message: 'No users available',
                            value: [],
                        })
                    }

                    return res.send({
                        status: 200,
                        data: user,
                    })
                } else {
                    return res.send({
                        status: 200,
                        message: 'Authorization token is not valid.'
                    })
                }
            } else {
                return res.send({
                    status: 200,
                    message: 'Missing authorization token.'
                })
            }
        } catch (e) {
            console.error(e)
            return e
        }
    },

    async edit(req, res) {
        try {
            if (req.headers['authorization']) {
                let decodedToken = await Auth.decodeToken(req.headers['authorization'])
                if (decodedToken) {
                    const {id} = req.params

                    const {name, email} = req.body

                    const user = await User.findByPk(id)

                    if (!user) {
                        return res.send({
                            status: 204,
                            message: 'User not found',
                        })
                    }

                    user.name = name ? name : user.name
                    user.email = email ? email : user.email

                    await user.save()

                    return res.send({
                        status: 200,
                        message: 'User edited successfully',
                    })
                } else {
                    return res.send({
                        status: 200,
                        message: 'Authorization token is not valid.'
                    })
                }
            } else {
                return res.send({
                    status: 200,
                    message: 'Missing authorization token.'
                })
            }
        } catch (e) {
            return e
        }
    },

    async delete(req, res) {
        try {
            if (req.headers['authorization']) {
                let decodedToken = await Auth.decodeToken(req.headers['authorization'])
                if (decodedToken) {
                    const { id } = req.params

                    if ( id ) {
                        const user = await User.findByPk(id)

                        user.destroy({
                            truncate: true,
                        })

                        return res.send({
                            status: 200,
                            message: 'User deleted successfully'
                        })
                    } else {
                        return res.send({
                            status: 204,
                            message: 'User not found',
                        })
                    }
                } else {
                    return res.send({
                        status: 200,
                        message: 'Authorization token is not valid.'
                    })
                }
            } else {
                return res.send({
                    status: 200,
                    message: 'Missing authorization token.'
                })
            }
        } catch (e) {
            return e
        }
    }
}