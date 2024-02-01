import { ReactNode } from "react";
import "./styles.css";
import logoGoogle from "../../../../public/logoGoogle.svg";

interface ButtonProps {
    readonly children: ReactNode;
    readonly onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function GoogleButton({ children, onClick }: ButtonProps) {
    return (
        <div className="mainBox">
            <div className="containerGoogleButton">
                <button className="bntGoogle button-font" onClick={onClick}>
                    <img src={logoGoogle} alt="" />
                    {children}
                </button>
            </div>
        </div>
    );
}
