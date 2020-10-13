const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
	description: 'helps',
    execute (message,  args) {

        const embed = new MessageEmbed()
            .setTitle('¿Necesitas ayuda?')
            .setColor('GREEN')
            .setDescription('OBTENER EL ENLACE A UN APUNTE:\n!get apunte [materia]\n(para conocer las materias cuyos apuntes están disponibles utilizar: !list materia)\n\nOBTENER EL ENLACE A UNA CLASE VIRTUAL:\n!get clase [materia]\n(para conocer las materias cuyas clases están disponibles utilizar: !list clase)\n\nPARA SETEAR ALGO habla con petito :D' );

        message.channel.send(embed);
    }
    
}