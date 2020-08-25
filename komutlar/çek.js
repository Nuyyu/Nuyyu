const Discord = require("discord.js");

exports.run = async (client, msg, args ) => {
  let seslikanal = msg.member.voice.channel.id
  let seslikanal1 = msg.member.voice.channel
  let kullanıcı = msg.mentions.members.first()
  let kullanıcıkanal = kullanıcı.voice.channel
  if(!seslikanal) return msg.channel.send("Bir Sesli Kanalda Değilsin!")
  if(kullanıcı.id == msg.member.id) return msg.channel.send("Kendini Çekemezsin!")
  if(!args[0]) return msg.channel.send("Birini Etiketlemelisin!")
  if(!kullanıcıkanal) return msg.channel.send("Etiketlediğin Kullanıcı Sesli Kanalda Değil!")

  if(kullanıcıkanal) {
  kullanıcı.voice.channelset(seslikanal)
  msg.channel.send(`> ${kullanıcı} Başarıyla **${kullanıcıkanal}** Kanalından **${seslikanal1}** Kanalına Çektim!`)}}

exports.ayar = {
  komut: "çek",
  aktif: true,
  sunucu: true,
  yetki: 1,
  yan: ["move","ç"],
  kategori: "Yetkili",
  kullan: "ç [@etiket]",
  bilgi: "Olduğunuz odaya Etiketlediğiniz kişiyi çeker"
}
