import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("글 불러오기 실패:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>로딩 중...</p>;
  if (!post) return <p>글을 찾을 수 없습니다.</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{post.title}</h1>
      <p>작성일: {new Date(post.createdAt).toLocaleString()}</p>
      <p style={{ whiteSpace: "pre-line" }}>{post.content}</p>
      <p style={{ marginTop: "1rem", fontStyle: "italic" }}>
        카테고리: {post.categoryId ? `#${post.categoryId}` : "없음"}
      </p>
    </div>
  );
}

export default PostPage;
