import { ReactNode } from "react";
import "./styles.css";

interface ButtonProps {
    children: ReactNode;
    largura?: string;
}

export function ButtonWithContainer({ children, largura }: ButtonProps) {
    return (
        <>
            <button className="bnt button-font" style={{ width: `${largura}` }}>
                <p>{children}</p>
            </button>
        </>
    );
}
