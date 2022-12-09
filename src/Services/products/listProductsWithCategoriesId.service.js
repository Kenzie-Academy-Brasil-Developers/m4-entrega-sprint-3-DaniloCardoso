import database from "../../database"

const listProductsWithCategoriesIdService = async (req) => {
    const queryResponse = await database
        .query(`
                SELECT * FROM categories 
                INNER JOIN products ON products.category_id = categories.id 
                WHERE products.category_id = $1;`,
            [req.params.id])
        .then(res => res.rows)

    return queryResponse

}

export default listProductsWithCategoriesIdService