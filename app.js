const qrcode = require("qrcode-terminal");

const { Client, LocalAuth } = require("whatsapp-web.js");
const client = new Client({
    authStrategy: new LocalAuth() //Guarda la sesión para no introducir el qr a cada rato.
})

client.on("qr", (qr) => {
    qrcode.generate(qr, {small:true}); //combierte el codigo numerico a código qr.
})

client.on("ready", () => {
    console.log("Client is ready")
})

client.initialize();

const listenMessage = () => {
    client.on('message', (message) => {
        sendMessage(message.from, 'Hola ¿Como estas?');
    })
}

const sendMessage = (form, to) => {
    client.sendMessage(form, to)
}

listenMessage();