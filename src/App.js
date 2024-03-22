import React, { useState, useEffect } from "react";
import "./App.css";
import Pagination from "./Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [postsPerPage] = useState(20);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    } catch (e) {
      console.error(e);
    }
  };

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePage = page => setPage(page);

  return (
    <div className="container">
      <h1 style={{ fontSize: "30px", padding: "10px" }}>Post List</h1>
      <table className="post-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={handlePage}
      />
    </div>
  );
}

export default App;
