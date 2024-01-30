import { ButtonWithContainerGray } from "../Buttons/ButtonWithContainer/GrayButton";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
import Modal from "react-modal";
import iconeImagem from "../../../public/icone-inserir-imagem.svg";

import "./styles.css";
import { useState } from "react";
import { CustomInput } from "../Input";
import { ButtonWithContainerOrange } from "../Buttons/ButtonWithContainer/OrangeButton";

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
                className="modalContainer"
                contentLabel="Example Modal"
            >
                <h4 className="titulo-modal">Adicionar projeto</h4>

                <div className="container-content">
                    <div className="content-esq">
                        <p>Selecione o conteúdo que você deseja fazer upload</p>
                        <div className="background-imagem">
                            <div className="content-image">
                                <input className="input-imagem" type="file" />
                                <img
                                    src={iconeImagem}
                                    alt="ícone para inserir imagem"
                                />
                                <p>
                                    Compartilhe seu talento com milhares de
                                    pessoas
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="content-dir">
                        <form className="formulario-projeto" action="">
                            <CustomInput>
                                <input type="text" placeholder="Título" />
                            </CustomInput>
                            <CustomInput>
                                <input type="text" placeholder="Tags" />
                            </CustomInput>
                            <CustomInput>
                                <input type="text" placeholder="Link" />
                            </CustomInput>
                            <CustomInput>
                                <textarea placeholder="Descrição " />
                            </CustomInput>
                        </form>
                    </div>
                    <div className="footer-projeto">
                        <p>Visualizar publicação</p>
                        <div className="salvar-e-cancelar-btn">
                            <ButtonWithContainerOrange
                                largura={"100%"}
                                color={"#fff"}
                            >
                                Salvar
                            </ButtonWithContainerOrange>
                            <ButtonWithContainerGray
                                largura={"100%"}
                                color={"#fff"}
                            >
                                <button
                                    className="btn-cancelar"
                                    onClick={fecharModal}
                                >
                                    Cancelar
                                </button>
                            </ButtonWithContainerGray>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
