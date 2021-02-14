var pdf =require("html-pdf");


class PDFWriter{
    static WritePDF(filename,html){
        pdf.create(html,{}).toFile(filename,(err)=>{});//tofile fala que vai criar um pdf para um arquivo
    }

}
module.exports = PDFWriter