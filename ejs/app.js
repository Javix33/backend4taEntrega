const express = require("express");

const router = require("./router");
const app = express();


app.set("view engine", "ejs");


app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/productos", router);
app.get("/", (req, res) => {
    res.render("index")
})

app.listen(8080, () => console.log("servidor en el puerto 8080"))