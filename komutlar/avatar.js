const Discord = require("discord.js")

exports.run = async(client, msg) => {
  let user = msg.mentions.users.first()
  msg.channel.send(new Discord.MessageEmbed()
    .setTitle(`İşte Avatar!`).setColor(`RANDOM`)
    .setImage(msg.author.displayAvatarURL()))};

exports.ayar = {
  komut: "avatar",
  aktif: true,
  sunucu: true,
  yetki: 0,
  yan: ["pp"],
  kategori: "Kullanıcı",
  kullan: "avatar",
  bilgi: "Avatarınızı gösterir",
};
