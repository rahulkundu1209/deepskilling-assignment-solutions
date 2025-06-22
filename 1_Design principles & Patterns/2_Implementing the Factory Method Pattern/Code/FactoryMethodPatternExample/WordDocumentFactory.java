public class WordDocumentFactory extends DocumentFactory {
  public WordDocument createDocument(){
    System.out.println("Creating Word Document!");
    return new WordDocument();
  }
}
