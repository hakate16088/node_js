class NewController {
    // [GET] / news
    index = (req, res) => {
        res.render('news');
    };

    show(req, res) {
        res.send('home');
    }
}

module.exports = new NewController();
