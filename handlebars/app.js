const express = require("express");
const handlebars = require("express-handlebars")
const router = require("./router");
const app = express();

app.engine("hbs", handlebars.engine({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/views/layouts"
}))
app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/productos", router);
app.get("/", (req, res) => {
    res.render("main")
})

app.listen(8080, () => console.log("servidor en el puerto 8080"))