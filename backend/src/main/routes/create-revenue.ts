import express from "express"
import { expressRouteAdapter } from "../express-adapter/express-route-adapter"
import { makeRevenueController } from "../factories/create-revenue"

const router = express.Router()

const controller = makeRevenueController()

router.post("/", expressRouteAdapter(controller))

export default router