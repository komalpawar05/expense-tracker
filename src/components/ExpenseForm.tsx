
import { useState } from "react";
import { categories } from "../data/categories";
import type { Expense } from "../type/expense";

interface ExpenseFormProps {
  onAddExpense: (expense: Expense) => void;
}

const paymentMethods = [
  { name: "UPI", icon: "↗" },
  { name: "Cash", icon: "₹" },
  { name: "Credit Card", icon: "▣" },
  { name: "Debit Card", icon: "▤" },
  { name: "Bank Transfer", icon: "↔" },
];

function ExpenseForm({ onAddExpense }: ExpenseFormProps) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
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

      // Add these if your Expense type supports them:
      // paymentMethod,
      // note,
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
    <div className="overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)] dark:border-slate-800 dark:bg-slate-950">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-slate-100 px-6 py-7 dark:border-slate-800 sm:px-8">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-slate-100 dark:bg-slate-900" />
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-slate-200/60 dark:bg-slate-800" />

        <div className="relative flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-2xl font-light text-white shadow-lg shadow-slate-950/20 dark:bg-white dark:text-slate-950">
            +
          </div>

          <div>
            <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
              New transaction
            </p>

            <h2 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
              Add expense
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Record where your money went.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-7 p-6 sm:p-8">
        {/* Amount */}
        <div>
          <label className="mb-2.5 block text-xs font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
            Amount
          </label>

          <div className="group relative">
            <div className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-xl font-bold text-slate-400 transition group-focus-within:text-slate-900 dark:group-focus-within:text-white">
              ₹
            </div>

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
              className="w-full rounded-[22px] border border-slate-200 bg-slate-50 py-5 pl-12 pr-5 text-3xl font-bold tracking-tight text-slate-950 outline-none transition-all placeholder:text-slate-300 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-700 dark:focus:border-white dark:focus:bg-slate-900"
            />
          </div>
        </div>

        {/* Title */}
        <div>
          <label className="mb-2.5 block text-xs font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
            Description
          </label>

          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setError("");
            }}
            placeholder="What did you spend on?"
            className="w-full rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-medium text-slate-950 outline-none transition-all placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-white"
          />

          <p className="mt-2 text-xs text-slate-400">
            Example: Lunch with friends
          </p>
        </div>

        {/* Category */}
        <div>
          <div className="mb-3 flex items-end justify-between">
            <div>
              <label className="block text-xs font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                Category
              </label>

              <p className="mt-1 text-xs text-slate-400">
                Choose one category
              </p>
            </div>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-slate-900 dark:text-slate-300">
              {category}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4">
            {categories.map((item) => {
              const active = category === item.name;

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setCategory(item.name)}
                  className={`relative rounded-2xl border p-3 text-center transition-all duration-200 ${
                    active
                      ? "border-slate-950 bg-slate-950 text-white shadow-lg shadow-slate-950/15 dark:border-white dark:bg-white dark:text-slate-950"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  {active && (
                    <span className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[9px] font-black text-slate-950 dark:bg-slate-950 dark:text-white">
                      ✓
                    </span>
                  )}

                  <div
                    className={`mx-auto flex h-10 w-10 items-center justify-center rounded-xl text-lg ${
                      active
                        ? "bg-white/10"
                        : "bg-white shadow-sm dark:bg-slate-800"
                    }`}
                  >
                    {item.emoji}
                  </div>

                  <div className="mt-2 truncate text-[11px] font-bold">
                    {item.name}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Payment method */}
        <div>
          <div className="mb-3">
            <label className="block text-xs font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
              Payment method
            </label>

            <p className="mt-1 text-xs text-slate-400">
              How did you pay?
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {paymentMethods.map((method) => {
              const active = paymentMethod === method.name;

              return (
                <button
                  key={method.name}
                  type="button"
                  onClick={() => setPaymentMethod(method.name)}
                  className={`flex items-center gap-3 rounded-2xl border px-3.5 py-3.5 text-left transition-all ${
                    active
                      ? "border-slate-950 bg-slate-950 text-white shadow-md shadow-slate-950/10 dark:border-white dark:bg-white dark:text-slate-950"
                      : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 hover:bg-white dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-slate-700"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${
                      active
                        ? "bg-white/10"
                        : "bg-white shadow-sm dark:bg-slate-800"
                    }`}
                  >
                    {method.icon}
                  </span>

                  <span className="truncate text-xs font-bold">
                    {method.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Note */}
        <div>
          <div className="mb-2.5 flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
              Note
            </label>

            <span className="text-xs font-medium text-slate-400">
              Optional
            </span>
          </div>

          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            placeholder="Anything worth remembering?"
            className="w-full resize-none rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-950 outline-none transition-all placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-white"
          />
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-center gap-3 rounded-2xl border border-red-100 bg-red-50 px-4 py-3.5 text-sm font-semibold text-red-600 dark:border-red-950 dark:bg-red-950/30 dark:text-red-400">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-black dark:bg-red-950">
              !
            </span>

            {error}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-3 rounded-[20px] bg-slate-950 py-4 text-sm font-bold text-white shadow-xl shadow-slate-950/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 active:translate-y-0 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-white/10 text-lg transition-transform group-hover:rotate-90 dark:bg-slate-950/10">
            +
          </span>

          Add Expense
        </button>

        <p className="text-center text-[11px] font-medium text-slate-400">
          Your expense will be added to your transaction history.
        </p>
      </form>
    </div>
  );
}

export default ExpenseForm;

