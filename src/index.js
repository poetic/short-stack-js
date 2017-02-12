const program = require('commander');
const shell = require('shelljs');

const version = require('../package.json').version;

//const yaml = require('js-yaml');
//const fs = require('fs');
//const object = require('../.short-stack/stack.json');
//const doc = './.short-stack/stack.yml';
//const fd = fs.openSync(doc, 'a+');
//const jsontoyaml = yaml.dump(object);
//let error, stdout, stderr;

program
  .version(version)

program
  .command('list')
  .alias('l')
  .description('list current layers in your stack')
  .action(() => {
    shell.exec('ansible-galaxy list');
  });

program
  .command('search [query]')
  .alias('s')
  .description('searches for short-stack layers')
  .action((query) => {
    if (!query) {
      console.log('You must provide a search query.')
      process.exit(1);
    }

    shell.exec(`ansible-galaxy search ${query} --galaxy-tags short-stack`);
  });

program
  .command('install')
  .description('installs your stack')
  .action(() => {
    //shell.exec('ansible-playbook');
  });

//program
  //.command('add [role]')
  //.description('add role to stack')
  //.option("-r, --run", "install this role now")
  //.action(function(role, options) {
    //var add = require('../lib/add'),
    //run = options.run,
    //addRole = require('child_process').exec;

    //add.exec(addRole, role, run, object, fs, fd, error, stdout, stderr);
  //});

//program
  //.command('remove [role]')
  //.alias('rm')
  //.description('removes a layer from your stack')
  //.action(function (role) {
    //var remove = require('../lib/remove');
    //console.log('removing %s', role);

    //remove.exec(fs, object, role);
  //});
//


program.parse(process.argv);

// Output help if no command is specified
if (!process.argv.slice(2).length) program.outputHelp();
