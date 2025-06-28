CREATE OR REPLACE PROCEDURE TransferFunds(
  from_acc_id IN NUMBER,
  to_acc_id   IN NUMBER,
  amount      IN NUMBER
) IS
  insufficient_balance EXCEPTION;
  src_balance accounts.balance%TYPE;
BEGIN
  SELECT balance INTO src_balance FROM accounts WHERE account_id = from_acc_id FOR UPDATE;

  IF src_balance < amount THEN
    RAISE insufficient_balance;
  END IF;

  UPDATE accounts SET balance = balance - amount WHERE account_id = from_acc_id;

  UPDATE accounts SET balance = balance + amount WHERE account_id = to_acc_id;

  COMMIT;
EXCEPTION
  WHEN insufficient_balance THEN
    DBMS_OUTPUT.PUT_LINE('Error: Insufficient balance in source account.');
    ROLLBACK;
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
    ROLLBACK;
END;
/

BEGIN
  TransferFunds(1, 3, 2000);
END;
/

SELECT * FROM ACCOUNTS;