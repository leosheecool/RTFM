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
            message.reply("RTFM FDP");
            console.log("RTM FDP");
        }
    }
    if (message.content.includes('man léo') || message.content.includes('man leo') || message.content.includes('qui est Léo ?'))
    {
        message.reply("Léo est un dieu");
        console.log("Léo le dieu");
    }
    if (message.content.includes('man alexandre') || message.content.includes('man alex'))
    {
        message.reply("Alexandre est un gros batard");
        console.log("alex la sous merde");
    }
    if (message.content.includes('man slohan'))
    {
        message.reply("le maitre de la mémoire");
        console.log("slohan")
    }
    if (message.content.includes('man yohann'))
    {
        message.reply("le maitre de la moulinette");
        console.log("yohann AS");
    }
    if (message.content.includes('man yoan'))
    {
        message.reply("L'homme aux 1000 stickers");
        console.log("yoan");
    }
    if (message.content.includes('man oscar'))
    {
        message.reply("Le mangeur de kebabs");
        console.log("Oscar");
    }
    if (message.content.includes('man clement'))
    {
        message.reply("ne te fie pas à son gabbari il vient du 91 il sait se bagarrer");
        console.log("clement")
    }
    if (message.content.includes('man jerome'))
    {
        message.reply("ses parents sont traiteurs");
        console.log("nems")
    }
    if (message.content.includes('man angelina'))
    {
        message.reply("aka la meuf qui mange par la pensée");
        console.log("angie");
    }
    if (message.content.includes('man matthieu'))
    {
        message.reply("le bon");
        console.log("matthieu le vrai");
    }
    if (message.content.includes('man Matthieu lunettes'))
    {
        message.reply("le mauvais");
        console.log("matthieu le faux");
    }
    if (message.content.includes('RTFM') && message.content.includes('batard') || message.content.includes('RTFM') && message.content.includes('suce'))
    {
        message.reply("ntm");
    }
    if (message.content.includes('man mathis'))
    {
        message.reply("le male alpha bresilien");
    }
    if (message.content.includes('man tamere'))
    {
        message.reply("on avait dit pas les mamans");
    }
    if (message.content.includes('man toto'))
    {
        message.reply("chloe devoyod sors de ce corps")
    }
    if (message.content.includes('man dominos pizza') || message.content.includes("man dominos"))
    {
        message.reply("Lundi et jeudi electriques !!! \nDominos Pizza Villejuif vous propose les pizzas medium, incontournables et supremes en livraison a 7€ au lieu de 13€ et 14€ \nCode promo : 2054 \nOffre valable le lundi 15 octobre \ndominos.fr \n0141651515")
    }
    if (message.content.includes('man 10h30'))
    {
        message.reply("go manger les gars");
    }
})