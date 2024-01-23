import "./styles.css";
import "../../index.css";
import { ButtonWithContainer } from "./../../components/Buttons/ButtonWithContainer/index";
import { ButtonWithoutContainer } from "../../components/Buttons/ButtonWithoutContainer";
import { GoogleButton } from "../../components/Buttons/GoogleButton";
import imglogin from "../../assets/img_login.png";

export function Login() {
    return (
        <>
            <div className="container">
                <div className="imgLogin">
                    <img src={imglogin} alt="" />
                </div>
                <div className="formContainer">
                    <h3>Entre no Orange Portifólio</h3>
                    <GoogleButton>Entrar com Google</GoogleButton>
                    <div className="form">
                        <ButtonWithContainer largura={"100%"}>
                            Entrar
                        </ButtonWithContainer>
                        <ButtonWithoutContainer>
                            Cadastre-se
                        </ButtonWithoutContainer>
                    </div>
                </div>
            </div>
        </>
    );
}
