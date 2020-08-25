const Discord = require('discord.js');
exports.run = (client, msg, args) => {
  let reason = args.slice(1).join(' ');
  let user = msg.client.member(msg.mentions.users.first() || msg.client.members.cache.get(args[0]));
  if (reason.length < 1) return msg.reply('Ne göndericem onuda yazı ver.');
  if (msg.mentions.users.size < 1) return msg.reply('Kime Mesaj atacam onuda yazı ver.');
  msg.delete(); msg.reply('Mesajını Gönderdim.')

  var embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle(`**Sahibimden Bir Mesajın Var**`)
  .setTimestamp()
  .setDescription(reason);
  return user.send(embed)};


exports.ayar = {
  komut: "dm",
  aktif: true,
  sunucu: true,
  yetki: 4,
  yan: ["pm","mesaj-at","mesajat"],
  kategori: "Özel",
  kullan: "dm [Id] [Mesaj]",
  bilgi: "Belirlediğiniz kişiye DMden mesaj atar.",
};
