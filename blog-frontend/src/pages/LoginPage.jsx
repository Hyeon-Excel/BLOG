import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUsername: setAuthUsername } = useAuthContext();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("password", password);

    try {
      await axios.post("http://localhost:8080/login", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        withCredentials: true,
      });

      setAuthUsername(username); // ✅ 전역 Context 로그인 상태 변경
      alert("로그인 성공!");
      navigate("/");
    } catch (err) {
      setError("❌ 로그인 실패: 아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>관리자 로그인</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>아이디</label>
          <br />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>비밀번호</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit">로그인</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default LoginPage;
