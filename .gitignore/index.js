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
