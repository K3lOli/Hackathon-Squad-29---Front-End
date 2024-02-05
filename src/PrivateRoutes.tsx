import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getItem } from "../src/utils/storage";

interface PrivateRoutesProps {
    children: React.ReactNode;
}

export function PrivateRoutes({ children }: PrivateRoutesProps) {
    const navigate = useNavigate();
    const token = getItem("token");
    useEffect(() => {
        if (!token) {
            navigate("/");
        }
    }, [token, navigate]);
    return token ? <>{children}</> : null;
}
