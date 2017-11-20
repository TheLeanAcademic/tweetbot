// Dependencies =========================
var twit = require('twit');
var config = require('./config');

// STREAMING BOT ==========================
var Twitter = new twit(config);
var stream = Twitter.stream('statuses/filter',
            { track: 'data', language: 'en' });

// GET STREAMING
stream.on('tweet', function (tweet) {
  console.log(tweet['created_at']);
  console.log(tweet['text']);
})
