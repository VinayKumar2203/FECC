import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const ProtectedRoute = ({ children }) => {
    const { token } = useAuth();

    return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;