import express from "express"
import signUpRouter from "../routes/signup-router"
import signInRouter from "../routes/signin-router"

const app = express()

app.use(express.json())

app.use('/signup', signUpRouter)
app.use('/signin', signInRouter)

export default app