import "./Login.css";

import {
    Box,
    Button,
    Container,
    Divider,
    Paper,
    TextField,
    FormControlLabel,
    Checkbox,
} from "@mui/material";

import Logo from "../../components/common/Logo";
import GoogleButton from "../../components/common/GoogleButton";
import AuthLinks from "../../components/auth/AuthLinks";

function Login() {
    return (
        <Container maxWidth="sm" className="login-container">
            <Paper elevation={6} className="login-paper">

                <Box className="login-content">

                    <Logo />

                    <TextField
                        label="E-mail"
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Senha"
                        type="password"
                        fullWidth
                        margin="normal"
                    />

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Lembrar de mim"
                    />

                    <Button
                        variant="contained"
                        color="success"
                        fullWidth
                    >
                        Entrar
                    </Button>

                    <Divider sx={{ my: 3 }}>
                        ou
                    </Divider>

                    <GoogleButton />

                    <AuthLinks />

                </Box>

            </Paper>
        </Container>
    );
}

export default Login;