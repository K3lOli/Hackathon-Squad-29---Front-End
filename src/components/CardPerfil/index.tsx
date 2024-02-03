import { ButtonWithContainerGray } from "../Buttons/ButtonWithContainer/GrayButton";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
import imgDefault from "../../../public/foto-perfil.png";
import "./styles.css";
import { useState } from "react";
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
    imagem_url?: string;
}

export function CardPerfil() {
    const nome = useSelector((state: RootState) => state.login[0].nome);
    const img = useSelector((state: RootState) => state.login[0].img);

    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const token = getItem("token");
    console.log(token);

    function abrirModal() {
        setIsOpen(true);
    }

    function fecharModal() {
        setIsOpen(false);
    }

    const {
        register,
        handleSubmit,
        // setError,
        // formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        // setError("email", {
        //     type: "custom",
        //     message: "Email ou senha incorretos",
        // });
        // console.log(errors.email?.message);
        console.log(data);
        api.post("projetos/cadastrar", {
            headers: {
                authorization: `Bearer ${token}`,
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
            >
                <div className="container-title">
                    <h5 className="titulo-modal">Adicionar projeto</h5>
                </div>
                <div className="container-content">
                    <div className="content-esq">
                        <p className="descrição-imagem quebra-txt">
                            Selecione o conteúdo que você deseja fazer upload
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
                                        {...register("imagem_url")}
                                    />
                                    <img
                                        className="icone-imagem"
                                        src={iconeImagem}
                                        alt="ícone para inserir imagem"
                                    />
                                    <p className="description-imagem">
                                        Compartilhe seu talento com milhares de
                                        pessoas
                                    </p>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="content-dir">
                        <form
                            className="formulario-projeto"
                            action=""
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <CustomInput>
                                <input
                                    className="input-form"
                                    type="text"
                                    placeholder="Título"
                                    {...register("titulo", { required: true })}
                                />
                            </CustomInput>
                            <CustomInput>
                                <input
                                    className="input-form"
                                    type="text"
                                    placeholder="Tags"
                                    {...register("tags", { required: true })}
                                />
                            </CustomInput>
                            <CustomInput>
                                <input
                                    className="input-form"
                                    type="text"
                                    placeholder="Link"
                                    {...register("link")}
                                />
                            </CustomInput>
                            <CustomInput>
                                <textarea
                                    className="input-form description"
                                    placeholder="Descrição"
                                    {...register("descricao", {
                                        required: true,
                                    })}
                                />
                            </CustomInput>
                            <ButtonWithContainerOrange
                                largura={"18%"}
                                color={"#fff"}
                                type="submit"
                            >
                                Salvar
                            </ButtonWithContainerOrange>
                        </form>
                    </div>
                </div>
                <div className="footer-projeto">
                    <p className="description-visualizar">
                        Visualizar publicação
                    </p>
                    <div className="salvar-e-cancelar-btn">
                        <ButtonWithContainerGray
                            largura={"18%"}
                            color={"#00000061"}
                        >
                            <div className="btn-cancelar" onClick={fecharModal}>
                                Cancelar
                            </div>
                        </ButtonWithContainerGray>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
