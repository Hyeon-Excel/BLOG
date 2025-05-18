import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PrivateRoute({ children }) {
  const { isAdmin, loading } = useAuth();
  const location = useLocation();

  if (loading) return <p>확인 중...</p>;
  if (!isAdmin)
    return <Navigate to="/login" replace state={{ from: location }} />;

  return children;
}

export default PrivateRoute;
