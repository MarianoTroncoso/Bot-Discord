// 1 hace referencia a la posicion del arreglo args donde se tienen los parametros
// 1 = 2do parametro
// ej: "!get casa", "!set foco", "!list ventana"

const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'excepcion1',
	description: 'message that appears when the 2nd parameter is not recognized',
    execute (message,  args) {

        const embed = new MessageEmbed()
            .setTitle('Comando no válido')
            .setColor('RED')
            .addField('Para opciones relacionadas con apuntes, utilzar: ', 'apunte')
            .addField('Para opciones relacionadas con clases, utilzar: ', 'clase')
            // .setDescription('Parámetros disponibles:\n' + opciones);

        message.channel.send(embed);
    }
    
}