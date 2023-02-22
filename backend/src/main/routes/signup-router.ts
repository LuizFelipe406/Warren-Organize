import express from "express"
import { expressRouteAdapter } from "../express-adapter/express-route-adapter"
import { makeSignUpController } from "../factories/signup"

const router = express.Router()

const controller = makeSignUpController()

router.post("/", expressRouteAdapter(controller))

export default router