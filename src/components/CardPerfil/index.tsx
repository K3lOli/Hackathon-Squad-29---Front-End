import { ButtonWithContainerGray } from "../Buttons/ButtonWithContainer/GrayButton";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
import "./styles.css";
import { useState } from "react";

export function CardPerfil() {
    const nome = useSelector((state: RootState) => state.login[0].nome);
    const img = useSelector((state: RootState) => state.login[0].img);

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(false);
    };
    return (
        <div className="cardContainer">
            <img src={`${img}`} alt="Foto de Perfil" />
            {/* <img src="../../../public/foto-perfil.png" alt="Foto de Perfil" /> */}
            <div className="conteudoTexto">
                <h5>{nome}</h5>
                <p className="subtitle-1">Brasil</p>
                <ButtonWithContainerGray
                    largura="203px"
                    color="rgba(0, 0, 0, 0.38)"
                    onClick={handleClick}
                >
                    ADICIONAR PROJETO
                </ButtonWithContainerGray>
            </div>
        </div>
    );
}
