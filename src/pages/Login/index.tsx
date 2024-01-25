import "./styles.css";
import "../../index.css";
import { ButtonWithContainerOrange } from "../../components/Buttons/ButtonWithContainer/OrangeButton/index";
import { ButtonWithoutContainer } from "../../components/Buttons/ButtonWithoutContainer";
import { GoogleButton } from "../../components/Buttons/GoogleButton";
import { CustomInput } from "../../components/Input";
import imglogin from "../../assets/img_login.png";
import { Link } from "react-router-dom";

export function Login() {
    return (
        <div className="container">
            <div className="imgLogin">
                <img src={imglogin} alt="" />
            </div>
            <div className="formContainer">
                <h3>Entre no Orange Portifólio</h3>
                <GoogleButton>Entrar com Google</GoogleButton>
                <form>
                    <h5>Faça login com email</h5>
                    <div className="inputContainer">
                        <CustomInput labelName={"Email Adress"}>
                            <input type="email" id="email" name="email" />
                        </CustomInput>
                        <CustomInput labelName={"Password"}>
                            <input type="password" />
                        </CustomInput>
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
