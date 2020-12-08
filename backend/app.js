const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
console.log("starting app");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.post("/registrar-correo", (req, res) => {
  let body = req.body;

  if (!body.nombre || !body.email) {
    res.status(500).send({ mensaje: "Faltan campos", error: true });
  } else {
    var re = /\S+@\S+\.\S+/;

    if (re.test(body.email)) {
      res.status(200).send({ mensaje: "Usuario Registrado", error: false });
    } else {
      res.status(500).send({
        mensaje: "El valor enviado no es una expresión valida para un correo",
        error: true,
      });
      // res.status(200).send({
      //   mensaje: "Usuario Registrado",
      //   error: true,
      // });
    }
  }
});

module.exports = app;
