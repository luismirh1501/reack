import { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import BudgetTable from "./BudgetTable";
import BudgetChart from "./BudgetChart";
import { dataByMonth } from "@/data/data";

export default function ExpenseTracker() {
  const [selectedMonth, setSelectedMonth] = useState("Abril");

  const handleChange = (event: any) => {
    setSelectedMonth(event.target.value);
  };

  const currentData = dataByMonth.find((d) => d.month === selectedMonth)!;

  return (
    <Box sx={{Width: "100%" , margin: "2rem auto", padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Presupuesto mensual: {selectedMonth}
      </Typography>

      <FormControl fullWidth sx={{ mb: 4 }}>
        <InputLabel>Selecciona el mes</InputLabel>
        <Select value={selectedMonth} label="Selecciona el mes" onChange={handleChange}>
          {dataByMonth.map((data) => (
            <MenuItem key={data.month} value={data.month}>
              {data.month}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Grid container spacing={4}>
        <Grid item xs={12} md={12} lg={12}>
          <BudgetTable title="Resumen de Mensuales" items={currentData.income} />
          <BudgetChart title="Resumen de Mensuales" data={currentData.income} />
        </Grid>
        <Grid item xs={12} md={6}>
          <BudgetTable title="Ingresos" items={currentData.services} />
          <BudgetChart title="Ingresos" data={currentData.services} />
        </Grid>
        <Grid item xs={12} md={6}>
          <BudgetTable title="Gastos" items={currentData.expenses} />
          <BudgetChart title="Gastos" data={currentData.expenses} />
        </Grid>
        <Grid item xs={12} md={6}>
          <BudgetTable title="Ahorro" items={currentData.savings} />
          <BudgetChart title="Ahorro" data={currentData.savings} />
        </Grid>
      </Grid>
    </Box>
  );
}
