const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const path = require("path")
client.commands = new Discord.Collection();
const prefix = "!";

require("dotenv").config();

// COMMANDS
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// EVENTS
const files = fs.readdirSync(path.join(__dirname, '/events')) 
files.forEach((fileName) => {
    if (fileName.endsWith('.js')) {
        const event = require(`./events/${fileName}`)
        const eventName = fileName.split('.')[0] 

        console.log(`Successfully loaded the ${eventName} event.`)
        client.on(eventName, event.bind(null, client))
    }
})

client.login(process.env.TOKEN);