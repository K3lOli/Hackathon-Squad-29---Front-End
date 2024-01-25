import "./styles.css";
import "../../index.css";
import { ButtonWithContainerOrange } from "../../components/Buttons/ButtonWithContainer/OrangeButton/index";
import { ButtonWithoutContainer } from "../../components/Buttons/ButtonWithoutContainer";
import { GoogleButton } from "../../components/Buttons/GoogleButton";
import { CustomInput } from "../../components/Input";
import imglogin from "../../assets/img_login.png";
import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";
import api from "../../api";
import { setItem } from "../../utils/storage";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e: FormEvent) {
        e.preventDefault();
        try {
            if (!email || !password) {
                return;
            }
            const response = await api.post("/usuarios/login", {
                email,
                senha_hash: password,
            });
            const { id, nome, token } = response.data;
            setItem("token", token);
            setItem("userId", id.toString());
            setItem("userName", nome);
        } catch (error: unknown) {
            if (error) {
                console.log(error);
            } else {
                alert("Error desconhecido");
            }
        }
    }

    return (
        <div className="container">
            <div className="imgLogin">
                <img src={imglogin} alt="" />
            </div>
            <div className="formContainer">
                <h3>Entre no Orange Portifólio</h3>

                <GoogleButton> Entrar com Google </GoogleButton>

                <form onSubmit={handleLogin}>
                    <h5>Faça login com email</h5>
                    <div className="inputContainer">
                        <CustomInput labelName={"Email Adress"}>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </CustomInput>
                        <CustomInput labelName={"Password"}>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </CustomInput>
                    </div>
                    <div className="buttonsContainer">
                        {/* <Link to="/home" className="link"> */}
                        <ButtonWithContainerOrange
                            largura={"100%"}
                            color={"#fff"}
                        >
                            Entrar
                        </ButtonWithContainerOrange>
                        {/* </Link> */}
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
