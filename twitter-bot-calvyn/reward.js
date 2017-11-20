// Dependencies =========================
var twit = require('twit');
var config = require('./config');

// BOT ==========================
var Twitter = new twit(config);

var getTimeline = function() {
  var params = {
      screen_name: ''
  }
  Twitter.get('statuses/user_timeline', params, function(err,data){
    console.log('/////////////////////////////');
    for(var prop in data){
      console.log('|||-------------------------|||');
      var tweet = data[prop];
      console.log(tweet['created_at']);
      console.log(tweet['id_str']);
      console.log(tweet['retweet_count']);
      console.log(tweet['favorite_count']);
      console.log(tweet['text']);
    }
  });
}

// getTimeline every 3 seconds
getTimeline();
setInterval(getTimeline, 3000);
