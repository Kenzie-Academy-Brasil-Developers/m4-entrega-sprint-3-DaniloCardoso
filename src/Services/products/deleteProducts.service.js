import database from "../../database"

const deleteProductsService = async (req) => {
    await database
        .query("DELETE FROM products WHERE id = $1 RETURNING *;", [req.id])
}

export default deleteProductsService