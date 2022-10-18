const homeRoute = require('./home');

function routes(app) {
    //route
    app.get('/', (req, res) => res.render('home'));
    app.use('/Home', homeRoute);
}

module.exports = routes;