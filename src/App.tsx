import { useMemo, useState } from "react";

import DashboardHeader from "./components/dashboard/DashboardHeader";
import StatCard from "./components/dashboard/StatCard";
import SpendingOverview from "./components/dashboard/SpendingOverview";
import BudgetCard from "./components/dashboard/BudgetCard";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilters from "./components/ExpenseFilters";

import type { Expense } from "./type/expense";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: 1,
      title: "Lunch",
      amount: 450,
      category: "Food",
      date: new Date().toISOString(),
    },
    {
      id: 2,
      title: "Uber",
      amount: 320,
      category: "Travel",
      date: new Date().toISOString(),
    },
    {
      id: 3,
      title: "New Shoes",
      amount: 2499,
      category: "Shopping",
      date: new Date().toISOString(),
    },
  ]);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const monthlyBudget = 15000;

  const totalSpent = useMemo(() => {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }, [expenses]);

  const todaySpent = useMemo(() => {
    const today = new Date().toDateString();

    return expenses
      .filter(
        (expense) =>
          new Date(expense.date).toDateString() === today
      )
      .reduce((sum, expense) => sum + expense.amount, 0);
  }, [expenses]);

  const remainingBudget = Math.max(
    monthlyBudget - totalSpent,
    0
  );

  const budgetPercentage = Math.min(
    (totalSpent / monthlyBudget) * 100,
    100
  );

  const filteredExpenses = useMemo(() => {
    return expenses.filter((expense) => {
      const matchesSearch = expense.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        categoryFilter === "All" ||
        expense.category === categoryFilter;

      return matchesSearch && matchesCategory;
    });
  }, [expenses, search, categoryFilter]);

  const addExpense = (expense: Expense) => {
    setExpenses((current) => [expense, ...current]);
  };

  const deleteExpense = (id: number) => {
    setExpenses((current) =>
      current.filter((expense) => expense.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardHeader />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Welcome */}
        <div className="mb-8">
          <p className="text-sm font-medium text-slate-400">
            Financial overview
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
            Good afternoon 👋
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Here's what's happening with your spending.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Spent"
            value={`₹${totalSpent.toLocaleString("en-IN")}`}
            icon="💳"
            description="This month"
          />

          <StatCard
            title="Today"
            value={`₹${todaySpent.toLocaleString("en-IN")}`}
            icon="📅"
            description="Spent today"
          />

          <StatCard
            title="Budget Left"
            value={`₹${remainingBudget.toLocaleString("en-IN")}`}
            icon="💰"
            description="Remaining"
          />

          <StatCard
            title="Expenses"
            value={expenses.length.toString()}
            icon="🧾"
            description="Transactions"
          />
        </div>

        {/* Main grid */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">

          {/* Chart */}
          <SpendingOverview expenses={expenses} />

          {/* Budget */}
          <BudgetCard
            spent={totalSpent}
            budget={monthlyBudget}
            percentage={budgetPercentage}
          />
        </div>

        {/* Add + Recent */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Add Expense */}
          <ExpenseForm onAddExpense={addExpense} />

          {/* Expenses */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-950">
                Recent expenses
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Track your latest transactions.
              </p>
            </div>

            <ExpenseFilters
              search={search}
              category={categoryFilter}
              onSearchChange={setSearch}
              onCategoryChange={setCategoryFilter}
            />

            <div className="mt-5">
              <ExpenseList
                expenses={filteredExpenses}
                onDelete={deleteExpense}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;