
module.exports = {
    name: 'gender',
    description: 'Change your gender on your profile',
    usage: '//gender <gender>',
    cooldown: 1,
    execute(client, message, args, sql) {

        var gender = args[0];           // args[0] == what you say after the command
        var gender = gender.toLowerCase();

        if (gender == 'male') {     // CHECKS IF SOMEONE SAID //GENDER MALE

            var data = `UPDATE profile
		SET gender = 'Male'
		WHERE id = ${message.author.id};`   // UPDATE GENDER IN FILES

            sql.exec(data);

            return message.reply(`Success! Your gender has been set to ${gender}`); //response

        } else if (gender == 'female') {    // CHECKS IF SOMEONE SAID //GENDER FEMALE

            var data = `UPDATE profile
		SET gender = 'Female'
		WHERE id = ${message.author.id};`   // UPDATE GENDER IN FILES

            sql.exec(data);

            return message.reply(`Success! Your gender has been set to ${gender}`); //response

        } else if (gender == 'other') {    // CHECKS IF SOMEONE SAID //GENDER OTHER

            var data = `UPDATE profile
		SET gender = 'Other'
		WHERE id = ${message.author.id};`       // UPDATE GENDER IN FILES

            sql.exec(data);

            return message.reply(`Success! Your gender has been set to ${gender}`); //response

        } else {

            return message.reply(`Please select a correct gender (Female/Male/Other).`); //response if incorrect

        }
    },
};

