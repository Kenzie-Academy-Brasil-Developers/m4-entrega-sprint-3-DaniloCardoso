import database from "../../database"

const deleteCategoriesService = async (req) => {
    await database
        .query("DELETE FROM categories WHERE id = $1 RETURNING *;", [req.id])
}

export default deleteCategoriesService