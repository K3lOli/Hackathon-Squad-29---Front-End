import { ButtonWithContainerGray } from "../Buttons/ButtonWithContainer/GrayButton";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
import Modal from "react-modal";

import "./styles.css";
import { useState } from "react";
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

export function CardPerfil() {
    const nome = useSelector((state: RootState) => state.login[0].nome);
    const img = useSelector((state: RootState) => state.login[0].img);

    const [modalIsOpen, setIsOpen] = useState<boolean>(false);

    function abrirModal() {
        setIsOpen(true);
    }

    function fecharModal() {
        setIsOpen(false);
    }

    return (
        <div className="cardContainer">
            <img src={`${img}`} alt="Foto de Perfil" />
            {/* <img src="../../../public/foto-perfil.png" alt="Foto de Perfil" /> */}
            <div className="conteudoTexto">
                <h5>{nome}</h5>
                <p className="subtitle-1">Brasil</p>
                <ButtonWithContainerGray
                    onClick={abrirModal}
                    largura="203px"
                    color="rgba(0, 0, 0, 0.38)"
                >
                    ADICIONAR PROJETO
                </ButtonWithContainerGray>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={fecharModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={fecharModal}>close</button>
                <div>I am a modal</div>
            </Modal>
        </div>
    );
}
