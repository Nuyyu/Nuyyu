const Discord = require(`discord.js`);
const db = require(`quick.db`)

exports.run = async(client, message, args) => {
  let hedef = message.mentions.users.first()

  if(!args[0]) {
    const erkek = await db.fetch(`teyit-erkek.${message.author.id}.${message.guild.id}`)
    const bayan = await db.fetch(`teyit-bayan.${message.author.id}.${message.guild.id}`)
    const emb = new Discord.MessageEmbed()
      .setAuthor(message.author.username + `'in Teyitleri`, message.author.avatarURL())
      .setDescription(`Kayıt Edilen Erkek Sayısı:  ${erkek ? erkek : '0'}\nKayıt Edilen Bayan Sayısı: ${bayan ? bayan : '0'}`)
      .setThumbnail(client.ayar.logo)
      .setColor('RANDOM')
    message.channel.send(emb)}

  if(hedef) {
    const erkek = await db.fetch(`teyit-erkek.${hedef.id}.${message.guild.id}`)
    const bayan = await db.fetch(`teyit-bayan.${hedef.id}.${message.guild.id}`)
    const emb = new Discord.MessageEmbed()
      .setAuthor(hedef.username + `'in Teyitleri`, hedef.avatarURL())
      .setDescription(`Kayıt Edilen Erkek Sayısı:  ${erkek ? erkek : '0'}\nKayıt Edilen Bayan Sayısı: ${bayan ? bayan : '0'}`)
      .setThumbnail(client.ayar.logo)
      .setColor('RANDOM')
    message.channel.send(emb)}};

exports.ayar = {
  komut: 'teyitler',
  aktif: true,
  sunucu: false,
  yetki: 1,
  yan: ['teyitler'],
  kategori: 'Yetkili',
  kullan: 'teyitler (@etiket)',
  bilgi: 'Yapılan teyit miktarını gösterir'
}
