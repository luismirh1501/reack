import { MonthData } from "@/types/types";


/* TURSON TOKEN */
/* 


libsql://gastos-luismi.aws-eu-west-1.turso.io
 */
export const dataByMonth: MonthData[] = [
  {
    month: "Abril",
    income: [
      { category: "Sueldo",actual: 22000 },
      { category: "Negocio",actual: 2000 },
      { category: "Otros", actual: 1150 },
    ],
    services: [
      { category: "Renta",actual: 4000 },
      { category: "Seguro del carro",actual: 900 },
      { category: "Recibo de Luz",actual: 600 },
    ],
    expenses: [
      { category: "Despensa",actual: 1200 },
      { category: "Compras",  actual: 835 },
      { category: "Cine",  actual: 0 },
    ],
    savings: [
      { category: "Cetes", actual: 1500 },
      { category: "Vacaciones", actual: 1000 },
      { category: "Ahorro Universidad", actual: 600 },
    ],
    debts: [
      { category: "Carro", actual: 3000 },
      { category: "Hipoteca", actual: 2300 },
      { category: "Tarjetas", actual: 1300 },
    ],
  }
];
