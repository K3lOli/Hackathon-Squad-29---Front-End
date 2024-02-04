import { useEffect, useState } from "react";
import { CardPerfil } from "../../components/CardPerfil";
import { Head } from "../../components/Head";
import { Header } from "../../components/Header";
import { getItem } from "../../utils/storage";
import api from "../../api";
import "./styles.css";

interface Projeto {
    titulo: string;
    imagem_url: string;
}

export function MeuPortfolio() {
    const token = getItem("token");
    const [projetos, setProjetos] = useState<Projeto[]>([]);

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
                    <input type="text" placeholder="Buscar tags" />
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
                        {projetos.map((projeto) => (
                            <div key={projeto.titulo} className="projetoBox">
                                <div className="projetoBoxConteudoUsuario">
                                    <img
                                        src={`${api}/imagens/${projeto.imagem_url.replace("uploads/", "")}`}
                                        alt=""
                                    />
                                    <div></div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
