const Discord = require('discord.js')
const moment = require('moment')
const client = new Discord.Client();

const botadi = "DarkAlone"

exports.run = async (bot, msg, args) => {
        let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');

        let user = msg.mentions.users.first() || msg.author;

        let userinfo = {};
        userinfo.avatar= user.displayAvatarURL;
        userinfo.id = user.id;
        userinfo.od1 = msg.guild.members.cache.get(user.id).user.presence.game || "Oynadığı bir oyun yok"
        userinfo.status = user.presence.status.toString()
        .replace("dnd", `Rahatsız Etmeyin`)
        .replace("online", `Çevrimiçi`)
        .replace("idle", `Boşta`)
        .replace("offline", `Çevrimdışı`)
        userinfo.bot = user.bot.toString()
        .replace("false", `Hayır`)
        .replace("true", `Evet`)
        userinfo.sonmesaj = user.lastMessage || "Son yazılan mesaj bulunamadı." || "Son yazılan mesaj gösterilemedi."

        userinfo.dctarih = moment.utc(msg.guild.members.cache.get(user.id).user.createdAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')

        userinfo.dctarihkatilma = moment.utc(msg.guild.members.cache.get(user.id).joinedAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')


        const kimlik = new Discord.MessageEmbed()
        .setAuthor(user.tag, userinfo.avatar)
        .setThumbnail(userinfo.avatar)
        .setTitle('Kullanıcı;')
        .addField(`Şu anda oynadığı oyun`, userinfo.od1, false)
        .addField(`Durum`, userinfo.status, false)
        .setColor('03f2df')
        .addField(`Katılım Tarihi (Sunucu)`, userinfo.dctarihkatilma, false)
        .addField(`Katılım Tarihi (Discord)`, userinfo.dctarih, false)
        .addField(`Kimlik:`, userinfo.id, true)
        .addField(`Botmu:`, userinfo.bot, true)

        .addField(`Son gönderdiği mesaj:`, userinfo.sonmesaj, false)
        .setFooter(`${botadi} || Kullanıcı Bilgi Sistemi`)
        msg.channel.send(kimlik)}

exports.ayar = {
  komut: 'kullanıcı-bilgi',
  aktif: true,
  sunucu: true,
  yetki: 0,
  yan: ['kb'],
  kategori: 'Kullanıcı',
  kullan: 'İstediğiniz kullanıcı hakkında bilgi verir',
  bilgi: 'kullanıcı-bilgi [@etiket]'
}
