var Reader = require("./Reader");
var Writer = require("./Writer");
var Processor =require("./Processor");
var HtmlParser = require("./HtmlParser");
var PDFWriter = require ("./PDFWriter");


var Table = require("./Table"); 
var leitor = new Reader();
var escritor = new Writer();




async function main(){//essa funcao e preciso para recuperar os dados de uma funcao async
    var dados = await leitor.Read("./users.csv");
    var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);
    var html = await HtmlParser.Parse(usuarios);
    escritor.Write(Date.now() + ".html",html);
    PDFWriter.WritePDF(Date.now() +".PDF",html);
    
   

}
main();
