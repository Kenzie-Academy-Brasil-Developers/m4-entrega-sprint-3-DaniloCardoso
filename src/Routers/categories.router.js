import { Router } from "express";
import * as Controller from "../Controller"
import * as Middleware from "../Middleware";
import { createCategoriesShape } from "../schema";

const categoriesRouter = Router()

categoriesRouter.get("", Controller.listCategoriesController)
categoriesRouter.get("/:id", Middleware.findCategoriesMiddleware, Controller.listCategoriesIdController)
categoriesRouter.post("", Middleware.validateSchemaMiddleware(createCategoriesShape), Middleware.existCategories, Controller.createCategoriesController)
categoriesRouter.patch("/:id", Middleware.validateSchemaMiddleware(createCategoriesShape), Middleware.findCategoriesMiddleware, Controller.updateCategoriesController)
categoriesRouter.delete("/:id", Middleware.findCategoriesMiddleware, Controller.deleteCategoriesController)

export default categoriesRouter