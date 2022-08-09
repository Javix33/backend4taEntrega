const socket = io.connect();

const renderMessages = (data) => {


    const html = data.map((mensaje) => {

        return (`<li class="mensajesElement"> 
        <p><strong style="color:blue">${mensaje.autor}</strong>: <i style="color:green"> ${mensaje.mensaje}</i> <br>
        <p class="mensajeFecha">Fecha:${mensaje.fecha}</p> <br>`)
    }).join(" ")

    document.getElementById("mensajes").innerHTML = html

}

socket.on("messages", data => {

    renderMessages(data)
})

const mensajeForm = document.getElementById("mensajeForm")

mensajeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const autor = document.getElementById("userName")
    const mensaje1 = document.getElementById("mensajeAdd")
    const mensaje = {
        autor: autor.value,
        mensaje: mensaje1.value,
        fecha: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()} Hora:${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    };
    socket.emit("new-message", mensaje);


    mensaje1.value = "";
    return false;
})