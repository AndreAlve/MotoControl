import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function AuthLinks() {
    return (
        <>
            <Box
                display="flex"
                justifyContent="flex-end"
                mt={2}
            >
                <Link
                    component={RouterLink}
                    to="/recuperar-senha"
                >
                    Esqueci minha senha
                </Link>
            </Box>

            <Box
                display="flex"
                justifyContent="center"
                gap={1}
                mt={3}
            >
                <Typography variant="body2">
                    Ainda não possui uma conta?
                </Typography>

                <Link
                    component={RouterLink}
                    to="/cadastro"
                >
                    Criar Conta
                </Link>
            </Box>
        </>
    );
}

export default AuthLinks;