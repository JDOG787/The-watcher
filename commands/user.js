const { userEmbed } = require("../utils/embed");

module.exports = {
    name: "user",
    async execute(msg, args, client) {
        try {
            let userInfo = await msg.guild.members.fetch(args[0]);
            let name = `${userInfo.user.username}#${userInfo.user.discriminator}`;
            let joined = new Date(userInfo.joinedTimestamp).toLocaleString()

            let embed = userEmbed(`**${name}**`, `**JOINED: ${joined}**`);
            msg.channel.send(embed);
        } catch(e) {
            console.log(e)
        }
    }
}