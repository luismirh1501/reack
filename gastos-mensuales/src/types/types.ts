// types.ts

export type BudgetItem = {
  category: string;
  actual: number;
};

export type SectionData = {
  title: string;
  items: BudgetItem[];
};

export type MonthData = {
  month: string;
  income: BudgetItem[];
  services: BudgetItem[];
  expenses: BudgetItem[];
  savings: BudgetItem[];
  debts: BudgetItem[];
};
