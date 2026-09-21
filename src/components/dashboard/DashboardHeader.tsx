function DashboardHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-lg">
            💳
          </div>

          <div>
            <h2 className="font-bold text-slate-950">
              ExpenseFlow
            </h2>

            <p className="hidden text-xs text-slate-400 sm:block">
              Personal finance
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:bg-slate-50">
            🔔
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
            A
          </button>
        </div>

      </div>
    </header>
  );
}

export default DashboardHeader;