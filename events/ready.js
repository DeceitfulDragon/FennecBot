const activity = require('../assets/json/activities.json')
const chalk = require('chalk');
module.exports = (client, message) => {

        // Notifies that FennecBot has logged in, if message is not seen in console, check token or internet connection.
    console.log(chalk.blue.bold(`----------------------------------------------`));
    console.log(chalk.blue.bold(`< LOGGED IN || Current Users: ${client.users.size}, Current Servers: ${client.guilds.size} >`));
    console.log(chalk.blue.bold(`< MADE BY FEARTHERENEGADE#7276 >`));

        // Activity of FennecBot
        const sActivity = activity[Math.floor(Math.random() * activity.length)];
        client.user.setActivity(sActivity.text, { type: sActivity.type });

};