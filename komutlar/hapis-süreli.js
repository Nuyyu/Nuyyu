const Discord = require("discord.js");
const ms = require("ms");
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
let botisim = message.guild.members.cache.get(client.user.id).displayName
let rol = await (message.guild.roles.cache.get('686027219067207718')) //rol
let yetkili = await (message.guild.roles.cache.get('689609228905611425')) //yetkili
let kanal = await (message.guild.channels.cache.get('9776874443964432')) //kanal

  if (!message.member.roles.cache.has(`689609228905611425`)) return message.channel.send(`**${process.env}jail** isimli komutu kullanabilmek için Yetkili rolüne sahip olman gerekiyor.`)
  let kişi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(kişi.roles.cache.has('662991967596052496')) return message.reply("__Bu kişi Jaile atılamaz__");
  
  let zaman = args[1]
  if(!args[1]) return message.channel.send(`Ne kadar süre jailde duracağını belirtmelisin.\nÖrnek: +jail kişi süre sebep`)

let sebep = args.join(' ').slice(args[1].length+args[0].length + 1)
if(!sebep) sebep = 'Sebep belirtilmemiş.'
  
  const wasted = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setColor(`#f3c7e1`)
  .setDescription(`Al işte! Yine biri hapishaneye yollandı.`)
  .addField(`**Hapishaneye yollanan kişi:**`, kişi, true)
  .addField(`**Hakim:**`, `<@${message.author.id}>`, true)
  .addField(`**Sebep:**`, sebep, true)
  .addField(`**Süre:**`, zaman.replace(/d/, ' gün').replace(/s/, ' saniye').replace(/m/, ' dakika').replace(/h/, ' saat'), true)
  .setTimestamp()
  .setFooter(`${message.channel.name} kanalında kullanıldı.`)
  .setThumbnail(message.author.avatarURL)
  
  const bitti = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL)
  .setDescription(`Birisi tahliye oldu!`)
  .addField(`**Tahliye olan:**`, kişi, true)
  .addField(`**Hakim:**`, `<@${message.author.id}>`, true)
  .setTimestamp()
  .setColor(`#f3c7e1`)
  .setFooter(`Jail süresi bitti. | ${message.channel.name} kanalında kullanıldı.`)
  .setThumbnail(message.author.avatarURL)
  
  kişi.roles.add(rol);
    kişi.roles.forEach(r => {
kişi.roles.remove(r.id)
    db.set(`hapis-${kişi.id}`, 'darkalone')
    kanal.send(wasted)
    message.channel.send(`${kişi} isimli kişi başarıyla hapishaneye gönderildi.`)
    setTimeout(async () =>{
    kişi.removeRole(rol.id)
    kişi.roles.add(rol)
    kanal.send(bitti)
  }, ms(zaman));
            setTimeout(async () =>{
message.guild.roles.forEach(async r => {
const i = await db.fetch(`${message.guild.id}.jail.${kişi.id}.roles.${r.id}` )
if(i != r.id)  return ;
if(i){kişi.addRole(i)}
db.delete(`${message.guild.id}.jail.${kişi.id}.roles.${r.id}`)
})
          db.delete(`${message.guild.id}.jail.${kişi.id}`)
              }, ms(zaman));
})}

exports.ayar = {
  komut: 'hapis',
  aktif: true,
  sunucu: true,
  yetki: 1,
  yan: ['jail','mapus'],
  kategori: 'Yetkili',
  kullan: 'Komut bitmedi',
  bilgi: 'Komut bitmedi'
}