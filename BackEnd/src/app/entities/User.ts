import mongoose, { Schema } from "mongoose";

// Definindo o schema para o usuário
const UserSchema: Schema = new Schema({
  role: { type: String, maxlength: 30, required: true }, // Corrigido de "rol" para "role"
  name: { type: String, maxlength: 250, required: true },
  email: { type: String, maxlength: 250, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  avatar: { type: String, maxlength: 250, required: true },
  state: { type: Number, default: 1 }, // Corrigido "dafault" para "default"
  phone: { type: String, maxlength: 20, required: false },
  birthday: { type: String, maxlength: 20, required: false }
});

// Criando o modelo com o schema definido
const User = mongoose.model("User", UserSchema);

export default User;
