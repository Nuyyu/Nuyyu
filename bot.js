const Discord = require("discord.js"); const client = new Discord.Client();
const moment = require("moment"); require("moment-duration-format");
const express = require("express"); const http = require("http");
const ms = require("parse-ms"); const chalk = require('chalk');
const db = require("quick.db"); const fs = require("fs");
const TempChannels = require("discord-temp-channels");
const tempChannels = new TempChannels(client);
const app = express(); moment.locale("tr");

client.ayar = {
	prefix: '!',
  ismi: 'FF Simge',
  logo: `https://media.discordapp.net/attachments/663099927777247246/747761242550042644/PicsArt_08-25-10.49.13.jpg`,
  sahip: '654249589460697098',
  sunucu: '663049798470991894',
  tag: '§',
  hata: 'RED',
  oldu: 'GRENN',
	klasik: '2F3136',
	erkek: '6dd0e5',
	bayan: 'eead0e',
	denetim: '668389364291862528',
};

client.rol = {
	erkek: '680421279236489219',
	bayan: '680421088064569362',
	kayit: '680741837748961305',
	sesiz: '681102788662394880',
	hapis: '693950335030394881',
  boost: '687688305172676656',
	yetkili: '747762177028653106',
};

client.emoji = {
  su: '<a:su:735813602946187314>',
	eko: '<a:eko:741278528388988941>',
	tac: '<a:tac:734859606853156955>',
	ayar: '<a:yar:734473658411516025>',
	nana: '<a:nana:689114728383119610>',
  tag: '<a:datag:721292102297845772>',
	idam: '<a:idam:664439451585609728>',
	uyar: '<a:uyar:664761926907199488>',
	gold: '<a:gold:734474984994635918>',
	onay: '<a:dogru:664439029135310849>',
	hata: '<a:hatan:632734448982425610>',
	onay: '<a:dogru:664439029135310849>',
	elmas: '<a:elmas:669054308733550593>',
	insta: '<a:insta:720957324507742270>',
  stres: '<a:stres:689114713820364813>',
	dogru: '<a:dogru:664439029135310849>',
	kitap: '<a:kitap:734473348037214258>',
	tamir: '<a:tamir:664439158797762560>',
	boost: '<a:boost:689114801162682377>',
	ileri: '<a:ileri:664439337076654100>',
	parti: '<a:parti:681136269056933949>',
	parla: '<a:parla:720956459172495401>',
	insta: '<a:dokuz:720957324507742270>',
	ileri: '<a:ileri:664439337076654100>',
	dokuzgen: '<a:9gen:689115349496627249>',
	hayran: '<a:hayran:720956211864010792>',
	kelebek: '<a:kelebek:734875493907562518>',
	loading: '<a:loading:664439215056093195>',
	bildirim: '<a:bildirim:664765701441191959>',
	KalpSiyah: '<a:KalpSiyah:689114490599374866>',
	KalpAtisi: '<a:KalpAtisi:666985251498885152>',
	hypesquad: '<a:hypesquad:664765792285622312>',
	sonsuzluk: '<a:sonsuzluk:664439381272297472>',
	sifir: '<a:sifir:730893122292285551>',
  bir: '<a:bir:730893136272031745>',
  iki: '<a:iki:730893149823565864>',
  uc: '<a:uc:730893193402515567>',
  dort: '<a:dort:730893198360051802>',
  bes: '<a:bes:730893213971382354>',
	yedi: '<a:yedi:730893240345296997>',
  alti: '<a:alti:730893226755489812>',
  sekiz: '<a:sekiz:730893250671673395>',
  dokuz: '<a:dokuz:730893262415593535>',
};

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\ Komut & Event & Yetkiler //━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./komutlar/", (err, files) => {
  console.log(`📁 Toplam ${files.length} Komut bulunuyor 📁`);
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let cmd = require(`./komutlar/${file}`);
    let cmdFileName = file.split(".")[0];
    client.commands.set(cmd.ayar.komut, cmd);
    console.log(`📁 Komut 📁 ${cmdFileName}`);
    if (cmd.ayar.yan) {
      cmd.ayar.yan.forEach(alias => {
      client.aliases.set(alias, cmd.ayar.komut)})}})});

fs.readdir("./etkinlikler/", (err, files) => {
  console.log(`🎉 Toplam ${files.length} Etkinlik bulunuyor 🎉`);
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./etkinlikler/${file}`);
    let eventName = file.split(".")[0];
    console.log(`🎉 Etkinlik 🎉 ${eventName}`);
    client.on(eventName, event.bind(null, client))})});

client.elevation = message => {if (!message.guild) {return}
  let yetki = 0;
  if (message.member.hasPermission("MANAGE_MESSAGES")) yetki = 1;
  if (message.member.hasPermission("VIEW_AUDIT_LOG")) yetki = 2;
  if (message.member.hasPermission("BAN_MEMBERS")) yetki = 3;
  if (message.author.id === client.ayar.sahip) yetki = 4;
  return yetki};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
client.login(process.env.token); console.log(`(◔◡◔) Nurullah A. (◔_◔)`);
app.listen(process.env.PORT); setInterval(() => {http.get(`http://ffsimge.herokuapp.com`)}, 15000);
app.get("/", (request, response) => {response.sendStatus(200)});

client.on("message", async msg => {
if (msg.author.bot) return;
const msgArr = msg.content.split(/\s+/g);
const commands = msgArr[0];
const command = commands.toLowerCase();
const args = msgArr.slice(1);
let yetki = client.elevation(msg);

if (!command.startsWith(client.ayar.prefix)) return;
let cmd = client.commands.get(command.slice(client.ayar.prefix.length)) ||
client.commands.get(client.aliases.get(command.slice(client.ayar.prefix.length)));
if (!cmd) return; if (cmd.ayar.sunucu && msg.channel.type == "dm") return;

if (!cmd) return
if (cmd) {
  var uyari = new Discord.MessageEmbed()
    .setAuthor(msg.author.username +" Uyarı", msg.author.avatarURL())
    .setThumbnail(client.ayar.logo).setColor('RED');

  const bakim = db.fetch(`bakim.${client.user.id}`); if (bakim){ if (msg.author.id !== '402369381012865025') {
  msg.channel.send(`${command} isimli komut şu anda bakımdadır.`); return }}

  if (cmd.ayar.aktif === false){ if (!client.ayar.sahip.includes(msg.author.id) && !client.ayar.sahip.includes(msg.author.id)) {
  msg.channel.send(uyari.setDescription(`**${command}** komut geçici olarak kullanıma kapalıdır!`)); return}}

  if (cmd.ayar.yetki === 1){ if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
	msg.channel.send(uyari.setDescription(`Bunu yapbilmek için **Yetkili** olmalısın!`)); return}}

  if (cmd.ayar.yetki === 2){ if (!msg.member.hasPermission("KICK_MEMBERS")) {
  msg.channel.send(uyari.setDescription(`Bunu yapbilmek için **Yetkili** olmalısın!`)); return}}

  if (cmd.ayar.yetki === 3){ if (!msg.member.hasPermission("BAN_MEMBERS")) {
  msg.channel.send(uyari.setDescription(`Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın!`)); return }}

  if (cmd.ayar.yetki === 4){ if (!msg.member.hasPermission("ADMINISTRATOR")) {
  msg.channel.send(uyari.setDescription(`Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın!`)); return}}

  if (cmd.ayar.yetki === 5){ if (!client.ayar.sahip.includes(msg.author.id)) {
  msg.channel.send(uyari.setDescription(`Bu komutu kullanabilmek için **Sahibi** olmalısın!`)); return }}

if (cmd) {if (yetki < cmd.ayar.yetki) return;
if (cmd) cmd.run(client, msg, args, yetki)}}});

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\ AFK //━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\
client.on("message", async msg => {
  if(msg.author.bot) return;
  if(!msg.guild) return;
  if(msg.content.includes(client.ayar.prefix+"afk")) return;
  const isim = db.fetch(`afkAd.${msg.author.id}`)
  const afk = new Discord.MessageEmbed().setColor("RANDOM")

  if(await db.fetch(`afk.${msg.author.id}`)) {
    msg.channel.send(afk
      .setDescription(`${client.emoji.uyar} Afk'lıktan Çıktınız`)
      .setAuthor(msg.author.username)
      .setThumbnail(msg.author.avatarURL()))
    db.delete(`afk.${msg.author.id}`);
    db.delete(`afk.süre_${msg.author.id}`);
    msg.member.setNickname(isim)
    db.delete(`afkAd.${msg.author.id}`)}

  var USER = msg.mentions.users.first(); if(!USER) return;
  var REASON = db.fetch(`afk.${USER.id}`);

  if(REASON) {
    let süre = await db.fetch(`afk.süre.${USER.id}`);
    let timeObj = ms(Date.now() - süre);
    msg.channel.send(afk
    .setAuthor(USER.username + " AFK")
    .setThumbnail(USER.avatarURL())
    .addField(`${client.emoji.altigen} **Süre:** ${client.emoji.altigen}`, `${timeObj.hours} Saat ${timeObj.minutes} Dakika ${timeObj.seconds} Saniye`)
    .addField(`${client.emoji.altigen} **Sebep:** ${client.emoji.altigen}`, REASON).setFooter(msg.author.username, msg.author.avatarURL()))}});

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\ Diğerleri //━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\
client.on("guildMemberAdd", async member => {
  if (member.user.bot) {member.kick()};
  if (member.roles.cache.get('693950335030394881')) return; if (member.roles.cache.get('681102788662394880')) return;

  let zaman = new Date().getTime() - member.user.createdAt.getTime(); var takizaman = [];
  if (zaman < 604800000) {takizaman = `${client.emoji.uyar} \`\Kanında Enfeksiyon Bulundu, Tehlikeli!\`\ ${client.emoji.uyar}`
  } else {takizaman = `${client.emoji.dogru} \`\Kanı Temiz, Gizli Krallığa Uygun!\`\ ${client.emoji.dogru}`}
  const gecen = moment.duration(zaman).format("`Y [Yıl,] D [Gün,] H [Saat,] m [Dakika]`")
  const vakit = moment(member.user.createdAt).format("`h:mm:ss  D MMMM Y W [Oluşmuş]`")

  var hg = new Discord.MessageEmbed()
    .setAuthor(member.user.username, member.user.avatarURL())
    .setThumbnail(member.user.avatarURL()).setColor('RANDOM')
    .setDescription(`${client.emoji.elmas} **Hoş Geldin!** Seninle Beraber **${member.guild.memberCount}** Kişiyiz ${client.emoji.elmas}\n${client.emoji.elmas} ${vakit} ${client.emoji.elmas}\n${client.emoji.ileri} ${gecen} ${client.emoji.ileri}\n${takizaman}\n${client.emoji.bildirim} Kayıt için Yetkilileri Etiketlemen Yeterli ${client.emoji.bildirim}`)
    .setImage(`https://media1.tenor.com/images/75da925d9a0aa15e970464d7d338a533/tenor.gif?itemid=7320950`).setThumbnail(client.ayar.logo)

  await client.channels.cache.get('663099948648235038').send(`||${client.emoji.elmas}  ${member}  <@&693952241031184415>  ${client.emoji.elmas}||`);
  await client.channels.cache.get('663099948648235038').send(hg);

  await member.setNickname(`§ | ${member.user.username} | Yaş`);
  await member.guild.setName(`ⓈMG CITY | ${member.guild.memberCount}`);

  {if (!member.roles.cache.get('680741837748961305')) {member.roles.add('680741837748961305')}};
  {if (zaman < 604800000) member.roles.add("747763109351129168")};
  {if (!tumHarfler('a', 'z').some(harf => member.user.username.split("").includes(harf))) {member.setNickname("§ | Yasaklı Karakter")
    } else {return} function tumHarfler(charA, charZ) {let a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {a.push(String.fromCharCode(i))} return a}}
});

client.on("guildMemberRemove", (member) => {
  member.guild.setName(`ⓈMG CITY | ${member.guild.memberCount}`)})

client.on('messageDelete', async msg => {
	var k = msg.channel.id
  if (msg.author.bot) return; if (msg.channel.type === "dm") return;
	if (k === '729719649499086888') return;
	var silindi = new Discord.MessageEmbed()
  .addField("**Kullanıcı:**", msg.author.tag, true)
  .addField("**Kullanıcı ID:**", msg.author.id, true)
  .addField("**Kanal:**", msg.channel.name, true)
  .addField("**Silinen Mesaj:**","```"+ msg.content +"```")
  .setFooter(msg.guild.name+`  •  Bir Mesaj Silindi!`,`${client.ayar.logo}`)
	.setColor('RANDOM').setThumbnail(msg.author.avatarURL()).setTimestamp()
  await client.channels.cache.get('668389364291862528').send(silindi)});

tempChannels.registerChannel("693928588956794934", {
  childCategory: "747866638900134004",
  childAutoDelete: true,
  childMaxUsers: 1,
  childFormat: (member, count) => `#${count} | ${member.user.username} Odası`
});

tempChannels.registerChannel("693928587400577095", {
  childCategory: "747866638900134004",
  childAutoDelete: true,
  childMaxUsers: 2,
  childFormat: (member, count) => `#${count} | ${member.user.username} Odası`
});

tempChannels.registerChannel("693928587883184139", {
  childCategory: "747866638900134004",
  childAutoDelete: true,
  childMaxUsers: 3,
  childFormat: (member, count) => `#${count} | ${member.user.username} Odası`
});

tempChannels.registerChannel("693928588176785539", {
  childCategory: "747866638900134004",
  childAutoDelete: true,
  childMaxUsers: 4,
  childFormat: (member, count) => `#${count} | ${member.user.username} Odası`
});

client.on('message', async message => {
if (message.content === 'gir') {
client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author))}});
