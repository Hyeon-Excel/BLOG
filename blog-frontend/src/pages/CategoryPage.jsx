import { useState } from "react";
import api from "../api/axios";

function CategoryPage() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("/categories", { name })
      .then(() => {
        alert("카테고리 등록 완료!");
        setName("");
      })
      .catch((err) => {
        console.error("카테고리 등록 실패", err);
        alert("카테고리 등록 중 오류가 발생했습니다.");
      });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>카테고리 등록</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>카테고리 이름</label>
          <br />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <br />
        <button type="submit">카테고리 등록</button>
      </form>
    </div>
  );
}

export default CategoryPage;
