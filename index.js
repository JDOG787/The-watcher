const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";
require("dotenv").config();


client.on("ready", () => {
    console.log(`${client.user.username} is Booting up...`);
});

client.on("message", msg => {
    if (!msg.content.includes(prefix) || msg.author.bot) return;

    if (msg.content === prefix+"ping") {
        msg.channel.send("Pong!");
    }
});

client.login(process.env.TOKEN);