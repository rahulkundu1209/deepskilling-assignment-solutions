// package 1_Data structures and Algorithms.1_E-commerce Platform Search Function.Code;

public class SearchProduct {
  public Product linearSearchProduct(Product[] products, int id){
    for(int i=0; i<products.length; i++){
      Product current = products[i];
      if(current.getProductId() == id){
        System.out.println("Product found at index "+ i + "\nId: " + current.getProductId() + "\nName: " + current.getProductName() + "\nCategory: " + current.getCategory());
        return current;
      }
    }
    System.out.println("No product available!");
    return null;
  }

  public Product linearSearchProduct(Product[] products, String name){
    for(int i=0; i<products.length; i++){
      Product current = products[i];
      if(current.getProductName() == name){
        System.out.println("Product found at index "+ i + "\nId: " + current.getProductId() + "\nName: " + current.getProductName() + "\nCategory: " + current.getCategory());
        return current;
      }
    }
    System.out.println("No product available!");
    return null;
  }

  public Product binarySearchProduct(Product[] products, int id){
    int low = 0;
    int high = products.length - 1;
    while(low <= high){
      int mid = (low + high)/2;
      if(products[mid].getProductId() == id){
        System.out.println("Product found at index "+ mid + "\nId: " + products[mid].getProductId() + "\nName: " + products[mid].getProductName() + "\nCategory: " + products[mid].getCategory());
        return products[mid];
      }
      else if(products[mid].getProductId() < id){
        low = mid + 1;
      }else if(products[mid].getProductId() > id){
        high = mid - 1;
      }
    }
    System.out.println("No product available!");
    return null;
  }
}
