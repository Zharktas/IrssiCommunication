var exec = require('child_process').exec;

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.coffee = function(req, res){
    function done(err, stdout, stderr){
        //console.log(stdout);
        res.json({success: true});
    }

    exec('screen -x', function (err, stdout, stderr){
        exec('/win 1', done);
    });
}