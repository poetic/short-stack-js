exports.modify = function(fs, object, role, intent) {
  var i = 0,
  roleFound = false,
  rolesLength = object[0].roles.length;

  if (rolesLength === 0) {
    sync(fs, role, roleFound, i, intent);
  } else {
    object[0].roles.forEach(function(value) {
      i++;
      if (role === value) {
        roleFound = true;
        sync(fs, role, roleFound, i, intent);
      } 
      if ((rolesLength === i) && (!roleFound)) {
        sync(fs, role, roleFound, i, intent);
      }
    });
  }
}

function sync(fs, role, roleFound, i, intent) {
  var objectFile = fs.readFileSync('./.short-stack/stack.json'),
  objectConfig = JSON.parse(objectFile),
  objectRoles = objectConfig[0].roles,
  updateYaml = require('js-yaml'),
  configJSON;

  if (!roleFound && (intent === 'add')) {
    objectRoles.push(role);
  } else {
    if (intent === 'remove' && (roleFound)) {
      objectRoles.splice((i - 1), 1);
    } else {
      return;
    }
  }
  configJSON = JSON.stringify(objectConfig, null, 2);
  fs.writeFileSync('./.short-stack/stack.json', configJSON);
  fs.writeFile('./.short-stack/stack.yml', updateYaml.dump(objectConfig));
}
