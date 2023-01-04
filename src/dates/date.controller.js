var moment = require('moment');

const getNow = (req, res) => {
    return res.json({
        unix: new Date().getTime(),
        utc: new Date().toUTCString()
    });
}

const get = (req, res) => {
    let date = !req.params.date.includes('-') ? parseInt(req.params.date) : req.params.date;
    let validFormats = [
        moment.ISO_8601,
        'X'
    ];

    if (!moment(date, validFormats, true)) {
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