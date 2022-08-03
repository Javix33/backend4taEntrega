const socket = io();

const input = document.getElementById("mensajeAEnviar")

document.getElementById("botonEnviar").addEventListener("click", () => {

    socket.emit("mensaje", input.value)

    input.value = ""

})

socket.on("mensajes", (mensajes) => {
    const mensajesInput = mensajes.map((mensaje) => `SocketId: ${mensaje.socketid} ..... mensajes: ${mensaje.mensaje}`)
        .join("<br>");
    document.getElementById("historialMensajes").innerHTML = mensajesInput;

})