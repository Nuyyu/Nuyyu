const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, msg, args) => {
  var USER = msg.author;
  var REASON = args.slice(0).join("  ");
  if(!REASON) return msg.channel.send("AFK olmak için bir sebep belirtin.");
  const b = msg.guild.members.cache.get(msg.author.id).displayName;

  db.set(`afk.${USER.id}`, REASON);
  db.set(`afk.süre.${USER.id}`, Date.now());
  db.set(`afkAd.${msg.author.id}`, b);

  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(msg.author.username)
    .setDescription(`${client.emoji.dogru} Başarıyla Afk Oldunuz\n**Sebep:** ${REASON}`)
    .setThumbnail(msg.author.avatarURL())
  msg.channel.send(embed)
  msg.author.setNickname(b + " │ 💤 │");};

exports.ayar = {
  komut: "afk",
  aktif: true,
  sunucu: true,
  yetki: 0,
  yan: [],
  kategori: 'Kullanıcı',
  kullan: "afk [Sebep]",
  bilgi: 'AFK olursunuz! Etiketlendiğinizde bot AFK olduğunuzu söyler.'
};
