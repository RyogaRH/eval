//Comando handler

const Discord = require("discord.js");
const moment = require("moment");
module.exports = {
    nombre: "eval",
    alias: ["evaluar"],
    run: (client, message, args) => {
      if(message.author.id !== 'tu_id') return message.channel.send("Solo el creador del bo puede usar esto")
      let limit = 1950;
        try{ 
            let code = args.join(' ');
            let evalued = eval(code);
            if (typeof evalued !== "string")
            evalued = require("util").inspect(evalued);
            let txt = "" + evalued;
            if (txt.length > limit) {
                const embedA = new Discord.MessageEmbed()
                .setAuthor("Evaluacion completada", client.user.displayAvatarURL)
                .addField("Entrada", `\`\`\`js\n${args}\n\`\`\``)
                .addField("Salida", `\`\`\`js\n ${txt.slice(0, limit)}\n\`\`\``)
                .setColor("RANDOM")
             message.channel.send(embedA);
            } else {
                const embedB = new Discord.MessageEmbed()
              .setAuthor("Evaluacion completada", client.user.displayAvatarURL)
              .addField("Entrada", `\`\`\`js\n${args}\n\`\`\``)
              .addField("Salida", `\`\`\`js\n ${txt}\n\`\`\``)
              .setColor("RANDOM")
              message.channel.send(embedB);
            }
        } catch (err) {
            const embed = new Discord.MessageEmbed()
            .setAuthor("Falla en la evaluacion", client.user.avatarURL)
            .addField("Entrada", `\`\`\`js\n${args}\n\`\`\``)
            .addField("Salida", `\`\`\`js\n${err}\n\`\`\``)
            .setColor("RANDOM")
          message.channel.send(embed);
            }
    }
}

