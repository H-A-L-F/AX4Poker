import { Navigate, useLocation } from 'react-router-dom';
import { AuthContextType, useAuthContext } from './AuthContext';

const isAuthenticated = () => {
    const {user} = useAuthContext() as AuthContextType

    if(!user) return false
    return true
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    let location = useLocation();

    if (!isAuthenticated()) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;