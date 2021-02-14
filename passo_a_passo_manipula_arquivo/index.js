const fs = require("fs");

fs.readFile("./dan.dimas",{encoding: 'utf-8'},(erro,dados)=>{
    if(erro){
        console.log("ocorreu uma dalha durante a leitura do arquivo");
    }else{
       var conteudo = dados;


    }
    
});
