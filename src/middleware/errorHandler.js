`use strict`

module.exports = [
    function(req, res, next) {
        res.status(404);
        next(new Error("Resource Not Found"))
    },
    function (err, req, res, next) {
    if(res.status == 200) res.status(500);

    return res.json({
        status: "Fail",
        error: [err.message],
        errorCodeSentry: res.sentry,
        stack : err
    })
}]
