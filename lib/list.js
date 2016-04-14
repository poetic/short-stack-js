var showOutput = require('./utils/showOutput');

exports.exec = function(lister, error, stdout, stderr) {
	lister('ansible-galaxy list', function(error, stdout, stderr) {
    showOutput.exec(error, stdout);
	});
}
