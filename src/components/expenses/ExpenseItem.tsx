import { categories } from "../../data/categories";
import type { Expense } from "../../type/expense";

interface ExpenseItemProps {
  expense: Expense;
  onDelete: (id: number) => void;
}

function ExpenseItem({
  expense,
  onDelete,
}: ExpenseItemProps) {
  const category = categories.find(
    (item) => item.name === expense.category
  );

  const paymentMethod =
    "paymentMethod" in expense && typeof expense.paymentMethod === "string"
      ? expense.paymentMethod
      : "Unknown";

  return (
    <div className="group flex items-center gap-4 py-4">

      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl ${
          category?.color ?? "bg-slate-100"
        }`}
      >
        {category?.emoji ?? "📦"}
      </div>

      <div className="min-w-0 flex-1">

        <p className="truncate text-sm font-bold text-slate-900 dark:text-white">
          {expense.title}
        </p>

        <div className="mt-1 flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-400">
            {expense.category}
          </span>

          <span className="text-slate-300">
            •
          </span>

          <span className="text-xs text-slate-400">
            {paymentMethod}
          </span>

          <span className="text-slate-300">
            •
          </span>

          <span className="text-xs text-slate-400">
            {new Date(
              expense.date
            ).toLocaleDateString()}
          </span>
        </div>
      </div>

      <div className="text-right">

        <p className="text-sm font-bold text-slate-900 dark:text-white">
          - ₹{expense.amount.toLocaleString("en-IN")}
        </p>

        <button
          onClick={() => onDelete(expense.id)}
          className="mt-1 text-xs font-medium text-red-400 opacity-0 transition group-hover:opacity-100 hover:text-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;