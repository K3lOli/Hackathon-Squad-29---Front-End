import "./styles.css";
import { CustomInput } from "./../../components/Input/index";
import { CardProjects } from "../../components/ProjectCard";
import imgPerfil from "../../assets/foto-perfil.png";
import imgProjeto1 from "../../assets/projeto1.png";

export function Descobrir() {
    return (
        <div className="containerDescobrir">
            <h4 className="h4Descobrir">
                Junte-se à comunidade de inovação, inspiração e descobertas,
                transformando experiências em conexões inesquecíveis
            </h4>
            <CustomInput labelName="Buscar tags">
                <input type="text" className="inputDescobrir" />
            </CustomInput>
            <div className="cardsContainer">
                <CardProjects
                    imgPerfil={imgPerfil}
                    imgProjeto={imgProjeto1}
                    nome="Amanda"
                    data="01/24"
                />
                <CardProjects
                    imgPerfil={imgPerfil}
                    imgProjeto={imgProjeto1}
                    nome="Amanda"
                    data="01/24"
                />
                <CardProjects
                    imgPerfil={imgPerfil}
                    imgProjeto={imgProjeto1}
                    nome="Amanda"
                    data="01/24"
                />
                <CardProjects
                    imgPerfil={imgPerfil}
                    imgProjeto={imgProjeto1}
                    nome="Amanda"
                    data="01/24"
                />
                <CardProjects
                    imgPerfil={imgPerfil}
                    imgProjeto={imgProjeto1}
                    nome="Amanda"
                    data="01/24"
                />
                <CardProjects
                    imgPerfil={imgPerfil}
                    imgProjeto={imgProjeto1}
                    nome="Amanda"
                    data="01/24"
                />
            </div>
        </div>
    );
}
