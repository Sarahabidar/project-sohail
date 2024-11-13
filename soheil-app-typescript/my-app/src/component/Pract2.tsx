import { useState, useEffect } from "react";

export default function Pract2() {
  const [posts, setPost] = useState<Array<{ id: number; title: string }>>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      })
      .catch((error) => console.log("an error occurred:", error));
  }, []);

  // Funktion zum Absteigend-Sortieren
  function decendingSort() {
    const sortedPost = [...posts].sort((a, b) => a.id - b.id);
    setPost(sortedPost);
  }

  // Funktion zum Aufsteigend-Sortieren
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
            <strong>Posts Title:</strong> {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
