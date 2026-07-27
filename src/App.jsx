import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import AppRoutes from "./routes/AppRoutes";

// Configuração do tema global da aplicação
const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#1976d2"
        },
        success: {
            main: "#2e7d32"
        }
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppRoutes />
        </ThemeProvider>
    );
}

export default App;