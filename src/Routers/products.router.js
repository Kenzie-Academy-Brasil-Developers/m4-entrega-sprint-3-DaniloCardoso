import { Router } from "express";
import { createProductsController, listProductsController, listProductsIdController, listProductsWithCategoriesIdController } from "../Controller";
import { findCategoriesMiddleware, findProductMiddleware, validateSchemaMiddleware } from "../Middleware";
import createProductsShape from "../schema/createProducts.schema";

const productsRouter = Router()

productsRouter.get("", listProductsController)
productsRouter.post("", validateSchemaMiddleware(createProductsShape), createProductsController)
productsRouter.get("/:id", findProductMiddleware, listProductsIdController)
productsRouter.get("/categories/:id", findCategoriesMiddleware, listProductsWithCategoriesIdController)

export default productsRouter