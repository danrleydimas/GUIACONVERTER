class Processor{
    static Process(data){
        var a = data.split("\r\n");//separador de string
        var rows = [];

        a.forEach(row => {
            var arr = row.split(";");//cada linha da string sera dividido por virgula e vamos transformar em um array
            rows.push(arr);//colocando um array que tem dados como strings, ou seja cada linha transforma em um array
           
        });
        return rows;
    }
}
module.exports = Processor;