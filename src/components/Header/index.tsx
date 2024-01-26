import logoOrange from "../../../public/logo-orange-portfolio.svg";
import notificacao from "../../../public/botao-notificacao.svg";
import { NavLink } from "react-router-dom";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

import MenuMobile from "../../../public/menu-mobile.svg";

import "./styles.css";

export function Header() {
    const img = useSelector((state: RootState) => state.login[0].img);
    return (
        <header className="header">
            <div className="header--content">
                <div className="menu-esq-content">
                    <div>
                        <img
                            src={MenuMobile}
                            alt="Menu Mobile"
                            className="menuMobile"
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
                            alt="Foto de perfil"
                            className="perfil-foto"
                        />
                        <img
                            src={notificacao}
                            alt="Foto de perfil"
                            className="botao-notificacao"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
