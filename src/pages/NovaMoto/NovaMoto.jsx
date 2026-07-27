import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Paper,
    Box,
    Typography,
    TextField,
    Button,
    IconButton
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "./NovaMoto.css";

export default function NovaMoto() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        modelo: "",
        ano: "",
        cor: "",
        placa: "",
        valorCompra: "",
        margemDesejada: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validação básica
        if (!formData.modelo || !formData.valorCompra) return;

        // Aqui entrará o salvamento (API / LocalStorage) futuramente
        console.log("Moto cadastrada:", formData);

        // Retorna ao Dashboard
        navigate("/dashboard");
    };

    return (
        <Container maxWidth="sm" className="nova-moto-container">
            <Paper elevation={3} className="nova-moto-paper">
                
                {/* Cabeçalho com Botão Voltar */}
                <Box className="nova-moto-header">
                    <IconButton onClick={() => navigate("/dashboard")} aria-label="voltar">
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h6" fontWeight="bold">
                        Cadastrar Nova Moto
                    </Typography>
                </Box>

                {/* Formulário */}
                <Box component="form" onSubmit={handleSubmit} className="nova-moto-form">
                    
                    <TextField
                        label="Modelo da Moto"
                        name="modelo"
                        placeholder="Ex: Honda CG 160 Fan"
                        fullWidth
                        required
                        value={formData.modelo}
                        onChange={handleChange}
                        className="form-input"
                    />

                    <Box className="form-row">
                        <TextField
                            label="Ano"
                            name="ano"
                            placeholder="Ex: 2022"
                            fullWidth
                            value={formData.ano}
                            onChange={handleChange}
                            className="form-input"
                        />
                        <TextField
                            label="Cor"
                            name="cor"
                            placeholder="Ex: Vermelha"
                            fullWidth
                            value={formData.cor}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </Box>

                    <TextField
                        label="Placa"
                        name="placa"
                        placeholder="Ex: ABC-1234"
                        fullWidth
                        value={formData.placa}
                        onChange={handleChange}
                        className="form-input"
                    />

                    <Box className="form-row">
                        <TextField
                            label="Valor de Compra (R$)"
                            name="valorCompra"
                            type="number"
                            placeholder="Ex: 8000"
                            fullWidth
                            required
                            value={formData.valorCompra}
                            onChange={handleChange}
                            className="form-input"
                        />
                        <TextField
                            label="Margem Desejada (R$)"
                            name="margemDesejada"
                            type="number"
                            placeholder="Ex: 1500"
                            fullWidth
                            value={formData.margemDesejada}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </Box>

                    <Box className="form-actions">
                        <Button
                            variant="outlined"
                            color="inherit"
                            onClick={() => navigate("/dashboard")}
                            className="btn-cancelar"
                        >
                            Cancelar
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            color="success"
                            className="btn-salvar"
                        >
                            Cadastrar Moto
                        </Button>
                    </Box>

                </Box>
            </Paper>
        </Container>
    );
}