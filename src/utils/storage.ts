import type { Expense } from "../type/expense";

const STORAGE_KEY = "expenseflow-expenses";

export function getExpenses(): Expense[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function saveExpenses(expenses: Expense[]) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(expenses)
  );
}