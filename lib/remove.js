exports.exec = function(fs, object, role) {
	var loadConfig = require('./utils/loadConfig');
	loadConfig.modify(fs, object, role);
}
