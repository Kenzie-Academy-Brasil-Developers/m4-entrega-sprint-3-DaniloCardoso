import * as yup from "yup"

const createCategoriesShape = yup.object().shape({
    name: yup.string().max(200).required()
})

export default createCategoriesShape