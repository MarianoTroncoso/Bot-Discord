const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'listApunte',
	description: 'list all the apuntes',
    execute (message,  args) {

        const embed = new MessageEmbed()
            .setTitle('NO IMPLEMENTADO AUN')
            .setColor('RED')
            // .setDescription('OBTENER EL ENLACE A UN APUNTE:\n!get apunte [materia]\n(para conocer las materias cuyos apuntes están disponibles utilizar: !list apunte)\n\nOBTENER EL ENLACE A UNA CLASE VIRTUAL:\n!get clase [materia]\n(para conocer las materias cuyas clases están disponibles utilizar: !list clase)\n\nPARA SETEAR ALGO habla con petito :D' );

        message.channel.send(embed);
    }
    
}