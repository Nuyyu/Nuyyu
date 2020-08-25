const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  let log = '659776874443964432'
  let user = message.mentions.users.first() 
  let sebep = args.slice(1).join(' ')
  if(!(user||sebep)) return message.reply('Yanlış kullanım! **Kullanıcı veya Sebep Belirtmeyi Unuttun**!')
  let uyarısayı = await db.fetch(`Uyarı.${user.id}`)
  db.add(`Uyarı-${user.id}`,1)
const uyar = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Sunucudan Biri Uyarıldı!")
  .addField(`Uyarılan Kişi`, `${user}`, true)
  .addField(`Uyaran Kişi`, `${message.author}`, true)
  .addField(`Sebep`, `${sebep}`)
  .setFooter(`Uyarı Sayısı: ${uyarısayı}`)
message.channel.send(uyar); message.guild.channels.cache.get(log).send(uyar); user.send(uyar)
if(uyarısayı >= 5) {message.reply(`Kullanıcıya özel bir Ceza vermenin vakti geldi! Çünkü 5.uyarısı Oldu!`); db.delete(`Uyarı-${user.id}`)}}

exports.ayar = {
  komut: 'uyar',
  aktif: true,
  sunucu: true,
  yetki: 1,
  yan: ["uyar", "warn", "uyarı"],
  kategori: 'Yetkili',
  kullan: 'uyar [@Kişi] [Sebep]',
  bilgi: 'Belirlediğiniz kişiyi belirli sebeple Uyarır'
}