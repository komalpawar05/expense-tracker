import { useState } from "react";

function ExpenseForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log({
      title,
      amount,
      category,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Expense Title</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter expense"
        />
      </div>

      <div>
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          placeholder="Enter amount"
        />
      </div>

      <div>
        <label>Category</label>

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;