import database from "../../database"
import categoriesWithIdShape from "../../schema/categoriesWithIdShape"

const listCategoriesService = async () => {
    const queryResponse = await database
        .query(`SELECT * FROM categories`)
    try {
        const validate = await categoriesWithIdShape.validate(queryResponse.rows[0], {
            stripUnknown: true,
            abortEarly: false,
        })

        return queryResponse.rows
    }
    catch (error) {
        return [400, { error }]
    }
}

export default listCategoriesService