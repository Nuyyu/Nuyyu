const Discord = require('discord.js');

exports.run = function(client, message, args) {
  Math.floor();
 Math.round(client.ping)
var ping = Date.now() - message.createdTimestamp + " MS";

  const gecikme = new Discord.MessageEmbed()
    .addField(`** Bot Lokasyonu:**`, `🇹🇷 Avrupa`)
    .addField(`** Bot Gecikme Süresi: **`, `${client.ping} MS`)
    .addField(`** Mesaj Gecikme Süresi: **`, `${ping}`)
    .addField(`** Uptime Süresi:**`, `${client.uptime} MS`)
    .setColor("2D2D2D")
    .setAuthor(client.user.username, client.user.avatarURL)
  message.channel.send(gecikme);
  message.delete();
};

exports.ayar = {
  komut: 'ping',
  aktif: true,
  sunucu: false,
  yetki: 0,
  yan: ['gecikme'],
  kategori: 'Kullanıcı',
  kullan: 'ping',
  bilgi: 'Botun anlık gecikmesini gösterir'
}
