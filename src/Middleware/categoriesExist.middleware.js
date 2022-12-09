import database from "../database"
import { AppError } from "../Error/errors";

const existCategories = async (req, res, next) => {
    const queryResponse = await database
        .query(`SELECT name FROM categories;`)
        .then(res => res.rows)

    const foundProducts = queryResponse.find(product => product.name === req.body.name)

    if (foundProducts) {
        throw new AppError("Categoria já existente", 400)
    }
    return next()
}

export default existCategories
