import database from "../../database"

const listProductsWithCategoriesIdService = async (req) => {
    const queryResponse = await database
        .query(`
                SELECT p.name, p.price, c.name category FROM products p
                INNER JOIN categories c ON c.id = p.category_id
                WHERE c.id = $1;`,
            [req.params.id])
        .then(res => res.rows)

    return queryResponse

}

export default listProductsWithCategoriesIdService