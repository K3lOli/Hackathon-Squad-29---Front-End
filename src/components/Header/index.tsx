import React from "react";
import logoOrange from "../../../public/logo-orange-portfolio.svg";
import notificacao from "../../../public/botao-notificacao.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import imgDefault from "../../../public/foto-perfil.png";

import MenuMobile from "../../../public/menu-mobile.svg";

import "./styles.css";

import { clear } from "../../utils/storage";

export function Header() {
    const img = useSelector((state: RootState) => state.login[0].img);

    const [menuMobileOpen, setMenuMobileOpen] = React.useState(false);

    const toggleMenuMobile = () => {
        setMenuMobileOpen(!menuMobileOpen);
    };

    const navigate = useNavigate();

    const handleClickLogout = () => {
        clear();
        navigate("/");
    };

    return (
        <header className="header">
            <div className="header--content">
                <div
                    className="headerMobileNav"
                    style={{ display: menuMobileOpen ? "block" : "none" }}
                >
                    <NavLink to="/meuportfolio">
                        <li>Meus projetos</li>
                    </NavLink>
                    <NavLink to="/descobrir">
                        <li>Descobrir</li>
                    </NavLink>
                </div>
                <div className="menu-esq-content">
                    <div>
                        <img
                            src={MenuMobile}
                            alt="Menu Mobile"
                            className="menuMobile"
                            onClick={toggleMenuMobile}
                        />
                        <img
                            src={logoOrange}
                            alt="logo orange portfolio"
                            className="logo--orange"
                        />
                    </div>
                    <div className="nav--container">
                        <nav className="nav--content">
                            <ul className="nav--list">
                                <NavLink to="/meuportfolio">
                                    <li>Meus projetos</li>
                                </NavLink>
                                <NavLink to="/descobrir">
                                    <li>Descobrir</li>
                                </NavLink>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div>
                    <div className="menu-dir-content">
                        <img
                            src={`${img}`}
                            onError={(e) => {
                                e.currentTarget.src = imgDefault;
                            }}
                            alt="Foto de perfil"
                            className="perfil-foto"
                        />
                        <img
                            src={notificacao}
                            alt="Foto de perfil"
                            className="botao-notificacao"
                        />
                        <button onClick={handleClickLogout}>LogOut</button>
                    </div>
                </div>
            </div>
        </header>
    );
}
