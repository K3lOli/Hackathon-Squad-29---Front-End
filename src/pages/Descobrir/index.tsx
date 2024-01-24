import React from "react";
import "./styles.css";
import "../../index.css";
import { CustomInput } from "./../../components/Input/index";

export function Descobrir() {
    return (
        <div className="containerDescobrir">
            <h4>
                Junte-se à comunidade de inovação, inspiração e descobertas,
                transformando experiências em conexões inesquecíveis
            </h4>
            <CustomInput labelName="Buscar tags">
                <input type="text" />
            </CustomInput>
        </div>
    );
}
