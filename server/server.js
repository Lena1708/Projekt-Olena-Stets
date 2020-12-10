let http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'origin, content-type, accept'
    });

    res.write('Simple server todo');
    res.end();
   }).listen(3000, function(){
    console.log("server start at port 3000");
   });
   