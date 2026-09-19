
interface Expense {
  id: number;
  title: string;
  amount: number;
  category: string;
}

interface ExpenseListProps {
  expenses: Expense[];
}

function ExpenseList({ expenses }: ExpenseListProps) {
  return (
    <div>
      <h2>Recent Expenses</h2>

      {expenses.length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        expenses.map((expense) => (
          <div key={expense.id}>
            <h3>{expense.title}</h3>
            <p>₹{expense.amount}</p>
            <p>{expense.category}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ExpenseList;

