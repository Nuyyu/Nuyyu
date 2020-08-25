const Discord = require('discord.js')

exports.run = (client, msg) => {
msg.channel.send(new Discord.MessageEmbed()
  .setDescription(`${client.emoji.parti} **Sınırsız Davet Linkleri ${client.emoji.parti}**\n
    ${client.emoji.uyar} https://discord.link/SMG ${client.emoji.uyar}
    ${client.emoji.elmas} https://discord.gg/gwr28En ${client.emoji.elmas}
    ${client.emoji.eko} https://www.nonolive.com/36640640 ${client.emoji.eko}`)
  .setThumbnail(client.ayar.logo).setColor('RANDOM'))}

exports.ayar = {
  komut: 'link',
  aktif: true,
  sunucu: false,
  yetki: 0,
  yan: ['davet','linkler','invite','discord'],
  kategori: 'Sunucu',
  kullan: 'linkler',
  bilgi: 'Sunucu ile ilgili linkleri gösterir'
}
