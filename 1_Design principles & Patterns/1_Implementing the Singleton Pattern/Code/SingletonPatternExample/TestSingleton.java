public class TestSingleton {
  public static void main(String[] args){
    Logger logger1 = Logger.getInstance();
    logger1.log("This is logger1 message!");

    Logger logger2 = Logger.getInstance();
    logger2.log("This is logger2 message!");

    if(logger1 == logger2){
      System.out.println("Both the loggers are same, singleton implemented!");
    }else{
      System.out.println("Both the loggers are not same!");
    }
  }
}
