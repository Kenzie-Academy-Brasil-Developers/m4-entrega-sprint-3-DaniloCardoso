import "express-async-errors"
import "dotenv/config"
import express, { json } from "express"
import { categoriesRouter, productsRouter } from "./Routers"
import { errorHandler } from "./Error/errors"

const app = express()

app.use(json())
app.use("/categories", categoriesRouter)
app.use("/products", productsRouter)
app.use(errorHandler)

export default app
