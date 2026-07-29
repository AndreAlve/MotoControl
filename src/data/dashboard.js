import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import InventoryIcon from "@mui/icons-material/Inventory";

export const dashboardCards = [
    {
        title: "Investimento",
        value: "R$ 58.000",
        icon: <AttachMoneyIcon color="success" />,
    },
    {
        title: "Motos em Estoque",
        value: "3",
        icon: <TwoWheelerIcon color="primary" />,
    },
    {
        title: "Lucro do Mês",
        value: "R$ 4.350",
        icon: <TrendingUpIcon color="success" />,
    },
    {
        title: "Encomendas",
        value: "3",
        icon: <InventoryIcon color="warning" />,
    },
];