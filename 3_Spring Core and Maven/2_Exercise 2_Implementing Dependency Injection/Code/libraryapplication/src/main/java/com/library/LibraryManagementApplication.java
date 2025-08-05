package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.service.BookService;

public class LibraryManagementApplication {
    public static void main(String[] args) {
        // Load spring context from xml
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        // Get the book service bean
        BookService bookService = (BookService) context.getBean("bookService");
        bookService.addBook("The Untold Story");
    }
}