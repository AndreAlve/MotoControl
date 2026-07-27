import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/cadastro"
                    element={<Register />}
                />

                <Route
                    path="/recuperar-senha"
                    element={<ForgotPassword />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;