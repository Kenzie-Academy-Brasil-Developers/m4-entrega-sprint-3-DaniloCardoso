import database from "../../database"

const updateCategoriesService = async (id, data) => {
    const queryResponse = await database
        .query("UPDATE categories SET name=$1 WHERE id=$2 RETURNING *;", [data, id])

    return queryResponse.rows
}



export default updateCategoriesService