import Modal from "react-modal";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import "./styles.css";
import "../../../index.css";
import imgProjeto from "../../../../public/Projeto1.png";
import { CardProjects } from "./../../../components/ProjectCard/index";

interface ModalProjetoProps {
    readonly modalIsOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export function ModalProjeto({ modalIsOpen, setIsOpen }: ModalProjetoProps) {
    const fecharModal = () => {
        setIsOpen(false);
    };
    const nome = useSelector((state: RootState) => state.login[0].nome);
    const img = useSelector((state: RootState) => state.login[0].img);
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={fecharModal}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.75)",
                    },
                }}
                className="modalContainer"
                contentLabel="Example Modal"
            >
                {/* <div>x</div> */}
                <div className="modalDesktop">
                    <div className="headerContainer">
                        <div className="infUsuario">
                            <div className="fotoPerfil">
                                <img src={img} alt="" />
                            </div>
                            <div className="nameAndData subtitle-1">
                                <p className="nome">{nome}</p>
                                <p className="data">01/2024</p>
                            </div>
                        </div>
                        <h4>Titulo</h4>
                        <p>UX WEB</p>
                        {/* <tags tags={tags} /> */}
                    </div>
                    <div className="imgContainer">
                        <img src={imgProjeto} alt="" />
                    </div>
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
                <div className="modalMobile">
                    <h4 className="tituloProjeto">Titulo</h4>
                    <CardProjects
                        imgPerfil={img}
                        imgProjeto={imgProjeto}
                        nome={nome}
                        data="01/12"
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
