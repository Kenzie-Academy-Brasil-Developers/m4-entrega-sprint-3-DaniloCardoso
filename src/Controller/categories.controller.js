import {
    createCategoriesService,
    deleteCategoriesService,
    listCategoriesIdService,
    listCategoriesService,
    updateCategoriesService
} from "../Services"

const createCategoriesController = async (req, res) => {
    const data = await createCategoriesService(req.body)
    return res.status(201).json(data)
}

const listCategoriesIdController = async (req, res) => {
    const data = await listCategoriesIdService(req)
    return res.status(200).json(data)
}

const listCategoriesController = async (req, res) => {
    const data = await listCategoriesService()
    return res.status(200).json(data)
}

const updateCategoriesController = async (req, res) => {
    const data = await updateCategoriesService(req.params.id, req.body.name)
    return res.status(200).json(...data)
}

const deleteCategoriesController = async (req, res) => {
    await deleteCategoriesService(req.params)
    return res.status(204).json()
}

export { createCategoriesController, listCategoriesController, listCategoriesIdController, updateCategoriesController, deleteCategoriesController }