const embed = require("../utils/embed");

module.exports = {
    name: "help",
    execute(msg, args) {
        const fields = [
            {
                name: "Get a list of all the commands",
                value: "\`\`\`!help\`\`\`",
                inline: true
            },
            {
                name: "Get a list of all the commands",
                value: "\`\`\`!help\`\`\`",
                inline: true
            },            {
                name: "Get a list of all the commands",
                value: "\`\`\`!help\`\`\`",
                inline: true
            },
            {
                name: "Get a list of all the commands",
                value: "\`\`\`!help\`\`\`",
                inline: true
            },
        ]
        const newEmbed = embed("Help", fields)
        msg.channel.send(newEmbed)
    }
}