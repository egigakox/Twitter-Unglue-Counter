const T = require('twit');
const config = require('./config.json');
const { consumerkey, consumersecret, token, secrettoken } = config;
const schedule = require('node-schedule');
const odklejeniec = 'RandomBruce';
const minute = 00;
const hour = 15;
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

const post_tweet = schedule.scheduleJob(`${minute} ${hour} * * *`, function() {
    generatePercentage();

    Twit.post('statuses/update', {status: status}, function(err, data, response) {
        console.log(data)
    });
})
