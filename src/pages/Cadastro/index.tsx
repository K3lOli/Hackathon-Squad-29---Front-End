import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./styles.css";
import "../Login/styles.css";
import { CustomInput } from "../../components/Input/index";
import imgRegister from "../../../public/imagem-pagina-registro.png";
import { ButtonWithContainerOrange } from "../../components/Buttons/ButtonWithContainer/OrangeButton";

interface FormValues {
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
}

export function Cadastro() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormValues>();

    const cadastrarUsuario = async (data: FormValues) => {
        try {
            const response = await axios.post(
                "http://localhost:8000/api/usuarios/cadastrar",
                {
                    nome: data.nome,
                    sobrenome: data.sobrenome,
                    email: data.email,
                    senha_hash: data.senha,
                },
            );

            console.log("Usuário cadastrado com sucesso!", response.data);
        } catch (error) {
            console.error("Erro ao cadastrar usuário: ", error);
        }
    };

    return (
        <div className="container--register">
            <div className="imgRegister">
                <img src={imgRegister} alt="Imagem da página de Registro" />
            </div>
            <div className="formContainer">
                <h3 className="register-title">Cadastre-se</h3>
                <form onSubmit={handleSubmit(cadastrarUsuario)}>
                    <div className="container--nome-sobrenome">
                        <CustomInput labelName="Nome *">
                            <input
                                type="text"
                                {...register("nome", { required: true })}
                            />
                        </CustomInput>
                        <CustomInput>
                            <input
                                type="text"
                                placeholder="Sobrenome *"
                                {...register("sobrenome", { required: true })}
                            />
                        </CustomInput>
                    </div>
                    <div className="inputContainer register">
                        <CustomInput labelName="Email Address">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                {...register("email", { required: true })}
                            />
                        </CustomInput>
                        <CustomInput labelName="Password">
                            <input
                                className="password"
                                type="password"
                                {...register("senha", {
                                    required: true,
                                    minLength: 6,
                                })}
                            />
                        </CustomInput>
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
