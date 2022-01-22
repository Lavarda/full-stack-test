const axios = require('axios')
const Auth = require("../controllers/auth");

module.exports = {
    async getAllBeers (req, res) {
        try {
            if (req.headers['authorization']) {
                let decodedToken = await Auth.decodeToken(req.headers['authorization'])
                if (decodedToken.email && decodedToken.password) {
                    const beers = await axios.get('https://api.punkapi.com/v2/beers')

                    if (beers && beers.data) {
                        return res.send({
                            status: 200,
                            data: beers.data
                        })
                    } else {
                        return res.send({
                            status: 400,
                            message: 'Error to get beers, try again later.'
                        })
                    }
                } else {
                    return res.send({
                        status: 200,
                        message: 'Authorization token is not valid.'
                    })
                }
            }
        } catch (e) {
            console.error(e)
            return e
        }
    },

    async getBeer (req, res) {
        try {
            if (req.headers['authorization']) {
                let decodedToken = await Auth.decodeToken(req.headers['authorization'])
                if (decodedToken) {
                    const beer = await axios.get(`https://api.punkapi.com/v2/beers/${req.params.id}`)

                    if (beer && beer.data) {
                        return res.send({
                            status: 200,
                            data: beer.data[0]
                        })
                    } else {
                        return res.send({
                            status: 400,
                            message: 'Error to get beer, try again later.'
                        })
                    }
                } else {
                    return res.send({
                        status: 200,
                        message: 'Authorization token is not valid.'
                    })
                }
            }
        } catch (e) {
            console.error(e)
            return e
        }
    },
}