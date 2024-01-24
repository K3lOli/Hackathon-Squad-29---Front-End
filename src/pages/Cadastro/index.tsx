import "./styles.css";
import "../../index.css";
import "../Login/styles.css";
import { CustomInput } from "../../components/Input/index";
import imgRegister from "../../../public/imagem-pagina-registro.png";
import { ButtonWithContainer } from "../../components/Buttons/ButtonWithContainer";

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
                        <CustomInput labelName="Nome">
                            <input type="text" />
                        </CustomInput>
                        <CustomInput>
                            <input type="text" placeholder="Sobrenome *" />
                        </CustomInput>
                    </div>
                    <div className="inputContainer">
                        <CustomInput labelName="Email Address">
                            <input type="email" id="email" name="email" />
                        </CustomInput>
                        <CustomInput labelName="Password">
                            <input type="password" />
                        </CustomInput>
                        <div className="buttonsContainer">
                            <ButtonWithContainer largura={"100%"}>
                                Cadastre-se
                            </ButtonWithContainer>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
