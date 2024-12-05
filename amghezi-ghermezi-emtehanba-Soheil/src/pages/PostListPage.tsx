import { Post } from "../types/Post";
import { useEffect, useState } from "react";
import axios from "axios";

const PostListPage = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const getList = () => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          setPosts(response.data);
        })
        .catch((error) => console.log("an error occured:", error));
      setLoading(false);
    }, 3000);
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div>
      <h4>Post List Page</h4>
      {loading ? (
        "Loading..."
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>Post ID:</strong>
              {post.id}
              <br />
              <strong>Post Title:</strong>
              {post.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostListPage;
