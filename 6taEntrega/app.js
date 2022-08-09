const express = require("express");
const router = require("./router");
const { Server: IOServer } = require("socket.io")
const { Server: HttpServer } = require("http");
const fs = require("fs")





const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)



const messagesToEmit = fs.readFileSync("messages.txt", "utf-8");
const messages = JSON.parse(messagesToEmit)
io.on("connection", (socket) => {
    console.log("Nuevo cliente conectado");

    socket.emit("messages", messages)
    socket.on("new-message", (data) => {

        messages.push(data)

        const messagesToPersist = JSON.stringify(messages, null, 2);

        fs.writeFileSync("messages.txt", messagesToPersist)
        io.sockets.emit("messages", messages);

    })
})


app.set("views", "./views");
app.set("view engine", "pug");


app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/productos", router);
app.get("/", (req, res) => {
    res.render("index")
})

httpServer.listen(8080, () => console.log("servidor en el puerto 8080"))