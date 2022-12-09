import * as yup from "yup"

const createProductsShape = yup.object().shape({
    name: yup.string().max(200).required(),
    price: yup.number().required(),
    category_id: yup.number().required()
})

export default createProductsShape