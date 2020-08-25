const Discord = require('discord.js');

exports.run = async (client, msg, args) => {
  if (!msg.member.hasPermission("ADMINISTRATOR")) return;
  let rol = msg.mentions.roles.first() || msg.guild.roles.cache.find(rol => rol.name === args.join(' ')) || msg.guild.roles.cache.get(args[0]);
  if (!rol) return msg.reply('Böyle bir rol bulunamadı!');
  msg.channel.send(`${rol.members.map(uye => uye.id + " | " + uye.displayName).join('\n')}`, { split: true, code: "xl" });
};

exports.ayar = {
  komut: 'rol-üyeleri',
  aktif: true,
  sunucu: true,
  yetki: 1,
  yan: ['rolüyeleri','roldekiler','rolde-bulunanlar','rol-uyeleri','rolde'],
  kategori: 'Yetkili',
  kullan: 'rolde [@rol]',
  bilgi: 'Etiketlenen Roldeki üyeleri gösterir'
}
