CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
  dept_name IN VARCHAR2,
  bonus_pct IN NUMBER
) IS
BEGIN
  UPDATE employees
  SET salary = salary + (salary * bonus_pct / 100)
  WHERE department = dept_name;

  COMMIT;
END;
/

BEGIN
  UpdateEmployeeBonus('IT', 10);
END;
/

sELECT * FROM EMPLOYEES;