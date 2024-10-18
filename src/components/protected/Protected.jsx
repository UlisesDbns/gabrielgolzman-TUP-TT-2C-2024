import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../services/authContext/AuthContext";

const Protected = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (!user.token) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default Protected;