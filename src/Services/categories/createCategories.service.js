import database from "../../database"
import categoriesWithIdShape from "../../schema/categoriesWithIdShape"

const createCategoriesService = async (payload) => {
    const queryResponse = await database
        .query(
            `INSERT INTO categories(name)
            VALUES($1)
            RETURNING *`,
            [payload.name]
        )
        .then(res => res.rows[0])

    try {
        const validate = await categoriesWithIdShape.validate(queryResponse, {
            stripUnknown: true,
            abortEarly: false,
        })

        return queryResponse
    } catch (error) {
        return [400, { message: error.errors }]
    }
}

export default createCategoriesService