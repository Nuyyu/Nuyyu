const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let enAltYetkiliRolü = message.guild.roles.get("662991967596052496"); // en alttaki rol id
  let yetkililer = message.guild.members.filter(uye => uye.highestRole.position >= enAltYetkiliRolü.position);
  let embed = new Discord.RichEmbed().setTitle(message.guild.name + " Yetkili Sayımı").setTimestamp().setFooter(message.author.tag + " tarafından istendi!")
  .setDescription(`Toplam Yetkili Sayısı: ${yetkililer.size}\nAktif Yetkili Sayısı: ${yetkililer.filter(uye => uye.presence.status !== "offline").size}\nSesli Kanalda Bulunanlar: ${yetkililer.filter(uye => uye.voiceChannel).size} | Bulunmayanlar: ${yetkililer.filter(uye => !uye.voiceChannel).size}`)
  // Online Üye Sayısı: ${message.guild.members.filter(uye => uye.presence.status !== "offline").size}
  message.channel.send(embed);
};

exports.ayar = {
  komut: 'yetkili-say',
  aktif: true,
  sunucu: true,
  yetki: 0,
  yan: ['ys','yetkilisay'],
  kategori: 'Yetkili',
  kullan: 'ys',
  bilgi: 'Aktif olan\olmayan Yetkilileri sayar ve seste olup olmadığını gösterir'
}