import { useEffect, useState } from "react";
import api from "../api/axios";

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api
      .get("/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>블로그 글 목록</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <br />
            <span>{post.createdAt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
