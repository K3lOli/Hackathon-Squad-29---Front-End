import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Cadastro } from "./pages/Cadastro";
import { MeuPortfolio } from "./pages/MeuPortfolio";
import { Descobrir } from "./pages/Descobrir";

export function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/cadastro" element={<Cadastro />}></Route>
                <Route path="/descobrir" element={<Descobrir />}></Route>
                <Route path="/home" element={<MeuPortfolio />}></Route>
            </Routes>
        </div>
    );
}
