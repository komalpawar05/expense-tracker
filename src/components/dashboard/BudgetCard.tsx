interface BudgetCardProps {
  budget: number;
  spent: number;
}

function BudgetCard({
  budget,
  spent,
}: BudgetCardProps) {
  const percentage = Math.min(
    (spent / budget) * 100,
    100
  );

  const remaining = Math.max(
    budget - spent,
    0
  );

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-medium text-slate-400">
            Monthly budget
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-950 dark:text-white">
            ₹{budget.toLocaleString("en-IN")}
          </h2>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-xl">
          🎯
        </div>
      </div>

      <div className="mt-8">

        <div className="mb-2 flex justify-between text-sm">
          <span className="text-slate-500">
            ₹{spent.toLocaleString("en-IN")} spent
          </span>

          <span className="font-bold text-slate-900 dark:text-white">
            {Math.round(percentage)}%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              percentage >= 90
                ? "bg-red-500"
                : percentage >= 75
                ? "bg-yellow-500"
                : "bg-emerald-500"
            }`}
            style={{
              width: `${percentage}%`,
            }}
          />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-sm text-slate-400">
          Remaining
        </span>

        <span className="font-bold text-slate-900 dark:text-white">
          ₹{remaining.toLocaleString("en-IN")}
        </span>
      </div>
    </div>
  );
}

export default BudgetCard;