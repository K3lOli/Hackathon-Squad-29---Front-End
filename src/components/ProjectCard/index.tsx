import "./styles.css";
import "../../index.css";
import { useState } from "react";
import imgDefault from "../../../public/foto-perfil.png";
import { ModalProjeto } from "../../pages/Descobrir/Modal/index";

interface CardProjectsProps {
    readonly imgPerfil?: React.ImgHTMLAttributes<HTMLImageElement>["src"];
    readonly imgProjeto?: React.ImgHTMLAttributes<HTMLImageElement>["src"];
    readonly nome?: string;
    readonly data?: string;
    readonly className?: string;
    readonly index?: number;
    readonly titulo?: string;
}
export function CardProjects({
    imgPerfil,
    nome,
    data,
    imgProjeto,
    className,
    index,
    titulo,
}: CardProjectsProps) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };

    return (
        <>
            <div
                className={`cardProjetos ${className}`}
                onClick={openModal}
                key={index}
            >
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
            <div className="modal">
                <ModalProjeto
                    modalIsOpen={modalIsOpen}
                    setIsOpen={setIsOpen}
                    imgPerfil={imgDefault}
                    imgProjeto={imgProjeto}
                    nome={nome}
                    data={data}
                    titulo={titulo}
                />
            </div>
        </>
    );
}
