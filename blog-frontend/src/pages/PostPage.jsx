import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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

  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      api
        .delete(`/posts/${id}`)
        .then(() => {
          alert("삭제 완료!");
          navigate("/");
        })
        .catch((err) => {
          // 상태 코드가 204인데도 에러로 인식될 수 있으므로 예외 필터링
          if (err.response && err.response.status !== 204) {
            console.error("삭제 실패:", err);
            alert("삭제 중 오류가 발생했습니다.");
          }
        });
    }
  };

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
      <Link to={`/post/${post.id}/edit`}>
        <button>수정</button>
      </Link>
      <button
        onClick={handleDelete}
        style={{ marginLeft: "1rem", color: "red" }}
      >
        삭제
      </button>
    </div>
  );
}

export default PostPage;
