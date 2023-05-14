import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

const app: Application = express()

//cors
app.use(cors())

//dotenv
dotenv.config()


//api-endpoints
app.get("/" , (req: Request, res: Response, next: NextFunction) => {
    res.send({success: true, message: 'API is working'})
    next()
})

export default app