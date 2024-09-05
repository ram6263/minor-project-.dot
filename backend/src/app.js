import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
 
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: ['GET', 'POST'],

}))

app.use(express.json({
    limit: "10mb",

}))

app.use(express.urlencoded({
    extended: true,
    limit: "10mb",

}))

app.use(express.static("public"))

app.use(cookieParser())

// routes import
import userRouter from "./routes/user.routes.js"
import projectRouter from "./routes/project.routes.js"

// routes declaration
app.use("/api/v1/users", userRouter)
app.use("/api/v1/projects", projectRouter)

export {app}