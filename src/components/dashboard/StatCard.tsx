interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: string;
}

function StatCard({
  title,
  value,
  description,
  icon,
}: StatCardProps) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">

      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-xl dark:bg-slate-800">
          {icon}
        </div>

        <span className="text-xs font-medium text-slate-400">
          {description}
        </span>
      </div>

      <div className="mt-5">
        <p className="text-sm font-medium text-slate-500">
          {title}
        </p>

        <p className="mt-1 text-2xl font-bold text-slate-950 dark:text-white">
          {value}
        </p>
      </div>
    </div>
  );
}

export default StatCard;