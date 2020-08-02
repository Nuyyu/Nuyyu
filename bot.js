const express = require('express');
const http = require('http');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://ffsimge.herokuapp.com/`);
}, 180000);

const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const fs = require('fs');
const moment = require('moment');
const db = require('quick.db');
const chalk = require('chalk');
const Jimp = require('jimp');
require('./util/eventLoader')(client);
var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

//////////////////////// Yetkiler ////////////////////////
client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("MANAGE_GUILD")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

//////////////////////// afk ////////////////////////
client.on("message" , async message => {
  const msg = message;
  if(message.content.startsWith(ayarlar.prefix+"afk")) return; 
  let afk = message.mentions.users.first()
  
  const kisi = db.fetch(`afkid_${message.author.id}_${message.guild.id}`)
  
  const isim = db.fetch(`afkAd_${message.author.id}_${message.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${message.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${message.guild.id}`)
   if(message.content.includes(kisi3)){
     const embed = new Discord.RichEmbed()
      .setColor("#0080FF")
      .setAuthor("FF Simge" , "https://cdn.discordapp.com/avatars/605781334438445057/495a33da25bc54f9c9dd1f5883da7409.png")
      .setDescription(`Etiketlediğiniz Kişi Afk \n Sebep : ${sebep}`)
      .setTimestamp()
      .setFooter(`${message.author.username} Tarafından İstendi`)
       message.channel.send(embed)
   }
 }
  if(message.author.id === kisi){
    const embed = new Discord.RichEmbed()
      .setColor("#0080FF")
      .setAuthor("FF Simge" , "https://cdn.discordapp.com/avatars/605781334438445057/495a33da25bc54f9c9dd1f5883da7409.png")
      .setDescription(`Afk'lıktan Çıktınız`)
      .setTimestamp()
      .setFooter(`${message.author.username} Tarafından İstendi`)
       message.channel.send(embed)
   db.delete(`afkSebep_${message.author.id}_${message.guild.id}`)
   db.delete(`afkid_${message.author.id}_${message.guild.id}`)
   db.delete(`afkAd_${message.author.id}_${message.guild.id}`)
    message.member.setNickname(isim) 
  }  
})

//////////////////////// hg - hb
client.on("guildMemberAdd", async member => {
   const fs = require('fs');
    const gözelkanal = member.guild.channels.get('680742696037777408')
    if (!gözelkanal) return;
     let username = member.user.username;
        if (gözelkanal === undefined || gözelkanal === null) return;
        if (gözelkanal.type === "text") {
            const bg = await Jimp.read("https://cdn.discordapp.com/attachments/450693709076365323/473184528148725780/guildAdd.png");
            const userimg = await Jimp.read(member.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(362, 362);
            await bg.composite(userimg, 43, 26).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    gözelkanal.send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);
              setTimeout(function () {
                fs.unlink("./img/" + member.id + ".png");
              }, 10000);
        }
    })

client.on("guildMemberRemove", async member => {
   const fs = require('fs');
    const gözelkanal = member.guild.channels.get('680742696037777408')
        let username = member.user.username;
        if (gözelkanal === undefined || gözelkanal === null) return;
        if (gözelkanal.type === "text") {            
                        const bg = await Jimp.read("https://cdn.discordapp.com/attachments/450693709076365323/473184546477572107/guildRemove.png");
            const userimg = await Jimp.read(member.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(362, 362);
            await bg.composite(userimg, 43, 26).write("./img/"+ member.id + ".png");
              setTimeout(function () {gözelkanal.send(new Discord.Attachment("./img/" + member.id + ".png"))}, 1000);
              setTimeout(function () {fs.unlink("./img/" + member.id + ".png");}, 10000)}})
//////////////////////// oto yönet
client.on("guildMemberAdd", async (member) => {
  member.addRole("680741837748961305")
  member.guild.setName(`𝑭𝑭 𝑺𝒊𝑴𝑮𝑬 | ${member.guild.memberCount}`)
  client.channels.get("663099948648235038").send("> <a:kelebek2:685798195078627359> <@"+ member.id +"> Hoşgeldin <a:kelebek2:685798195078627359> <@&693952241031184415> \n> Lütfen Yetkililere isminizi ve yaşınızı belirtiniz <a:loading:685798148039245840>")});

client.on('guildMemberRemove', async member => {
member.guild.setName(`𝑭𝑭 𝑺𝒊𝑴𝑮𝑬 | ${member.guild.memberCount}`)});

client.on("ready", () => {
  client.channels.get("664936598932160522").join();})

//----------------------------------GEÇİCİ KANAL----------------------------// 
client.on('voiceStateUpdate', (oldMember, newMember) => {
    // todo create channel
    if (newMember.voiceChannel != null && newMember.voiceChannel.name.startsWith('➕ │ 2 Kişilik Oda Kur')) {
        newMember.guild.createChannel(`║ ${newMember.displayName}`, {
            type: 'voice',
            parent: newMember.voiceChannel.parent
       }).then(cloneChannel => {
        newMember.setVoiceChannel(cloneChannel)
        cloneChannel.setUserLimit(2)
      })
    }
    // ! leave
    if (oldMember.voiceChannel != undefined) {
        if (oldMember.voiceChannel.name.startsWith('║ ')) {
            if (oldMember.voiceChannel.members.size == 0) {
                oldMember.voiceChannel.delete()
            }
            else { // change name
                let matchMember = oldMember.voiceChannel.members.find(x => `║ ${x.displayName}` == oldMember.voiceChannel.name);
                if (matchMember == null) {
                    oldMember.voiceChannel.setName(`║ ${oldMember.voiceChannel.members.random().displayName}`)
                }
            }
        }
    }
});
//----------------------------------GEÇİCİ KANAL----------------------------// 
client.on('voiceStateUpdate', (oldMember, newMember) => {
    // todo create channel
    if (newMember.voiceChannel != null && newMember.voiceChannel.name.startsWith('➕ │ 3 Kişilik Oda Kur')) {
        newMember.guild.createChannel(`║ ${newMember.displayName}`, {
            type: 'voice',
            parent: newMember.voiceChannel.parent
       }).then(cloneChannel => {
        newMember.setVoiceChannel(cloneChannel)
        cloneChannel.setUserLimit(3)
      })
    }
    // ! leave
    if (oldMember.voiceChannel != undefined) {
        if (oldMember.voiceChannel.name.startsWith('║ ')) {
            if (oldMember.voiceChannel.members.size == 0) {
                oldMember.voiceChannel.delete()
            }
            else { // change name
                let matchMember = oldMember.voiceChannel.members.find(x => `║ ${x.displayName}` == oldMember.voiceChannel.name);
                if (matchMember == null) {
                    oldMember.voiceChannel.setName(`║ ${oldMember.voiceChannel.members.random().displayName}`)
                }
            }
        }
    }
});
//----------------------------------GEÇİCİ KANAL----------------------------// 
client.on('voiceStateUpdate', (oldMember, newMember) => {
    // todo create channel
    if (newMember.voiceChannel != null && newMember.voiceChannel.name.startsWith('➕ │ 4 Kişilik Oda Kur')) {
        newMember.guild.createChannel(`║ ${newMember.displayName}`, {
            type: 'voice',
            parent: newMember.voiceChannel.parent
       }).then(cloneChannel => {
        newMember.setVoiceChannel(cloneChannel)
        cloneChannel.setUserLimit(4)
      })
    }
    // ! leave
    if (oldMember.voiceChannel != undefined) {
        if (oldMember.voiceChannel.name.startsWith('║ ')) {
            if (oldMember.voiceChannel.members.size == 0) {
                oldMember.voiceChannel.delete()
            }
            else { // change name
                let matchMember = oldMember.voiceChannel.members.find(x => `║ ${x.displayName}` == oldMember.voiceChannel.name);
                if (matchMember == null) {
                    oldMember.voiceChannel.setName(`║ ${oldMember.voiceChannel.members.random().displayName}`)
                }
            }
        }
    }
});
//----------------------------------GEÇİCİ KANAL----------------------------// 
client.on('voiceStateUpdate', (oldMember, newMember) => {
    // todo create channel
    if (newMember.voiceChannel != null && newMember.voiceChannel.name.startsWith('➕ │ 5 Kişilik Oda Kur')) {
        newMember.guild.createChannel(`║ ${newMember.displayName}`, {
            type: 'voice',
            parent: newMember.voiceChannel.parent
       }).then(cloneChannel => {
        newMember.setVoiceChannel(cloneChannel)
        cloneChannel.setUserLimit(5)
      })
    }
    // ! leave
    if (oldMember.voiceChannel != undefined) {
        if (oldMember.voiceChannel.name.startsWith('║ ')) {
            if (oldMember.voiceChannel.members.size == 0) {
                oldMember.voiceChannel.delete()
            }
            else { // change name
                let matchMember = oldMember.voiceChannel.members.find(x => `║ ${x.displayName}` == oldMember.voiceChannel.name);
                if (matchMember == null) {
                    oldMember.voiceChannel.setName(`║ ${oldMember.voiceChannel.members.random().displayName}`)
                }
            }
        }
    }
});

client.on('message', (msg) => {
  const c = msg.content.toLowerCase()
  if(c=='sa'||c=='sea'||c=='selamun aleyküm'||c=='selam'){
  return msg.reply('Aleyküm Selam, Hoş Geldin. Naber?')};
  
  if (c=='naber'){
  return msg.reply('İyidir senden Naber')};

  if (c== 'güle güle'){
  return msg.reply('sana da güle güle')};

  if (c== '<@!654249589460697098>'){
  return msg.channel.send("Mekanın sahibi olan ablanızı mı Çağırmak istediniz")};

  if (c== '<@!664547930987823156>'){
  return msg.channel.send("Zeynoş Simgenin Sağ kolu olan")}});

client.on('messageDelete', async msg => {
  if (msg.author.bot) return; if (msg.channel.type === "dm") return;
  var silindi = new Discord.RichEmbed()
  .addField("**Kullanıcı:**", msg.author.tag, true)
  .addField("**Kullanıcı ID:**", msg.author.id, true)
  .addField("**Kanal:**", msg.channel.name, true)
  .addField("**Silinen Mesaj:**","```"+ msg.content +"```")
  .setFooter(msg.guild.name+`  •  Bir Mesaj Silindi!`)
  .setColor('RANDOM').setThumbnail(msg.author.avatarURL).setTimestamp()
  await client.channels.get('668389364291862528').send(silindi)});

client.login(ayarlar.token);
