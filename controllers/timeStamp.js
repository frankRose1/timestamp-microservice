exports.getTimeStamp = (req, res) => {
    res.json({
        input: req.params.date
    });
};