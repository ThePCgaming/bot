const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const PREFIX = "/";
const EVERYONE = "@";
const token = "NDA3MjE4Nzg5NTE2NTc0NzMw.DWSh7A.akfUAp4rbym4u9iTMLJCgQ7Pi5E";
const YouTube = require("simple-youtube-api");
var prefix = "/";
var client = new Discord.Client();
var resultOpts = ["Result", "Exact result", "Decimal approximation"];


const queue = new Map();

function generateHex() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function () {
  bot.user.setGame("Sysy'Bot | /help |", "https://www.twitch.tv/rien")

    
    bot.user.setUsername("Sysy'bot | V1")
    
    console.log("Sysy'Bot - Connecté");
        
});

bot.login("NDA3MjE4Nzg5NTE2NTc0NzMw.DWSh7A.akfUAp4rbym4u9iTMLJCgQ7Pi5E");
client.on("guildMemberAdd", member => {
const channel = member.guild.channels.find('name', 'tuto-bot');
if(!channel) {
return;
}
channel.send(`${member.user.username} a rejoint 
${member.guild.name}`);
});
client.on("guildMemberRemove", member => {
const channel = member.guild.channels.find('name', 'tuto-bot');
if(!channel) {
return;
}
channel.send(`${member.user.username} a quitté 
${member.guild.name}`);
});
client.on("messageDelete",  function(message) {
if(!message.author.bot){
if(message.guild){
const channel = message.guild.channels.find('name', 'tuto-bot');
if(!channel) {
return;
}
channel.send(`message by ${message.member.user.username} deleted in 
${message.channel.name}: ${message.content}`);
}}
});
client.on("messageUpdate",  (message, oldMessage, newMessage) =>  {
if(!message.author.bot){
if(message.guild){
const channel = message.guild.channels.find('name', 'tuto-bot');
if(!channel) {
return;
}
channel.send(`message by ${message.author.username} a edité
${message.content} à ${oldMessage}`);
}}
});

 client.on('message', message => {


   if (message.content.startsWith(prefix + "logout")) {

     if(message.author.id == "290104203026628619"){

      message.reply("Arrêt en cour");

        console.log('/ Je suis désormais offline / ');

        client.destroy();

        process.exit()

    } else {

      message.channel.send("**Erreur** ! Tu n'es pas l'owner")

    }
  }


const fs = require("fs");
var msg = message;

let afk = JSON.parse(fs.readFileSync("/sdcard/Alarms/afks.json", "utf8"));
if (message.content.startsWith(prefix + "remafk")){
if (afk[msg.author.id]) {
delete afk[msg.author.id];
if (msg.member.nickname === null) {
msg.channel.send(" re, j'ai enlever votre afk ^^");
}else{
msg.channel.send(" re, j'ai enlever votre afk ^^");
}
fs.writeFile("/sdcard/Alarms/afks.json", JSON.stringify(afk), (err) => { if (err) console.error(err);});
}else{
msg.channel.send("Erreur ! Tu es déjà afk");
}
}


if (msg.content.startsWith(prefix + "afk")||msg.content === prefix + "afk") {
if (afk[msg.author.id]) {
return message.channel.send("Erreur ! Tu es déjà afk -_-");
}else{
let args1 = msg.content.split(" ").slice(1);
if (args1.length === 0) {
afk[msg.author.id] = {"reason" : true};
msg.delete();
msg.channel.send(`tu es désormais afk, met **${prefix}remafk** pour enlever ton afk`).then(x => DeleteQueue.add(x, 10000));
}else{
afk[msg.author.id] = {"reason" : args1.join(" ")};
msg.delete();
msg.channel.send(`tu es désormais afk, met **${prefix}remafk** pour enlever ton afk`).then(x => DeleteQueue.add(x, 10000));
}
fs.writeFile("/sdcard/Alarms/afks.json", JSON.stringify(afk), (err) => { if (err) console.error(err);});
}
}
    
    var mentionned = message.mentions.users.first();
if(msg.mentions.users.size > 0) {
if (afk[msg.mentions.users.first().id]) {
if (afk[msg.mentions.users.first().id].reason === true) {
message.channel.send(`@${mentionned.username} is AFK: pas de raison`);
}else{
message.channel.send(`@${mentionned.username} is AFK: ${afk[msg.mentions.users.first().id].reason}`);
}
}
}

if(message.content.startsWith(prefix + "test")){

(async function() {

 const mainMessage = await message.channel.send("Test des réactions:\n **Page.1**");

await mainMessage.react("◀");
await mainMessage.react("▶");
await mainMessage.react("🛑");

const panier = mainMessage.createReactionCollector((reaction, user) => user.id === message.author.id);
 
panier.on('collect', async(reaction) => 
{
 if (reaction.emoji.name === "◀") {

mainMessage.edit("Test des réactions:\n **Page.1**");

 }
if (reaction.emoji.name === "▶") {

mainMessage.edit("Test des réactions:\n **Page.2**");
 
}
if (reaction.emoji.name === "🛑") {

mainMessage.delete()

 }

 await reaction.remove(message.author.id);

});
 }());
}

});



var SysyRandomMessage = [
					"Sysy la meilleur",
					"Sysy le S",
];

 
bot.on("message", function(message) {
								if (message.content === 'Cc') {
								
												message.reply('Bonjour')
												
												}
								if	 (message.content === 'Cv') {
								
												message.reply('oui , toujour car je suis un robot')
												}
								if(message.content === 'genial le bot') {
            message.channel.sendMessage("Merci, c'est ThePCgamig, mon créateur qui m'a développé ! :D")
        }
        if (message.content === "!roll") {
  		var result = Math.floor((Math.random() * 100) + 1);
  		message.reply(message, "You rolled a: " + result);
    }
       if(message.content === 'Fuze') {
       			message.channel.sendMessage(SysyRandomMessage[Math.floor(Math.random() * SysyRandomMessage.length)]);
            message.delete();
        }
        if(message.content === 'ThePCgaming') {
            message.reply("On ne juge pas mon créateur! :o")
        }
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

    var roleJoueur= member.guild.roles.find("name", "Membres")
    
    var roleMute = member.guild.roles.find("name", " Mute")
    
    var modlog = member.guild.channels.find("name", "log")
    

    
    var user = message.mentions.users.first();
    
    const serverQueue = queue.get(message.guild.id);

    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    
    switch (args[0].toLowerCase()) {
        case "membres":
            message.reply("Nous sommes " + (bot.users.size - 5) + " membres sur le discord !");
        break;
        case "mute":
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu n'as pas la permission.");
        if(!modlog) return message.reply("Je ne trouve pas de channel mod-log.");  
        let time = parseInt(args2[1]) * 60000;
        if(!time) return message.reply("Tu as oublier de mettre le  temps.")
        if (!reasontimed) return message.reply("Tu as oublier de mettre la raison.")
        var member = message.mentions.members.first();
        if (message.mentions.users.size < 1) return message.reply("Tu as oublié de mettre qui je dois Mute.")
        message.channel.sendMessage(member.toString() + " a bien été mute. ")
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
        
            case "help":
            var embed = new Discord.RichEmbed()
            .addField("/ban", "Cette commande permet de bannir un utilisateur ! Pour l'utiliser, faites /ban @(utilisateur) (raison)")
                .addField("/kick", "Cette commande permet de kick un utilisateur ! Pour l'utiliser, faites /kick @(utilisateur) (raison)")
                .addField("/clear", "Cette commande permet de supprimé des messages beaucoup plus rapidement ! Pour l'utiliser, faites /clear (nombredemessages)")
                .addField("/mute", "Cette commande permet de muté un utilisateur pendant un certain temps. Pour l'utiliser, faites /mute @(utilisateur) (temps) (raison)")
                .addField("/unmute", "Cette commande permet d'unmute un utilisateur. Pour l'utiliser, faites /unmute @(utilisateur)")
                .addField("/ping", "Grâce à cette commande, tu pourras savoir ton ping !")            
                .addField("/userinfo", "Informations sur un utilisateur ! /userinfo @(utilisateur)")
                .addField("/serverinfo", "Informations sur le serveur !")

                .setColor("#01A9DB")
                .setFooter("Idée de commande propose en MP à ThePCgaming")
                .setAuthor(message.author.username, message.author.avatarURL)
                .setDescription("Voici les commandes du bot")
                .setTimestamp()
                message.delete()
                message.author.send(embed);
                message.channel.send(message.author.toString() + " je t'ai envoyé les commandes en mp !")
            break;
            case "unmute":
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu n'a pas la permission de unmute ");
        if(!modlog) return message.reply("Je ne trouve pas de channel log.");
        var member = message.mentions.members.first();
        if (message.mentions.users.size < 1) return message.reply("Tu a oublier de mettre à qui j'enleve le mute")
        member.removeRole(roleMute)
        message.channel.sendMessage(user.toString() + " a bien été unmute ")
        
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
            case "grade":
            var embed = new Discord.RichEmbed()
                
                .addField("Owner", "Grade réservé aux créateur du server discord")
                .addField("Amis", "Grade est reserve a se qui modere")
                .addField("Membre", "Grade de base, tout le monde l'a ! Même Cookiz :o !")
                .setColor("##01A9DB")
                .setDescription("Voici les grades disponible sur ce discord **POUR LE MOMENT**.")
                .setColor("#01A9DB")
                message.delete()
                if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            message.channel.sendEmbed(embed);
            break;

        case "kick":
            if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.sendMessage("Tu n'a pas la permission de kick.");
            if(!modlog) return message.reply("Je ne trouve pas de channel log.");
            if (reason.length < 1) return message.reply("Tu as oublié de mettre la raison.");
            if (message.mentions.users.size < 1) return message.reply("Tu n'as pas mis son pseudo au complet")
            message.guild.member(user).kick();
            message.channel.send(user.toString() + " a bien été kick ")

            var embed = new Discord.RichEmbed()
            .addField("Commande :", "KICK")
            .addField("Utilisateur :", user.username)
            .addField("Modérateur :", message.author.username)
            .addField("Raison : ", reason)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#01A9DB")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            member.guild.channels.find("name", "log").sendEmbed(embed);381242462053728267
            bot.channels.get('373240336169828353').sendMessage("Le joueur " + user.username + " à bien été kick pour: " + reason);
       
            message.delete();
            break;
        case "ban":
            if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            if(!modlog) return message.reply("Je ne trouve pas de channel log.");
            if (reason.length < 1) return message.reply("Tu as oublié la raison.");
            if (message.mentions.users.size < 1) return message.reply("Tu as oublié de préciser qui je dois bannir..")
            
            message.guild.ban(user, 2);
            message.channel.send(user.toString() + " a bien été banni")

            var embed = new Discord.RichEmbed()
            .addField("Commande :", "BAN")
            .addField("Utilisateur :", user.username)
            .addField("Modérateur :", message.author.username)
            .addField("Raison : ", reason)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#01A9DB")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            member.guild.channels.find("name", "log").sendEmbed(embed);
            
            bot.channels.get('373240336169828353').sendMessage(" Le joueur " + user.username + " à bien été kick pour: " + reason);
            
            message.delete();
            break;
        case "clear":
            if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            var messagecount = parseInt(args2.join(" "));
            if(!messagecount) return message.channel.send("Tu dois mettre un certain nombre de messages.")
            message.channel.fetchMessages({
                limit: messagecount
            }).then(messages => message.channel.bulkDelete(messagecount));
                        message.delete()
            var embed = new Discord.RichEmbed()
            .addField("Commande :", "CLEAR")
            .addField("Modérateur :", message.author.username)
            .addField("Message supprimé", messagecount)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#01A9DB")
            .setFooter("Ouf ! Sa as fait un bon ménage dans le channel ! ^^")
            message.delete()
            member.guild.channels.find("name", "log").sendEmbed(embed);
            break;


       
       
       case "twitter":
       message.reply('Voici le compte twitter de Fuze : https://twitter.com/FuzeIII?s=09) et celui de Paladium : https://twitter.com/PaladiumPVP?s=09');
       message.delete();
       break;
       
       case "mod":
       message.reply("Pala'Mod");
       message.delete();
       break;


       case "ping":
        message.channel.sendMessage("Tu as actuellement `" + bot.ping + " ms ");
        message.delete();
        break;
         
         
            case "serverinfo":
            var embed = new Discord.RichEmbed()
            .setAuthor("informations sur le serveur " + message.guild.name)
            .setThumbnail(message.guild.iconURL)
            .setFooter(message.guild.owner.user.tag, message.guild.owner.user.avatarURL)
            .addField("Membres", message.guild.memberCount)
            .addField("Channels", message.guild.channels.filter(chan => chan.type === "voice").size + " channels vocaux " + message.guild.channels.filter(chan => chan.type === "text").size + " channels textuels")
            .addField("Roles", message.guild.roles.map(role => role.name).join(", "))
            message.channel.sendEmbed(embed)
            break;
            case "userinfo":
            if (message.mentions.users.size < 1) return message.reply("Tu as oublié de préciser de qui je dois montrer les informations.")
            var embed = new Discord.RichEmbed()
                .addField("Pseudo", user.username)
                .addField("Ashtag", user.discriminator)
                .addField("ID", user.id)
                .addField("Compte créer le", user.createdAt)
                .setThumbnail(user.avatarURL)
                .setColor(0xff80ff)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setFooter("Voilà.", message.author.avatarURL)
                .setTimestamp()
            message.channel.sendEmbed(embed);
            break;
            
               
            
            
            
            /* Pariel */
            
            
            
            
            
            
            message.channel.sendMessage("Commande invalide ^^ Fait /help pour voir toutes les commandes disponibles !")
    }
    
});

client.login(token)







