exports.exec = function (addRole, role, error, stdout, stderr) {

  addRole('ansible-galaxy install ' + role, function(error, stdout, stderr) {
    console.log(stdout);
    if (error !== null) {
      console.log('error: ' + error);
    }

    addRole('ansible-playbook /usr/local/etc/ansible/roles/' + role + '/tests/stack.yml', function(error, stdout, stderr) {
      console.log(stdout);
      if (error !== null) {
        console.log('error: ' + error);
      }
    });
  });

  return addRole;
};
