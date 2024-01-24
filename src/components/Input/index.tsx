import React from "react";
import "./styles.css";

interface InputProps {
    children?: React.ReactNode;
    labelName?: string;
}

export function CustomInput({ children, labelName }: InputProps) {
    return (
        <div className="inputContainer">
            <span>{labelName}</span>
            {children}
        </div>
    );
}
