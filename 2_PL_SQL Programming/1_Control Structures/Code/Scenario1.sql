BEGIN
  FOR rec IN (
    SELECT c.customer_id, l.loan_id, l.interest_rate
    FROM customers c
    JOIN loans l ON c.customer_id = l.customer_id
    WHERE c.age > 60
  ) LOOP
    UPDATE loans
    SET interest_rate = rec.interest_rate - 1
    WHERE loan_id = rec.loan_id;
  END LOOP;

  COMMIT;
END;
/

SELECT * FROM LOANS;