import React from "react";
import "./styles.css";

interface InputProps {
    children?: React.ReactNode;
    icon?: React.ReactNode;
    labelName?: string;
}

export function CustomInput({ children, icon, labelName }: InputProps) {
    return (
        <div className="inputContainer">
            <span>{labelName}</span>
            <label className="customInput">
                {children}
                {icon}
            </label>
        </div>
    );
}
