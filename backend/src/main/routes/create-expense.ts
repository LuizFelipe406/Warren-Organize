import express from "express"
import { expressRouteAdapter } from "../express-adapter/express-route-adapter"
import { makeExpenseController } from "../factories/create-expense"

const router = express.Router()

const controller = makeExpenseController()

router.post("/", expressRouteAdapter(controller))

export default router