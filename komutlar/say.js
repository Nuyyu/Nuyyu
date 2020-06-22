const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();
  const voiceChannels = message.guild.channels.filter(c => c.type === "voice");
  let count = 0;
  for (const [id, voiceChannel] of voiceChannels)
    count += voiceChannel.members.size;

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("Sunucudaki üye sayısı", message.guild.memberCount)
    .addField(
      "Çevrimiçi üye sayısı",
      message.guild.members.filter(m => m.user.presence.status !== "offline")
        .size
    )
    .addField("Seslideki üye sayısı", count)
    .setFooter(`${message.author.tag}`, message.author.avatarURL)
    .setThumbnail(message.guild.iconURL);
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sayı", "üye", "uye", "kac", "kaç", "kişi", "kisi"],
  permLevel: 0
};

exports.help = {
  name: "say",
  description: "Sunucudaki Üyeleri Sayar"
};
