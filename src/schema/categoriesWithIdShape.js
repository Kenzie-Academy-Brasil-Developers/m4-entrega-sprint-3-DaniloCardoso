import * as yup from "yup"

const categoriesWithIdShape = yup.object().shape({
    id: yup.number().required(),
    name: yup.string().max(200).required()
})

export default categoriesWithIdShape