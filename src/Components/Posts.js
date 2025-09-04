import { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 20)))  // Limit to 20 posts
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div>
      <h2 style={{ color: "#444" }}>Blog Posts</h2>
      <div style={gridStyle}>
        {posts.map((post) => (
          <div key={post.id} style={cardStyle}>
            <h3>{post.title}</h3>
            <p>{post.body.slice(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "20px",
};

const cardStyle = {
  backgroundColor: "#fafafa",
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "15px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
};

export default Posts;
