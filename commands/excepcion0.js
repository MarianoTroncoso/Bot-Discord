
// 0 hace referencia a la posicion del arreglo args donde se tienen los parametros
// 0 = 1er parametro
// ej: !messi 

const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'excepcion0',
	description: 'message that appears when the 1st parameter is not recognized',
    execute (message,  args) {

        console.log(args)

        // 0: get, set, help, list

        const embed = new MessageEmbed()
            .setTitle('Comando no encontrado')
            .setColor('RED')
            .setDescription('El comando utilizado no es válido\n\nUtilizar el comando "!help" para obtener ayuda' );

        message.channel.send(embed);
    }
    
}