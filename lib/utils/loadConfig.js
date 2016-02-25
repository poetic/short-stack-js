exports.append = function(fs, object, role) {
  var i = 0,
  roleFound = false,
  rolesLength = object.roles.length;

  if (rolesLength === 0) {
    sync(fs, role);
  } else {
    object.roles.forEach(function(value) {
      i++;
      if (role == value) {
        roleFound = true;
      } 
      if ((rolesLength === i) && (!roleFound)) {
        sync(fs, role);
      }
    });
  }
}

function sync(fs, role) {
  var objectFile = fs.readFileSync('./.short-stack/stack.json'),
  objectConfig = JSON.parse(objectFile),
  objectRoles = objectConfig.roles,
  updateYaml = require('js-yaml'),
  configJSON;

  objectRoles.push(role);
  configJSON = JSON.stringify(objectConfig, null, 2);
  fs.writeFileSync('./.short-stack/stack.json', configJSON);
  fs.writeFile('./.short-stack/stack.yml', updateYaml.dump(objectConfig));
}
