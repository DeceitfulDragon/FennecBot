const request = require('request');
const apiURL = 'https://www.humblebundle.com/androidapp/v2/service_check'
const { stripIndents } = require('common-tags');

exports.run = (client, message) => {

    request(apiURL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var result = JSON.parse(body)
            if (!result.length) return message.say("There doesn't appear to be a humble bundle currently!");
            if (result.length > 1) {
                return message.channel.send(stripIndents`
					I found **${result.length}** bundles for you!
					${result.map(bundle => `**${bundle.bundle_name}:** <${bundle.url}>`).join('\n')}
				`);
            }
            const hb = result[0];
            return message.channel.send(stripIndents`
				The current humble bundle is **${hb.bundle_name}**!
				${hb.url}
			`);
        }
    })
};