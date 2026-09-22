import type { Expense } from "../type/expense";
import ExpenseItem from "../components/expenses/ExpenseItem";

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
      <div className="rounded-2xl bg-slate-50 px-5 py-12 text-center dark:bg-slate-800">
        <div className="text-4xl">
          🧾
        </div>

        <h3 className="mt-3 font-semibold text-slate-800 dark:text-white">
          No expenses found
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Add an expense or change your filters.
        </p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-slate-100 dark:divide-slate-800">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ExpenseList;