const mongoose = require("mongoose");
let uniqueValidator = require('mongoose-unique-validator');
const Usuario = require("../routes/usuario");


let Schema = mongoose.Schema;

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol válido'
};

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es requerido"],
    },
    email: {
        type: String,
        required: [true, "El nombre es requerido"],
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        default: "USER_ROLE",
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true,
    },
    google: {
        type: Boolean,
        default: false,
    },
});

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe ser unico' });

usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}

module.exports = mongoose.model("usuario", usuarioSchema);