import React from "react";
import "./styles.css";

interface InputProps {
    readonly children?: React.ReactNode;
    readonly labelName?: string;
    readonly className?: string;
    readonly largura?: string;
}

export function CustomInput({
    children,
    labelName,
    className,
    largura,
}: InputProps) {
    return (
        <div
            className={`inputContainer ${className}`}
            style={{
                width: `${largura}`,
            }}
        >
            <span>{labelName}</span>
            {children}
        </div>
    );
}
