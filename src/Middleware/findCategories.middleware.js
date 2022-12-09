import database from "../database"
import { AppError } from "../Error/errors"


const findCategoriesMiddleware = async (req, res, next) => {
    const queryResponse = await database
        .query(`SELECT * FROM categories;`)
        .then(res => res.rows)

    const foundCategories = queryResponse.find(category => category.id === req.params.id)

    if (!foundCategories) {
        throw new AppError("Categoria não encontrada", 404)
    }
    return next()
}

export default findCategoriesMiddleware