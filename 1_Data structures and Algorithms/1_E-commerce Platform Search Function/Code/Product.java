// package 1_Data structures and Algorithms.1_E-commerce Platform Search Function.Code;

public class Product {
  private int productId;
  private String productName;
  private String category;

  public Product(int id, String name, String cat){
    productId = id;
    productName = name;
    category = cat;
  }

  public int getProductId(){
    return this.productId;
  }
  public String getProductName(){
    return this.productName;
  }
  public String getCategory(){
    return this.category;
  }
}
