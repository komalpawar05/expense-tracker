import { useEffect, useMemo, useState } from "react";

import Header from "./components/dashboard/Header";
import StatCard from "./components/dashboard/StatCard";
import BudgetCard from "./components/dashboard/BudgetCard";
import SpendingChart from "./components/dashboard/SpendingChart";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilters from "./components/ExpenseFilters";

import type { Expense } from "./type/expense";
import {
  getExpenses,
  saveExpenses,
} from "./utils/storage";

function App() {
  const [expenses, setExpenses] =
    useState<Expense[]>(getExpenses);

  const [search, setSearch] =
    useState("");

  const [categoryFilter, setCategoryFilter] =
    useState("All");

  const [darkMode, setDarkMode] =
    useState(false);

  const monthlyBudget = 15000;

  /*
   * Save expenses
   */
  useEffect(() => {
    saveExpenses(expenses);
  }, [expenses]);

  /*
   * Dark mode
   */
  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      darkMode
    );
  }, [darkMode]);

  /*
   * Total spending
   */
  const totalSpent = useMemo(() => {
    return expenses.reduce(
      (total, expense) =>
        total + expense.amount,
      0
    );
  }, [expenses]);

  /*
   * Today's spending
   */
  const todaySpent = useMemo(() => {
    const today =
      new Date().toDateString();

    return expenses
      .filter(
        (expense) =>
          new Date(
            expense.date
          ).toDateString() === today
      )
      .reduce(
        (total, expense) =>
          total + expense.amount,
        0
      );
  }, [expenses]);

  /*
   * Remaining budget
   */
  const remainingBudget = Math.max(
    monthlyBudget - totalSpent,
    0
  );

  /*
   * Filter expenses
   */
  const filteredExpenses = useMemo(() => {
    return expenses.filter((expense) => {
      const searchMatch =
        expense.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const categoryMatch =
        categoryFilter === "All" ||
        expense.category ===
          categoryFilter;

      return (
        searchMatch &&
        categoryMatch
      );
    });
  }, [
    expenses,
    search,
    categoryFilter,
  ]);

  /*
   * Add
   */
  const addExpense = (
    expense: Expense
  ) => {
    setExpenses((current) => [
      expense,
      ...current,
    ]);
  };

  /*
   * Delete
   */
  const deleteExpense = (
    id: number
  ) => {
    setExpenses((current) =>
      current.filter(
        (expense) =>
          expense.id !== id
      )
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 transition-colors dark:bg-slate-950">

      <Header
        darkMode={darkMode}
        onToggleDarkMode={() =>
          setDarkMode((value) => !value)
        }
      />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Welcome */}
        <div className="mb-8">
          <p className="text-sm font-medium text-slate-400">
            Financial overview
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
            Good afternoon 👋
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Here's what's happening with your money.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            title="Total spent"
            value={`₹${totalSpent.toLocaleString(
              "en-IN"
            )}`}
            description="This month"
            icon="💳"
          />

          <StatCard
            title="Today"
            value={`₹${todaySpent.toLocaleString(
              "en-IN"
            )}`}
            description="Spent today"
            icon="📅"
          />

          <StatCard
            title="Budget left"
            value={`₹${remainingBudget.toLocaleString(
              "en-IN"
            )}`}
            description="Remaining"
            icon="💰"
          />

          <StatCard
            title="Transactions"
            value={expenses.length.toString()}
            description="Total"
            icon="🧾"
          />
        </div>

        {/* Charts */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">

          <SpendingChart
            total={totalSpent}
          />

          <BudgetCard
            budget={monthlyBudget}
            spent={totalSpent}
          />
        </div>

        {/* Expense area */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

          <ExpenseForm
            onAddExpense={addExpense}
          />

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">

            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                Recent expenses
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Manage your latest transactions.
              </p>
            </div>

            <ExpenseFilters
              search={search}
              category={categoryFilter}
              onSearchChange={setSearch}
              onCategoryChange={
                setCategoryFilter
              }
            />

            <div className="mt-4">
              <ExpenseList
                expenses={filteredExpenses}
                onDelete={deleteExpense}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;