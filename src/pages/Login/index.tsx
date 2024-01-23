import "./styles.css";
import { ButtonWithContainer } from "./../../components/Buttons/ButtonWithContainer/index";
import { ButtonWithoutContainer } from "../../components/Buttons/ButtonWithoutContainer";

export function Login() {
    return (
        <>
            <div>
                <h1>Login</h1>
                <ButtonWithContainer>Entrar</ButtonWithContainer>
                <ButtonWithContainer>Sair</ButtonWithContainer>
                <ButtonWithoutContainer>Cadastre-se</ButtonWithoutContainer>
            </div>
        </>
    );
}
