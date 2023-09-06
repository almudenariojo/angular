console.log("Iniciando la conexión a la base de datos...");

// Cambia esto en index.cjs
const mongoose = require("mongoose");

// A esto en index.mjs (archivo con extensión .mjs)
import mongoose from "mongoose";


mongoose.connect('mongodb://localhost:27017/portafolio', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conexión a la base de datos establecida con éxito");
  })
  .catch(err => console.log(err));
