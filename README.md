# hashira-assignment


This code computes the coefficients of a polynomial given its roots in different bases.  
The input is provided in **JSON format**, where each root is represented by its base and value.

---

## 📌 Problem Statement

- The input JSON contains:
  - **n** → total number of roots provided.
  - **k** → minimum number of roots required to compute the polynomial coefficients  
    (where `k = m + 1`, and `m` is the polynomial degree).
- Each root is given as an object with:
  - `base`: The numeric base of the root value.
  - `value`: The root itself as a string in that base.

The task is to:
1. Convert each root into a decimal number.
2. Use the first `k - 1` roots to form the polynomial.
3. Compute the coefficients of the polynomial.

---

## 🛠️ Approach

1. **Parse roots from JSON**  
   Each root is converted into an integer using `parseInt(value, base)`.

2. **Select required roots**  
   Only the first `k - 1` roots are taken to compute the polynomial of degree `k - 1`.

3. **Generate coefficients**  
   Using the formula for expanding `(x - r1)(x - r2)...(x - rm)`, coefficients are computed iteratively:
   - Start with `[1]` (the constant term).
   - For each root, update coefficients by multiplying with `(x - root)`.

4. **Output coefficients**  
   The final coefficients array is logged to the console.




