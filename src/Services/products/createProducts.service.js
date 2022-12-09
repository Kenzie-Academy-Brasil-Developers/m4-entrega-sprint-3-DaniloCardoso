import database from "../../database"
import productsWithIdShape from "../../schema/productsWithIdShape.schema copy"

const createProductsService = async (payload) => {
    const queryResponse = await database
        .query(
            `INSERT INTO products(name, price, category_id)
            VALUES($1, $2, $3)
            RETURNING *`,
            [payload.name, payload.price, payload.category_id]
        )
        .then(res => res.rows[0])

    try {
        const validate = await productsWithIdShape.validate(queryResponse, {
            stripUnknown: true,
            abortEarly: false,
        })

        return queryResponse
    } catch (error) {
        console.log(error)
        return [400, { message: error.errors }]
    }
}

export default createProductsService