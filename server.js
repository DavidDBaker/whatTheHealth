    let http = require('http');

    let PORT = 8080;

    function handleRequest(req,res){
        res.end(`It works!! Path hit: ${req.url}`);
    }

    let server = http.createServer(handleRequest);

    server.listen(PORT, function(){
        console.log(`Server listening on: http://localhost:${PORT}`);
    });