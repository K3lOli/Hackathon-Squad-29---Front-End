import "./styles.css";
import imagem from "./img_login.png";
import logoGoogle from "./logoGoogle.png";

export function Login() {
    return (
        <div className="container">
            <h3 className="cabecalho">Entre no Orange Portfólio</h3>
            <img className="imagem" src={imagem} alt="Foto à esquerda" />
            <button className="botaoGoogle">
                <img src={logoGoogle} alt="Logo da google" />
                Entrar com google
            </button>

            <div className="divformulario"></div>
            <form className="formularioLogin">
                <label>Email-address</label>
                <input type="email" name="email" required />
                <label>Password</label>
                <input type="password" name="senha" required />
            </form>
            <button className="botaoEntrar">Entrar</button>
            <a href="cadastre-se.txt">Cadastre-se</a>
        </div>
    );
}
