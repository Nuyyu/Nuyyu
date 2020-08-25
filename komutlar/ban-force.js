const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {
    if (!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send(":no_entry: Bu komutu kullanabilmek için `Üyeleri Yasakla` yetkisine sahip olmanız gerek.");
    if (!args[0]) {return msg.channel.send(`:x: Hey Bu Komutu Kullanmak İçin Bir Kullanıcının ID'sini Belirtmen Gerek!`)}
   var sebeb = args.slice(1).join(" ");
   var hedef = args[0]
   var now = new Date()
   if (!sebeb) {
       msg.guild.fetchBans()
           .then(bans => {
               if (bans.has(hedef)) {
                   return msg.channel.send(`:x: Bu Kullanıcı Zaten Yasaklanmış.`)
               }
               msg.guild.ban(hedef, sebeb)
                   .then(async (member) => {
                       let user;
                       if (member instanceof Discord.GuildMember) {
                           user = member.user;
                       }
                       else if (member instanceof Discord.User) {
                           user = member;
                       }
                       else {
                           user = await client.fetchUser(member);
                       }
                       msg.channel.send(`<@!${user.id}> adlı kullanıcı banlandı <a:ban:613373970984468491>`);
                   })
                   .catch(error => {
                       msg.channel.send(`:x: Bir Hata Oluştu`);
                       console.error(':x: Hata:', error);
                   });
           });
   } else {
       msg.guild.fetchBans()
           .then(bans => {
               if (bans.has(hedef)) {
                   return msg.channel.send(`Bu Kullanıcı Zaten Yasaklanmış.`)
               }
               msg.guild.members.ban(hedef, sebeb)
                   .then(async (member) => {
                       let user;
                       if (member instanceof Discord.GuildMember) {
                           user = member.user;
                       }
                       else if (member instanceof Discord.User) {
                           user = member;
                       }
                       else {
                           user = await client.fetchUser(member);
                       }
                       msg.channel.send(`<@!${user.id}> sunucudan yasaklandı <a:ban:613373970984468491>`);
                   })
                   .catch(error => {
                       msg.channel.send(` Bir Hata Oluştu`);
                       console.error(' Hata:', error);
                   });
           });
   }

}
exports.ayar = {
  komut: 'ban-zorla',
  aktif: true,
  sunucu: true,
  yetki: 3,
  yan: ['force-ban','ban-force','banforce','forceban','banid'],
  kategori: 'Üst Yetkili',
  kullan: 'banid [id]',
  bilgi: 'Sunucuda bulunmayan üyeyi id ile banlar'
}
