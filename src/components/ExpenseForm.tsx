import { useState } from "react";
import { categories } from "../data/categories";
import type { Expense } from "../type/expense";

interface ExpenseFormProps {
  onAddExpense: (expense: Expense) => void;
}

function ExpenseForm({
  onAddExpense,
}: ExpenseFormProps) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [paymentMethod, setPaymentMethod] =
    useState("UPI");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (
    event: React.FormEvent
  ) => {
    event.preventDefault();

    if (!title.trim()) {
      setError("Please enter an expense title.");
      return;
    }

    if (!amount || Number(amount) <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    const expense: Expense = {
      id: Date.now(),
      title: title.trim(),
      amount: Number(amount),
      category,
      date: new Date().toISOString(),
    };

    onAddExpense(expense);

    setTitle("");
    setAmount("");
    setCategory("Food");
    setPaymentMethod("UPI");
    setNote("");
    setError("");
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">

      <div className="mb-6">
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-xl dark:bg-white">
          ➕
        </div>

        <h2 className="text-xl font-bold text-slate-950 dark:text-white">
          Add expense
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Record a new transaction.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        {/* Title */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
            Expense title
          </label>

          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setError("");
            }}
            placeholder="e.g. Lunch with friends"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/5 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </div>

        {/* Amount */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
            Amount
          </label>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-500">
              ₹
            </span>

            <input
              type="number"
              min="0"
              step="0.01"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                setError("");
              }}
              placeholder="0.00"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-9 pr-4 text-sm font-semibold outline-none transition focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/5 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-slate-700 dark:text-slate-300">
            Category
          </label>

          <div className="grid grid-cols-3 gap-2">
            {categories.map((item) => {
              const active =
                category === item.name;

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() =>
                    setCategory(item.name)
                  }
                  className={`rounded-2xl border p-3 transition ${
                    active
                      ? "border-slate-900 bg-slate-900 text-white shadow-md"
                      : "border-slate-200 bg-slate-50 hover:bg-white dark:border-slate-700 dark:bg-slate-800"
                  }`}
                >
                  <div className="text-lg">
                    {item.emoji}
                  </div>

                  <div className="mt-1 text-xs font-semibold">
                    {item.name}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Payment */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
            Payment method
          </label>

          <select
            value={paymentMethod}
            onChange={(e) =>
              setPaymentMethod(e.target.value)
            }
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            <option>UPI</option>
            <option>Cash</option>
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>Bank Transfer</option>
          </select>
        </div>

        {/* Note */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
            Note
          </label>

          <textarea
            value={note}
            onChange={(e) =>
              setNote(e.target.value)
            }
            rows={3}
            placeholder="Add a note..."
            className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </div>

        {/* Error */}
        {error && (
          <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
            ⚠️ {error}
          </div>
        )}

        <button
          type="submit"
          className="w-full rounded-2xl bg-slate-950 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800 active:scale-[0.98] dark:bg-white dark:text-slate-950"
        >
          + Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;