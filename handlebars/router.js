const express = require("express");
const handlebars = require("express-handlebars")
const { Router } = express;
const methods = require("./modelo")
const router = Router();



router.post("/", (req, res) => {
    methods.add(req.body);
    res.redirect("/")

})
router.get("/", (req, res) => {

    let datos = { "productos": methods.getAll() }
    if (datos.productos.length === 0) { res.render("vacio") }
    res.render("productos", datos)

})




module.exports = router