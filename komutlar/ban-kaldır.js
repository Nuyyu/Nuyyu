const Discord = require('discord.js');

exports.run = async(client, msg, args) => {
  if(!args[0]) return msg.reply('Kaldırılacak banlı kullanıcının IDsini girmelisin.')
    if(args[0] === "toplu") {
      if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.reply('Bu özelliği kullanabilmek için "Yönetici" iznine sahip olmalısın!')
        msg.guild.fetchBans().then(bans => {
          bans.forEach(user => {
            msg.guild.unban(user)
          });
        });
        msg.channel.send(`**Sunucudaki banların tümü başarıyla kaldırılıyor...**`)
      return
    }
    if(isNaN(args[0])) return msg.reply('Banı kaldırılacak kullanıcının ID numarasını girmelisin!').then(x => x.delete(5000))
    try {
      msg.guild.unban(args[0])
      client.fetchUser(args[0]).then(x => msg.channel.send(new Discord.RichEmbed().setAuthor('Ban Kaldırıldı').setTimestamp().setColor("GREEN").setFooter(msg.guild.name, msg.guild.iconURL).setDescription(`**Banı Kaldırılan:** ${x.tag} \n**Banı Kaldıran:** ${msg.author} | ${msg.author.id}`)))
    } catch(err) { msg.reply('Belirtilen ID numarasının banı kaldırılamadı!').then(x => x.delete(5000)) }
};

exports.ayar = {
  komut: 'ban-kaldır',
  aktif: true,
  sunucu: true,
  yetki: 3,
  yan: ['unban'],
  kategori: 'Üst Yetkili',
  kullan: 'unban [id] [sebep]',
  bilgi: 'İstediğiniz kişinin banını kaldırır.',
}
