import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import NovaMoto from "../pages/NovaMoto/NovaMoto";
import Dashboard from "../pages/Dashboard/Dashboard"; // Ajuste o caminho se seu arquivo estiver na raiz de src

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rotas Públicas / Autenticação */}
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
                <Route path="/recuperar-senha" element={<ForgotPassword />} />

                {/* Rota Principal / Painel Geral */}
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Rota Curinga: Redireciona URLs inexistentes para a tela de Login */}
                <Route path="*" element={<Navigate to="/" replace />} />
                <Route path="/nova-moto" element={<NovaMoto />} />
            </Routes>
        </BrowserRouter>
    );
}