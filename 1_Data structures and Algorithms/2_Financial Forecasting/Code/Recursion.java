// package 1_Data structures and Algorithms.2_Financial Forecasting.Code;

public class Recursion {
  //Fibonaci series using recursion
  public static int fib(int n){
    if(n==0 || n==1){
      // System.out.print(n + " ");
      return n;
    }
    int ans = fib(n-1) + fib(n-2);
    // System.out.print(ans + " ");
    return ans;
  }

  public static void main(String[] args){
    // int ans = fib(4);
    int n = 10;
    for(int i=0; i<n; i++){
      System.out.print(fib(i) + " ");
    }
    
  }
}
