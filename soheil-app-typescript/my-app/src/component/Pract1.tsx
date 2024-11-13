/*import { useState, useEffect } from "react";

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
}*/ //

import { useState, useEffect } from "react";
import Post from "../types/postType";

enum SortOrder {
  Ascending = "ascending",
  Descending = "descending",
}



// type PostList = Post[];

export default function Pract1() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.Ascending);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: Post[]) => {
        setPosts(data);
        // console.log(data[0].id);
      })
      .catch((error) => console.log("An error occurred:", error));
  }, []);

  // function descendingSort() {
  //   const sortedPosts = [...posts].sort((a, b) => b.id - a.id);
  //   setPosts(sortedPosts);
  //   setSortOrder(SortOrder.Descending);
  // }

  // function ascendingSort() {
  //   const sortedPosts = [...posts].sort((a, b) => a.id - b.id);
  //   setPosts(sortedPosts);
  //   setSortOrder(SortOrder.Ascending);
  // }
  function handleSort() {
    //ternary
    if (sortOrder === SortOrder.Ascending)
      setPosts([...posts].sort((a, b) => b.id - a.id));
    else setPosts([...posts].sort((a, b) => a.id - b.id));
    setSortOrder((prev) =>
      prev === SortOrder.Ascending ? SortOrder.Descending : SortOrder.Ascending
    );
  }
  return (
    <div>
      <h4>List of Posts</h4>
      {/* <button onClick={descendingSort}>Descending Sort</button>
      <button onClick={ascendingSort}>Ascending Sort</button> */}
      <button onClick={handleSort}>
        {sortOrder === SortOrder.Ascending ? "Desending" : "Asending"}
      </button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>Post Id:</strong> {post.id}
            <br />
            <strong>Post Title:</strong> {post.title}
          </li>
        ))}
      </ul>
      <p>Current Sort Order: {sortOrder}</p>
    </div>
  );
}
