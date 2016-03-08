exports.exec = function(lister, error, stdout, stderr) {
	lister('ansible-galaxy list', function(error, stdout, stderr) {
		console.log(stdout);
		if (error !== null) {
	      console.log('error: ' + error);
	    }
	});
}