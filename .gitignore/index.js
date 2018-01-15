const Discord = require("discord.js");
const TOKEN = "NDAyMTM1MjU4NDUzMjQ1OTcz.DT0Vfg.f27ZoaT09EFmF_BAzybTE-d57_o";
const PREFIX = ".";

var client = new Discord.Client();

var bot = new Discord.Client();

var servers = {};


bot.on("ready", function () {
    bot.user.setGame("ZedBot's - .help")
    bot.user.sendMessage("ZedBot's Connecté")
    console.log("Connecté");
});


var zeltiumRandomMessage = [
    "Zeltium, c'est un bogosse !",
    "Zeltium le plus beau !",
    "Zeltium est moins fort que mon créateur :p",
    "Zeltium > PX",
    "Zeltium est tro for",
    "Zeltium cheat",
    "Hier, j'ai ez zeltium dans la rue :o",
    "Zeltium <3",
    "Zeltium est c**, j'ai rien dit, c un bogosse :o",
    "Zeltium t tro bo",
];


bot.on('message', function(message) {

        if(message.content === 'Salut') {
            message.reply('Bonjour')
        }
    
        if(message.content === 'cool le bot') {
            message.channel.sendMessage("Merci, c'est XeCrafT, mon créateur qui m'a développé ! :D")
        }

        if(message.content === 'genial le bot') {
            message.channel.sendMessage("Merci, c'est XeCrafT, mon créateur qui m'a développé ! :D")
        }

        if(message.content === 'Zeltium') {
            message.channel.sendMessage(zeltiumRandomMessage[Math.floor(Math.random() * zeltiumRandomMessage.length)]);
            message.delete();
        }

        if(message.content === 'XeCrafT') {
            message.channel.sendMessage("On ne juge pas mon créateur! :o")
        }

        if(message.content === 'ZLGames') {
            message.channel.sendMessage("Best serveur FR")
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
    
    });

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "bienvenue").sendMessage(member.toString() + " Bienvenue sur le discord de Zeltium ! Passe un bon moment :D");
    member.addRole(member.guild.roles.find("name", "Membres"));
});

bot.on("guildMemberRemove", function(member) {
    member.guild.channels.find("name", "bienvenue").sendMessage(member.toString() + "A quitté le discord !");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split (" ");

    var args2 = message.content.split(" ").slice(1);

    var suffix = args2.join(" ");

    var reason = args.slice(1).join(" ");

    var user = message.mentions.users.first();
    
    var guild = message.guild;
    
    var member = message.member;

    var roleJoueur= member.guild.roles.find("name", "membres")
    
    var roleMute = member.guild.roles.find("name", "Mute")
    
    var modlog = member.guild.channels.find("name", "log")


    switch (args[0].toLowerCase()) {
        case "unmute":
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
        if(!modlog) return message.reply("Je ne trouve pas de channel log.");
        var member = message.mentions.members.first();
        if (message.mentions.users.size < 1) return message.reply("Hum, à quelle personne j'enleve le unmute?")
        member.removeRole(rolemute)
        message.channel.sendMessage("@" + user.username + " a bien été unmute")
        
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
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
        if(!modlog) return message.reply("Je ne trouve pas de channel log.");
        var member = message.mentions.members.first();
        if (message.mentions.users.size < 1) return message.reply("Hum, à quelle personne je met le mute ?")
        member.addRole(roleMute)
        message.channel.sendMessage("@" + user.username + " a bien été mute.")
        
        var embed = new Discord.RichEmbed()
            .addField("Commande :", "MUTE")
        .addField("Utilisateur :", user.username)
        .addField("Modérateur :", message.author.username)
        .addField("Heure:", message.channel.createdAt)
        .setColor("#01A9DB")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTimestamp()
        member.guild.channels.find("name", "log").sendEmbed(embed);
        break;
            
            case "help":
            var embed = new Discord.RichEmbed()
            .addField("/ban", "Cette commande permet de bannir un utilisateur ! Pour l'utiliser, faites /.ban @(utilisateur)")
                .addField(".kick", "Cette commande permet de kick un utilisateur ! Pour l'utiliser, faites /kick @(utilisateur)")
                .addField(".purge", "Cette commande permet de supprimé des messages beaucoup plus rapidement ! Pour l'utiliser, faites /purge (nombredemessages)")
                .addField(".mute", "Cette commande permet de mute un utilisateur. Pour l'utiliser, faites /mute @(utilisateur)")
                .addField(".broadcast", "Cette commande permet d'afficher un message important dans un channel. Pour l'utiliser, faites /broadcast (message)")
                .addField(".unmute", "Cette commande permet d'unmute un utilisateur. Pour l'utiliser, faites /unmute @(utilisateur)")
                .addField(".ping", "Grâce à cette commande, tu pourras savoir ton ping !")
                .addField(".twitter", "Vous donne le twitter de Zeltium !")
                .setColor("#01A9DB")
                .setFooter("Idée de commande ? Proposer en MP!")
                .setAuthor(message.author.username, message.author.avatarURL)
                .setDescription("Voici les commandes du bot !")
                .setTimestamp()
                message.delete()
                message.channel.sendEmbed(embed);
            break;
            case "grade":
            var embed = new Discord.RichEmbed()
                .addField("Fondateur", "Grade réservé aux créateur du discord,")
                .addField("Développeur", "Grade résérvé aux développeurs du discord !")
                .addField("Modérateur(trice)", "Grade résérvé aux modérateurs(trices) qui se charge de surveiller le tchat !")
                .addField("Youtuber(euse)", "Youtubeur(euse) possédant **XXX** abonnés ou plus.")
                .addField("Amis", "Grade résérvé aux amis du staff !")
                .addField("Membres", "Grade de base, tout le monde l'a ! Même Zeltium :o !")
                .setColor("##01A9DB")
                .setDescription("Voici les grades disponible sur ce discord **POUR LE MOMENT**.")
                .setColor("#01A9DB")
                message.delete()
                if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            message.channel.sendEmbed(embed);
            break;
        case "regles":
            var embed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setColor("#01A9DB")
                .setFooter("Respecter les règles est importants pour respecter les autres. Vous voulez un(des) ajout(s) ? Demandez au créateur du bot(XeCrafT) en privée !")
                .setTimestamp()
                .setDescription("Règles du discord de Zeltium.")
                message.delete()
                if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            message.channel.sendEmbed(embed);
            break;
        case "broadcast":
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            message.channel.sendMessage(suffix)
            message.delete();
            console.log(suffix)
            break;
        case "kick":
            if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            if(!modlog) return message.reply("Je ne trouve pas de channel log.");
            if (message.mentions.users.size < 1) return message.reply("Tu as oublié de préciser qui je dois kick..")
            message.guild.member(user).kick();

            var embed = new Discord.RichEmbed()
            .addField("Commande :", "KICK")
            .addField("Utilisateur :", user.username)
            .addField("Modérateur :", message.author.username)
             .addField("Heure:", message.channel.createdAt)
            .setColor("#01A9DB")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            member.guild.channels.find("name", "log").sendEmbed(embed);
            message.react(":poop:")
            message.delete();
            break;
        case "ban":
            if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            if(!modlog) return message.reply("Je ne trouve pas de channel log.");
            if (message.mentions.users.size < 1) return message.reply("Tu as oublié de préciser qui je dois bannir..")
            message.guild.ban(user, 2);

            var embed = new Discord.RichEmbed()
            .addField("Commande :", "BAN")
            .addField("Utilisateur :", user.username)
            .addField("Modérateur :", message.author.username)
             .addField("Heure:", message.channel.createdAt)
            .setColor("#01A9DB")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            member.guild.channels.find("name", "log").sendEmbed(embed);
            message.delete();
            break;
        case "purge":
            if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            var messagecount = parseInt(args2.join(" "));
            message.channel.fetchMessages({
                limit: messagecount
            }).then(messages => message.channel.bulkDelete(messagecount));
                        message.delete()
            var embed = new Discord.RichEmbed()
            .addField("Commande :", "PURGE")
            .addField("Modérateur :", message.author.username)
            .addField("Message supprimé", messagecount)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#01A9DB")
            .setFooter("Ouf ! Sa as fait un bon ménage dans le channel ! ^^")
            message.delete()
            member.guild.channels.find("name", "log").sendEmbed(embed);
            break;;

       case "twitter":
       message.reply('Voici le compte twitter du jeu: https://twitter.com/ZeltiumLeS');
       message.delete();
       break;
       
       case "ping":
       message.reply('Pong ! ' + "**" + message.createdTimestamp + "**" + ' ms. **');
       message.delete();
       break; 

       case "Zeltium":
       message.channel.sendMessage(zeltiumRandomMessage[Math.floor(Math.random() * zeltiumRandomMessage.length)]);
       message.delete();
       break;


            default:
            message.channel.sendMessage("Commande invalide ^^ Fait **.help** pour voir toutes les commandes disponible !")
    }
});
