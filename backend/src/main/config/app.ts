import express from "express"
import signUpRouter from "../routes/signup-router"
import signInRouter from "../routes/signin-router"
import createRevenueRouter from "../routes/create-revenue"
import createExpenseRouter from "../routes/create-expense"

const app = express()

app.use(express.json())

app.use('/signup', signUpRouter)
app.use('/signin', signInRouter)
app.use('/revenue/create', createRevenueRouter)
app.use('/expense/create', createExpenseRouter)

export default app