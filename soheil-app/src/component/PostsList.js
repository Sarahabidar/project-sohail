import { useState, useEffect } from "react";

export default function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.log("Eroor:", error));
  }, []);
  function deceningSort() {
    const sortedPost = [...posts].sort((a, b) => b.id - a.id);
    // const sortedPost = [...posts].sort((a, b) => b.title.localCompare(a.title));
    //[...posts]   [1,2,3,4,5]
    setPosts(sortedPost);
    // setPosts((prev) => prev.sort((a, b) => b.id - a.id));
  }
  function asendingSort() {
    const sortedPost = [...posts].sort((a, b) => a.id - b.id);
    // const sortedPost = [...posts].sort((a, b) => b.title.localCompare(a.title));
    //[...posts]   [1,2,3,4,5]
    setPosts(sortedPost);
    // setPosts((prev) => prev.sort((a, b) => b.id - a.id));
  }
  return (
    <div>
      <h3>Post Listsssss</h3>
      <button onClick={deceningSort}>Descending Sort </button>
      <button onClick={asendingSort}>Acending Sort </button>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>Post Id :</strong> {post.id}
            <br />
            <strong>Post Title</strong>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
