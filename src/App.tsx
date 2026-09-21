import { useState } from "react";
import type { Expense } from "./type/expense";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";


function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleAddExpense = (expense: Expense) => {
    setExpenses((previousExpenses) => [
      ...previousExpenses,
      expense,
    ]);
  };

  return (
    <div>
      <div className="mx-auto w-full max-w-xl py-25 px-4 sm:px-6 lg:px-8">
      <ExpenseForm onAddExpense={handleAddExpense} />

      <ExpenseList expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
