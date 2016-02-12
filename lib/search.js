exports.exec = function (searchQuery, query, error, stdout, stderr) {
  if (query == undefined) {
    query = ' ';
  }
  searchQuery('ansible-galaxy search short-stack ' + query, function(error, stdout, stderr) {
    console.log(query);
    console.log(stdout);
    if (error !== null) {
      console.log('error: ' + error);
    }
  });

  return searchQuery;
};
