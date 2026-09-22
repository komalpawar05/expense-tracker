import { categories } from "../data/categories";
import type { Expense } from "../type/expense";

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

function ExpenseList({
  expenses,
  onDelete,
}: ExpenseListProps) {
  if (expenses.length === 0) {
    return (
      <div className="rounded-2xl bg-slate-50 px-5 py-10 text-center">
        <div className="text-3xl">🧾</div>

        <h3 className="mt-3 font-semibold text-slate-800">
          No expenses found
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Try changing your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-slate-100">
      {expenses.map((expense) => {
        const category = categories.find(
          (item) => item.name === expense.category
        );

        return (
          <div
            key={expense.id}
            className="group flex items-center gap-4 py-4"
          >
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-lg ${
                category?.color ?? "bg-slate-100"
              }`}
            >
              {category?.emoji ?? "📦"}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-slate-900">
                {expense.title}
              </p>

              <div className="mt-1 flex items-center gap-2">
                <span className="text-xs text-slate-400">
                  {expense.category}
                </span>

                <span className="text-slate-300">•</span>

                <span className="text-xs text-slate-400">
                  {new Date(expense.date).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="text-right">
              <p className="text-sm font-bold text-slate-900">
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
      })}
    </div>
  );
}

export default ExpenseList;