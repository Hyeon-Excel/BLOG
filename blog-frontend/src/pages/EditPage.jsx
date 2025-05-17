import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get(`/posts/${id}`).then((res) => {
      const post = res.data;
      setTitle(post.title);
      setContent(post.content);
      setCategoryId(post.categoryId);
    });

    api.get("/categories").then((res) => {
      setCategories(res.data);
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .put(`/posts/${id}`, { title, content, categoryId })
      .then(() => {
        alert("수정 완료!");
        navigate(`/post/${id}`);
      })
      .catch(() => {
        alert("수정 중 오류 발생");
      });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>글 수정</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목</label>
          <br />
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>내용</label>
          <br />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
            required
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
            <option value="">선택하세요</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <br />
        <button type="submit">수정하기</button>
      </form>
    </div>
  );
}

export default EditPage;
