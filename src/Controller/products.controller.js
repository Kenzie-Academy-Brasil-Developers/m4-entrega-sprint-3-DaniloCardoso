import {
    listProductsService,
    createProductsService,
    listProductsIdService,
    listProductsWithCategoriesIdService,
    deleteProductsService,
    updateProductsService
} from "../Services"

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

const deleteProductsController = async (req, res) => {
    await deleteProductsService(req.params)
    return res.status(204).json()
}

const updateProductsController = async (req, res) => {
    const data = await updateProductsService(req)
    return res.status(200).json(...data)
}

export {
    createProductsController,
    listProductsController,
    listProductsIdController,
    listProductsWithCategoriesIdController,
    deleteProductsController,
    updateProductsController
}