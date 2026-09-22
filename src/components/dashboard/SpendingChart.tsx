interface SpendingChartProps {
  total: number;
}

function SpendingChart({
  total,
}: SpendingChartProps) {
  const bars = [
    35,
    55,
    42,
    75,
    48,
    90,
    62,
  ];

  const days = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-medium text-slate-400">
            Spending overview
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-950 dark:text-white">
            ₹{total.toLocaleString("en-IN")}
          </h2>
        </div>

        <select className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white">
          <option>Last 7 days</option>
          <option>This month</option>
          <option>This year</option>
        </select>
      </div>

      <div className="mt-8 flex h-52 items-end gap-3">

        {bars.map((height, index) => (
          <div
            key={days[index]}
            className="flex h-full flex-1 flex-col items-center justify-end gap-2"
          >
            <div
              className="w-full max-w-12 rounded-t-xl bg-slate-900 transition-all duration-500 hover:bg-slate-700 dark:bg-white dark:hover:bg-slate-300"
              style={{
                height: `${height}%`,
              }}
            />

            <span className="text-[11px] font-medium text-slate-400">
              {days[index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpendingChart;