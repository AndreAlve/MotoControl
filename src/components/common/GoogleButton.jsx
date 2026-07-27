import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

function GoogleButton() {
    return (
        <Button
            variant="outlined"
            fullWidth
            startIcon={<GoogleIcon />}
            sx={{ mt: 2 }}
        >
            Continuar com Google
        </Button>
    );
}

export default GoogleButton;