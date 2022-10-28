const Course = require('../models/Course')

class HomeController {
    index(req, res, next) {
        //callback type (req, res)
        // Course.find({}, function(err, courses) {
        //     if (!err)
        //         return res.send(JSON.stringify(courses))
        //     return res.status(400).json({ err: "ERROR!!!" })
        // })

        //peromise type (req, res, next)
        Course.find({})
            .then(courses => res.render('home', {
                courses: courses // quick text: courses
            }))
            .catch(next)

        // res.render('home');
    }

    search(req, res) {
        var q = req.body.q
        console.log(q);
        res.send('<script> alert("' + q + '"); location.href = "/" </script>');
    }

    Login(req, res) {
        var user = req.body.user
        var pw = req.body.pw
        if (user == "kiemluc01" && pw == "123") {
            var val = '<script> alert("đăng nhập thành công"); location.href = "/Product" </script>'
            res.send(val)
        } else {
            var val = '<script> alert("đăng nhập không thành công"); location.href = "/" </script>'
            res.send(val)
        }
    }
}

module.exports = new HomeController();