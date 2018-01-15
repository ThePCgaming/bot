 const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on("ready", () => {
bot.user.setGame("Etre developper");
console.log("Bot Ready !");
});

bot.login("NDAyMTM1MjU4NDUzMjQ1OTcz.DT0Vfg.f27ZoaT09EFmF_BAzybTE-d57_o");

bot.on('message' , message => {
if (message.content === "Cree"){
    message.reply("par ThePCgaming");
    console.log("Cree par ThePCgaming");
}
});


const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const PREFIX = "z!";
const EVERYONE = "@";
const YouTube = require("simple-youtube-api")

var client = new Discord.Client();

const youtube = new YouTube("AIzaSyDE684AY4Th50yKvN7lZ9GroJiFvF5yjy8");

const queue = new Map();

function generateHex() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function () {
  bot.user.setGame("Zelki'Bot | z!help | " + (bot.users.size - 5) + " Membres !", "https://www.twitch.tv/zelkibot")

    
    bot.user.setUsername("Zelki'Bot | V2")
    console.log("*``*___*``*");
    console.log("Zelki'Bot - Connecté");
        console.log("*``*___*``*");
});


var zelkiaxRandomMessage = [
    "Zelkiax, c'est un bogosse !",
    "Zelkiax le plus beau !",
    "Zelkiax est moins fort que mon créateur :p",
    "Zelkiax > PX",
    "Zelkiax est tro for",
    "Zelkiax cheat",
    "Hier, j'ai ez Zelkiax dans la rue :o",
    "Zelkiax <3",
    "Zelkiax est c**, j'ai rien dit, c un bogosse :o",
    "Zelkiax t tro bo",
    "Zelkiax > Lounaaa"
];

var wordRandomMessage = [
    " un animal XD",
    " un fruit o_o",
    " Zelkiax MDR",
    " ma mè.. Oups, c'est vrai, je n'ai pas de mère je suis un robot!",
    " un sport",
    " une musique",
    " mes créateurs ! :3"
    ];


var lounaaaRandomMessage = [
    "Lounaaa, la plus grande designeuse",
    "Je suis plus fort en gfx que Lounaa",
    "Lounaaa > Zelkiax",
    "Wallah tu huzuni toi",
    "Lounaaa stop cheat plz",
    "Go duel HikaBrain, j'suis sur que j'te 5-0",
    "Fait moi 24 Renders, 6 Miniatures et 28 Bannières plzz"
];

var randomMusicRadio = [
    "https://www.youtube.com/watch?v=MXzfG_Id0SU",
    "https://www.youtube.com/watch?v=fDBiG9rwRKM",
    "https://www.youtube.com/watch?v=dpmmOZDdUec",
    "https://www.youtube.com/watch?v=ezAPaI-sD8s",
    "https://www.youtube.com/watch?v=rldeeWjsxrE",
    "https://www.youtube.com/watch?v=2C5CjxbFzt4",
    "https://www.youtube.com/watch?v=2048Nr6aLiQ",
    "https://www.youtube.com/watch?v=g4wkOyOMe4Y",
    "https://www.youtube.com/watch?v=dT2owtxkU8k",
    "https://www.youtube.com/watch?v=u2UJSF8Yy6w",
    "https://www.youtube.com/watch?v=3tmd-ClpJxA",
    "https://www.youtube.com/watch?v=ClU3fctbGls",
    "https://www.youtube.com/watch?v=J_ub7Etch2U",
    "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
    "https://www.youtube.com/watch?v=qN4ooNx77u0",
    "https://www.youtube.com/watch?v=PVjiKRfKpPI",
    "https://www.youtube.com/watch?v=7wtfhZwyrcc"
];



bot.on('message', function(message) {

        if(message.content === 'Salut') {
            message.reply('Bonjour')
        }

        if(message.content === 'Salut') {
            message.reply('Bonjour')
        }

        if(message.content === 'cool le bot') {
            message.channel.sendMessage("Merci, c'est XeCrafT et Azecko, mes créateurs qui m'ont développés ! :D")
        }

        if(message.content === 'genial le bot') {
            message.channel.sendMessage("Merci, c'est XeCrafT et Azecko, mes créateurs qui m'ont développés ! :D")
        }

        if(message.content === 'Zelkiax') {
            message.channel.sendMessage(zelkiaxRandomMessage[Math.floor(Math.random() * zelkiaxRandomMessage.length)]);
            message.delete();
        }
            if(message.content === 'Azecko') {
            message.channel.sendMessage("Azecko, il est grave bo ^^")
            message.delete();
        }
    
         if(message.content === 'azecko') {
            message.channel.sendMessage("Azecko, il est grave bo ^^")
            message.delete();
         }
    
        if(message.content === 'Lounaaa') {
            message.channel.sendMessage(lounaaaRandomMessage[Math.floor(Math.random() * lounaaaRandomMessage.length)]);
            message.delete();
        }

        if(message.content === 'XeCrafT') {
            message.channel.sendMessage("On ne juge pas un développeur! :o")
        }
    
        if(message.content === 'mod') {
            message.channel.sendMessage("Zelki'Mod")
        }
    
            if(message.content === 'xecraft') {
            message.channel.sendMessage("On ne juge pas un développeur! :o")
        }
        
        if(message.content === 'sa va') {
            message.channel.sendMessage("Je vais toujours bien, je suis un robot!")
        }

        if(message.content === 'salut') {
            message.channel.sendMessage('Bonjour')
        }
        if(message.content === 'Qui est la') {
            message.channel.sendMessage("MOIII")
        }
        if(message.content === 'Bye') {
            message.channel.sendMessage('À Bientôt ! ^^')
        }
        if(message.content === 'bye') {
            message.channel.sendMessage('À Bientôt ! ^^')
        }
        if(message.content === 'wsh') {
            message.channel.sendMessage('wshh frr')
        }
    
                if(message.content === 'Vrai') {
            message.reply("Mauvaise réponse !");
            message.delete();
            }
                                
           if(message.content === 'Faux') {
            message.reply("Bonne réponse !");
            message.delete();
            }  
    
    });

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "principal").sendMessage(member.toString() + " Bienvenue sur le discord de **Zelkiax** ! :white_check_mark: -  N'hésite pas à faire la commande z!help :D");
    member.addRole(member.guild.roles.find("name", "» ✔ Subs ✔ ●"));
    bot.user.setGame("Zelki'Bot | z!help | " + bot.users.size + " Membres !", "https://www.twitch.tv/zelkiax")
});

bot.on("guildMemberRemove", function(member) {
    bot.user.setGame("Zelki'Bot | z!help | " + bot.users.size + " Membres !", "https://www.twitch.tv/zelkiax")
});


bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split (" ");

    var args2 = message.content.split(" ").slice(1);

    var suffix = args2.join(" ");

    var reason = args2.slice(1).join(" ");
    
    var reasontimed = args2.slice(2).join(' ')


    var user = message.mentions.users.first();
    
    var guild = message.guild;
    
    var member = message.member;

    var roleJoueur= member.guild.roles.find("name", "membres")
    
    var roleMute = member.guild.roles.find("name", "»  ⌛ Mega' Mute [S]")
    
    var modlog = member.guild.channels.find("name", "log")
    
    var botsalon = member.guild.channels.find("name", "discussion-bot")
    
    var botsalon2 = member.guild.channels.find("name", "bot-staff")
    
    var user = message.mentions.users.first();
    
    const serverQueue = queue.get(message.guild.id);

    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';

    if(!message.channel.id === botsalon) return message.channel.sendMessage("Cette commande ne peut être utilisé uniquement en " + botsalon.toString() + " :negative_squared_cross_mark:");
    
    switch (args[0].toLowerCase()) {
        case "membres":
            message.reply("Nous sommes " + (bot.users.size - 5) + " membres sur le discord !");
        break
        case "unmute":
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
        if(!modlog) return message.reply("Je ne trouve pas de channel log.");
        var member = message.mentions.members.first();
        if (message.mentions.users.size < 1) return message.reply("Hum, à quelle personne j'enleve le unmute?")
        member.removeRole(roleMute)
        message.channel.sendMessage(user.toString() + " a bien été unmute ✅")
        
        var embed = new Discord.RichEmbed()
        .addField("Commande :", "UNMUTE")
        .addField("Utilisateur :", user.username)
        .addField("Modérateur :", message.author.username)
        .addField("Heure:", message.channel.createdAt)
        .setColor("#01A9DB")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTimestamp()
        member.guild.channels.find("name", "log").sendEmbed(embed);
        break;
        case "mute":
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu n'as pas la permission.");
        if(!modlog) return message.reply("Je ne trouve pas de channel mod-log.");  
        let time = parseInt(args2[1]) * 60000;
        if(!time) return message.reply("Tu as oublié le temps.")
        if (!reasontimed) return message.reply("Tu as oublié la raison.")
        var member = message.mentions.members.first();
        if (message.mentions.users.size < 1) return message.reply("Tu as oublié de préciser qui je dois Mute.")
        message.channel.sendMessage(member.toString() + " a bien été mute. ✅")
        member.addRole(roleMute)
        setTimeout(() => { member.removeRole(roleMute); }, time);

        var embed = new Discord.RichEmbed()
        .addField("Action :", "Mute")
        .addField("Utilisateur :", user.toString())
        .addField("Modérateur :", message.author.toString())
        .addField("Raison :", reasontimed)
        .addField("Temps :", args2[1] + " minute(s)")
        .setColor(0x808000)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTimestamp()
        member.guild.channels.find("name", "log").sendEmbed(embed);
        break;
