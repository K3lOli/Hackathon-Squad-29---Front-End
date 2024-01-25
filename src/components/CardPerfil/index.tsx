import { ButtonWithContainerGray } from "../Buttons/ButtonWithContainer/GrayButton";
import "./styles.css";

export function CardPerfil() {
    return (
        <div className="cardContainer">
            <img src="../../../public/foto-perfil.png" alt="Foto de Perfil" />
            <div className="conteudoTexto">
                <h5>Camila Soares</h5>
                <p className="subtitle-1">Brasil</p>
                <ButtonWithContainerGray
                    largura="203px"
                    color="rgba(0, 0, 0, 0.38)"
                >
                    ADICIONAR PROJETO
                </ButtonWithContainerGray>
            </div>
        </div>
    );
}
