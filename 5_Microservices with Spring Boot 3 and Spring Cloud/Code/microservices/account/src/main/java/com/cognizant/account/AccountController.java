package com.cognizant.account;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    @GetMapping("/{number}")
    public Account getAccountDetails(@PathVariable String number) {
        // Returning a dummy response
        return new Account("00987987973432", "savings", 234343);
    }

    // Inner class to represent the Account response
    public static class Account {
        private String number;
        private String type;
        private int balance;

        public Account(String number, String type, int balance) {
            this.number = number;
            this.type = type;
            this.balance = balance;
        }

        public String getNumber() {
            return number;
        }

        public String getType() {
            return type;
        }

        public int getBalance() {
            return balance;
        }
    }
}
