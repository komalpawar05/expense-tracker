
export interface Expense {
  id: number;
  title: string;
  amount: number;
  category: string;
  date: string;
}

export interface Category {
  name: string;
  emoji: string;
  color: string;
}