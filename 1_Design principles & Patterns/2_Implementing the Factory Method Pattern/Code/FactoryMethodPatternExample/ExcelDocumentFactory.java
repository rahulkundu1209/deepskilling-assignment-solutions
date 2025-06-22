public class ExcelDocumentFactory extends DocumentFactory {
  public ExcelDocument createDocument(){
    System.out.println("Creating Excel Document!");
    return new ExcelDocument();
  }
}
