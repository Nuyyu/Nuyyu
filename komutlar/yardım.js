const Discord = require('discord.js');
const { stripIndents } = require('common-tags');

exports.run = (client, message, args) => {
	const help = {}
	client.commands.forEach((command) => { const cat = command.ayar.kategori;
	if (!help.hasOwnProperty(cat)) help[cat] = []; help[cat].push(`\`${command.ayar.komut}\``)})
	var str = ''; for (const kategori in help) {
	str += `${client.emoji.elmas} **${kategori.charAt(0).toUpperCase() + kategori.slice(1)} ${client.emoji.elmas}\n** ${help[kategori].join(" | ")}\n\n`}

	const embed = new Discord.MessageEmbed()
	  .setAuthor(`${client.user.username} Komutları `)
		.setDescription(`${client.emoji.tamir} Komut Listesi ${client.emoji.tamir}\n\n${str}`)
		.setColor(client.ayar.klasik)
    .setFooter(`» ${client.commands.size} Toplam Komut bulunuyor`)
    .setThumbnail(client.ayar.logo)
	message.channel.send(embed)}

exports.ayar = {
  komut: 'yardım',
  aktif: true,
  sunucu: false,
  yetki: 0,
  yan: ['y','help'],
  kategori: 'Kullanıcı',
  kullan: 'yardım (Komut)',
  bilgi: 'Yardım Menüsünü Gösterir'
}
