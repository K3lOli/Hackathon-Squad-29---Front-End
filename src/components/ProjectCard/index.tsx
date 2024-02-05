import "./styles.css";
import "../../index.css";
import { useState } from "react";
import imgDefault from "../../../public/foto-perfil.png";
import { ModalProjeto } from "../../pages/Descobrir/Modal/index";
import { Chips } from "../Chips/index";

interface CardProjectsProps {
    readonly imgPerfil?: React.ImgHTMLAttributes<HTMLImageElement>["src"];
    readonly imgProjeto?: React.ImgHTMLAttributes<HTMLImageElement>["src"];
    readonly nome?: string;
    readonly data?: string;
    readonly className?: string;
    readonly index?: number;
    readonly titulo?: string;
    readonly descricao?: string;
    readonly tags?: string[] | string | undefined | Array<string>;
    readonly largura?: string;
    readonly link?: string | undefined;
}
export function CardProjects({
    imgPerfil,
    nome,
    data,
    imgProjeto,
    className,
    index,
    titulo,
    descricao,
    tags,
    largura,
    link,
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
                style={{
                    width: `${largura}`,
                }}
            >
                <div className="imgProjeto">
                    <img src={imgProjeto} alt="" />
                </div>
                <div className="infProjeto">
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
                        <p className="body-1 nomeData">
                            {nome} - {data}
                        </p>
                    </div>
                    <div className="tagContainer">
                        {Array.isArray(tags) &&
                        tags.every((item) => typeof item === "string")
                            ? tags.map((tag, index) => (
                                  <Chips key={index}>{tag}</Chips>
                              ))
                            : null}
                    </div>
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
                    descricao={descricao}
                    tags={tags}
                    link={link}
                />
            </div>
        </>
    );
}
