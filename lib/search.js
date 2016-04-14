var showOutput = require('./utils/showOutput');

exports.exec = function (searchQuery, query, error, stdout, stderr) {
  if (query == undefined) {
    query = ' ';
  }
  searchQuery('ansible-galaxy search short-stack ' + query, function(error, stdout, stderr) {
    console.log(query);
    showOutput.exec(error, stdout);
  });

  return searchQuery;
};
