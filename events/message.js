const prefix = "!";
module.exports = (client, msg) => {
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
}