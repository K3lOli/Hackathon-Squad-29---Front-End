import "./styles.css";
import "../../index.css";
import Modal from "react-modal";
import { useState } from "react";
import { ButtonWithContainerGray } from "../Buttons/ButtonWithContainer/GrayButton";
import { ButtonWithContainerOrange } from "./../Buttons/ButtonWithContainer/OrangeButton/index";
import { CustomInput } from "./../Input/index";
import iconeImagem from "../../../public/icone-inserir-imagem.svg";
import imgDefault from "../../../public/foto-perfil.png";

interface CardProjectsProps {
    readonly imgPerfil?: React.ImgHTMLAttributes<HTMLImageElement>["src"];
    readonly imgProjeto?: React.ImgHTMLAttributes<HTMLImageElement>["src"];
    readonly nome?: string;
    readonly data?: string;
}
export function CardProjects({
    imgPerfil,
    nome,
    data,
    imgProjeto,
}: CardProjectsProps) {
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const openModal = () => {
        setIsOpen(true);
    };
    const fecharModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="cardProjetos" onClick={openModal}>
                <div className="imgProjeto">
                    <img src={imgProjeto} alt="" />
                </div>
                <div className="infUsuario">
                    <div className="imgUsuario">
                        <img
                            src={imgPerfil}
                            onError={(e) => {
                                e.currentTarget.src = imgDefault;
                            }}
                            alt=""
                        />
                    </div>
                    <p className="body-1">
                        {nome} - {data}
                    </p>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={fecharModal}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.75)",
                    },
                    content: {
                        width: "1042px",
                    },
                }}
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
        </>
    );
}
