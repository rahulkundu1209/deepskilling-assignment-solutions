public class TestFactoryPattern {
  public static void main(String[] args){
    DocumentFactory wordDocFactory = new WordDocumentFactory();
    wordDocFactory.createDocument();

    DocumentFactory pdfDocFactory = new PdfDocumentFactory();
    pdfDocFactory.createDocument();

    DocumentFactory excelDocFactory = new ExcelDocumentFactory();
    excelDocFactory.createDocument();
  }
}
