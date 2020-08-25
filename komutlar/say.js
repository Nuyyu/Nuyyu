const Discord = require('discord.js');

exports.run = async (client, msg) => {
  msg.delete(); const voiceChannels = msg.guild.channels.cache.filter(c => c.type === 'voice');
  let count = 0; for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;


  var uye = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
    var üs1= uye.match(/([0-9])/g); uye = uye.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase()
    if (üs1) {uye = uye.replace(/([0-9])/g, d => { return {
    '0': `${client.emoji.sifir}`,'1': `${client.emoji.bir}`,'2': `${client.emoji.iki}`,'3': `${client.emoji.uc}`,'4': `${client.emoji.dort}`,'5': `${client.emoji.bes}`,'6': `${client.emoji.alti}`,'7': `${client.emoji.yedi}`,'8': `${client.emoji.sekiz}`,'9': `${client.emoji.dokuz}`}[d]})};

  var aktif = msg.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
    var üs2= aktif.match(/([0-9])/g); aktif = aktif.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase()
    if (üs2) {aktif = aktif.replace(/([0-9])/g, d => { return {
    '0': `${client.emoji.sifir}`,'1': `${client.emoji.bir}`,'2': `${client.emoji.iki}`,'3': `${client.emoji.uc}`,'4': `${client.emoji.dort}`,'5': `${client.emoji.bes}`,'6': `${client.emoji.alti}`,'7': `${client.emoji.yedi}`,'8': `${client.emoji.sekiz}`,'9': `${client.emoji.dokuz}`}[d]})};

  var tag = msg.guild.members.cache.filter(m => m.user.username.includes(client.ayar.tag)).size.toString().replace(/ /g, "    ")
    var üs3= tag.match(/([0-9])/g); tag = tag.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase()
    if (üs3) {tag = tag.replace(/([0-9])/g, d => { return {
    '0': `${client.emoji.sifir}`,'1': `${client.emoji.bir}`,'2': `${client.emoji.iki}`,'3': `${client.emoji.uc}`,'4': `${client.emoji.dort}`,'5': `${client.emoji.bes}`,'6': `${client.emoji.alti}`,'7': `${client.emoji.yedi}`,'8': `${client.emoji.sekiz}`,'9': `${client.emoji.dokuz}`}[d]})};

  var ses = count.toString().replace(/ /g, "    ");
     var üs4 = ses.match(/([0-9])/g); ses = ses.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase(); if(üs4) {ses = ses.replace(/([0-9])/g, d => {return {
    '0': `${client.emoji.sifir}`,'1': `${client.emoji.bir}`,'2': `${client.emoji.iki}`,'3': `${client.emoji.uc}`,'4': `${client.emoji.dort}`,'5': `${client.emoji.bes}`,'6': `${client.emoji.alti}`,'7': `${client.emoji.yedi}`,'8': `${client.emoji.sekiz}`,'9': `${client.emoji.dokuz}`}[d]})};

  var erkek = msg.guild.members.cache.filter(r => r.roles.cache.has(client.rol.erkek)).size.toString().replace(/ /g, "    ")
    var üs5= erkek.match(/([0-9])/g); erkek = erkek.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase()
    if (üs5) {erkek = erkek.replace(/([0-9])/g, d => { return {
    '0': `${client.emoji.sifir}`,'1': `${client.emoji.bir}`,'2': `${client.emoji.iki}`,'3': `${client.emoji.uc}`,'4': `${client.emoji.dort}`,'5': `${client.emoji.bes}`,'6': `${client.emoji.alti}`,'7': `${client.emoji.yedi}`,'8': `${client.emoji.sekiz}`,'9': `${client.emoji.dokuz}`}[d]})};

  var bayan = msg.guild.members.cache.filter(r => r.roles.cache.has(client.rol.bayan)).size.toString().replace(/ /g, "    ")
    var üs5= bayan.match(/([0-9])/g); bayan = bayan.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase()
    if (üs5) {bayan = bayan.replace(/([0-9])/g, d => { return {
    '0': `${client.emoji.sifir}`,'1': `${client.emoji.bir}`,'2': `${client.emoji.iki}`,'3': `${client.emoji.uc}`,'4': `${client.emoji.dort}`,'5': `${client.emoji.bes}`,'6': `${client.emoji.alti}`,'7': `${client.emoji.yedi}`,'8': `${client.emoji.sekiz}`,'9': `${client.emoji.dokuz}`}[d]})};

  var kayit = msg.guild.members.cache.filter(r => r.roles.cache.has(client.rol.kayit)).size.toString().replace(/ /g, "    ")
    var üs6= kayit.match(/([0-9])/g); kayit = kayit.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase()
    if (üs6) {kayit = kayit.replace(/([0-9])/g, d => { return {
    '0': `${client.emoji.sifir}`,'1': `${client.emoji.bir}`,'2': `${client.emoji.iki}`,'3': `${client.emoji.uc}`,'4': `${client.emoji.dort}`,'5': `${client.emoji.bes}`,'6': `${client.emoji.alti}`,'7': `${client.emoji.yedi}`,'8': `${client.emoji.sekiz}`,'9': `${client.emoji.dokuz}`}[d]})};

  var sesiz = msg.guild.members.cache.filter(r => r.roles.cache.has(client.rol.sesiz)).size.toString().replace(/ /g, "    ")
    var üs7= sesiz.match(/([0-9])/g); sesiz = sesiz.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase()
    if (üs7) {sesiz = sesiz.replace(/([0-9])/g, d => { return {
    '0': `${client.emoji.sifir}`,'1': `${client.emoji.bir}`,'2': `${client.emoji.iki}`,'3': `${client.emoji.uc}`,'4': `${client.emoji.dort}`,'5': `${client.emoji.bes}`,'6': `${client.emoji.alti}`,'7': `${client.emoji.yedi}`,'8': `${client.emoji.sekiz}`,'9': `${client.emoji.dokuz}`}[d]})};

  var hapis = msg.guild.members.cache.filter(r => r.roles.cache.has(client.rol.hapis)).size.toString().replace(/ /g, "    ")
    var üs8= hapis.match(/([0-9])/g); hapis = hapis.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase()
    if (üs8) {hapis = hapis.replace(/([0-9])/g, d => { return {
    '0': `${client.emoji.sifir}`,'1': `${client.emoji.bir}`,'2': `${client.emoji.iki}`,'3': `${client.emoji.uc}`,'4': `${client.emoji.dort}`,'5': `${client.emoji.bes}`,'6': `${client.emoji.alti}`,'7': `${client.emoji.yedi}`,'8': `${client.emoji.sekiz}`,'9': `${client.emoji.dokuz}`}[d]})};

  var boost = msg.guild.members.cache.filter(r => r.roles.cache.has(client.rol.boost)).size.toString().replace(/ /g, "    ")
    var üs9= boost.match(/([0-9])/g); boost = boost.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase()
    if (üs9) {boost = boost.replace(/([0-9])/g, d => { return {
    '0': `${client.emoji.sifir}`,'1': `${client.emoji.bir}`,'2': `${client.emoji.iki}`,'3': `${client.emoji.uc}`,'4': `${client.emoji.dort}`,'5': `${client.emoji.bes}`,'6': `${client.emoji.alti}`,'7': `${client.emoji.yedi}`,'8': `${client.emoji.sekiz}`,'9': `${client.emoji.dokuz}`}[d]})};


  var bilgi = new Discord.MessageEmbed()
    .setAuthor(msg.author.username+" İstatistik", msg.author.avatarURL())
    .setColor(client.ayar.klasik).setThumbnail(client.ayar.logo)
    .setDescription(`${client.emoji.parla} **Sunucudaki Üye Sayısı** ${uye}\n\n${client.emoji.KalpAtisi} **Çevrimiçi Üye Sayısı** ${aktif}\n\n${client.emoji.boost} **Boostlayan Üye Sayısı** ${boost}\n\n${client.emoji.eko} **Seslideki Üye Sayısı** ${ses}\n\n${client.emoji.tag} **Tagdaki Üye Sayısı** ${tag}\n\n${client.emoji.hypesquad} **Kayıtsız Üye Sayısı** ${kayit}\n\n${client.emoji.hayran} **Kayıtlı Bayan Üye Sayısı** ${bayan}\n\n${client.emoji.elmas} **Kayıtlı Erkek Üye Sayısı** ${erkek}\n\n${client.emoji.bildirim} **Susuturulan Üye Sayısı** ${sesiz}\n\n${client.emoji.uyar} **Hapiste Bulunan Üye Sayısı** ${hapis}`)
  msg.channel.send(bilgi)};

exports.ayar = {
  komut: "say",
  aktif: true,
  sunucu: true,
  yetki: 0,
  yan: ["sayı","üye","uye","kac","kaç","kişi","kisi"],
  kategori: "Sunucu",
  kullan: "say",
  bilgi: "Sunucuda bulunan Üyelerin istatistiğini gösterir",
};
