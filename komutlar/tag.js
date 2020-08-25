const Discord = require('discord.js');
exports.run = (client, msg) => {msg.channel.send(`**${client.ayar.tag}**`)};
exports.ayar = {komut: 'tag',aktif: true,sunucu: false,yetki: 0,yan: ['tagımız','tagimiz'],kategori: 'Sunucu',kullan: 'tag',bilgi: 'Sunucunun tagını Gösterir'}
