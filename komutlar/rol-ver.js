const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let rol = message.mentions.roles.first();
  let user = message.mentions.members.first();

  if (!user) return message.reply("**⚠ Rol Vermek İstediğin Kişiyi Yazmalısın!**")
  if (rol.length < 1) return message.reply("**⚠ Bir Rol Yazmalısın!**");

  user.roles.add(rol);
  message.channel.send(new Discord.MessageEmbed()
    .setColor("RANDOM").setTimestamp()
    .setDescription(`✅Başarıyla ${user} İsimli Kullanıcıya ${rol} İsimli Rol Verildi!`)
    .setFooter(message.guild.name, message.guild.iconURL))};

exports.ayar = {
komut: 'rol-ver',
aktif: true,
sunucu: true,
yetki: 4,
yan: ['rol-ver'],
kategori: 'Yetkili',
kullan: 'rolde [@rol]',
bilgi: 'Etiketlenen Roldeki üyeleri gösterir'
}
