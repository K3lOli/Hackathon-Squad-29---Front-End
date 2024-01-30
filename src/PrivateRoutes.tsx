import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "./store";
import { useEffect } from "react";

interface PrivateRoutesProps {
    children: React.ReactNode;
}

export function PrivateRoutes({ children }: PrivateRoutesProps) {
    const navigate = useNavigate();
    const isAuth = useSelector((state: RootState) => state.login[0].isAuth);
    console.log(isAuth);
    useEffect(() => {
        if (!isAuth) {
            navigate("/");
        }
    }, [isAuth, navigate]);
    return isAuth ? <>{children}</> : null;
}
