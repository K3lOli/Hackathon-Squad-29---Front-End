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
import { z } from "zod";
import { useState } from "react";

// interface FormData {
//     email: string;
//     password: string;
// }

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

type FormData = z.infer<typeof schema>;

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
        console.log(data);
        setError("email", {
            type: "custom",
            message: "Email ou senha incorretos",
        });
        console.log(errors.email?.message);
        try {
            api.post("/usuarios/login", {
                email: data.email,
                senha_hash: data.password,
            })
                .then(() => {
                    navigate("/meuportfolio");
                })
                .catch((err) => {
                    setIncorrectPassword(true);
                    console.log(err);
                });
        } catch (err) {
            console.log(err);
        }
    };
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h5>Faça login com email</h5>
                    <div className="inputContainer">
                        <CustomInput labelName={"Email Adress"}>
                            <input
                                type="email"
                                className={
                                    incorrectPassword
                                        ? "incorrect-password"
                                        : ""
                                }
                                {...(register("email"), { required: true })}
                                onClick={handleInputClick}
                            />
                        </CustomInput>
                        <CustomInput labelName={"Password"}>
                            <input
                                type="password"
                                {...register("password", { required: true })}
                                className={
                                    incorrectPassword
                                        ? "incorrect-password"
                                        : ""
                                }
                                onClick={handleInputClick}
                            />
                        </CustomInput>
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
