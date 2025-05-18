import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PrivateRoute({ children }) {
  const { isAdmin, loading } = useAuth();

  if (loading) return <p>확인 중...</p>;
  if (!isAdmin) return <Navigate to="/login" replace />;

  return children;
}

export default PrivateRoute;
