import "./styles.css";
import "../../index.css";
import Modal from "react-modal";
import { useState } from "react";

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
    const closeModal = () => {
        setIsOpen(false);
    };

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            width: "80%",
            height: "80%",
            transform: "translate(-50%, -50%)",
        },
    };
    return (
        <>
            <div className="cardProjetos" onClick={openModal}>
                <div className="imgProjeto">
                    <img src={imgProjeto} alt="" />
                </div>
                <div className="infUsuario">
                    <div className="imgUsuario">
                        <img src={imgPerfil} alt="" />
                    </div>
                    <p className="body-1">
                        {nome} - {data}
                    </p>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            ></Modal>
        </>
    );
}
