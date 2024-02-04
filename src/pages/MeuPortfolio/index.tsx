import { useEffect, useState } from "react";
import { CardPerfil } from "../../components/CardPerfil";
import { Head } from "../../components/Head";
import { Header } from "../../components/Header";
import { getItem } from "../../utils/storage";
import api from "../../api";
import "./styles.css";
import { CardProjects } from "../../components/ProjectCard";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { setText } from "../../store/reducers/textInput";

interface Projeto {
    titulo: string;
    imagem_url: string;
    _id: string;
    createdAt: string;
    tags: string;
    descricao: string;
}

const formatarData = (dataCompleta: string) => {
    const dataObjeto = new Date(dataCompleta);
    const dia = ("0" + dataObjeto.getDate()).slice(-2); // Adiciona um zero à esquerda, se necessário
    const mes = ("0" + (dataObjeto.getMonth() + 1)).slice(-2); // Adiciona um zero à esquerda, se necessário
    const ano = dataObjeto.getFullYear().toString().slice(-2); // Pega os últimos dois dígitos do ano
    return `${dia}/${mes}/${ano}`;
};

export function MeuPortfolio() {
    const img = useSelector((state: RootState) => state.login[0].img);
    const nome = useSelector((state: RootState) => state.login[0].nome);
    const token = getItem("token");
    const [projetos, setProjetos] = useState<Projeto[]>([]);
    const [projetosFiltrados, setProjetosFiltrados] = useState(projetos);
    const dispatch = useDispatch();
    const busca = useSelector((state: RootState) => state.input);

    useEffect(() => {
        if (!busca) {
            setProjetosFiltrados(projetos);
            return;
        }
        const projetosPorTag = projetos.filter((projeto) => {
            const arrayTags = projeto.tags
                .split(",")
                .map((tag) => tag.trim().toLowerCase());
            return arrayTags.some((tag) => tag.includes(busca.toLowerCase()));
        });
        setProjetosFiltrados(projetosPorTag);
    }, [busca, projetos]);

    useEffect(() => {
        const buscarProjetos = async () => {
            try {
                const response = await api.get("/projetos/meus-projetos", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProjetos(response.data);
            } catch (error) {
                console.error("Erro ao buscar projetos: ", error);
            }
        };

        buscarProjetos();
    }, [token]);

    return (
        <div>
            <Head
                title="Meu Portfólio"
                description="Página do meu portfólio."
            />
            <Header />
            <CardPerfil />

            <section className="secaoProjetos">
                <div className="meusProjetosDiv">
                    <h6>Meus projetos</h6>
                    <input
                        type="text"
                        placeholder="Buscar tags"
                        value={busca}
                        onChange={(e) => dispatch(setText(e.target.value))}
                    />
                </div>
                {projetos.length === 0 ? (
                    <div className="adicionarProjetos">
                        <div className="projetoBox">
                            <div className="projetoBoxConteudo">
                                <img
                                    src="../../../public/collections.svg"
                                    alt="Project Collections Logo"
                                />
                                <p className="body-1 primeiroProjeto">
                                    Adicione seu primeiro projeto
                                </p>
                                <p className="body-2">
                                    Compartilhe seu talento com milhares de
                                    pessoas
                                </p>
                            </div>
                        </div>
                        <div className="projetoBox"></div>
                        <div className="projetoBox"></div>
                    </div>
                ) : (
                    <div className="adicionarProjetos">
                        {projetosFiltrados.map((projeto) => {
                            console.log(projeto.tags);
                            const arrayTags = projeto.tags.split(",");
                            return (
                                <CardProjects
                                    key={projeto._id}
                                    imgPerfil={`${img}`}
                                    largura="100%"
                                    // imgProjeto={`https://fcamaradeploy-api.onrender.com/imagens/${projeto.imagem_url.replace("uploads/", "")}`}
                                    imgProjeto={`http://localhost:8000/imagens/${projeto.imagem_url.replace("uploads\\", "")}`}
                                    nome={`${nome}`}
                                    data={formatarData(projeto.createdAt)}
                                    tags={arrayTags}
                                    titulo={`${projeto.titulo}`}
                                    descricao={`${projeto.descricao}`}
                                />
                            );
                        })}
                    </div>
                )}
            </section>
        </div>
    );
}
