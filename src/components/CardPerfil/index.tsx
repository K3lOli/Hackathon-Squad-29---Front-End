import { ButtonWithContainerGray } from "../Buttons/ButtonWithContainer/GrayButton";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
import imgDefault from "../../../public/foto-perfil.png";
import "./styles.css";
import { useState, ChangeEvent } from "react";
import { CustomInput } from "../Input";
import { ButtonWithContainerOrange } from "../Buttons/ButtonWithContainer/OrangeButton";
import Modal from "react-modal";
import iconeImagem from "../../../public/icone-inserir-imagem.svg";
import { useForm } from "react-hook-form";
import api from "../../api/index";
import { getItem } from "../../utils/storage";

interface FormData {
    titulo: string;
    tags: string;
    link: string;
    descricao: string;
    file?: FileList;
}

export function CardPerfil() {
    const nome = useSelector((state: RootState) => state.login[0].nome);
    const img = useSelector((state: RootState) => state.login[0].img);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const token = getItem("token");

    function abrirModal() {
        setIsOpen(true);
    }

    function fecharModal() {
        setIsOpen(false);
        reset();
        setSelectedFile(null);
    }

    const { register, handleSubmit, reset, setValue } = useForm<FormData>();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const fileList = new DataTransfer();
            fileList.items.add(file);
            setValue("file", fileList.files); // Define o valor do campo "file" como FileList
            setSelectedFile(file); // Atualiza o estado selectedFile
        }
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
        api.post("projetos/cadastrar", formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="cardContainer">
            <img
                src={`${img}`}
                alt="Foto de Perfil"
                onError={(e) => {
                    e.currentTarget.src = imgDefault;
                }}
            />
            <div className="conteudoTexto">
                <h5>{nome}</h5>
                <p className="subtitle-1">Brasil</p>
                <ButtonWithContainerGray
                    onClick={abrirModal}
                    largura="203px"
                    color="rgba(0, 0, 0, 0.38)"
                >
                    ADICIONAR PROJETO
                </ButtonWithContainerGray>
            </div>
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
        </div>
    );
}
