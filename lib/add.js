exports.exec = function (addRole, role, run, error, stdout, stderr) {

  addRole('ansible-galaxy install ' + role + '; printf "    - ' + role + '\n' + '" >> .short-stack/stack.yml', function(error, stdout, stderr) {
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
