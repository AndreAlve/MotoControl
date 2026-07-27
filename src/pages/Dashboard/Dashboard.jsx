import { useState } from "react";
import {
    Box,
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    Button,
    Chip,
    Divider,
    Fab,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    MenuItem
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BuildIcon from "@mui/icons-material/Build";

import "./Dashboard.css";

const CATEGORIAS_GASTO = ["Pneu", "Peça", "Óleo", "Pintura", "Documento", "Outro"];

export default function Dashboard() {
    const [motos, setMotos] = useState([
        {
            id: "1",
            modelo: "Honda CG 160 Fan",
            ano: "2022",
            cor: "Vermelha",
            placa: "ABC-1234",
            valorCompra: 8000,
            gastos: [
                { id: "g1", descricao: "Pneu Traseiro Levorin", valor: 250, categoria: "Pneu" },
                { id: "g2", descricao: "Troca de Óleo Mobil", valor: 50, categoria: "Óleo" }
            ],
            margemDesejada: 300
        },
        {
            id: "2",
            modelo: "Yamaha Factor 150",
            ano: "2020",
            cor: "Preta",
            placa: "XYZ-9876",
            valorCompra: 6500,
            gastos: [
                { id: "g4", descricao: "Bateria Moura", valor: 200, categoria: "Peça" }
            ],
            margemDesejada: 400
        }
    ]);

    const [vendasMes] = useState([
        { id: "v1", modelo: "Honda Biz 125", lucroRealizado: 500 },
        { id: "v2", modelo: "Yamaha Fazer 250", lucroRealizado: 450 }
    ]);

    const [modalGastoAberto, setModalGastoAberto] = useState(false);
    const [motoSelecionada, setMotoSelecionada] = useState(null);
    const [novoGasto, setNovoGasto] = useState({ categoria: "Peça", valor: "", descricao: "" });

    const lucroRealizadoMes = vendasMes.reduce((acc, item) => acc + item.lucroRealizado, 0);

    const totalInvestidoEstoque = motos.reduce((acc, moto) => {
        const totalGastos = moto.gastos.reduce((gAcc, g) => gAcc + g.valor, 0);
        return acc + moto.valorCompra + totalGastos;
    }, 0);

    const lucroProjetadoEstoque = motos.reduce((acc, moto) => acc + moto.margemDesejada, 0);

    const handleAbrirModalGasto = (moto) => {
        setMotoSelecionada(moto);
        setNovoGasto({ categoria: "Peça", valor: "", descricao: "" });
        setModalGastoAberto(true);
    };

    const handleFecharModalGasto = () => {
        setModalGastoAberto(false);
        setMotoSelecionada(null);
    };

    const handleSalvarGasto = (e) => {
        e.preventDefault();
        const valorNumerico = parseFloat(novoGasto.valor);
        if (!valorNumerico || valorNumerico <= 0 || !novoGasto.descricao) return;

        setMotos((prev) =>
            prev.map((m) => {
                if (m.id === motoSelecionada.id) {
                    return {
                        ...m,
                        gastos: [
                            ...m.gastos,
                            { id: Date.now().toString(), categoria: novoGasto.categoria, valor: valorNumerico, descricao: novoGasto.descricao }
                        ]
                    };
                }
                return m;
            })
        );
        handleFecharModalGasto();
    };

    return (
        <Container maxWidth="lg" className="dashboard-container">

            {/* CABEÇALHO */}
            <Box className="dashboard-header">
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    component="h1"
                    className="titulo-painel"
                >
                    Painel Geral
                </Typography>

                <Button variant="contained" color="success" startIcon={<AddIcon />} className="btn-nova-moto">
                    Nova Moto
                </Button>
            </Box>

            {/* CARDS FINANCEIROS */}
            <Grid container spacing={2} className="grid-cards-financeiros">
                <Grid item xs={12} md={4}>
                    <Card elevation={3} className="card-lucro">
                        <CardContent>
                            <Box className="card-header-item">
                                <AttachMoneyIcon />
                                <Typography variant="subtitle2">
                                    Lucro Realizado (Neste Mês)
                                </Typography>
                            </Box>
                            <Typography variant="h4" fontWeight="bold">
                                R$ {lucroRealizadoMes.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                            </Typography>
                            <Typography variant="caption" className="caption-subtext">
                                Dinheiro confirmado e no bolso
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card elevation={2} className="card-padrao">
                        <CardContent>
                            <Box className="card-header-item color-secondary">
                                <TwoWheelerIcon color="primary" />
                                <Typography variant="subtitle2">
                                    Preso em Estoque ({motos.length} motos)
                                </Typography>
                            </Box>
                            <Typography variant="h4" fontWeight="bold">
                                R$ {totalInvestidoEstoque.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                Compra + Reformas acumuladas
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card elevation={2} className="card-padrao">
                        <CardContent>
                            <Box className="card-header-item color-secondary">
                                <TrendingUpIcon color="warning" />
                                <Typography variant="subtitle2" >
                                    Lucro Projetado (A Vender)
                                </Typography>
                            </Box>
                            <Typography variant="h4" fontWeight="bold" color="warning.main">
                                R$ {lucroProjetadoEstoque.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                Margem se vender pelo preço sugerido
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Divider className="divider-secao" />

            {/* LISTAGEM DE MOTOS */}
            <Typography variant="h6" fontWeight="bold" className="titulo-secao">
                Motos na Garagem ({motos.length})
            </Typography>

            <Grid container spacing={2}>
                {motos.map((moto) => {
                    const totalGastos = moto.gastos.reduce((acc, g) => acc + g.valor, 0);
                    const custoTotal = moto.valorCompra + totalGastos;
                    const precoSugerido = custoTotal + moto.margemDesejada;

                    return (
                        <Grid item xs={12} md={6} key={moto.id}>
                            <Card elevation={3} className="card-moto">
                                <CardContent>
                                    <Box className="card-moto-top">
                                        <Box>
                                            <Typography variant="h6" fontWeight="bold">
                                                {moto.modelo}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Ano: {moto.ano} | Cor: {moto.cor}
                                            </Typography>
                                        </Box>
                                        <Chip label={moto.placa} size="small" variant="outlined" />
                                    </Box>

                                    <Divider className="divider-interno" />

                                    <Box className="bloco-calculo">
                                        <Box>
                                            <Typography variant="caption" color="text.secondary">Compra:</Typography>
                                            <Typography variant="body2" fontWeight="bold">
                                                R$ {moto.valorCompra.toLocaleString("pt-BR")}
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="caption" color="text.secondary">Gastos ({moto.gastos.length}):</Typography>
                                            <Typography variant="body2" fontWeight="bold" color="error.main">
                                                + R$ {totalGastos.toLocaleString("pt-BR")}
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="caption" color="text.secondary">Custo Total:</Typography>
                                            <Typography variant="body2" fontWeight="bold">
                                                R$ {custoTotal.toLocaleString("pt-BR")}
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="caption" color="text.secondary">Preço Sugerido:</Typography>
                                            <Typography variant="body2" fontWeight="bold" color="success.main">
                                                R$ {precoSugerido.toLocaleString("pt-BR")}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box className="card-moto-acoes">
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            startIcon={<BuildIcon />}
                                            onClick={() => handleAbrirModalGasto(moto)}
                                        >
                                            + Gasto
                                        </Button>
                                        <Button variant="contained" size="small" fullWidth color="primary">
                                            Ver / Vender
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>

            {/* FAB MOBILE */}
            <Fab color="success" aria-label="add" className="fab-mobile">
                <AddIcon />
            </Fab>

            {/* MODAL */}
            <Dialog open={modalGastoAberto} onClose={handleFecharModalGasto} fullWidth maxWidth="xs">
                <Box component="form" onSubmit={handleSalvarGasto}>
                    <DialogTitle fontWeight="bold" className="titulo-painel">
                        Lançar Gasto
                        {motoSelecionada && (
                            <Typography variant="body2" color="text.secondary">
                                {motoSelecionada.modelo} ({motoSelecionada.placa})
                            </Typography>
                        )}
                    </DialogTitle>

                    <DialogContent dividers className="modal-content">
                        <TextField
                            select
                            label="Categoria"
                            fullWidth
                            value={novoGasto.categoria}
                            onChange={(e) => setNovoGasto({ ...novoGasto, categoria: e.target.value })}
                        >
                            {CATEGORIAS_GASTO.map((cat) => (
                                <MenuItem key={cat} value={cat}>
                                    {cat}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            label="Valor (R$)"
                            type="number"
                            fullWidth
                            placeholder="Ex: 150"
                            value={novoGasto.valor}
                            onChange={(e) => setNovoGasto({ ...novoGasto, valor: e.target.value })}
                            required
                        />

                        <TextField
                            label="O que foi feito / Peça (Resguardo Legal)"
                            fullWidth
                            multiline
                            rows={2}
                            placeholder="Ex: Troca de pneu traseiro Levorin e câmara de ar"
                            value={novoGasto.descricao}
                            onChange={(e) => setNovoGasto({ ...novoGasto, descricao: e.target.value })}
                            required
                        />
                    </DialogContent>

                    <DialogActions className="modal-actions">
                        <Button onClick={handleFecharModalGasto} color="inherit">
                            Cancelar
                        </Button>
                        <Button type="submit" variant="contained" color="success">
                            Salvar Gasto
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>

        </Container>
    );
}