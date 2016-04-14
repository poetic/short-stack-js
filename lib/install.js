var showOutput = require('./utils/showOutput');

exports.exec = function(installer, error, stdout, stderr) {
	installer('ansible-playbook ./.short-stack/stack.yml', function(error, stdout, stderr) {
    showOutput.exec(error, stdout);
	});
}
