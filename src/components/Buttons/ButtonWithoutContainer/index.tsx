import { ReactNode } from "react";
import "./styles.css";

interface ButtonProps {
    children: ReactNode;
}

export function ButtonWithoutContainer({ children }: ButtonProps) {
    return (
        <>
            <button className="bnt2 button-font">{children}</button>
        </>
    );
}
