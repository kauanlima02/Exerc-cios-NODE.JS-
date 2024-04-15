//Kauan Lima De Paula RGM: 33259631

//exercicio 3

var http = require("http")
var fs = require("fs")

http.createServer(function(req,res){
    fs.readFile("Kauan_Lima_De_Paula_RGM_33259631.html", function(err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.writeHead(data);
        return res.end();

    })
})