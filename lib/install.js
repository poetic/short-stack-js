exports.exec = function(installer, error, stdout, stderr) {
	installer('ansible-playbook ./.short-stack/stack.yml', function(error, stdout, stderr) {
		console.log(stdout);
		if (error !== null) {
	      console.log('error: ' + error);
	    }
	});
}
