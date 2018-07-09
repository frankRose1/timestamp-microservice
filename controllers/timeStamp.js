
//utc output should look like --> "utc":"Fri, 25 Dec 2015 00:00:00 GMT"
function getUtcDate(unix){
    //arg will come in unix format so must multiply by 1000
    const date = new Date(unix * 1000);
    const utcDate = date.toUTCString();
    return utcDate;
}

exports.getTimeStamp = (req, res) => {
    const dateVal = req.params.date;
    let unix;
    let utc;
    let data;
    //if unix is passed in it will be an integer
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