const { MessageEmbed } = require('discord.js');
const Clase = require('../models/clase');

module.exports = {

	name: 'setClase',
	description: 'set the clase',
	async execute(message, args) {

       // arreglo de materias
        const materias = (await Clase.find({}).select('materia -_id')).map( x => x.materia)

        // la materia si existe
        if(materias.includes(args[2])){

            // tiene password ?
            if(args[4] != null){
                var password = args[4]
            } else {
                var password = 'No necesaria';
            }

            // actualizo la url 
            const newClase = new Clase({
                materia: args[2],
                url: args[3],
                pass: password
            })
    
            newClase.save()
                .then(() => console.log('Clase actualizada!'))
                .catch( err => console.log(err))
    
            const embed = new MessageEmbed()
                .setTitle('CLASE ACTUALIZADA: ' + args[2])
                .setColor('ORANGE')
                .setDescription(args[3]);
    
            message.channel.send(embed);
        } else {
            // la materia no existe

            // controlo si puedo agregar mas materias (limite = 5)

            const cantMaterias = await Clase.countDocuments({}, ( err, count) => { count })

            if(cantMaterias < 11){

                // guardo 

                // tiene password ?
                if(args[4] != null){
                    var password = args[4]
                } else {
                    var password = 'No necesaria';
                }

                const newClase = new Clase({
                    materia: args[2],
                    url: args[3],
                    pass: password
                })
        
                newClase.save()
                    .then(() => console.log('Nueva Clase Guardada!'))
                    .catch( err => console.log(err))
        
                const embed = new MessageEmbed()
                    .setTitle('NUEVA CLASE GUARDADA: ' + args[2])
                    .setColor('ORANGE')
                    .setDescription(args[3]);
        
                message.channel.send(embed);
            } else {

                // error, no se pueden agregar mas materias
                const embed = new MessageEmbed()
                .setTitle('NO SE PUEDEN AGREGAR MAS CLASES')
                .setColor('RED')
                message.channel.send(embed);
            }

        }   
	}
};