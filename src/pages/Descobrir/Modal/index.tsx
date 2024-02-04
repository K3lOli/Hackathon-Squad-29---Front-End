import Modal from "react-modal";
import "./styles.css";
import "../../../index.css";
import { CardProjects } from "../../../components/ProjectCard/index";
import { Chips } from "../../../components/Chips/index";

interface ModalProjetoProps {
    readonly modalIsOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    readonly imgProjeto?: string;
    readonly imgPerfil?: string;
    readonly nome?: string;
    readonly data?: string;
    readonly titulo?: string;
    readonly descricao?: string;
    readonly tags?: string[] | string | undefined;
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
}: ModalProjetoProps) {
    const fecharModal = () => {
        setIsOpen(false);
    };
    // const nome = useSelector((state: RootState) => state.projetos);
    // const img = useSelector((state: RootState) => state.login[0].img);
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
                        <div className="infUsuarioModal">
                            <div className="fotoPerfil">
                                <img src={imgPerfil} alt="" />
                            </div>
                            <div className="nameAndData subtitle-1">
                                <p className="nome">{nome}</p>
                                <p className="data">{data}</p>
                            </div>
                        </div>
                        <h4>{titulo}</h4>
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
                    </div>
                </div>
                <div className="modalMobile">
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
