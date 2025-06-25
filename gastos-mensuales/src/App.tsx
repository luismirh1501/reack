import ExpenseTracker from "./components/ExpenseTracker";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ExpenseTracker />
    </ThemeProvider>
  );
}

export default App;

