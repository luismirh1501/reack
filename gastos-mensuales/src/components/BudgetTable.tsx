import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
} from "@mui/material";
import { BudgetItem } from "@/types/types";

type Props = {
    title: string;
    items: BudgetItem[];
};

export default function BudgetTable({ title, items }: Props) {
    const totalActual = items.reduce((sum, i) => sum + i.actual, 0);

    const getColor = (actual: number) => {
        return "black";
    };

    return (
        <TableContainer component={Paper} sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ p: 2, background: "#4caf50", color: "white" }}>
                {title}
            </Typography>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Categoría</strong></TableCell>
                        <TableCell><strong></strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((item, idx) => (
                        <TableRow key={idx}>
                            <TableCell>{item.category}</TableCell>
                            <TableCell sx={{ color: getColor(item.actual) }}>
                                ${item.actual.toLocaleString()}
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell><strong>Total</strong></TableCell>
                        <TableCell><strong>${totalActual.toLocaleString()}</strong></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
