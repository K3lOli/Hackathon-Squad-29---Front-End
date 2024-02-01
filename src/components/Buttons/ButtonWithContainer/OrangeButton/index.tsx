import { ReactNode } from "react";
import "./styles.css";

interface ButtonProps {
    readonly children: ReactNode;
    readonly largura?: string;
    readonly background?: string;
    readonly color?: string;
    readonly padding?: string;
    readonly type?: "submit" | "reset" | "button";
    readonly onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
function obterTamanhoDoPadding(padding: string | undefined): string {
    switch (padding) {
        case "medium":
            return "6px 16px";
        case "small":
            return "4px 10px";
        default:
            return "8px 22px";
    }
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
    const tamanhoDoPadding = obterTamanhoDoPadding(padding);
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
                    padding: tamanhoDoPadding,
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
