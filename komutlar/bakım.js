const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client,msge, args) => {
const emb = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.setFooter(`Bakım Modu`)
.setTimestamp()
.setColor('RED')

const embed2 = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.setFooter(`Bakım Modu`)
.setTimestamp()
.setColor('GREEN')

if(!args[0]) return msg.channel.send(emb.setDescription(`Bakım modunu kullanmak için \`aç\` veya \`kapat\` yazmalısın.`))

if(args[0] === 'aç') {
const dsd = await data.fetch(`bakim.${client.user.id}`)
if(dsd) return msg.channel.send(emb.setDescription(`Bakım modu zaten açık.`))

data.set(`bakim.${client.user.id}`,"Naz")
msg.channel.send(embed2.setDescription(`Bakım modu açılmıştır.`))}

if(args[0] === 'kapat') {
const dsd = await data.fetch(`bakim.${client.user.id}`)
if(!dsd) return msg.channel.send(emb.setDescription(`Bakım modu zaten kapalı.`))

data.delete(`bakim.${client.user.id}`)
msg.channel.send(embed2.setDescription(`Bakım modu kapatılmıştır.`))}}

exports.ayar = {
  komut: "bakım",
  aktif: true,
  sunucu: false,
  yetki: 4,
  yan: ["bakim"],
  kategori: 'Özel',
  kullan: "bakım [aç/kapat]",
  bilgi: "Botu bakım moduna Geçirir/Çıkarır"
};
