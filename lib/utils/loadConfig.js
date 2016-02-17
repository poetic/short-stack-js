exports.append = function(fs, object, role) {
  var i = 0,
  rolesLength = object.roles.length;
  object.roles.forEach(function(value) {
    i++;
    if (role == value) {
      return;
    }
    if (rolesLength == i) {
      var objectFile = fs.readFileSync('./.short-stack/stack.json'),
      objectConfig = JSON.parse(objectFile),
      objectRoles = objectConfig.roles,
      configJSON;

      objectRoles.push(role);
      configJSON = JSON.stringify(objectConfig, null, 2);
      fs.writeFileSync('./.short-stack/stack.json', configJSON);
    }
  });
}

exports.sync = function(fs, fd, buffer) {
	fs.truncate(fd, 0, function(){console.log('done')});
	fs.writeFile(fd, buffer, 0, buffer.length);
	fs.close(fd);
}