import Modal from "react-modal";
import "./styles.css";
import "../../../index.css";
import { CardProjects } from "../../../components/ProjectCard/index";
import { Chips } from "../../../components/Chips/index";
import Close from "../../../../public/close.svg";

interface ModalProjetoProps {
    readonly modalIsOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    readonly imgProjeto?: string;
    readonly imgPerfil?: string;
    readonly nome?: string;
    readonly data?: string;
    readonly titulo?: string;
    readonly descricao?: string;
    readonly tags?: string[] | string;
    readonly link?: string;
}

export function ModalProjeto({
    modalIsOpen,
    setIsOpen,
    imgProjeto,
    imgPerfil,
    nome,
    data,
    titulo,
    descricao,
    tags,
    link,
}: ModalProjetoProps) {
    const fecharModal = () => {
        setIsOpen(false);
    };
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.75)",
                    },
                }}
                className="modalContainer"
                contentLabel="Example Modal"
            >
                <div className="modalDesktop">
                    <button className="bt-fechar-modal" onClick={fecharModal}>
                        <img src={Close} alt="Fechar modal" />
                    </button>
                    <div className="headerContainer">
                        <div className="infUsuarioModal">
                            <div className="fotoPerfil">
                                <img src={imgPerfil} alt="" />
                            </div>
                            <div className="nameAndData subtitle-1">
                                <p className="nome">{nome}</p>
                                <p className="data">{data}</p>
                            </div>
                        </div>
                        <h4 className="tituloProjeto">{titulo}</h4>
                        <div className="tagContainerModal">
                            {Array.isArray(tags) &&
                            tags.every((item) => typeof item === "string")
                                ? tags.map((tag, index) => (
                                      <Chips key={index}>{tag}</Chips>
                                  ))
                                : null}
                        </div>
                    </div>
                    <div className="imgContainer">
                        <img src={imgProjeto} alt="" />
                    </div>
                    <div className="containerDescricao">
                        <p>{descricao}</p>
                        <a
                            className="link body-2"
                            href={`https://${link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link}
                        </a>
                    </div>
                </div>
                <div className="modalMobile">
                    <button className="bt-fechar-modal" onClick={fecharModal}>
                        <img src={Close} alt="Fechar modal" />
                    </button>
                    <h4 className="tituloProjeto">Titulo</h4>
                    <CardProjects
                        imgPerfil={imgPerfil}
                        imgProjeto={imgProjeto}
                        nome={nome}
                        data={data}
                        className="cardProjetoModal"
                    />
                    <div className="containerDescricao">
                        <p>
                            Temos o prazer de compartilhar com vocês uma
                            variação do nosso primeiro recurso gratuito. É um
                            modelo de IA. Tentamos redesenhar uma versão mais
                            minimalista do nosso primeiro projeto. Download
                            https://gumroad.com/products/wxCSL
                        </p>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
