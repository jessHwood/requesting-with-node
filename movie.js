function getMovie(movieTitle) {
	var request = require('request');
	request('https://www.omdbapi.com/?t=' + movieTitle, function(error, response, body){
			console.log(body);
	});
}

module.exports = getMovie;


