const fs = require("fs");
const util = require("util");

class Reader{
    constructor(){
        this.reader= util.promisify(fs.readFile); //promisify transforma uma funçao callback em promisi e assim conseguimos retornar valroes
    }
   async Read(filepath){
       try{
           return await  this.reader(filepath,"utf8")

       }catch(err){
           return undefined;

       }
    }

    
}
module.exports = Reader;