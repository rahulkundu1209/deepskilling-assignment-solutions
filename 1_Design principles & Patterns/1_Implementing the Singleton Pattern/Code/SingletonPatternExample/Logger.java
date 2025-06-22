// package 1_Design principles & Patterns.1_Implementing the Singleton Pattern.Code.SingletonPatternExample;
// Logger is used to write log of different classes like UserService, PaymentService, OrderService etc

public class Logger {

  private static Logger instance;

  private Logger(){
    System.out.println("Logger initialized!");
  }
  public static Logger getInstance(){
    if(instance == null){
      instance = new Logger();
    }
    return instance;
  }
  public void log(String message){
    System.out.println("Log: " + message);
  }
}
