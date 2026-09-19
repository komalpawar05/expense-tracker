import { useState } from "react";
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
      <h1>Expense Tracker</h1>

      <ExpenseForm onAddExpense={handleAddExpense} />

      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
