import { ReactNode } from "react";
import "./styles.css";

interface ButtonProps {
    children: ReactNode;
    largura?: string;
    background?: string;
    color?: string;
    padding?: string;
    type?: "submit" | "reset" | "button" | undefined;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function ButtonWithContainerOrange({
    children,
    largura,
    background,
    color,
    padding,
    onClick,
    type,
}: ButtonProps) {
    return (
        <>
            {/* aqui no botão tu pode colocar os atributos de largura do botão, background do botão, color da fonte e padding(large, medium e small).
            Além disso modifiquei o button-font para não quebrar no index.css, coisa que não é muito legal mas resolve o problema do tamanho do botão que o thiago comentou, 
            mas acredito que só um width min-content já resolva.
            Se ainda precisar de alguma prop me avisem ou fiquem a vontade para alterar */}
            <button
                className={`bntOrange button-font`}
                onClick={onClick}
                type={type}
                style={{
                    width: `${largura}`,
                    background: `${background}`,
                    color: `${color}`,
                    padding:
                        `${padding}` === "large"
                            ? "8px 22px"
                            : `${padding}` === "medium"
                              ? "6px 16px"
                              : `${padding}` === "small"
                                ? "4px 10px"
                                : "8px 22px",
                }}
            >
                <p
                    style={{
                        color: `${color}`,
                    }}
                >
                    {children}
                </p>
            </button>
        </>
    );
}
