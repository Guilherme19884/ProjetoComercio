import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import { connectToDatabase } from "./database/database";


const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()
connectToDatabase()

const port = process.env.PORT 

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}✅`)
})