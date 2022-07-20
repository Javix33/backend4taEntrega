const express = require("express");
const { Router } = express;
const router = Router();
const methods = require("./methods")

router.get("/", (req, res) => { res.send(methods.getAll()) })

router.get("/:id", (req, res) => {

    res.send(methods.getById(req.params.id))
})

router.post("/", (req, res) => {
    res.send(methods.add(req.body));
    console.log(req.body)
})

router.put("/:id", (req, res) => {

    res.send(methods.update(req.params.id, req.body));
});


router.delete("/:id", (req, res) => {
    res.send(methods.delete(req.params.id));
})




module.exports = router