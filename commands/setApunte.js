const { MessageEmbed } = require('discord.js');
const Apunte = require('../models/apunte');

module.exports = {

	name: 'setApunte',
	description: 'set the apunte',
	async execute(message, args) {

       // arreglo de materias
        const materias = (await Apunte.find({}).select('materia -_id')).map( x => x.materia)

        // la materia si existe
        if(materias.includes(args[2])){

            // actualizo la url 
            const newApunte = new Apunte({
                materia: args[2],
                url: args[3]
            })
    
            newApunte.save()
                .then(() => console.log('Apunte actualizado!'))
                .catch( err => console.log(err))
    
            const embed = new MessageEmbed()
                .setTitle('APUNTE ACTUALIZADO: ' + args[2])
                .setColor('ORANGE')
                .setDescription(args[3]);
    
            message.channel.send(embed);
        } else {
            // la materia no existe

            // controlo si puedo agregar mas materias (limit 5)

            const cantMaterias = await Apunte.countDocuments({}, ( err, count) => { count })

            if(cantMaterias < 6){

                // guardo 
                const newApunte = new Apunte({
                    materia: args[2],
                    url: args[3]
                })
        
                newApunte.save()
                    .then(() => console.log('Nuevo Apunte Guardado!'))
                    .catch( err => console.log(err))
        
                const embed = new MessageEmbed()
                    .setTitle('NUEVO APUNTE GUARDADO: ' + args[2])
                    .setColor('ORANGE')
                    .setDescription(args[3]);
        
                message.channel.send(embed);
            } else {

                // error, no se pueden agregar mas materias
                const embed = new MessageEmbed()
                .setTitle('NO SE PUEDEN AGREGAR MAS MATERIAS')
                .setColor('RED')
                message.channel.send(embed);
            }

        }   
	}
};