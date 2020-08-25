const Discord = require('discord.js');

exports.run = async function(client, msg, args) {
  let abc = args.slice(0).join('')
  if(isNaN(abc)) return msg.channel.send(`Lütfen silinecek mesaj miktarını yazın!  **Doğru Kullanım:** \`!temizle 1-400\``);
  if(!abc) return msg.channel.send(`Lütfen silinecek mesaj miktarını yazın!  **Doğru Kullanım:** \`!temizle 1-400\``);

  if(abc > 1 && abc <= 100) {
    await(msg.delete())
    msg.channel.bulkDelete(abc).then(() => {
    msg.channel.send(`${abc} adet mesaj silindi!`).then(msg => msg.delete(5000));
    })
  } else if(abc > 100 && abc <= 200) {
    await(msg.delete())
    msg.channel.bulkDelete(100)
    msg.channel.bulkDelete(abc-100).then(() => {
    msg.channel.send(`${abc} adet mesaj silindi!`).then(msg => msg.delete(5000));
    })
  } else if(abc > 200 && abc <= 300) {
    await(msg.delete())
    msg.channel.bulkDelete(100)
    msg.channel.bulkDelete(100)
    msg.channel.bulkDelete(abc-200).then(() => {
    msg.channel.send(`${abc} adet mesaj silindi!`).then(msg => msg.delete(5000));
    })
  } else if(abc > 300 && abc <= 400) {
    await(msg.delete())
    msg.channel.bulkDelete(100)
    msg.channel.bulkDelete(100)
    msg.channel.bulkDelete(100)
    msg.channel.bulkDelete(abc-300).then(() => {
    msg.channel.send(`${abc} adet mesaj silindi!`).then(msg => msg.delete(5000));
    })
  } else {msg.channel.send(`Lütfen 1-400 arası silinecek mesaj miktarı yazın!  **Doğru Kullanım:** \`!temizle 1-400\``)}};

exports.ayar = {
  komut: 'sil',
  aktif: true,
  sunucu: false,
  yetki: 1,
  yan: ['temizle','clear','s'],
  kategori: 'Yetkili',
  kullan: 's [400]',
  bilgi: 'Belirtilen sayıda mesajlarını temizler.'
}
