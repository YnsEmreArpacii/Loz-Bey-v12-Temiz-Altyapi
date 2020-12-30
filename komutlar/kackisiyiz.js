const Discord = require('discord.js');

exports.run = async (client, message) => {
        message.delete()
      message.channel.send("V12 Temiz Altyapı")
  };
  
  exports.conf = {
    enabled: true,

    aliases: ['lozbey'],
    permLevel: 0,
  };
  
  exports.help = {
    name: "lozbey",
    description: "V12 Temiz Altyapı",
    usage: "lozbey",

  };