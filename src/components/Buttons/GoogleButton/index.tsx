import { ReactNode } from "react";
import { FcGoogle } from "react-icons/fc";
import "./styles.css";

interface ButtonProps {
    children: ReactNode;
}

export function GoogleButton({ children }: ButtonProps) {
    return (
        <>
            <div className="containerGoogleButton">
                <FcGoogle className="iconGoogle" />
                <button className="bntGoogle button-font">{children}</button>
            </div>
        </>
    );
}
