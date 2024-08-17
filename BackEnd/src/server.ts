import express, { Request, Response, urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv"
import { connectToDatabase } from "./database/database";
import { Router } from "express";

dotenv.config()
connectToDatabase()

const router = Router()
const app = express()
app.use(cors())
app.use(express.json())
app.use(urlencoded({extended: true}))
app.use('/', router)


router.get('/', async ( req: Request, res: Response)=>{
    return res.status(200).json({message: " 🚀 Bem vindo ao seu servidor! 🚀"}) 
})

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}✅`)
})