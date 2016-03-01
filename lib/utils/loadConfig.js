exports.modify = function(fs, object, role) {
  var i = 0,
  roleFound = false,
  rolesLength = object.roles.length;

  if (rolesLength === 0) {
    sync(fs, role, roleFound, i);
  } else {
    object.roles.forEach(function(value) {
      i++;
      if (role == value) {
        roleFound = true;
        sync(fs, role, roleFound, i);
      } 
      if ((rolesLength === i) && (!roleFound)) {
        sync(fs, role, roleFound, i);
      }
    });
  }
}

function sync(fs, role, roleFound, i) {
  var objectFile = fs.readFileSync('./.short-stack/stack.json'),
  objectConfig = JSON.parse(objectFile),
  objectRoles = objectConfig.roles,
  updateYaml = require('js-yaml'),
  configJSON;

  if (!roleFound) {
    objectRoles.push(role);
  } else {
    objectRoles.splice((i - 1), 1);
  }
  configJSON = JSON.stringify(objectConfig, null, 2);
  fs.writeFileSync('./.short-stack/stack.json', configJSON);
  fs.writeFile('./.short-stack/stack.yml', updateYaml.dump(objectConfig));
}
