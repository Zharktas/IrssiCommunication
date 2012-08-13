var exec = require('child_process').exec;

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.coffee = function(req, res){
    function log(err, stdout, stderr){
        console.log(stdout);
    }

    exec('df -h', log);
}