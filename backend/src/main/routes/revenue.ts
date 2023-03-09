import express from "express"
import { expressRouteAdapter } from "../express-adapter/express-route-adapter"
import { makeCreateRevenueController } from "../factories/create-revenue"
import { makeGetRevenuesController } from "../factories/get-revenues"

const router = express.Router()

const createController = makeCreateRevenueController()

router.post("/", expressRouteAdapter(createController))

const getAllController = makeGetRevenuesController()

router.get("/", expressRouteAdapter(getAllController))

export default router