
const notFound = (req, res, next) => {

    // req has property called originalUrl ... 
    const error = new Error(`Not Found ${req.originalUrl}`);
    res.status(400)
    next(error);
}



const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message


    // mongoose gives CastError so handling it here ...
    if (err.name === 'CastError' && err.kind === 'objectId') {
        statusCode = 404;
        message = 'Resource not found';
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });

}

export {notFound, errorHandler} ;