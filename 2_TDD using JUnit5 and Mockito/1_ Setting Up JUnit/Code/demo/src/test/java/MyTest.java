//Java program to demonstrate JUnit Assumption
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class MyTest {

    @Test
    void exampleTest() {
        int result = someMethod();
        Assertions.assertEquals(42, result, "The result should be 42");
    }

    private int someMethod() {
        return 42;
    }
}