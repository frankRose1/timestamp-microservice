function getUtcDate(unix){
    const date = new Date(unix * 1000);
    const utcDate = date.toUTCString();
    return utcDate;
}

//if user does not put in a custom timeStamp give them current date
exports.currentTimeStamp = (req, res) => {
    let data;
    const date = Date.now();
    const unix = Math.floor(date / 1000);
    const utc = getUtcDate(unix);
    data = {unix, utc}
    res.json(data);
};

exports.getTimeStamp = (req, res) => {
    const dateVal = req.params.date_string;
    let unix;
    let utc;
    let data;
    if (!isNaN(dateVal)) {
        unix = parseInt(dateVal);
        utc = getUtcDate(unix);
        data = {unix, utc};
    } else {
        //A date string is valid if can be successfully parsed by new Date(date_string)
        const d = new Date(dateVal);
        unix = d.getTime() / 1000;

        if (!isNaN(unix)) {
            utc = d.toUTCString();
            data = {unix, utc};
        } else {
            data = {"error": "Invalid Date"};
        }
    }
    res.json(data);
};

