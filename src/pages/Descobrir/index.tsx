import "./styles.css";
import { CustomInput } from "./../../components/Input/index";
import { CardProjects } from "../../components/ProjectCard";
import imgProjeto1 from "../../assets/projeto1.png";
import { Header } from "../../components/Header";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Head } from "../../components/Head";

export function Descobrir() {
    const nome = useSelector((state: RootState) => state.login[0].nome);
    const img = useSelector((state: RootState) => state.login[0].img);
    return (
        <>
            <Head
                title="Descobrir"
                description="Junte-se à comunidade de inovação, inspiração e descobertas, transformando experiências em conexões inesquecíveis."
            />
            <Header />
            <div className="containerDescobrir">
                <h4 className="h4Descobrir">
                    Junte-se à comunidade de inovação, inspiração e descobertas,
                    transformando experiências em conexões inesquecíveis
                </h4>
                <div className="inputContainer">
                    <CustomInput>
                        <input
                            placeholder="Buscar tags"
                            type="text"
                            className="inputDescobrir"
                        />
                    </CustomInput>
                </div>

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
