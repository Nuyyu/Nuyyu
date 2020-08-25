const Discord = require('discord.js')

exports.run = async (client, msg, args) => {
  const channelID = args.join(" ");
  const channel = client.channels.get(channelID);
  channel.join().then(connection => {
  msg.channel.send("Ses Kanalına Başarıyla Katıldım.")})};

exports.ayar = {
  komut: 'sesliye-gir',
  aktif: true,
  sunucu: true,
  yetki: 0,
  yan: ['sese-gir','sesegir','sesliyegir','gir'],
  kategori: 'Kullanıcı',
  kullan: 'sesliye-gir [KanalID]',
  bilgi: 'Bot Sesli Kanala Katılır."'
}
