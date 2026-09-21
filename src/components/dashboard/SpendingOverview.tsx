import type { Expense } from "../../type/expense";

interface SpendingOverviewProps {
  expenses: Expense[];
}

function SpendingOverview({
  expenses,
}: SpendingOverviewProps) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const total = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-400">
            Spending overview
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-950">
            ₹{total.toLocaleString("en-IN")}
          </h2>
        </div>

        <select className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold outline-none">
          <option>This week</option>
          <option>This month</option>
          <option>This year</option>
        </select>
      </div>

      <div className="mt-8 flex h-48 items-end justify-between gap-3">
        {days.map((day, index) => {
          const height = [45, 70, 35, 80, 55, 90, 60][index];

          return (
            <div
              key={day}
              className="flex h-full flex-1 flex-col items-center justify-end gap-2"
            >
              <div
                className="w-full max-w-10 rounded-t-xl bg-slate-900 transition-all duration-500 hover:bg-slate-700"
                style={{ height: `${height}%` }}
              />

              <span className="text-[11px] font-medium text-slate-400">
                {day}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SpendingOverview;