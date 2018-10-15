const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on('ready', () => {
    console.log("Bot Ready");
})

bot.login('NDk1MjE5NTgxNzUzODg0Njky.DqSmCQ.TnrytIAD-gtLDAqSygcAC9fq3Jc');

const forbidenword = '?';
const forbidenword1 = 'question';
const word = 'Alexandre';

bot.on('message', message => {
    if (message.content.includes('comment') && message.content.includes('?')){
        message.reply("RTFM !");
        console.log('RTFM');
    }
    if (message.content.includes(word)){
        message.reply("alex le fdp");
        console.log("alex fdp");
    }
    if (message.content.charAt(0,1) == '!'){
        if (message.content.includes('help'))
        {
            message.reply("RTFM FDP")
            console.log("RTM FDP")
        }
    }
})