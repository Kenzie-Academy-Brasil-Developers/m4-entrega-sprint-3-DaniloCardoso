import database from "../database"
import { AppError } from "../Error/errors"

const findProductMiddleware = async (req, res, next) => {
    const queryResponse = await database
        .query(`SELECT * FROM products`)
        .then(res => res.rows)

    const foundProduct = queryResponse.find(product => product.id === req.params.id)

    if (!foundProduct) {
        throw new AppError("Produto não encontrado", 404)
    }
    return next()
}

export default findProductMiddleware