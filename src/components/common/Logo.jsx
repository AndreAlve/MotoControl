import { Typography, Box } from "@mui/material";

function Logo() {
    return (
        <Box textAlign="center" mb={3}>
            <Typography variant="h3">
                🏍
            </Typography>

            <Typography variant="h4" fontWeight="bold">
                MotoControl
            </Typography>

            <Typography color="text.secondary">
                Controle de Revendas
            </Typography>
        </Box>
    );
}

export default Logo;