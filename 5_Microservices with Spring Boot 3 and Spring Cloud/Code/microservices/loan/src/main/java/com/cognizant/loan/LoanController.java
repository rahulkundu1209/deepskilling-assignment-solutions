package com.cognizant.loan;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/loans")
public class LoanController {

    @GetMapping("/{number}")
    public Loan getLoanDetails(@PathVariable String number) {
        // Returning a dummy response
        return new Loan("H00987987972342", "car", 400000, 3258, 18);
    }

    // Inner class to represent the Loan response
    public static class Loan {
        private String number;
        private String type;
        private int loan;
        private int emi;
        private int tenure;

        public Loan(String number, String type, int loan, int emi, int tenure) {
            this.number = number;
            this.type = type;
            this.loan = loan;
            this.emi = emi;
            this.tenure = tenure;
        }

        public String getNumber() {
            return number;
        }

        public String getType() {
            return type;
        }

        public int getLoan() {
            return loan;
        }

        public int getEmi() {
            return emi;
        }

        public int getTenure() {
            return tenure;
        }
    }
}