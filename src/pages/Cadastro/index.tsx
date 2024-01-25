import "./styles.css";
import "../Login/styles.css";
import { CustomInput } from "../../components/Input/index";
import imgRegister from "../../../public/imagem-pagina-registro.png";
import { ButtonWithContainerOrange } from "../../components/Buttons/ButtonWithContainer/OrangeButton";

export function Cadastro() {
    return (
        <div className="container--register">
            <div className="imgRegister">
                <img src={imgRegister} alt="Imagem da página de Registro" />
            </div>
            <div className="formContainer">
                <h3 className="register-title">Cadastre-se</h3>
                <form>
                    <div className="container--nome-sobrenome">
                        <CustomInput labelName="Nome *">
                            <input type="text" />
                        </CustomInput>
                        <CustomInput>
                            <input type="text" placeholder="Sobrenome *" />
                        </CustomInput>
                    </div>
                    <div className="inputContainer register">
                        <CustomInput labelName="Email Address">
                            <input type="email" id="email" name="email" />
                        </CustomInput>
                        <CustomInput labelName="Password">
                            <input className="password" type="password" />
                        </CustomInput>
                        <div className="buttonContainer">
                            <ButtonWithContainerOrange
                                largura={"100%"}
                                color={"#fff"}
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
