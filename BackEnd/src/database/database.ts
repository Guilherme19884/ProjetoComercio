import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/ecommerce_mean"

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbUrl)
    console.log("Conectado ao MongoDB na porta 27017 🎲✅")
  } catch (err) {
    console.error("Erro ao conectar ao MongoDB:", err)
    process.exit(1); // Encerra o processo se a conexão falhar
  }
}