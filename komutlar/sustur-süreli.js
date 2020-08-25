const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (client, msg, args) => {
    let tomute = msg.guild.member(msg.mentions.users.first() || msg.guild.members.chace.get(args[0]));
    if (!tomute) return msg.channel.send(" Hatalı kullanım tespit edildi! \n\nDoğru Kullanım: ``!mute @kullanıcı <süre: 1dk - 1s>``");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return msg.reply(" Geçici olarak susturmaya çalıştığınız kişi yetkili veya bot'un yetkisi belirttiğiniz kişiyi geçici olarak susturmaya yetmiyor!");
    let mutetime = args[1];
    if (!mutetime) return msg.channel.send(" Hatalı kullanım tespit edildi! \n\nDoğru Kullanım: ``*mute @kullanıcı <süre: 1dk - 1s>``");

    await (tomute.roles.add(client.ayar.susturuldu));
    msg.channel.send(`<a:onay2:695278693169496155> <@${tomute.id}> adlı kullanıcı başarıyla susturuldu! \`[ ${ms(ms(mutetime))} ]\``);

    setTimeout(function() {
        tomute.roles.remove(client.ayar.susturuldu);
        msg.channel.send(`<a:onay3:695589919908823131> <@${tomute.id}> Kişinin susturulma süresi dolduğu için konuşma engeli kaldırıldı!`);
    }, ms(mutetime))}

exports.ayar = {
  komut: 'sustur',
  aktif: true,
  sunucu: true,
  yetki: 1,
  yan: ['mute','s'],
  kategori: 'Yetkili',
  kullan: 'sustur [@etiket] [Süre|1s/m/h/d ]',
  bilgi: 'Belirtilen üyeyi belirli sürede susturur | 1s = 1 saniye , 1m = 1 dakika , 1h = 1 saat, 1d = 1 gün'
}
