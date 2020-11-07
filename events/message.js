const filter = require("../utils/filter");

const prefix = "!";
const isBadWord = require("../utils/filter");

module.exports = (client, msg) => {
    if (msg.author.bot) return;

    if(isBadWord(msg)) return msg.delete();

    if (!msg.content.includes(prefix)) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(msg, args, client);
    } catch (error) {
        console.error(error);
        msg.reply('there was an error trying to execute that command!');
    }
}