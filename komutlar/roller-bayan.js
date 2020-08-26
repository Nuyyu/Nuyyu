const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, msg, args) => {
  let nick = args[1]; let nick2 = args[2];
  let hedef = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[0]));
  if (!nick) return msg.reply(`${client.emoji.hata} İsimsiz olamaz ya?`);
  if (!nick2) return msg.reply(`${client.emoji.hata} Yaşı kaç peki?`);
  if (!hedef) return msg.reply(`${client.emoji.hata} Bir kullanıcı girmeyi unuttun!`);

  await hedef.roles.add('680421088064569362');
  await hedef.roles.remove('680741837748961305');
  await hedef.setNickname(`§ | ${nick} | ${nick2}`)
  await db.add(`teyit.bayan.${msg.author.id}.${msg.guild.id}`, 1)

  const onay = new Discord.MessageEmbed()
    .setTitle('<a:dia:669054299539505152>  Yeni Kayıt oluşturuldu  <a:dia:669054299539505152>')
    .addField('<a:kalplineon:664765671674216450> Kullanıcı <a:kalplineon:664765671674216450>', hedef, true)
    .addField('<a:hypesquad:664765792285622312> Yetkili <a:hypesquad:664765792285622312>', msg.author, true)
    .setColor(client.ayar.bayan).setThumbnail(client.ayar.logo)
  await msg.channels.send(onay);

  {if (!hedef.roles.cache.get('747763109351129168')) {hedef.roles.remove('747763109351129168')}}};

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
