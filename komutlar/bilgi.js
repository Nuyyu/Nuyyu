const Discord = require("discord.js");

exports.run = async (client, msg, bot) => {
const sunucubilgi = new Discord.MessageEmbed()
  .setColor("#RANDOM")
  .setTimestamp()
  .setAuthor(msg.guild.name, msg.guild.iconURL)
  .addField("» ID", msg.guild.id, true)
//.addField("» Bölgesi", `${konum}`, true)
  .addField("» Sahibi", `<@563637763950247946> ve <@402369381012865025>`, true)
  .addField("» Üye sayısı:", msg.guild.memberCount)
  .addField("»Oluşturma Tarihi:", msg.guild.createdAt, true)
  .addField("» Varsayılan Rol:", msg.guild.defaultRole, true)
  .addField("» AFK Zaman Aşımı", msg.guild.afkTimeout, true)
  .addField("Ana kanal:", msg.guild.defaultChannel,true)
  .addField("AFK kanalı:", msg.guild.afkChannel, true)
  .addField("AFK Zaman Aşımı", `${msg.guild.afkTimeout} saniye`,true)
  .addField("Güvenlik Seviyesi:", msg.guild.verificationLevel, true)
  .addField("Ban Sayısı:",msg.guild.fetchBans(),false)
  .addField("Sunucu Bölgesi:", msg.guild.region, true)
  .addField("Rol sayısı",msg.guild.roles.size,true)
  .addField("Sahibi:", msg.guild.owner+``+`\n(`+msg.guild.ownerID+`)`, true)
  .addField("Gecikme süreleri",`Mesaj Gecikmesi: ${Date().getTime() - msg.createdTimestamp}ms\nBot Gecikmesi: ${client.ws.ping}ms`, true)
  .addField("Discord JS", Discord.version, true)
  .addField("Node JS", process.version, true)
  .addField("Kullanılan bellek boyutu", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}`, true)
  .addField("İşletim sistemi", "Linux x64", true)
  .addField("İşlemci","Intel Xenon")
  .setAuthor(msg.guild.name, msg.guild.iconURL)
  .setThumbnail(msg.guild.iconURL)
  .addField("İsim kısaltması:", msg.guild.nameAcronym, true)
 msg.channel.send(sunucubilgi)};

exports.ayar = {
  komut: "bilgi",
  aktif: true,
  sunucu: true,
  yetki: 0,
  yan: [],
  kategori: "Sunucu",
  kullan: "bilgi",
  bilgi: "Sunucu hakkında bilgi gösterir"
}
