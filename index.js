const T = require('twit');
const config = require('./config.json');
const { consumerkey, consumersecret, token, secrettoken } = config;
const schedule = require('node-schedule');
const odklejeniec = 'RandomBruce';

var status;

const Twit = new T({
    consumer_key: consumerkey,
    consumer_secret: consumersecret,
    access_token: token,
    access_token_secret: secrettoken
})

function generatePercentage() {
    var unglued = Math.floor(Math.random() * 100);
    status = `${odklejeniec} is ${unglued}% unglued `
}

const post_tweet = schedule.scheduleJob('13 16 * * *', function() {
    generatePercentage();

    Twit.post('statuses/update', {status: status}, function(err, data, response) {
        console.log(data)
    });
})
