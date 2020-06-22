const Discord = require("discord.js");

exports.run = async (client, message, args, ops) => {
  message.react("a:dogru:664439029135310849");
  if (!message.member.roles.find("id", "693952241031184415")) {
    return message
      .reply("<a:uyari:659786593862680580>  **Yeterli Yetkiye Sahip Değilsin**")
      .then(m => m.delete(10000));
  }
  let Hedef = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!Hedef) return message.channel.send("Bir kullanıcı girin.");

  await Hedef.addRole("680421279236489219");
  await Hedef.removeRole("680741837748961305");
  const nick = args[1];
  const yas = args[2];
  message.guild.member(Hedef).setNickname(`FF | ${nick} | ${yas}`);

  let baglanti1 = new Discord.RichEmbed()
    .setTitle(
      "<a:dogru:664439029135310849> <a:gir:664439299877371909> Yeniden Aramıza Hoş Geldin Kral <a:gir:664439299877371909> <a:dogru:664439029135310849>"
    )
    .setColor("#00ffff")
    .setDescription(
      "<a:hypesquad:664765634906816512> " +
        Hedef +
        " Sunucuya Renk kattığın için teşekkürler <a:hypesquad:664765634906816512>\n<a:elmas:669054308733550593> <#678701843425001495> Kuralları Okumadan geçme <a:elmas:669054308733550593>\n<a:kelebek2:664761941381611540> Senden daha karizmatik görmedim, bu dünyada <a:kelebek2:664761941381611540>"
    )
    .setThumbnail(message.guild.iconURL);
  let baglanti2 = new Discord.RichEmbed()
    .setTitle(
      "<a:dia:669054299539505152>  Yeni Erkek Kullanıcı Kaydı  <a:dia:669054299539505152>"
    )
    .setColor("#00ffff")
    .addField(
      "<a:kalplineon:664765671674216450> Kullanıcı <a:kalplineon:664765671674216450>",
      `${Hedef}`,
      true
    )
    .addField(
      "<a:hypesquad:664765792285622312> Yetkili <a:hypesquad:664765792285622312>",
      `${message.author}`,
      true
    )
    .setThumbnail(message.guild.iconURL);
  let Kanal1 = message.guild.channels.find(`id`, "663099927777247246");

  Kanal1.send(baglanti1);
  return message.channel.send(baglanti2);
};

exports.conf = {
  enabled: true,
  aliases: ["e", "bay", "men"]
};

exports.help = {
  name: "erkek"
};
