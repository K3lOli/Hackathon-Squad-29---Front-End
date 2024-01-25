import "./styles.css";
import "../../index.css";

interface CardProjectsProps {
    imgPerfil?: React.ImgHTMLAttributes<HTMLImageElement>["src"];
    imgProjeto?: React.ImgHTMLAttributes<HTMLImageElement>["src"];
    nome?: string;
    data?: string;
}
export function CardProjects({
    imgPerfil,
    nome,
    data,
    imgProjeto,
}: CardProjectsProps) {
    return (
        <div className="cardProjetos">
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
    );
}
