module.exports = {
    name: "ping",
    execute(msg, args) {
        msg.channel.send("Pong!")
    }
}