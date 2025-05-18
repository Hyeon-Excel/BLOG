import { useAuthContext } from '../context/AuthContext';

function useAuth() {
    const { username, login, logout, loading } = useAuthContext();
    return {
        username,
        login,
        logout,
        loading,
        isAdmin: username === 'admin'
    };
}

export default useAuth;
