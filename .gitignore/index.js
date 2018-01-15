const Commando = require('discord.js-commando');
const bot = new Commando.Client();

bot.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

bot.login('NDAyMTM1MjU4NDUzMjQ1OTcz.DT0Vfg.f27ZoaT09EFmF_BAzybTE-d57_o');


bot.registry.registerGroup('random', 'Random')
bot.registry.registerCommandsIn(__dirname + "/commands");
bot.registry.registryDefaults();
