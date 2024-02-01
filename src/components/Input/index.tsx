import React from "react";
import "./styles.css";

interface InputProps {
    readonly children?: React.ReactNode;
    readonly labelName?: string;
}

export function CustomInput({ children, labelName }: InputProps) {
    return (
        <div className="inputContainer">
            <span>{labelName}</span>
            {children}
        </div>
    );
}
