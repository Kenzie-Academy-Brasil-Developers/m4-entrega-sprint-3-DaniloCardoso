import database from "../../database"

const listProductsIdService = async (req) => {

    const queryResponse = await database
        .query(`SELECT * FROM products;`)
        .then(res => res.rows)

    const foundProducts = queryResponse.find(product => product.id === req.params.id)

    return foundProducts

}

export default listProductsIdService