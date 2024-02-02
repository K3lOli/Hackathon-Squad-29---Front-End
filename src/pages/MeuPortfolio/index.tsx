import { CardPerfil } from "../../components/CardPerfil";
import { Head } from "../../components/Head";
import { Header } from "../../components/Header";
import { getItem } from "../../utils/storage";
import "./styles.css";
export function MeuPortfolio() {
    const token = getItem("token"); // cadastro de projetos
    console.log(token);
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

                <div className="adicionarProjetos">
                    <div className="projetoBox">
                        <div className="projetoBoxConteudo">
                            <img
                                src="../../../public/collections.svg"
                                alt="Project Collections Logo"
                            />
                            <p className="body-1">
                                Adicione seu primeiro projeto
                            </p>
                            <p className="body-2">
                                Compartilhe seu talento com milhares de pessoas
                            </p>
                        </div>
                    </div>
                    <div className="projetoBox"></div>
                    <div className="projetoBox"></div>
                </div>
            </section>
        </div>
    );
}
