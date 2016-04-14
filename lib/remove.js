exports.exec = function(fs, object, role) {
	var loadConfig = require('./utils/loadConfig'),
	intent = 'remove';
	loadConfig.modify(fs, object, role, intent);
}
