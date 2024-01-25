import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Cadastro } from "./pages/Cadastro";
import { Home } from "./pages/Home";
import { Descobrir } from "./pages/Descobrir";
export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/cadastro" element={<Cadastro />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/descobrir" element={<Descobrir />}></Route>
        </Routes>
    );
}
