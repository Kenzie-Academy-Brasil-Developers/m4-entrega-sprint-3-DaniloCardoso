import database from "../../database"

const updateProductsService = async (req) => {
    delete req.body["id"]

    let query = `UPDATE products SET `
    const keys = Object.keys(req.body)
    const values = Object.values(req.body)

    keys.forEach((key, index) => {
        query += `${key} = \$${index += 1}`
        index < keys.length ? (query += ", ") : (query += "")
    })

    query += ` WHERE id = '${req.params.id}' RETURNING *;`

    const queryResponse = await database
        .query(query, [...values])
        .then(res => res.rows)

    return queryResponse
}

export default updateProductsService