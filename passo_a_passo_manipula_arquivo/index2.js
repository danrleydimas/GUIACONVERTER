const fs = require("fs");

fs.writeFile("./dan.dimas","Novo conteudo do arquivo!",(err) =>{
    if(err){
        console.log("Erro durante o salvamento")
    }

})