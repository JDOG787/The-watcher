const Discord = require("discord.js");

module.exports = {
    embed(title, fields) {
        const embed = new Discord.MessageEmbed()
            .setTitle(title)
            .setTimestamp()
            .setFooter("TheWatcher")
            .addFields(fields)

        return embed; 
    },
    userEmbed(title, desc) {
        const embed = new Discord.MessageEmbed()
            .setTitle(title)
            .setTimestamp()
            .setFooter("TheWatcher")
            .setDescription(desc);
        
            return embed;
    }
}