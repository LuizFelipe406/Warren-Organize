import express from "express"
import { expressRouteAdapter } from "../express-adapter/express-route-adapter"
import { makeSignInController } from "../factories/signin"

const router = express.Router()

const controller = makeSignInController()

router.post("/", expressRouteAdapter(controller))

export default router