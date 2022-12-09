import { Router } from "express";
import { createCategoriesController, listCategoriesController, listCategoriesIdController, updateCategoriesController, deleteCategoriesController } from "../Controller";
import { existCategories, findCategoriesMiddleware, validateSchemaMiddleware } from "../Middleware";

import { createCategoriesShape } from "../schema";

const categoriesRouter = Router()

categoriesRouter.get("", listCategoriesController)
categoriesRouter.get("/:id", findCategoriesMiddleware, listCategoriesIdController)
categoriesRouter.post("", validateSchemaMiddleware(createCategoriesShape), existCategories, createCategoriesController)
categoriesRouter.patch("/:id", validateSchemaMiddleware(createCategoriesShape), findCategoriesMiddleware, updateCategoriesController)
categoriesRouter.delete("/:id", findCategoriesMiddleware, deleteCategoriesController)

export default categoriesRouter