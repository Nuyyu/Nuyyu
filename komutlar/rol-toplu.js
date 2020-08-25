const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if(!args[0] && args[0] !== "ver" && args[0] !== "al") return message.channel.send('Yapılacak işlemi belirtmelisin! \n**Doğru Kullanım:** `${process.env.prefix}toplu-rol ver @rol \n`${process.env.prefix}toplu-rol al @rol')
  let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(rol => rol.name === args.slice(1).join(' '));

if(args[0] === "ver") {
  if (!rol) return message.channel.send(`Herkese verilecek olan rolü belirtmelisin! \n**Doğru Kullanım:** \`${process.env.prefix}toplu-rol ver @rol\``)
  await message.guild.members.forEach(u => { u.roles.add(rol)})
  message.channel.send('Belirtilen rol herkese verildi!'); return}

if(args[0] === "al") {
  if (!rol) return message.channel.send(`Herkesten alınacak olan rolü belirtmelisin! \n**Doğru Kullanım:** \`${process.env.prefix}toplu-rol al @rol\``)
  await message.guild.members.forEach(u => {u.roles.remove(rol)})
  message.channel.send('Belirtilen rol herkesten alındı!'); return}};

exports.ayar = {
  komut: 'toplu-rol',
  aktif: true,
  sunucu: true,
  yetki: 4,
  yan: ['toplurol'],
  kategori: 'Özel',
  kullan: 'toplu-rol [ver/al] [@rol]',
  bilgi: 'Belirttiğiniz rolü herkese verir/alır'
}
