import express from "express"
import { expressRouteAdapter } from "../express-adapter/express-route-adapter"
import { makeCreateExpenseController } from "../factories/create-expense"
import { makeGetExpensesController } from "../factories/get-expenses"

const router = express.Router()

const createController = makeCreateExpenseController()

router.post("/", expressRouteAdapter(createController))

const getAllController = makeGetExpensesController()

router.get("/", expressRouteAdapter(getAllController))


export default router