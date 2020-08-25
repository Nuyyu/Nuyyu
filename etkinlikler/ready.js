const Discord = require('discord.js');
const Constants = require('discord.js/src/util/Constants.js')
Constants.DefaultOptions.ws.properties.$browser = 'Discord Android'
module.exports = client => {

client.channels.cache.get('663099968239829019').join();
client.user.setActivity(`NONOLİVE : FF simge`, {url: 'https://twitch.tv/Never2Kill', type: 'DND', browser: "Discord Android"});
console.log(`(◔◡◔)  ${client.user.username}  │  ${client.guilds.cache.size} Sunucu  │  ${client.users.cache.size} Kişi`)};
