const express = require("express");
const { Router } = express;
const methods = require("./modelo")
const router = Router();



router.post("/", (req, res) => {
    methods.add(req.body);
    res.redirect("/")

})
router.get("/", (req, res) => {
    datos = methods.getAll()
    res.render("productos", datos)
})




module.exports = router