import { useState, useEffect } from "react";
import Post from "../types/postType";
import { useNavigate } from "react-router-dom";
import { appRouter } from "../router/appRouter";
import apiClient from "../services/apiClient";

enum SortOrder {
  Ascending = "ascending",
  Descending = "descending",
}

//type PostList = Post[];

export default function PostListPage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.Ascending);

  const getList = () => {
    apiClient
      .get("posts")
      /*result.then((data: Post[]) => {
      setPosts(data);
    });*/
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => console.log("an error occured:", error));
  };

  /*const getList = () => {
    const result = axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
    result.then((response) => {
      setPosts(response.data);
    });
  };*/

  useEffect(() => {
    getList();
  }, []);
  /* when we use then &catch we dont use async await try */
  /* useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: Post[]) => {
        setPosts(data);
      })
      .catch((error) => console.log("an error occured:", error));
  }, []);*/

  const handleHomeButton = () => {
    navigate(appRouter.HOME_PAGE, {
      replace: true,
    });
  };

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
      <button onClick={handleHomeButton}>GO to Home</button>
      <button onClick={handleSort}>
        {sortOrder === SortOrder.Ascending ? "Descending" : "Ascending"}
      </button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {/*<Link to = {`/postList/${post.id}`}></Link> */}
            <strong>Post Id:</strong>
            {post.id}
            <br />
            <strong>Post Title:</strong>
            {post.title}
            <button
              onClick={() => navigate(appRouter.POST_LIST_ITEM + post.id)}
            >
              Learn more
            </button>
          </li>
        ))}
      </ul>
      <p>Current Sort Order: {sortOrder}</p>
    </div>
  );
}
