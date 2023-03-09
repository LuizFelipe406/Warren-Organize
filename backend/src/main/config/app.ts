import express from "express"
import signUpRouter from "../routes/signup-router"
import signInRouter from "../routes/signin-router"
import revenueRouter from "../routes/revenue"
import expenseRouter from "../routes/expense"

const app = express()

app.use(express.json())

app.use('/signup', signUpRouter)
app.use('/signin', signInRouter)
app.use('/revenue', revenueRouter)
app.use('/expense', expenseRouter)

export default app