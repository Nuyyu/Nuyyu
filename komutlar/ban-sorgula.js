const Discord = require('discord.js');

exports.run = (client, msg, args) => {
    let kullanici = args[0];
    if (!msg.guild.member(kullanici).bannable) return msg.reply("Yetkilileri banlayamam.").then(m => m.delete(3000));
    if (!kullanici) return msg.channel.send("Bir kullanıcı ID girmen gerek")
    msg.guild.fetchBans().then(bans => {if (!bans.has(kullanici)) {return msg.channel.send(`Bu kullanıcı banlanmamış.`)}})
    msg.guild.fetchBan(kullanici).then(({ user, reason }) => {msg.channel.send(`${user.tag} adlı kullanıcının ban nedeni: **${reason}**`)})}

exports.ayar = {
  komut: 'ban-sor',
  aktif: true,
  sunucu: true,
  yetki: 0,
  yan: ['bansor','bansorgula','ban-sor'],
  kategori: 'Kullanıcı',
  kullan: 'İd ile ban sebebini sorgular',
  bilgi: 'bansor [id]'
}
