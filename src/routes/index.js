const homeRoute = require('./home')

function routes(app) {
    //route
    app.use('/Home', homeRoute)
    app.get('/', (req, res) => res.render('home'))
    app.get('/Product', (req, res) => res.render('product'))
}

module.exports = routes;