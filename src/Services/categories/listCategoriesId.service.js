import database from "../../database"

const listCategoriesIdService = async (req) => {

    const queryResponse = await database
        .query(`SELECT * FROM categories;`)
        .then(res => res.rows)

    const foundCategories = queryResponse.find(category => category.id === req.params.id)

    return foundCategories

}

export default listCategoriesIdService