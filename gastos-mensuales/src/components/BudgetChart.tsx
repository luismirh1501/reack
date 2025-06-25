// src/components/BudgetChart.tsx
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";
import { BudgetItem } from "@/types/types";
import { Typography, Box } from "@mui/material";

type Props = {
  title: string;
  data: BudgetItem[];
};

export default function BudgetChart({ title, data }: Props) {
  const chartData = data.map((item) => ({
    name: item.category,
    Real: item.actual,
  }));

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        {title} - Comparación gráfica
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Real" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}
