import { useState, useEffect } from "react";
import Post from "../types/postType";

enum SortOrder {
  Ascending = "ascending",
  Descending = "descending",
}

//type PostList = Post[];

export default function PostsItem() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.Ascending);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: Post[]) => {
        setPosts(data);
      })
      .catch((error) => console.log("an error occured:", error));
  }, []);

  function handleSort() {
    if (sortOrder === SortOrder.Ascending)
      setPosts([...posts].sort((a, b) => b.id - a.id));
    else setPosts([...posts].sort((a, b) => a.id - b.id));
    setSortOrder((prev) =>
      prev === SortOrder.Ascending ? SortOrder.Descending : SortOrder.Ascending
    );
  }

  return (
    <div>
      <h2>Post List</h2>
      <button onClick={handleSort}>
        {sortOrder === SortOrder.Ascending ? "Descending" : "Ascending"}
      </button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>Post Id:</strong>
            {post.id}
            <br />
            <strong>Post Title:</strong>
            {post.title}
          </li>
        ))}
      </ul>
      <p>Current Sort Order: {sortOrder}</p>
    </div>
  );
}
