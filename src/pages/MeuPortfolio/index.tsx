import { ChangeEvent, useEffect, useState } from "react";
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
import editar from "../../../public/Vector.png";
import { CustomInput } from "../../components/Input";
import { ButtonWithContainerOrange } from "../../components/Buttons/ButtonWithContainer/OrangeButton";
import { ButtonWithContainerGray } from "../../components/Buttons/ButtonWithContainer/GrayButton";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import iconeImagem from "../../../public/icone-inserir-imagem.svg";

interface Projeto {
    titulo: string;
    imagem_url: string;
    _id: string;
    createdAt: string;
    tags: string;
    descricao: string;
    link?: string;
}

interface FormData {
    titulo: string;
    tags: string;
    link: string;
    descricao: string;
    file?: FileList;
    projetoId: string;
}

const formatarData = (dataCompleta: string) => {
    const dataObjeto = new Date(dataCompleta);
    const dia = ("0" + dataObjeto.getDate()).slice(-2); // Adiciona um zero à esquerda, se necessário
    const mes = ("0" + (dataObjeto.getMonth() + 1)).slice(-2); // Adiciona um zero à esquerda, se necessário
    const ano = dataObjeto.getFullYear().toString().slice(-2); // Pega os últimos dois dígitos do ano
    return `${dia}/${mes}/${ano}`;
};

export function MeuPortfolio() {
    const dispatch = useDispatch();
    const img = useSelector((state: RootState) => state.login[0].img);
    const nome = useSelector((state: RootState) => state.login[0].nome);
    const token = getItem("token");
    const [projetos, setProjetos] = useState<Projeto[]>([]); // projetos do usuário logado
    const [projetosFiltrados, setProjetosFiltrados] = useState(projetos); // filtra por tag
    const busca = useSelector((state: RootState) => state.input); // state do input de busca
    const [projetoSelecionado, setProjetoSelecionado] = // projeto selecionado para editar
        useState<Projeto | null>(null);
    const isProjetoSelecionado = (id: string) => projetoSelecionado?._id === id;
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const { register, handleSubmit, reset, setValue } = useForm<FormData>();

    const abrirEditar = (projeto: Projeto) => {
        if (projetoSelecionado?._id) {
            setProjetoSelecionado(projeto);
        } else {
            setProjetoSelecionado(projeto);
        }
    };

    const abrirModal = () => {
        setIsOpen(true);
    };

    function fecharModal() {
        // fecha o modal e reseta inputs
        setIsOpen(false);
        reset();
        setSelectedFile(null);
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const fileList = new DataTransfer();
            fileList.items.add(file);
            setValue("file", fileList.files); // Define o valor do campo "file" como FileList
            setSelectedFile(file); // Atualiza o estado selectedFile
        }
    };
    let projetoId: string;

    const onDelete = () => {
        if (projetoSelecionado) {
            projetoId = projetoSelecionado._id;
        }
        api.delete(`projetos/meus-projetos/${projetoId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                console.log(response.data);
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const onSubmit = (data: FormData) => {
        const formData = new FormData();
        formData.append("titulo", data.titulo);
        formData.append("tags", data.tags);
        formData.append("link", data.link);
        formData.append("descricao", data.descricao);
        if (data.file) {
            formData.append("file", data.file[0]);
        }
        let projetoId;

        if (projetoSelecionado) {
            projetoId = projetoSelecionado._id;
        }

        api.put(`projetos/atualizar-projeto/${projetoId}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        })
            .then((response) => {
                console.log(response.data);
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });
    };

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
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={fecharModal}
                className="modalContainer"
                contentLabel="Example Modal"
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.75)",
                    },
                }}
            >
                <div className="container-title">
                    <h5 className="titulo-modal">Adicionar projeto</h5>
                </div>
                <form
                    className="container-content"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="containerForm">
                        <div className="content-esq">
                            <p className="descrição-imagem quebra-txt">
                                Selecione o conteúdo que você deseja fazer
                                upload
                            </p>
                            <div className="background-imagem">
                                <div className="container-description">
                                    <label
                                        htmlFor="input-imagem"
                                        className="content-image"
                                    >
                                        <input
                                            id="input-imagem"
                                            className="input-imagem"
                                            type="file"
                                            {...register("file")}
                                            onChange={handleFileChange}
                                        />
                                        {selectedFile ? (
                                            <img
                                                src={URL.createObjectURL(
                                                    selectedFile,
                                                )}
                                                alt="Imagem selecionada"
                                            />
                                        ) : (
                                            <div className="imagemInicial">
                                                <img
                                                    className="icone-imagem"
                                                    src={iconeImagem}
                                                    alt="ícone para inserir imagem"
                                                />
                                                <p className="description-imagem">
                                                    Compartilhe seu talento com
                                                    milhares de pessoas
                                                </p>
                                            </div>
                                        )}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="content-dir">
                            <div className="formulario-projeto">
                                <CustomInput
                                    className="inputModal"
                                    largura="100%"
                                >
                                    <input
                                        className="input-form-Adicionar-Projetos"
                                        type="text"
                                        placeholder="Título"
                                        {...register("titulo", {
                                            required: true,
                                        })}
                                    />
                                </CustomInput>
                                <CustomInput
                                    className="inputModal"
                                    largura="100%"
                                >
                                    <input
                                        className="input-form"
                                        type="text"
                                        placeholder="Tags"
                                        {...register("tags", {
                                            required: true,
                                        })}
                                    />
                                </CustomInput>
                                <CustomInput
                                    className="inputModal"
                                    largura="100%"
                                >
                                    <input
                                        className="input-form"
                                        type="text"
                                        placeholder="Link"
                                        {...register("link")}
                                    />
                                </CustomInput>
                                <CustomInput
                                    className="inputModal"
                                    largura="100%"
                                >
                                    <textarea
                                        className="input-form description"
                                        placeholder="Descrição"
                                        {...register("descricao", {
                                            required: true,
                                        })}
                                    />
                                </CustomInput>
                            </div>
                        </div>
                    </div>

                    <div className="footer-projeto">
                        <p className="description-visualizar">
                            Visualizar publicação
                        </p>
                        <div className="salvar-e-cancelar-btn">
                            <ButtonWithContainerOrange
                                largura={"91px"}
                                color={"#fff"}
                                type="submit"
                            >
                                Salvar
                            </ButtonWithContainerOrange>
                            <ButtonWithContainerGray
                                largura={"124px"}
                                color={"#00000061"}
                            >
                                <div
                                    className="btn-cancelar"
                                    onClick={fecharModal}
                                >
                                    Cancelar
                                </div>
                            </ButtonWithContainerGray>
                        </div>
                    </div>
                </form>
            </Modal>
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
                                const arrayTags = projeto.tags.split(",");
                                return (
                                    <div
                                        className="container-card"
                                        key={projeto._id}
                                    >
                                        {isProjetoSelecionado(projeto._id) && (
                                            <div className="opcoes">
                                                <p
                                                    className="subtitle-1"
                                                    onClick={abrirModal}
                                                >
                                                    Editar
                                                </p>
                                                <p
                                                    className="subtitle-1"
                                                    onClick={onDelete}
                                                >
                                                    Excluir
                                                </p>
                                            </div>
                                        )}
                                        <div className="botao-editar">
                                            <img
                                                src={editar}
                                                alt=""
                                                onClick={() =>
                                                    abrirEditar(projeto)
                                                }
                                            />
                                        </div>

                                        <CardProjects
                                            key={projeto._id}
                                            className="cardProjectsMeuPortfolio"
                                            imgPerfil={`${img}`}
                                            largura="100%"
                                            imgProjeto={`https://fcamaradeploy-api.onrender.com/imagens/${projeto.imagem_url.replace("uploads/", "")}`}
                                            // imgProjeto={`http://localhost:8000/imagens/${projeto.imagem_url.replace("uploads\\", "")}`}
                                            nome={`${nome}`}
                                            data={formatarData(
                                                projeto.createdAt,
                                            )}
                                            tags={arrayTags}
                                            titulo={`${projeto.titulo}`}
                                            descricao={`${projeto.descricao}`}
                                            link={`${projeto.link}`}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </section>
            </div>
        </>
    );
}
