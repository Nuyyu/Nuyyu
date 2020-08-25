const Discord = require('discord.js');
const { stripIndents } = require('common-tags');

exports.run = (client, message, args) => {
if (!args[0]) {
	const help = {}
	client.commands.forEach((command) => { const cat = command.ayar.kategori;
	if (!help.hasOwnProperty(cat)) help[cat] = []; help[cat].push(`\`${command.ayar.komut}\``)})
	var str = ''; for (const kategori in help) {
	str += `${client.emoji.elmas} **${kategori.charAt(0).toUpperCase() + kategori.slice(1)} ${client.emoji.elmas}\n** ${help[kategori].join(" | ")}\n\n`}

	const embed = new Discord.MessageEmbed()
	  .setAuthor(`${client.user.username} Komutları `)
		.setDescription(`${client.emoji.tamir} Komut Listesi ${client.emoji.tamir}\nKomut hakkında bilgi için ${client.ayar.prefix}yardım {KomutAdı}\n\n${str}`)
		.setColor(client.ayar.klasik)
    .setFooter(`» [Website (Yapılıyor)]() » ${client.commands.size} Toplam Komut bulunuyor`)
    .setThumbnail(client.ayar.logo)
	message.channel.send(embed); return}

  let command = args[0]
	if (client.commands.has(command)) {command = client.commands.get(command)

  var yetki = command.ayar.yetki.toString()
		.replace("0", `Yetki gerekmiyor.`)
		.replace("1", `Yetkili olman gerekli.`)
		.replace("2", `Üyeleri At-Engelle yetkisi gerekiyor.`)
		.replace("3", `Yönetici yetkisi gerekiyor.`)
		.replace("4", `Bu Komut Naz'a Özel Tasarlandı`)

  const embed = new Discord.MessageEmbed()
			.addField('Komut', command.ayar.komut, false)
			.addField('Açıklama', command.ayar.bilgi, false)
			.addField('Kullanabilmek için Gerekli Yetki', `\`${yetki}\``)
			.addField('Doğru Kullanım', `\`${client.ayar.prefix}${command.ayar.kullan}\``)
			.addField('Alternatifler', command.ayar.yan[0] ? command.ayar.yan.join(', ') : 'Bulunmuyor')
			.setColor("RANDOM")
      .setThumbnail(client.ayar.logo)
		message.channel.send({embed})}
else {
  const embed = new Discord.MessageEmbed()
	  .setDescription(`${client.emoji.uyar} ${args[0]} diye bir komut bulunamadı. Lütfen geçerli bir komut girin. Eğer komutları bilmiyorsanız ${client.ayar.prefix}yardım yazabilirsiniz.`)
		.setColor("RANDOM")
	message.channel.send({embed})}}

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
