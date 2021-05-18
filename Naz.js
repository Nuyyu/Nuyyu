const Discord = require('discord.js');
const { Token,  } = require('./Ayar/Ayar.json');
const selamlı = [];



for (let index = 0; index < 5; index++) {
  const bot = new Discord.Client();
  const tokens = token[index];
  bot.login(tokens);
  let concon; let ses;


  bot.on('ready', async () => {
    console.log(bot.user.username);
    concon = await bot.channels.cache.get(chnls[index]).join()
  })


  .on('voiceStateUpdate', async (prev, cur) => {
    if(cur.member.user.bot) return;
    if(cur.channel && cur.channel.id === chnls[index] && cur.channelID === prev.channelID){
      if(selamlı.includes(cur.member.id) && (cur.member.roles.highest.rawPosition < cur.guild.roles.cache.get("835667996638707762").rawPosition)){ ses = await concon.play('./tekrardan.mp3'); return }
      if(cur.member.roles.highest.rawPosition < cur.guild.roles.cache.get("835689155442376734").rawPosition){ ses = await concon.play('./kız reister.mp3'); selamlı.push(cur.member.user.id) } 
        else if(cur.member.roles.highest.rawPosition > cur.guild.roles.cache.get("835689155442376734").rawPosition){ ses = await concon.play('./yetkili.mp3'); selamlı.push(cur.member.user.id) }}
    if(prev.channel && (prev.channel.id === chnls[index]) && (prev.channel.members.size === 1) && ses) ses.end();
  })


  .on('guildMemberUpdate', async (prev, cur) => {
    if(concon.channel.members.cache.some(biri => biri.user.id === cur.user.id)){
      if(prev.roles.highest.rawPosition < cur.roles.highest.rawPosition){ ses = await concon.play('./elveda.mp3') }} else return })
  
  .on('voiceStateUpdate', async (prev, cur) => {
    if(cur.member.id === bot.user.id) concon = await bot.channels.cache.get(chnls[index]).join('837011511858954300') })
}