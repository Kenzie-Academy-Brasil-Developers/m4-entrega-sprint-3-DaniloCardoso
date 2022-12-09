class AppError extends Error {
    constructor(message, statusCode) {
        super();
        this.message = { message }
        this.statusCode = statusCode
    }
}

const errorHandler = (err, req, res, next) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json(err.message)
    }
    console.log(err)
    return res.status(500).json({ message: "Internal Server Error." })
}

export { AppError, errorHandler }