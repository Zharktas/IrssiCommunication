var exec = require('child_process').exec;
var pty = require('pty.js');
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.coffee = function(req, res){
    var term = pty.spawn('bash', [], {
        name: 'xterm-color',
        cols: 80,
        rows: 30,
        cwd: process.env.HOME,
        ebv: process.env
    });

    term.on('data', function(data){
       console.log(data);
    });

    function done(err, stdout, stderr){
        //console.log(stdout);
        res.json({success: true});
    }

    term.write('df -h\r');

    console.log(term.process);
}