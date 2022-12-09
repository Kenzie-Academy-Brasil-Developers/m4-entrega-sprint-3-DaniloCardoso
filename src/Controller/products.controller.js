import { listProductsService, createProductsService, listProductsIdService, listProductsWithCategoriesIdService } from "../Services"

const createProductsController = async (req, res) => {
    const data = await createProductsService(req.body)
    return res.status(201).json(data)
}

const listProductsController = async (req, res) => {
    const data = await listProductsService()
    return res.status(200).json(data)
}

const listProductsIdController = async (req, res) => {
    const data = await listProductsIdService(req)
    return res.status(200).json(data)
}

const listProductsWithCategoriesIdController = async (req, res) => {
    const data = await listProductsWithCategoriesIdService(req)
    return res.status(200).json(data)
}

export { createProductsController, listProductsController, listProductsIdController, listProductsWithCategoriesIdController }