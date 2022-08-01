const socket = io();
socket.on("mensaje", data => {
    alert(data)
    socket.emit("notificacion", "el mensaje se entrego")
})