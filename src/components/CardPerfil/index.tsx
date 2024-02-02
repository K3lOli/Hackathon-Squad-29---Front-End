import { ButtonWithContainerGray } from "../Buttons/ButtonWithContainer/GrayButton";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
import imgDefault from "../../../public/foto-perfil.png";
import "./styles.css";
import { useState } from "react";
import { CustomInput } from "../Input";
import { ButtonWithContainerOrange } from "../Buttons/ButtonWithContainer/OrangeButton";
import Modal from "react-modal";
import iconeImagem from "../../../public/icone-inserir-imagem.svg";

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
            <img
                src={`${img}`}
                alt="Foto de Perfil"
                onError={(e) => {
                    e.currentTarget.src = imgDefault;
                }}
            />
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
                <div className="container-title">
                    <h5 className="titulo-modal">Adicionar projeto</h5>
                </div>
                <div className="container-content">
                    <div className="content-esq">
                        <p className="descrição-imagem quebra-txt">
                            Selecione o conteúdo que você deseja fazer upload
                        </p>
                        <div className="background-imagem">
                            <div className="container-description">
                                <label
                                    htmlFor="input-imagem"
                                    className="content-image"
                                >
                                    <input
                                        id="input-imagem"
                                        className="input-imagem"
                                        type="file"
                                    />
                                    <img
                                        className="icone-imagem"
                                        src={iconeImagem}
                                        alt="ícone para inserir imagem"
                                    />
                                    <p className="description-imagem">
                                        Compartilhe seu talento com milhares de
                                        pessoas
                                    </p>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="content-dir">
                        <form className="formulario-projeto" action="">
                            <CustomInput>
                                <input
                                    className="input-form"
                                    type="text"
                                    placeholder="Título"
                                />
                            </CustomInput>
                            <CustomInput>
                                <input
                                    className="input-form"
                                    type="text"
                                    placeholder="Tags"
                                />
                            </CustomInput>
                            <CustomInput>
                                <input
                                    className="input-form"
                                    type="text"
                                    placeholder="Link"
                                />
                            </CustomInput>
                            <CustomInput>
                                <textarea
                                    className="input-form description"
                                    placeholder="Descrição"
                                />
                            </CustomInput>
                        </form>
                    </div>
                </div>
                <div className="footer-projeto">
                    <p className="description-visualizar">
                        Visualizar publicação
                    </p>
                    <div className="salvar-e-cancelar-btn">
                        <ButtonWithContainerOrange
                            largura={"18%"}
                            color={"#fff"}
                        >
                            Salvar
                        </ButtonWithContainerOrange>
                        <ButtonWithContainerGray
                            largura={"18%"}
                            color={"#00000061"}
                        >
                            <div className="btn-cancelar" onClick={fecharModal}>
                                Cancelar
                            </div>
                        </ButtonWithContainerGray>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
