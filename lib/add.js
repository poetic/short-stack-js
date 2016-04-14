var showOutput = require('./utils/showOutput');
exports.exec = function (addRole, role, run, object, fs, fd, error, stdout, stderr) {
  var loadConfig = require('./utils/loadConfig'),
  intent = 'add';

  loadConfig.modify(fs, object, role, intent);

  addRole('ansible-galaxy install ' + role, function(error, stdout, stderr) {
    showOutput.exec(error, stdout);
    if (run) {
      addRole('ansible-playbook ./stack.d/roles/' + role + '/tests/stack.yml', function(error, stdout, stderr) {
        showOutput.exec(error, stdout);
      });
    }
  });

  return addRole;
};
