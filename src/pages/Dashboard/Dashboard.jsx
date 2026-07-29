import { Box, Container, Typography } from "@mui/material";

import StatCard from "../../components/StatCard/StatCard";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import InventoryIcon from "@mui/icons-material/Inventory";

function Dashboard() {
    return (
        <Container maxWidth="xl" sx={{ mt: 4 }}>

            <Typography variant="h4" sx={{ mb: 3 }}>
                Dashboard
            </Typography>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, 1fr)",
                        lg: "repeat(4, 1fr)",
                    },
                    gap: 3,
                }}
            >
                <StatCard
                    title="Investimento"
                    value="R$ 58.000"
                    icon={<AttachMoneyIcon color="success" />}
                />

                <StatCard
                    title="Motos em Estoque"
                    value="3"
                    icon={<TwoWheelerIcon color="primary" />}
                />

                <StatCard
                    title="Lucro do Mês"
                    value="R$ 4.350"
                    icon={<TrendingUpIcon color="success" />}
                />

                <StatCard
                    title="Encomendas"
                    value="3"
                    icon={<InventoryIcon color="warning" />}
                />
            </Box>

        </Container>
    );
}

export default Dashboard;