const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, msg, args) => {
  let isim = args.slice(1).join(" ");
  let kullanici = msg.mentions.users.first();
  if(!isim || !kullanici) return msg.reply(`:warning: Lütfen bir kullanıcı ve yeni adı giriniz! \nDoğru Kullanım; \`${client.ayar.prefix}isim <@etiket> <yeni isim>\``)
  if(isim.length > 32) return msg.reply(`:warning: Lütfen \`32\` karakteri geçmeyecek şekilde bir isim giriniz!`)
  msg.guild.members.cache.get(kullanici.id).setNickname(`↯ ${isim}`)
  msg.channel.send(`:white_check_mark: Başarılı bir şekilde \`${kullanici.username}\` adlı kişinin kullanıcı adı \`${isim}\` olarak değiştirildi.`)}

exports.ayar = {
  komut: "isim-değiştir",
  aktif: true,
  sunucu: true,
  yetki: 1,
  yan: ["isim","isimdeğiştir","isimdegistir","nick"],
  kategori: "Yetkili",
  kullan: "isim [@etiket] [Yeniİsim]",
  bilgi: "Belirtilen kullanıcının ismini değiştirmenize yarar.",
};
