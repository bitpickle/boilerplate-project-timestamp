var moment = require('moment');

const getNow = (req, res) => {
    let date = new Date();
    return res.json({
        unix: date.getTime(),
        utc: date.toUTCString()
    });
}

const get = (req, res) => {
    let dateParam = req.params.date;

    if (dateParam.match(/\d{5,}/)) {
        dateParam = +dateParam;
    }
    
    let date = new Date(dateParam);

    if (date.toUTCString() === 'Invalid Date') {
        return res.status(429).json({
            error: 'Invalid Date'
        });
    }

    return res.json({
        unix: new Date(date).getTime(),
        utc: new Date(date).toUTCString()
    });
}

module.exports = {
    getNow,
    get
};