import * as yup from "yup"

const productsWithIdShape = yup.object().shape({
    id: yup.string().required(),
    name: yup.string().max(200).required(),
    price: yup.number().required(),
    category_id: yup.number().required()
})

export default productsWithIdShape