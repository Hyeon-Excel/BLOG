import { useEffect, useState } from "react";
import api from "../api/axios";

function WritePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api
      .get("/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("카테고리 불러오기 실패", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("/posts", {
        title,
        content,
        categoryId,
      })
      .then(() => {
        alert("글 작성 성공!");
        window.location.href = "/";
      })
      .catch((err) => {
        console.error("글 작성 실패", err);
        alert("글 작성 중 오류가 발생했습니다.");
      });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>글 작성</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목</label>
          <br />
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div>
          <label>내용</label>
          <br />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={10}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div>
          <label>카테고리</label>
          <br />
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
          >
            <option value="">카테고리를 선택하세요</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <br />
        <button type="submit">작성하기</button>
      </form>
    </div>
  );
}

export default WritePage;
