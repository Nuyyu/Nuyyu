const Discord = require("discord.js");
module.exports = (client, old, nev) => {{
if (nev.author.bot) return; if (nev.channel.type === "dm") return;

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\ Korumalar //━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\
if (old.content != nev.content) {const c = nev.content.toLowerCase(); const yasak = ["discord.com","discord.gg","/invite/"];
if (yasak.some(banned => nev.content.includes(banned))) { if (!nev.member.hasPermission("MANAGE_MESSAGES")) {
var uyar = new Discord.MessageEmbed()
  .setAuthor(msg.author.username + " Uyarıyorum Seni", msg.author.avatarURL())
  .setDescription(`${client.emoji.uyari}  Salak mı Sanıyorsun bizi, Bence Salak olan Sensin\n${client.emoji.uyari}  Sunucuda Mesaj düzenleyerek Reklam Yapamazsın`)
  .setThumbnail(client.ayar.logo).setColor('RED');
nev.delete(); nev.channel.send(uyar)}}}};{

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\ Düzenlenen Mesaj Denetimi //━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\
if (old.content == nev.content) return;
let embed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setAuthor(`Mesaj Düzenlendi`, nev.author.avatarURL)
  .addField("Kullanıcı", nev.author, true)
  .addField("Kullanıcı ID", nev.author.id, true)
  .addField("Kanal Adı", nev.channel.name, true)
  .addField("Mesaj ID", nev.id, true)
  .addField("Eski Mesaj", old.content, true)
  .addField("Yeni Mesaj", nev.content, true)
  .setThumbnail(nev.author.avatarURL)
client.channels.cache.get('668389364291862528').send(embed)}};
