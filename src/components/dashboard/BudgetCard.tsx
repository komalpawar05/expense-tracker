interface BudgetCardProps {
  spent: number;
  budget: number;
  percentage: number;
}

function BudgetCard({
  spent,
  budget,
  percentage,
}: BudgetCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-400">
            Monthly budget
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-950">
            ₹{budget.toLocaleString("en-IN")}
          </h2>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-xl">
          🎯
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-2 flex justify-between text-sm">
          <span className="font-medium text-slate-500">
            ₹{spent.toLocaleString("en-IN")} spent
          </span>

          <span className="font-bold text-slate-900">
            {Math.round(percentage)}%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-slate-900 transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-400">
        {percentage >= 80
          ? "You're getting close to your monthly limit."
          : "You're within your planned spending."}
      </p>
    </div>
  );
}

export default BudgetCard;