const homeRoute = require('./home');

function routes(app) {
    //route

    app.use('/Home', homeRoute);
    app.get('/', (req, res) => res.render('home'));
}

module.exports = routes;