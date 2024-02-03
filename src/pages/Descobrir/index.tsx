import "./styles.css";
import { CustomInput } from "./../../components/Input/index";
import { CardProjects } from "../../components/ProjectCard";
import { Header } from "../../components/Header";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Head } from "../../components/Head";

const formatarData = (dataCompleta: string) => {
    const dataObjeto = new Date(dataCompleta);
    const dia = ("0" + dataObjeto.getDate()).slice(-2); // Adiciona um zero à esquerda, se necessário
    const mes = ("0" + (dataObjeto.getMonth() + 1)).slice(-2); // Adiciona um zero à esquerda, se necessário
    const ano = dataObjeto.getFullYear().toString().slice(-2); // Pega os últimos dois dígitos do ano
    return `${dia}/${mes}/${ano}`;
};

export function Descobrir() {
    const img = useSelector((state: RootState) => state.login[0].img);
    const projetos = useSelector((state: RootState) => state.projetos);
    const imgProjetoss = "http://localhost:8000/imagens/1706622502902.png";
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
                    {projetos.map((projeto, index) => {
                        return (
                            <CardProjects
                                key={index}
                                imgPerfil={`${img}`}
                                imgProjeto={imgProjetoss}
                                nome={`${projeto.usuario.nome}`}
                                data={formatarData(projeto.createdAt)}
                                titulo={`${projeto.titulo}`}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
