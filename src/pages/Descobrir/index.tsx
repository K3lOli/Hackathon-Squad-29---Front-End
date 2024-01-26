import "./styles.css";
import { CustomInput } from "./../../components/Input/index";
import { CardProjects } from "../../components/ProjectCard";
import imgPerfil from "../../assets/foto-perfil.png";
import imgProjeto1 from "../../assets/projeto1.png";
import { Header } from "../../components/Header";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export function Descobrir() {
    const nome = useSelector((state: RootState) => state.login[0].nome);
    const img = useSelector((state: RootState) => state.login[0].img);
    return (
        <>
            <Header />
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
                        imgPerfil={`${img}`}
                        imgProjeto={imgProjeto1}
                        nome={`${nome}`}
                        data="01/24"
                    />
                    <CardProjects
                        imgPerfil={`${img}`}
                        imgProjeto={imgProjeto1}
                        nome={`${nome}`}
                        data="01/24"
                    />
                    <CardProjects
                        imgPerfil={`${img}`}
                        imgProjeto={imgProjeto1}
                        nome={`${nome}`}
                        data="01/24"
                    />
                    <CardProjects
                        imgPerfil={`${img}`}
                        imgProjeto={imgProjeto1}
                        nome={`${nome}`}
                        data="01/24"
                    />
                    <CardProjects
                        imgPerfil={`${img}`}
                        imgProjeto={imgProjeto1}
                        nome={`${nome}`}
                        data="01/24"
                    />
                    <CardProjects
                        imgPerfil={`${img}`}
                        imgProjeto={imgProjeto1}
                        nome={`${nome}`}
                        data="01/24"
                    />
                </div>
            </div>
        </>
    );
}
