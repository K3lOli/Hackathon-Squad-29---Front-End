import "./styles.css";
import "../../index.css";
import React from "react";
import { ButtonWithContainerOrange } from "../../components/Buttons/ButtonWithContainer/OrangeButton/index";
import { ButtonWithoutContainer } from "../../components/Buttons/ButtonWithoutContainer";
import { GoogleButton } from "../../components/Buttons/GoogleButton";
import { CustomInput } from "../../components/Input";
import imglogin from "../../assets/img_login.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import auth from "../../services/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../../store/reducers/login";
import iconeVisibilidadeSenha from "../../../public/icon-visibility.svg";
import visibilidadeSenhaInativo from "../../../public/visibilidade-inativo.svg";
import { Head } from "../../components/Head";

export function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const authenticator = () => {
        console.log("entrou");
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(() => {
                navigate("/meuportfolio");
                const nome = auth.currentUser?.displayName;
                const email = auth.currentUser?.email;
                const img = auth.currentUser?.photoURL;

                dispatch(login({ nome, email, img }));
            })
            .catch((error) => {
                console.log("deu errado", error);
            });
    };

    const { register } = useForm();

    const [mostrarSenha, setMostrarSenha] = React.useState(false);

    const toggleVisibilidadeSenha = () => {
        setMostrarSenha(!mostrarSenha);
    };

    return (
        <div className="container">
            <Head title="Login" description="Entre no Orange Portfólio." />
            <div className="imgLogin">
                <img src={imglogin} alt="" />
            </div>
            <div className="formContainer">
                <h3>Entre no Orange Portfólio</h3>
                <GoogleButton onClick={authenticator}>
                    Entrar com Google
                </GoogleButton>
                <form>
                    <h5>Faça login com email</h5>
                    <div className="inputContainer">
                        <CustomInput labelName={"Email Adress"}>
                            <input type="email" {...register("email")} />
                        </CustomInput>
                        <CustomInput labelName={"Password"}>
                            <input
                                type={mostrarSenha ? "text" : "password"}
                                {...register("password")}
                            />
                        </CustomInput>
                        <div
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
                        </div>
                    </div>
                    <div className="buttonsContainer">
                        <Link to="/home" className="link">
                            <ButtonWithContainerOrange
                                largura={"100%"}
                                color={"#fff"}
                            >
                                Entrar
                            </ButtonWithContainerOrange>
                        </Link>
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
