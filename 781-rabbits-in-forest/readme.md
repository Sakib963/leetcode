# 0781. Rabbits in Forest

- **Problem Link**: [https://leetcode.com/problems/rabbits-in-forest/](https://leetcode.com/problems/rabbits-in-forest/)
- **Date Solved**: Apr 20, 2025
- **Difficulty**: Medium

---

## 🧠 Thinking Process

At first, I thought every number in the array represented an exact group. But later I realized:

- If a rabbit says `x`, it means there can be up to `(x + 1)` rabbits in its color group.
- Multiple rabbits may give the same answer, so we have to group them efficiently without assuming they all belong to the same group.

I used a hash map to count how many times each answer appears and then calculated how many groups of size `(x + 1)` are needed.

---

## 🧩 Explanation

1. Loop through the `answers` array:
   - If a rabbit says `0`, it means it is the only one — increment count.
   - For others, store the count of each answer in an object.

2. Loop through the object:
   - For each answer `x`, calculate how many groups of size `x + 1` are needed using `Math.ceil(count / (x + 1))`.
   - Multiply that group count by `(x + 1)` to get total rabbits needed for that answer.

---

## ✅ What I Learned

- Using frequency maps to organize repeated values is a powerful pattern.
- `Math.ceil()` is helpful when grouping things into fixed-size batches.
- Always consider edge cases (like when a rabbit says `0`).

---

📁 Saved in my [`leetcode/0781-rabbits-in-forest`](../) folder.
