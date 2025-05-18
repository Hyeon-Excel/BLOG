import { useAuthContext } from '../context/AuthContext';

function useAuth() {
    const { username, loading } = useAuthContext();

    return {
        username,
        loading,
        isAdmin: username === 'admin'
    };
}

export default useAuth;
