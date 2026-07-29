import "./Header.css";

import {
    AppBar,
    Avatar,
    Box,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

function Header() {
    return (
        <AppBar position="static" className="header">

            <Toolbar>

                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>

                <Typography
                    variant="h6"
                    className="header-title"
                >
                    MotoControl
                </Typography>

                <Box className="header-actions">

                    <IconButton color="inherit">
                        <NotificationsNoneIcon />
                    </IconButton>

                    <Avatar>
                        A
                    </Avatar>

                </Box>

            </Toolbar>

        </AppBar>
    );
}

export default Header;