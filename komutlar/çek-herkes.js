const Discord = require("discord.js")

exports.run = async (client ,msg ,args) => {
  const id = args[0]; if (!id) return msg.reply("id Atmadın Nasıl yapacam !!")
  msg.guild.members.filter(a => a.voice.channel).forEach(x => x.set.voice.channel(id))
  msg.channel.send(`Bütün Sesli Kanaldaki Üyeler **<#${id}>** İsimli Odaya Taşındı! `)};

exports.ayar = {
  komut: "herkesi-çek",
  aktif: true,
  sunucu: true,
  yetki: 3,
  yan: ["hçek","herkesi-taşı"],
  kategori: "Yetkili",
  kullan: "hçek [id]",
  bilgi: "Herkesi idsi belirtilen kanala toplar"
};
