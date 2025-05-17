import { useEffect, useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("❌ Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>로딩 중...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>블로그 글 목록</h1>
      {posts.length === 0 ? (
        <p>등록된 글이 없습니다.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {posts.map((post) => (
            <li key={post.id} style={{ marginBottom: "1rem" }}>
              <Link to={`/post/${post.id}`}>
                <h3>{post.title}</h3>
              </Link>
              <p>{new Date(post.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
