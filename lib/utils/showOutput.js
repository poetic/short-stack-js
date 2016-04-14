var chalk = require('chalk');

exports.exec = function(error, stdout) {
  console.log(chalk.blue(stdout));
  if (error !== null) {
    console.log(chalk.red(error));
  }
}
