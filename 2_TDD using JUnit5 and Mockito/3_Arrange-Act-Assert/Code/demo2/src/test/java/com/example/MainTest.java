package com.example;

import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

public class MainTest {

    @BeforeEach
    void setUp() {
        // Setup code before each test
        System.out.println("Setting up before test");
    }

    @AfterEach
    void tearDown() {
        // Teardown code after each test
        System.out.println("Tearing down after test");
    }

    @Test
    void testHelloWorldOutput() {
        // Arrange
        String expectedOutput = "Hello world!";

        // Act
        String actualOutput = "Hello world!";

        // Assert
        assertEquals(expectedOutput, actualOutput, "The output should match 'Hello world!'");
    }

    @Test
    void testAnotherScenario() {
        // Arrange
        int a = 5;
        int b = 10;
        int expectedSum = 15;

        // Act
        int actualSum = a + b;

        // Assert
        assertEquals(expectedSum, actualSum, "The sum should be 15");
    }
}