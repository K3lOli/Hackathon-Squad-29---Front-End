import { ReactNode } from "react";
import "./styles.css";
import logoGoogle from "../../../assets/logoGoogle.svg";

interface ButtonProps {
    children: ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function GoogleButton({ children, onClick, }: ButtonProps) {
    return (
        <>
            <div className="mainBox">
                <div className="containerGoogleButton">
                    <button className="bntGoogle button-font" onClick={onClick}>
                        <img src={logoGoogle} alt="" />
                        {children}
                    </button>
                </div>
            </div>
        </>
    );
}
