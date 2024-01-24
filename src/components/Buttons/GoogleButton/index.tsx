import { ReactNode } from "react";
import "./styles.css";
import logoGoogle from "../../../assets/logoGoogle.svg";

interface ButtonProps {
    children: ReactNode;
}

export function GoogleButton({ children }: ButtonProps) {
    return (
        <>
            <div className="mainBox">
                <div className="containerGoogleButton">
                    <button className="bntGoogle button-font">
                        <img src={logoGoogle} alt="" />
                        {children}
                    </button>
                </div>
            </div>
        </>
    );
}
