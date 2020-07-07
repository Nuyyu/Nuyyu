const Discord = require('discord.js');

exports.run = function(client, message, args) {
  if(message.channel.id === "668389364291862528") message.channel.send(`Sil`)
  var emojiid = client.emojis.get("664439029135310849")
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply(
      "**Bu Komutu Kullanmak İçin __Mesajları Yönet__ Yetkisinie Sahip Olmalısın**"
    );
  if (!args[0])
    return message.channel.send(
      "**Lütfen Silinecek Mesaj Miktarını Yazın!**"
    );
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel
      .send(
        `${emojiid}${
          args[0]
        } **Adet Mesaj Başarıyla Temizlendi!** `
      )
      .then(msg => msg.delete(5000));
  });
};

exports.conf = {
  enabled: true,
  aliases: ["temizle"],
  permLevel: 0
};

exports.help = {
  name: "sil",
  description: "Belirlenen miktarda mesajı siler.",
  usage: "!sil <miktar>"
};
