public class PdfDocumentFactory extends DocumentFactory {
  public PdfDocument createDocument(){
    System.out.println("Creating Pdf Document!");
    return new PdfDocument();
  }
}
