import { ReactNode } from "react";
import "./styles.css";

interface ButtonProps {
    children: ReactNode;
}

export function ButtonWithContainer({ children }: ButtonProps) {
    return (
        <>
            <button className="bnt button-font">
                <p>{children}</p>
            </button>
        </>
    );
}
