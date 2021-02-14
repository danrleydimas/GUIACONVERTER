const fs = require("fs");


function modificarUsuario(nome){
    fs.readFile("./usuario.json",{encoding:'utf-8'},(erro,dados)=>{
        if(erro){
            console.log("um erro aconteceu");
        }else{
            var conteudo = JSON.parse(dados);//json.parse serve para converter texto em objetos javascript
            conteudo.nome = nome
            console.log(conteudo);
            fs.writeFile("./usuario.json",JSON.stringify(conteudo),(erro)=>{
                if(erro){
                    console.log("Um erro aconteceu durante a escrita!")
                }
            })//stringfy transforma objeto javascript para texto
        }
    })

}
modificarUsuario("danrleydimas");