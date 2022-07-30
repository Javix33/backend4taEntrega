const express = require("express");
const router = require("./router");

const app = express();

app.use(express.static("../public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/productos", router);

app.listen(8080, () => console.log("servidor en el puerto 8080"))