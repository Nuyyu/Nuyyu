const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, msg, args) => {
  let nick = args[1]; let nick2 = args[2];
  let hedef = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[0]));
  if (!nick) return msg.reply(`${client.emoji.hata} İsimsiz olamaz ya?`);
  if (!hedef) return msg.reply(`${client.emoji.hata} Bir kullanıcı girmeyi unuttun!`);

  await hedef.roles.add('596010961190780988');
  await hedef.roles.remove('618218320642179083');
  await hedef.setNickname(`↯ ${nick}`)
  await db.add(`teyit.bayan.${msg.author.id}.${msg.guild.id}`, 1)

  const onay = new Discord.MessageEmbed()
    .setTitle('<a:dia:669054299539505152>  Yeni Kayıt oluşturuldu  <a:dia:669054299539505152>')
    .addField('<a:kalplineon:664765671674216450> Kullanıcı <a:kalplineon:664765671674216450>', hedef, true)
    .addField('<a:hypesquad:664765792285622312> Yetkili <a:hypesquad:664765792285622312>', msg.author, true)
    .setColor(client.ayar.bayan).setThumbnail(client.ayar.logo)
  client.webhook.kayit.send({username: msg.author.username, avatarURL: msg.author.avatarURL(), embeds: [onay]});

  {if (nick2) return hedef.setNickname(`↯ ${nick} ${nick2}`)};
  {if (!hedef.roles.cache.get('618218320642179083')) {hedef.roles.remove('674611334981222411')}}};

exports.ayar = {
  komut: 'bayan',
  aktif: true,
  sunucu: true,
  yetki: 1,
  yan: ['b','k','kiz','kız','girl','women'],
  kategori: 'Yetkili',
  kullan: 'b [@etiket] [isim] (2.isim)',
  bilgi: 'Etiketlediğiniz Kullınıcıyı ismini düzenleyip kayıt eder '
}
