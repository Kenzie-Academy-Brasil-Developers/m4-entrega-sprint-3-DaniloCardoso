import database from "../../database"
import productsWithIdShape from "../../schema/productsWithIdShape.schema copy"

const listProductsService = async () => {
    const queryResponse = await database
        .query(`SELECT * FROM products`)
    try {
        const validate = await productsWithIdShape.validate(queryResponse.rows[0], {
            stripUnknown: true,
            abortEarly: false,
        })

        return queryResponse.rows
    }
    catch (error) {
        return [400, { error }]
    }
}

export default listProductsService