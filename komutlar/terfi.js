const Discord = require('discord.js');

exports.run = (client, msg, args) => {
  let reason = args.slice(1).join(' ');
  let user = msg.mentions.users.first();
  if (reason.length < 1) return msg.reply('Terfi sebebini yazmalısın.');
  if (msg.mentions.users.size < 1) return msg.reply('Kimi terfi etceğini yazmalısın.');
  const embed = new Discord.MessageEmbed()
    .setColor(0xD97634).setTimestamp()
	  .setThumbnail("https://i.hizliresim.com/mJ20o2.jpg")
    .addField('Eylem:', 'Terfi Ettirildi!')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${msg.author.username}#${msg.author.discriminator}`)
    .addField('Sebep', reason);
	return msg.channel.send(embed); msg.guild.channels.chace.get('659776874443964432').send(embed)};

exports.ayar = {
  komut: 'terfi',
  aktif: true,
  sunucu: true,
  yetki: 4,
  yan: ['yükselt'],
  kategori: 'Üst Yetkili',
  kullan: 'terfi [@etiket]',
  bilgi: 'Kullanıcıyı terfi ettirir.'
}
