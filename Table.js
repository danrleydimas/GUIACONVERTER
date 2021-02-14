class Table{
    constructor(arr){
        this.header = arr[0];
        arr.shift();//shift sempre remove o primeiro elemento
        this.rows = arr;
    
    }

    get RowCount(){//esse campo sera virtual pq sempre retornara um valor dinamico

        return this.rows.length;
    }
    get ColumnCount(){
        return this.header.length;
    }

}
module.exports = Table;