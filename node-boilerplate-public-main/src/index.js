var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    const url = req.url.split("?")[0];
    console.log(url);

    if(url==="/"){
        res.writeHead(200, {
            "Content-type": "text/plain",
            "Keep-Alive": 100
        });
        res.write(`Hello!`);
        res.end();
    }
    else if(url==="/welcome"){
        res.writeHead(200, {
            "Content-type": "text/plain",
            "Keep-Alive": 100
        });
        res.write(`Welcome to Dominos!`);
        res.end();
    }
    else if(url==="/contact"){
        res.writeHead(200, {
            "Content-type": "text/json",
            "Keep-Alive": 100
        });
        res.write(JSON.stringify({  
            phone: '18602100000', 
                 email: 'guestcaredominos@jublfood.com' 
           }
           ));
        res.end();
    }
    
}
httpServer.listen(3000, ()=>{
    console.log(`Server is up at 8081`)
})
module.exports = httpServer;