import express from "express"
import signRouter from "../routes/signup-router"

const app = express()

app.use(express.json())

app.use('/signup', signRouter)

export default app