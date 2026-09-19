import { useState } from "react";


interface ExpenseFormProps {
  onAddExpense: (expense: Expense) => void;
}

function ExpenseForm({ onAddExpense }: ExpenseFormProps) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!title || !amount) {
      return;
    }

    const newExpense: Expense = {
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
    };

    onAddExpense(newExpense);

    setTitle("");
    setAmount("");
    setCategory("Food");
  };

  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
        
        {/* Header */}
        <div className="bg-slate-900 px-6 py-7 text-white sm:px-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-slate-400">
            Expense Tracker
          </p>

          <h1 className="text-2xl font-bold sm:text-3xl">
            Add New Expense
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Keep track of where your money goes.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 p-6 sm:p-8">

          {/* Expense Title */}
          <div>
            <label
              htmlFor="expense-title"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Expense Title
            </label>

            <input
              id="expense-title"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="e.g. Lunch with friends"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/10"
            />
          </div>

          {/* Amount */}
          <div>
            <label
              htmlFor="expense-amount"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Amount
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
                ₹
              </span>

              <input
                id="expense-amount"
                type="number"
                min="0"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                placeholder="0"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-9 pr-4 text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/10"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="expense-category"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Category
            </label>

            <select
              id="expense-category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all duration-200 hover:border-slate-300 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/10"
            >
              <option value="Food">🍔 Food</option>
              <option value="Travel">✈️ Travel</option>
              <option value="Shopping">🛍️ Shopping</option>
              <option value="Bills">🧾 Bills</option>
              <option value="Other">📦 Other</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-slate-900 px-5 py-3.5 font-semibold text-white shadow-lg shadow-slate-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl active:translate-y-0 active:scale-[0.98]"
          >
            + Add Expense
          </button>
        </form>
      </div>
    </div>
  );
}

export default ExpenseForm;

