import express from "express"
if (process.env.NODE_ENV !== 'production') {
    import dotenv from "dotenv"
    dotenv.config()
}
import connectDb from "./utils/db.js"
import authRouter from "./routes/auth.routes.js"
import cookieParser from "cookie-parser"
import cors from 'cors'
import userRouter from "./routes/user.routes.js"
import notesRouter from "./routes/generate.routes.js"
import pdfRouter from "./routes/pdf.routes.js"
import { stripeWebhook } from "./controllers/credits.controller.js"
import creditRouter from "./routes/credits.routes.js"

const app = express()

app.post(
    "/api/credits/webhook",
    express.raw({type: "application/json"}),
    stripeWebhook
);

app.use(cors({
    origin: process.env.CLIENT_URL|| "https://ainotes-1-utqt.onrender.com",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
}))

app.use(express.json())
app.use(cookieParser())
const PORT = process.env.PORT || 5000

app.get("/" , (req, res)=> {
    res.json({
        message: "Exam notes ai backend running"
    })
})

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/notes", notesRouter)
app.use("/api/pdf", pdfRouter)
app.use("/api/credit", creditRouter)

app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`)
    connectDb()
})
