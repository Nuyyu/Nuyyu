const Discord = require('discord.js')
exports.run = (bot, msg, args) =>
{
    var userlist = msg.guild.fetchBans();
   userlist.then(collection =>
   {
     if(collection.first() == null)
     {msg
       const embed = new Discord.MessageEmbed()
       .setTitle(`:no_entry_sign: Banlanan Kullanıcı bulunamadı :no_entry_sign:`)
       .setColor("RED");
       msg.channel.send({embed});
     }
     else
     {
       const embed = new Discord.MessageEmbed()
       .setTitle(":no_entry_sign: Banlistesi | Sunucudan Banlananlar")
       .setColor("RED");
       for(userlist of collection)
       {
           var user = userlist[1];
           embed.addField(` **${user.tag}**`, `_________ _____________`);
       }
       msg.channel.send({embed});
     }
   });
 }

exports.ayar = {
  komut: 'banlılar',
  aktif: true,
  sunucu: true,
  yetki: 3,
  yan: ['banliste','banlananlar'],
  kategori: 'Üst Yetkili',
  kullan: 'banlananlar',
  bilgi: 'Sunucundan Banlanan üyeleri gösterir.'
}
