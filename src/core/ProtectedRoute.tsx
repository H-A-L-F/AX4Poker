import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContextType, useAuthContext } from './AuthContext';

const isAuthenticated = () => {
    const {user} = useAuthContext() as AuthContextType

    if(!user) return false
    return true
};

const ProtectedRoute = () => {
    let location = useLocation();

    if (!isAuthenticated()) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;