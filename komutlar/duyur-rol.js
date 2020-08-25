const Discord = require("discord.js");

exports.run = async (client, msg, args) => {
  let rol = msg.mentions.roles.first()
    if (!rol) return msg.channel.send(`${client.emoji.hata} Bir rol **etiketler misin?**`)

  let mesaj = args.slice(1).join(" ");
    if (!mesaj) return msg.channel.send(`${client.emoji.hata} Bir mesaj **yazar mısın?**`)

  msg.channel.send(`${client.emoji.onay} Başarıyla \`${rol.id}\` idli rolde olan kişilere Mesaj gönderildi!`)
  msg.guild.roles.cache.get(rol.id).members.map(x => {client.users.cache.get(x.user.id).send(mesaj)})}

exports.ayar = {
  komut: "duyur-rol",
  aktif: true,
  sunucu: false,
  yetki: 4,
  yan: ["duyurrol"],
  kategori: "Özel",
  kullan: "duyur-rol [@rol] [Mesaj]",
  bilgi: "Belirtiğiniz Rolde bulunan bütün üyelere Belirtiğiniz Mesajı Direk Mesaj olarak gönderir",
};
