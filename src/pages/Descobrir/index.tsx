import "./styles.css";
import { CustomInput } from "./../../components/Input/index";
import { CardProjects } from "../../components/ProjectCard";
import { Header } from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Head } from "../../components/Head";
import { useEffect, useState } from "react";
import { setText } from "../../store/reducers/textInput";

const formatarData = (dataCompleta: string) => {
    const dataObjeto = new Date(dataCompleta);
    const dia = ("0" + dataObjeto.getDate()).slice(-2); // Adiciona um zero à esquerda, se necessário
    const mes = ("0" + (dataObjeto.getMonth() + 1)).slice(-2); // Adiciona um zero à esquerda, se necessário
    const ano = dataObjeto.getFullYear().toString().slice(-2); // Pega os últimos dois dígitos do ano
    return `${dia}/${mes}/${ano}`;
};

export function Descobrir() {
    const busca = useSelector((state: RootState) => state.input);
    const img = useSelector((state: RootState) => state.login[0].img);
    const projetos = useSelector((state: RootState) => state.projetos);
    const [projetosFiltrados, setProjetosFiltrados] = useState(projetos);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!busca) {
            setProjetosFiltrados(projetos);
            return;
        }
        const projetosPorTag = projetos.filter((projeto) => {
            if (Array.isArray(projeto.tags)) {
                const tagsFiltradas = projeto.tags.filter((tag: string) =>
                    tag.toLowerCase().includes(busca.toLowerCase()),
                );

                return tagsFiltradas.length > 0;
            }
            return false;
        });
        if (projetosPorTag.length > 0) {
            setProjetosFiltrados(projetosPorTag);
        } else {
            const projetosPorNome = projetos.filter((projeto) =>
                projeto.usuario.nome
                    .toLowerCase()
                    .includes(busca.toLowerCase()),
            );
            setProjetosFiltrados(projetosPorNome);
        }
    }, [busca, projetos]);
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
                            value={busca}
                            onChange={(e) => dispatch(setText(e.target.value))}
                        />
                    </CustomInput>
                </div>
                <div className="cardsContainer">
                    {projetosFiltrados.map((projeto) => {
                        return (
                            <CardProjects
                                key={projeto._id}
                                imgPerfil={`${img}`}
                                imgProjeto={`https://fcamaradeploy-api.onrender.com/imagens/${projeto.imagem_url.replace("uploads/", "")}`}
                                nome={`${projeto.usuario.nome}`}
                                data={formatarData(projeto.createdAt)}
                                titulo={`${projeto.titulo}`}
                                descricao={`${projeto.descricao}`}
                                tags={projeto.tags}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
