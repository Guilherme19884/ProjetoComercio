import mongoose, { Schema } from "mongoose";

// Definindo o schema para o usuário
const UserSchema: Schema = new Schema({
 rol: { type: String, maxlength: 30, required: true},
  name: { type: String, maxlength: 250, required: true },
  email: { type: String, maxlength: 250, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, maxlength: 250, required: true },
  state: { type: Number, dafault:1 }, //1 está ativo e 2 está inativo
  phone: { type: String, maxlength: 20, required: false},
  birthday: { type: String, maxlength: 20, required: false}
});

// Criando o modelo com o schema definido
const User = mongoose.model("User", UserSchema)

export default User
