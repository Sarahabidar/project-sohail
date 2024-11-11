import { useState, useEffect } from "react";

export default function PostsList() {
  const [posts, setPosts] = useState<Array<{ id: number; title: string }>>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.log("an Error occured:", error));
  }, []);

  function decendingSort() {
    const sortedPosts = [...posts].sort((a, b) => a.id - b.id);
    setPosts(sortedPosts);
  }

  function acendingSort() {
    const sortedPost = [...posts].sort((a, b) => b.id - a.id);
    setPosts(sortedPost);
  }

  return (
    <div>
      <h2>Posts List</h2>
      <button onClick={decendingSort}>Decending Sort</button>
      <button onClick={acendingSort}>Acending Sort</button>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <strong>Post Title:</strong>
              {post.title}
              <br />
              <strong>Post Id:</strong>
              {post.id}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
