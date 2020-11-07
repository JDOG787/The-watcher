const Discord = require("discord.js");

module.exports = (title, fields) => {
    const embed = new Discord.MessageEmbed()
        .setTitle(title)
        .setTimestamp()
        .setFooter("TheWatcher")
        .addFields(fields)

    return embed;    
}