const { Token, Yetkili, Kanal, Kayıtsız, Üye } = require('./Ayarlar/Ayar.json');
const { MessageEmbed, Constants, Client } = require('discord.js');
Constants.DefaultOptions.ws.properties.$browser = "Discord iOS"
const express = require("express"); const app = express();
const selamlı = [];


process.on("unhandledRejection", err => { console.log(err) })
       .on('uncaughtException', err => { console.log(err) })


app.get('/', (req, res) => res.send(`https://discord.gg/7Atqdkh`));
app.listen(process.env.PORT, () => console.log(`📡 Port ayarlandı: ${process.env.PORT} 📡`));


for (let index = 0; index < 2; index++){
  const bot = new Client({ disableMentions: "everyone", fetchAllMembers: true })
  let TOKEN = Token[index];
  let concon; let ses;
  bot.login(TOKEN);


  bot.on('ready', async () => {
    concon = await bot.channels.cache.get(Kanal[index]).join();
    bot.user.setPresence({ activity: { name: `#EfsaneYeniBaşlıyor!` }, });
    console.log(`(◔◡◔)  ${bot.user.tag}  │  ${bot.guilds.cache.size} Sunucu  │  ${bot.users.cache.size} Kişi`);
  })

  
  .on("message", msg => {
    if(msg.channel.type == "dm" && !msg.author.bot){
    bot.channels.cache.get('762051055701065768').send(new MessageEmbed()
      .addField('Kullanıcı:', msg.author.tag, true)
      .addField('Kullanıcı ID',  msg.author.id, true)
      .addField('Gönderilen Mesaj', '```'+ msg.content +'```')
      .setThumbnail(msg.author.avatarURL()).setColor('RANDOM')
)}})

  
  .on('voiceStateUpdate', async (oldState, newState) => {
    if(newState.member.user.bot) return;
    if(newState.member.voice.channel && newState.member.voice.channel.id === Kanal[index] && newState.member.voice.channelID === oldState.member.voice.channelID){
    if(selamlı.includes(newState.member.id) && newState.member.roles.cache.has(Kayıtsız)){ ses = await concon.play('./Ayarlar/Sesler/Tekrar.mp3'); return }
      if(newState.member.roles.cache.has(Kayıtsız)){ ses = await concon.play('./Ayarlar/Sesler/KayıtErkek.mp3'); selamlı.push(newState.member.user.id) } 
        else if(newState.member.roles.cache.has(Yetkili)){ ses = await concon.play('./Ayarlar/Sesler/Yetkili.mp3'); selamlı.push(newState.member.user.id) }}
    if(oldState.member.channel && oldState.member.voice.channelID === Kanal[index] && oldState.member.channel.members.size === 1 && ses) ses.end();
  })


  .on('voiceStateUpdate', async (oldState, newState) => { if(newState.member.id == bot.user.id) concon = await bot.channels.cache.get(Kanal[index]).join() })
  .on('guildMemberUpdate', async (oldState, newState) => { if(oldState.member.roles.cache.has(Kayıtsız) && newState.member.roles.cache.has(Üye)){ ses = await concon.play('./Ayarlar/Sesler/Elveda.mp3') }})
};



const mineflayer = require("mineflayer");
let Ayar = { host: "AloneTR.aternos.me", port: 44609, username: "↯ Λløne", version: false };

let MC = mineflayer.createBot(Ayar);
MC.on("chat", function(username, message){
  if(username === MC.username) return;
  function intervalFunc(){ MC.setControlState("sprint", true) };
  setInterval(intervalFunc, 7000);

  MC.chat(`/register NazBebisimiSeviyorum NazBebisimiSeviyorum`);
  MC.chat(`/login NazBebisimiSeviyorum`); 
  setInterval(() => { MC.chat("&6&lDiscord Sunucumuz:&b https://discord.gg/7Atqdkh ") }, 300000)  
});


bindEvents(MC);
function bindEvents(MC){
  
  MC.on("error", function(err) { console.log("Bir hata oluştu!") });
  MC.on("end", function(){ console.log("Bot sunucudan atıldı!"); setTimeout(relog, 5000) });

  function relog() {
    console.log("Sunucuya Tekrardan Baglaniliyor...");
    MC = mineflayer.createBot(Ayar);
    
    MC.on("chat", function(username, message){
      if (username === MC.username) return;
      console.log("Bot tekrardan oyuna giriş yaptı!");
      MC.chat(`/login NazBebisimiSeviyorum`);
      MC.setControlState("sprint", true);
}); bindEvents(MC) }}
