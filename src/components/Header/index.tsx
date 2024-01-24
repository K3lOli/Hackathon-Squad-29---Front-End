import logoOrange from "../../../public/logo-orange-portfolio.svg";
import fotoPerfil from "../../../public/foto-perfil.png";
import notificacao from "../../../public/botao-notificacao.svg";
import { Link } from "react-router-dom";

import "./styles.css";

export function Header() {
    return (
        <header className="header">
            <div className="header--content">
                <div className="menu-esq-content">
                    <div>
                        <img
                            src={logoOrange}
                            alt="logo orange portfolio"
                            className="logo--orange"
                        />
                    </div>
                    <div className="nav--container">
                        <nav className="nav--content">
                            <ul className="nav--list">
                                <li>Meus projetos</li>
                                <Link to="/descobrir">
                                    <li>Descobrir</li>
                                </Link>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div>
                    <div className="menu-dir-content">
                        <img
                            src={fotoPerfil}
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
