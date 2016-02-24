exports.exec = function (addRole, role, run, object, fs, fd, error, stdout, stderr) {
  var loadConfig = require('./utils/loadConfig');
  loadConfig.append(fs, object, role);

  addRole('ansible-galaxy install ' + role, function(error, stdout, stderr) {
    console.log(stdout);
    if (error !== null) {
      console.log('error: ' + error);
    }

    if (run) {
      addRole('ansible-playbook /usr/local/etc/ansible/roles/' + role + '/tests/stack.yml', function(error, stdout, stderr) {
        console.log(stdout);

        if (error !== null) {
          console.log('error: ' + error);
        }
      });
    }
  });

  return addRole;
};
