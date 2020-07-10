const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema= Schema({
    name: String,
    lastname: String,
    email:{
        type:String,
        unique:true
    },
    password: String,
    role: String,
    active:Boolean,
    avatar: String,
    dni: String,
    movil: String,
    sexo: String,
    fechanac: String,
    direccion: String,
    codpostal: String,
    poblacion: String,
    provincia: String,
    inicioactividad: String,
    finactividad: String,
    numss: String,
    tipocontrato: String,
    categoria: String,
    salario: String
});

module.exports = mongoose.model("User", UserSchema);