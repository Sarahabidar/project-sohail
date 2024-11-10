import { useState, useEffect } from "react";

export default function PList() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      })
      .catch((error) => console.log("an error occured:", error));
  }, []);

  function decendingSort() {
    const sortedPost = [...posts].sort((a, b) => a.id - b.id);
    setPost(sortedPost);
  }

  function acendingSort() {
    const sortedPost = [...posts].sort((a, b) => b.id - a.id);
    setPost(sortedPost);
  }
  return (
    <div>
      <h4>List Post</h4>
      <button onClick={decendingSort}>Decending Sort</button>
      <button onClick={acendingSort}>Acending Sort</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>Posts Id:</strong> {post.id}
            <br />
            <strong>Posts Title:</strong>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
