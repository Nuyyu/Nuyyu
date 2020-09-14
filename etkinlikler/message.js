const Discord = require("discord.js");
const db = require("quick.db");
module.exports = (client, msg) => {
if (msg.author.bot) return;
var L = msg.content.toLowerCase();
var U = msg.content.toUpperCase();{

if(L=="sa"||L=="sea"||L=="selam"||L=="selamun aleyküm"||L=="selamun aleykum"){
  return msg.reply(`Aleyküm Selam, Hoş Geldin değerli Mümin Kardeşim Nasılsın  ${client.emoji.elmas}`)};

if (L=="naber") {
  return msg.reply(`İyidir senden Naber  ${client.emoji.elmas}`)};

if (L=="günaydın"||L=="gunaydın"||L=="gunaydin"||L=="günaydın"||L=="günaydin") {
  return msg.reply(`Sanada Günaydın  ${client.emoji.elmas}`)};

if (L=="kayıt"||L=="kayit") {
  return msg.reply(`Kayıt olmak için Yetkilileri Etiketlemen yeterli  ${client.emoji.uyar}`)};

if (L=="by"||L=="güle"||L=="görüşürüz"||L=="bye") {
  return msg.reply(`İyi günler Tekrar bekleriz  ${client.emoji.elmas}`)};

if (L=="yalan") {
  return msg.reply(`Yoo Yalan değil ki?  ${client.emoji.uyar}`)};

if (msg.content.toLocaleLowerCase() == '<@!704588391395623017>') {
  const etiket = new Discord.MessageEmbed()
    .setAuthor(msg.author.username , msg.author.avatarURL())
    .setDescription(`${client.emoji.elmas}  Hey, Benim hakkımda pek bir bilgin yok gibi görünüyor.\n
      ${client.emoji.elmas}  İşte prefixim; ${client.ayar.prefix}\n
      ${client.emoji.elmas}  Komutlarımı görmek istiyorsan: \`\`${client.ayar.prefix}yardım\`\` yazman yeterli.`)
    .setThumbnail(client.ayar.logo).setColor('RANDOM')
  msg.channel.send(etiket)}}};
