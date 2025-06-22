public class TestProductSearch {
  public static void main(String[] args){
    Product prod0 = new Product(1, "Soap", "Grocery");
    Product prod1 = new Product(2, "Apple", "Fruit");
    Product prod2 = new Product(3, "Potato", "Grocery");
    Product prod3 = new Product(4, "Chair", "Furniture");
    Product prod4 = new Product(5, "Trouser", "Wearing");

    Product[] products = {prod3, prod2, prod1, prod4, prod0};
    Product[] productsSorted = {prod0, prod1, prod2, prod3, prod4};

    SearchProduct sProd = new SearchProduct();

    Product p1 = sProd.linearSearchProduct(products, 3);
    Product p2 = sProd.linearSearchProduct(products, 7);
    Product p3 = sProd.linearSearchProduct(products, "Chair");

    Product p4 = sProd.binarySearchProduct(productsSorted, 2);
  }
}
