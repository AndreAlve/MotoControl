import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Paper,
    Box,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    Divider
} from "@mui/material";

import Logo from "../../components/common/Logo";
import GoogleButton from "../../components/common/GoogleButton";
import AuthLinks from "../../components/auth/AuthLinks";

import "./Login.css";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [lembrar, setLembrar] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        // Evita submissão com campos vazios
        if (!email || !senha) return;

        // Redireciona para o Dashboard
        navigate("/dashboard");
    };

    return (
        <Container maxWidth="xs" className="login-container">
            <Paper elevation={6} className="login-paper">
                <Box
                    component="form"
                    onSubmit={handleLogin}
                    className="login-form"
                >
                    <Logo />

                    <TextField
                        label="E-mail"
                        type="email"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="login-input"
                    />

                    <TextField
                        label="Senha"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                        className="login-input"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={lembrar}
                                onChange={(e) => setLembrar(e.target.checked)}
                                color="success"
                            />
                        }
                        label="Lembrar de mim"
                        className="login-remember"
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="success"
                        fullWidth
                        className="login-btn-submit"
                    >
                        Entrar
                    </Button>

                    <Divider className="login-divider">
                        ou
                    </Divider>

                    <GoogleButton />

                    <AuthLinks />
                </Box>
            </Paper>
        </Container>
    );
}