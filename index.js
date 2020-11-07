const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
client.commands = new Discord.Collection();
const prefix = "!";

require("dotenv").config();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on("ready", () => {
    console.log(`${client.user.username} is Booting up...`);
});

client.on("message", msg => {
    if (!msg.content.includes(prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(msg, args);
    } catch (error) {
        console.error(error);
        msg.reply('there was an error trying to execute that command!');
    }
});

client.login(process.env.TOKEN);