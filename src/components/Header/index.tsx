import React from "react";
import logoOrange from "../../../public/logo-orange-portfolio.svg";
import notificacao from "../../../public/botao-notificacao.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import imgDefault from "../../../public/foto-perfil.png";
import { clear, getItem } from "../../utils/storage";
import "./styles.css";
import api from "../../api";
import MenuMobile from "../../../public/menu-mobile.svg";
import { clearProjetos, getProjetos } from "../../store/reducers/projetos";
import SingOut from "../../../public/sign-out.svg";

interface Usuario {
    _id: string;
    createdAt: string;
    email: string;
    nome: string;
    updatedAt: string;
    __v: number;
}

interface Projetos {
    _id: string;
    createdAt: string;
    descricao: string;
    imagem_mimeType: string;
    imagem_name: string;
    imagem_url: string;
    link: string;
    tags: string[];
    titulo: string;
    updatedAt: string;
    usuario_id: string;
    __v: number;
    usuario: Usuario;
}

export function Header() {
    const dispatch = useDispatch();
    const img = useSelector((state: RootState) => state.login[0].img);

    const [menuMobileOpen, setMenuMobileOpen] = React.useState(false);

    const token = getItem("token");

    const toggleMenuMobile = () => {
        setMenuMobileOpen(!menuMobileOpen);
    };

    const navigate = useNavigate();

    const handleClickLogout = () => {
        clear();
        navigate("/");
    };

    const getProjects = () => {
        api.get("/projetos/", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                dispatch(clearProjetos());
                response.data.map((projeto: Projetos) => {
                    return dispatch(getProjetos([projeto]));
                });
            })
            .catch((error) => {
                console.log(error);
            });
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
                                    <li onClick={getProjects}>Descobrir</li>
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
                        <button
                            onClick={handleClickLogout}
                            className="bt-logout"
                        >
                            <img
                                src={SingOut}
                                alt="Botão para deslogar"
                                width={25}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
