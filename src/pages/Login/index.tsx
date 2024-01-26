import "./styles.css";
import "../../index.css";
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
import api from "../../api";

export function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const authenticator = () => {
        console.log("entrou");
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const usuario = result.user;
                const nome = usuario.displayName;
                const email = usuario.email;
                const img = usuario.photoURL;

                const user = auth.currentUser;
                user?.getIdToken(true).then((idToken) => {
                    console.log({ idToken });
                    api.post("/usuarios/login/google", {
                        googleToken: idToken,
                    });
                });

                navigate("/meuportfolio");

                dispatch(login({ nome, email, img }));
            })
            .catch((error) => {
                console.log("deu errado", error);
            });
    };

    const { register } = useForm();
    return (
        <div className="container">
            <div className="imgLogin">
                <img src={imglogin} alt="" />
            </div>
            <div className="formContainer">
                <h3>Entre no Orange Portifólio</h3>
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
                            <input type="password" {...register("password")} />
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
