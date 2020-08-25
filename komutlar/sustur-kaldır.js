const Discord = require("discord.js")
const ms = require("ms")

module.exports.run = async (bot, msg, args) => {
  const mod = msg.author;
  let user = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  if (!user) return msg.channel.sendEmbed(new Discord.MessageEmbed().setColor('RANDOM').setAuthor("Hata").setDescription(`Kullanıcı Bulunamadı`))
  let reason = msg.content.split(" ").slice(2).join(" ");
  if (!user.roles.cache.get(process.env.sesiz)) return msg.channel.sendEmbed(new Discord.MessageEmbed().setColor('RANDOM').setTitle('Kişi Mutelenmemiş'))
  if (!reason) return msg.channel.sendEmbed(new Discord.MessageEmbed().setColor('RANDOM').setAuthor("Hata").setDescription(`Unmute Sebebini Yazmalısın`))

  await user.roles.remove(client.rol.sesiz);

  const muteembed = new Discord.MessageEmbed()
      .setAuthor('Eylem: Unmute')
      .addField('Kullanıcı', `<@${user.id}>`)
      .addField('Sebep', `${reason}`)
      .addField('Moderatör', `${mod}`)
      .setColor('RANDOM')
      .setThumbnail(client.ayar.logo)
  msg.channel.send(muteembed)}

exports.ayar = {
  komut: 'unmute',
  aktif: true,
  sunucu: true,
  yetki: 1,
  yan: ['sustur-kaldır'],
  kategori: 'Yetkili',
  kullan: 'unmute [@etiket] [sebep]',
  bilgi: 'Etiketlenen Kişinin susturmasını kaldırır'
}
