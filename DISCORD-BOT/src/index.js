const Discord = require('discord.js');

const bot = new Discord.Client();

// Defining a list of commands
const commands = {
    "!help": {
        execute: (message) => {
            message.reply("This is a help command.");
        }
    },
    // add as many commands as you want here...
};

bot.on('ready', () => {
    console.log(`Bot is ready as: ${bot.user.tag}`);
});

bot.on('message', async (msg) => {
    if (!msg.content.startsWith("!")) return; // if the message doesn't start with "!", ignore it

    let command = msg.content.split(" ")[0]; // split the message into words and take the first one (the command)

    if (command in commands) { // if this is a known command
        commands[command].execute(msg); // run the execute function for this command, passing the message as a parameter
    }
});

bot.login(Token.env); // log the bot in using the token