import { Link, useNavigate } from "react-router-dom";
import logout from "../api/logout";
import useAuth from "../hooks/useAuth";
import { useAuthContext } from "../context/AuthContext";

function Header() {
  const navigate = useNavigate();
  const { username, isAdmin } = useAuth();
  const { setUsername } = useAuthContext();

  const handleLogout = async () => {
    try {
      await logout();
      setUsername(null); // ✅ Context 상태 초기화
      alert("로그아웃 완료!");
      navigate("/");
    } catch {
      alert("로그아웃 실패");
    }
  };

  return (
    <header style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/">홈</Link>{" "}
      {isAdmin && (
        <>
          | <Link to="/admin/write">글쓰기</Link>|{" "}
          <Link to="/admin/category">카테고리</Link>
        </>
      )}
      <span style={{ float: "right" }}>
        {username ? (
          <>
            {username} 님 | <button onClick={handleLogout}>로그아웃</button>
          </>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </span>
    </header>
  );
}

export default Header;
