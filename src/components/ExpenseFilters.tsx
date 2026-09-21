import { categories } from "../data/categories";

interface ExpenseFiltersProps {
  search: string;
  category: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}

function ExpenseFilters({
  search,
  category,
  onSearchChange,
  onCategoryChange,
}: ExpenseFiltersProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">

      <div className="relative flex-1">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
          🔍
        </span>

        <input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search expenses..."
          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-slate-900 focus:bg-white"
        />
      </div>

      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium outline-none focus:border-slate-900"
      >
        <option value="All">All categories</option>

        {categories.map((item) => (
          <option key={item.name} value={item.name}>
            {item.emoji} {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ExpenseFilters;