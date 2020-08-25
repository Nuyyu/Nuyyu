const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, msg, args) => {
  let u = msg.mentions.users.first();
  if (!msg.guild.member(u).bannable) return msg.reply("Yetkilileri banlayamam.").then(m => m.delete(3000));
  if (!u) {
    return msg.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Lütfen sunucudan yasaklanacak kişiyi etiketleyiniz!")
        .setColor("BLACK")
        .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }
 if (u.highestRole.calculatedPosition >= msg.member.highestRole.calculatedPosition) {msg.reply("bu kullanıcı senden daha üst pozisyonda.")}

  const embed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription(`${u} Adlı şahsın yasaklanmasını onaylıyor musunuz?`)
    .setFooter(bot.user.username, bot.user.avatarURL);
  msg.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === msg.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("İşlem iptal oldu!"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        msg.channel.send(
          `İşlem onaylandı! ${u} adlı şahıs sunucudan yasaklandı!`
        );

        msg.guild.ban(u, 2);
      }
    });
  });
};

exports.ayar = {
  komut: 'ban',
  aktif: true,
  sunucu: true,
  yetki: 3,
  yan: ['engelle','yasakla'],
  kategori: 'Üst Yetkili',
  kullan: 'ban [@etiket]',
  bilgi: 'Sunucudan kullanıcıyı Yasakar'
}
