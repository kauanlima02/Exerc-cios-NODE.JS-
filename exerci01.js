//codigo base/arquivo fonte principal/codigo principal = chama os demais codigos
//Modules
var http = require('http');
var request = require('request');
var requestMicroServico = "nao executado";
function iniciadoSistemaEcommerce(){
 return "sistema de ecommerce iniciado (monolito)";
} 
//primeiro modulo
//funcao javascript com regra local
function acionaModuloCatalogo(){
 return "modulo de catalogo(modulo)";
}
function acionaModuloCliente(){
 return "modulo de cliente(modulo)";
}
function acionaModuloAntifraude(){
 return "modulo de Antifraude(modulo)";
}
//server com serviço principal
http.createServer(function (req, res) {
 var resultado = iniciadoSistemaEcommerce() + acionaModuloAntifraude() + acionaModuloCliente() + acionaMicroServicoConsulta();
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write( resultado );
 res.end();
}).listen(8080);