import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "./store";

interface PrivateRoutesProps {
    children: React.ReactNode;
}

export function PrivateRoutes({ children }: PrivateRoutesProps) {
    const navigate = useNavigate();
    const isAuth = useSelector((state: RootState) => state.login[0].isAuth);
    if (isAuth) {
        return <>{children}</>;
    }
    navigate("/");
    return null;
}
