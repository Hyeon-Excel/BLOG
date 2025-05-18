import { useEffect, useState } from 'react';
import api from '../api/axios';

function useAuth() {
    const [username, setUsername] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('/auth/me')
            .then(res => setUsername(res.data))
            .catch(() => setUsername(null))
            .finally(() => setLoading(false));
    }, []);

    return { username, loading, isAdmin: username === 'admin' };
}

export default useAuth;
