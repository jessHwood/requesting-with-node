function getMovie(movieTitle) {
	var request = require('request');
	request('https://www.omdbapi.com/?t=' + movieTitle, function(error, response, body){
		var parsed = JSON.parse(body);
			console.log(parsed);
			console.log('\n');
	});
}

module.exports = getMovie;


