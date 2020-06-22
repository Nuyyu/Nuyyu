const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        "f!yardım",
        "✨ NimoTV: FF Simge ✨",
        "⭐️ Simgenin kalbini izliyor ⭐️"  
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);}, 2 * 2500);
    
  console.log(`BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("watching");
  client.user.setActivity(`${prefix}y + ${client.users.size} kişiyi izliyor..`);
  console.log(`BOT: Şu an ` + client.channels.size + ` adet kanala ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};