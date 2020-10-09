const { Client, MessageEmbed } = require('discord.js');
const client = new Client();

const { prefix, token } = require('./config.json');

client.on('ready', () => {
    // console.log(`Logged in as ${client.user.tag}!`);
    console.log('Secretaria a tu servicio');
});

// accion y materia 
// ej: apunte recursos 
// ej : clase (link)recursos 

client.on('message', message => {

    // no tiene prefijo del comando o el autor del mensaje es el bot
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    // quito el prefijo
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    console.log(args)
    const command = args.map(arg => arg.toLocaleLowerCase());
    // command[0] = accion, command[1] = materia 

    if (message.content === `${prefix}ping`) {
        message.channel.send('Pong.');
    } else if (message.content === `${prefix}beep`) {
        message.channel.send('Boop.');
    }

    if (message.content === `${prefix}ejemplo`) {
        const embed = new MessageEmbed()
            .setTitle('APUNTE: Recursos')
            .setColor('ORANGE')
            .setDescription('https://docs.google.com/document/d/1n5zrD9G2BMEi-B-B6unI4cZGUC74a9IoIGAd_WYbLb4/edit');

        message.channel.send(embed);
    }
});

client.login(token);