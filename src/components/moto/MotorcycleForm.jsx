import "./MotorcycleForm.css";

import {
    Box,
    Button,
    Grid,
    MenuItem,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

function MotorcycleForm() {

    return (

        <Paper className="motorcycle-form">

            <Typography variant="h5" mb={3}>
                🏍 Nova Moto
            </Typography>

            <Grid container spacing={2}>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="Marca"
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="Modelo"
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <TextField
                        fullWidth
                        label="Ano"
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <TextField
                        fullWidth
                        label="Cor"
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <TextField
                        fullWidth
                        label="Quilometragem"
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="Valor da Compra"
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        type="date"
                        label="Data da Compra"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <TextField
                        fullWidth
                        select
                        label="Status"
                        defaultValue="EM_REFORMA"
                    >
                        <MenuItem value="EM_REFORMA">
                            Em Reforma
                        </MenuItem>

                        <MenuItem value="A_VENDA">
                            À Venda
                        </MenuItem>

                        <MenuItem value="VENDIDA">
                            Vendida
                        </MenuItem>
                    </TextField>
                </Grid>

            </Grid>

            <Box mt={4}>

                <Button
                    variant="contained"
                    color="success"
                    fullWidth
                >
                    Salvar Moto
                </Button>

            </Box>

        </Paper>

    );
}

export default MotorcycleForm;