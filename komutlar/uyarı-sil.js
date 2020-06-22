const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async(client, message, args) => {
  const yetkiyok = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`<a:uyari:659786593862680580>  **Yeterli Yetkiye Sahip Değilsin**`, message.author.avatarURL)
  
  if (!message.member.hasPermission ("ADMINISTRATOR"))
    return message.channel.send(yetkiyok).then(m => m.delete(10000));
  
const kisiyok = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bir Kişiyi Etiketlemelisin`, message.author.avatarURL)
  
  var kisi = message.mentions.users.first()
  
  if (!kisi)
    return message.channel.send(kisiyok)
  
  const uyarisiyok = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Bu Kullanıcının Hiç Uyarısı Yok`, kisi.avatarURL)
  
  const tamamdir = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`Başarıyla Kullanıcının Uyarısı Silindi`, kisi.avatarURL)
  
  let tm = await db.get(`uyarı.${kisi.id+message.guild.id}`)
  if (!tm || tm == 0) return message.channel.send(uyarisiyok)
  
  await db.add(`uyarı.${kisi.id+message.guild.id}`, -1)
  message.channel.send(tamamdir)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["uyarı-sil"],
  perm: 0
}

exports.help = {
  name: "Uyarı Sil",
  description: "Kişinin İstediğiniz Kadar Uyarısını Siler",
  usage: "/uyarı-sil @Kişi Miktar"
}