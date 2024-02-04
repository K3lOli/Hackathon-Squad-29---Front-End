import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
import "../Login/styles.css";
import { CustomInput } from "../../components/Input/index";
import imgRegister from "../../../public/imagem-pagina-registro.png";
import { ButtonWithContainerOrange } from "../../components/Buttons/ButtonWithContainer/OrangeButton";
import iconeVisibilidadeSenha from "../../../public/icon-visibility.svg";
import visibilidadeSenhaInativo from "../../../public/visibilidade-inativo.svg";
import { Head } from "../../components/Head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface FormValues {
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
}

export function Cadastro() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const cadastrarUsuario = async (data: FormValues) => {
        try {
            const response = await axios.post("usuarios/cadastrar", {
                nome: data.nome,
                sobrenome: data.sobrenome,
                email: data.email,
                senha_hash: data.senha,
            });

            console.log("Usuário cadastrado com sucesso!", response.data);

            toast.success("Cadastro feito com sucesso!", {
                theme: "colored",
            });

            setTimeout(() => {
                navigate("/");
            }, 3000);
        } catch (error: any) {
            if (error.response && error.response.status === 400) {
                toast.error("Email já cadastrado no sistema.", {
                    theme: "colored",
                });
            } else {
                console.error("Erro ao cadastrar usuário: ", error);
            }
        }
    };

    const [mostrarSenha, setMostrarSenha] = React.useState(false);

    const toggleVisibilidadeSenha = () => {
        setMostrarSenha(!mostrarSenha);
    };

    return (
        <div className="container--register">
            <Head title="Cadastre-se" description="Faça o seu cadastro." />
            <ToastContainer />
            <div className="imgRegister">
                <img src={imgRegister} alt="Imagem da página de Registro" />
            </div>
            <div className="formContainer">
                <h3 className="register-title">Cadastre-se</h3>
                <form
                    onSubmit={handleSubmit(cadastrarUsuario)}
                    className="formCadastro"
                >
                    <div className="container--nome-sobrenome">
                        <CustomInput
                            labelName="Nome *"
                            className="inputNome"
                            largura={"100%"}
                        >
                            <input
                                type="text"
                                {...register("nome", { required: true })}
                            />
                        </CustomInput>
                        <CustomInput className="inputNome" largura={"100%"}>
                            <input
                                type="text"
                                placeholder="Sobrenome *"
                                {...register("sobrenome", { required: true })}
                            />
                        </CustomInput>
                    </div>
                    <div className="register">
                        <CustomInput
                            labelName="Email Address"
                            className="passwordInput"
                            largura={"100%"}
                        >
                            <input
                                type="email"
                                id="email"
                                {...register("email", { required: true })}
                            />
                        </CustomInput>
                        <CustomInput
                            labelName="Password"
                            className="passwordInput"
                            largura={"100%"}
                        >
                            <input
                                className="password"
                                type={mostrarSenha ? "text" : "password"}
                                id="senha"
                                {...register("senha", {
                                    required: true,
                                    minLength: 6,
                                })}
                            />
                            {errors.senha && (
                                <p className="error-message-senha">
                                    A senha deve conter ao menos 6 caracteres.
                                </p>
                            )}
                        </CustomInput>
                        <div
                            className="iconeVisibilidadeCadastro"
                            onClick={toggleVisibilidadeSenha}
                        >
                            <img
                                src={
                                    mostrarSenha
                                        ? iconeVisibilidadeSenha
                                        : visibilidadeSenhaInativo
                                }
                                alt="Icone Visibilidade Senha"
                            />
                        </div>
                        <div className="buttonContainer">
                            <ButtonWithContainerOrange
                                largura={"100%"}
                                color={"#fff"}
                                type="submit"
                            >
                                Cadastrar
                            </ButtonWithContainerOrange>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
