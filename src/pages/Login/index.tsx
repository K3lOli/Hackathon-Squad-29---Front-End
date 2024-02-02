import "./styles.css";
import "../../index.css";
import React, { useState } from "react";
import { ButtonWithContainerOrange } from "../../components/Buttons/ButtonWithContainer/OrangeButton/index";
import { ButtonWithoutContainer } from "../../components/Buttons/ButtonWithoutContainer";
import { GoogleButton } from "../../components/Buttons/GoogleButton";
import { CustomInput } from "../../components/Input";
import imglogin from "../../../public/img_login.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import auth from "../../services/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../../store/reducers/login";
import api from "../../api";
import iconeVisibilidadeSenha from "../../../public/icon-visibility.svg";
import visibilidadeSenhaInativo from "../../../public/visibilidade-inativo.svg";
import { Head } from "../../components/Head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setItem } from "../../utils/storage";

interface FormData {
    email: string;
    senha_hash: string;
}

export function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isAuth, setIsAuth] = useState(false);

    const authenticator = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const usuario = result.user;
                const nome = usuario.displayName;
                const email = usuario.email;
                const img = usuario?.photoURL;
                setIsAuth(true);

                const user = auth.currentUser;
                user?.getIdToken(true).then((idToken) => {
                    api.post("/usuarios/login/google", {
                        googleToken: idToken,
                    });
                });

                navigate("/meuportfolio");

                dispatch(login({ nome, email, img, isAuth }));
            })
            .catch((error) => {
                console.log("deu errado", error);
            });
    };

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<FormData>();

    const [incorrectPassword, setIncorrectPassword] = useState(false); // Estado para controlar se a senha está incorreta
    const handleInputClick = () => {
        setIncorrectPassword(false);
    };
    const onSubmit = (data: FormData) => {
        setError("email", {
            type: "custom",
            message: "Email ou senha incorretos",
        });
        console.log(errors.email?.message);
        api.post("/usuarios/login", {
            email: data.email,
            senha_hash: data.senha_hash,
        })
            .then((response) => {
                toast.success("Login feito com sucesso!", {
                    theme: "colored",
                });
                const token = response.data.token;
                console.log(response.data.token);
                setItem("tokenUsuario", token);
                const usuario = response.data.usuario;
                const email = usuario.email;
                const nome = (usuario.nome + " " + usuario.sobrenome)
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");
                setIsAuth(true);
                navigate("/meuportfolio");
                dispatch(login({ email, nome, isAuth }));
            })
            .catch((err) => {
                setIsAuth(false);
                setIncorrectPassword(true);
                console.log(err);
            });
    };

    const [mostrarSenha, setMostrarSenha] = React.useState(false);

    const toggleVisibilidadeSenha = () => {
        setMostrarSenha(!mostrarSenha);
    };

    return (
        <div className="container">
            <Head title="Login" description="Entre no Orange Portfólio." />
            <ToastContainer />
            <div className="imgLogin">
                <img src={imglogin} alt="" />
            </div>
            <div className="formContainer">
                <h3>Entre no Orange Portfólio</h3>
                <GoogleButton onClick={authenticator}>
                    Entrar com Google
                </GoogleButton>
                <form onSubmit={handleSubmit(onSubmit)} className="formLogin">
                    <h5>Faça login com email</h5>
                    <div className="inputLogin">
                        <CustomInput
                            labelName={"Email Adress"}
                            className="passwordInput"
                            largura={"100%"}
                        >
                            <input
                                type="email"
                                className={
                                    incorrectPassword
                                        ? "incorrect-password"
                                        : ""
                                }
                                {...register("email", { required: true })}
                                onClick={handleInputClick}
                            />
                        </CustomInput>
                        <CustomInput
                            labelName={"Password"}
                            className="passwordInput"
                            largura={"100%"}
                        >
                            <input
                                type={mostrarSenha ? "text" : "password"}
                                {...register("senha_hash", { required: true })}
                                className={
                                    incorrectPassword
                                        ? "incorrect-password"
                                        : ""
                                }
                                onClick={handleInputClick}
                            />
                        </CustomInput>
                        <button
                            className="iconeVisibilidadeLogin"
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
                        </button>
                    </div>
                    <div
                        className={
                            incorrectPassword
                                ? "incorrect-div"
                                : "incorrect-none"
                        }
                    >
                        <p className="caption incorrect">
                            {errors.email?.message}
                        </p>
                    </div>
                    <div className="buttonsContainer">
                        <ButtonWithContainerOrange
                            largura={"100%"}
                            color={"#fff"}
                            type="submit"
                        >
                            Entrar
                        </ButtonWithContainerOrange>
                        <Link to="/cadastro">
                            <ButtonWithoutContainer>
                                Cadastre-se
                            </ButtonWithoutContainer>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
