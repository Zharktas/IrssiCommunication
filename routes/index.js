var pty = require('pty.js');
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.sendMsg = function (req, res) {
    var term = pty.spawn('bash', [], {
        name:'xterm-color',
        cols:80,
        rows:30,
        cwd:process.env.HOME,
        ebv:process.env
    });

    term.on('data', function (data) {
        //console.log(data);
    });

    function done() {
        res.json({success:true});
    }

    var msg = req.query.msg;
    var receiver = req.query.receiver;

    if ( !msg || !receiver){
        res.json({success: false});
        return;
    }

    term.write('screen -x\r');
    term.write('\x010\r');
    term.write('/msg ' + receiver + ' ' + msg + '\r');
    term.write('\x01d\r');
    term.write('logout\r');
    done();
    //console.log(term.process);
};
