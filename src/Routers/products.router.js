import { Router } from "express";
import * as Controller from "../Controller"
import * as Middleware from "../Middleware";
import createProductsShape from "../schema/createProducts.schema";

const productsRouter = Router()

productsRouter.get("", Controller.listProductsController)
productsRouter.post("", Middleware.validateSchemaMiddleware(createProductsShape), Controller.createProductsController)
productsRouter.get("/:id", Middleware.findProductMiddleware, Controller.listProductsIdController)
productsRouter.get("/category/:id", Middleware.findCategoriesMiddleware, Controller.listProductsWithCategoriesIdController)
productsRouter.delete("/:id", Middleware.findProductMiddleware, Controller.deleteProductsController)
productsRouter.patch("/:id", Middleware.findProductMiddleware, Controller.updateProductsController)

export default productsRouter