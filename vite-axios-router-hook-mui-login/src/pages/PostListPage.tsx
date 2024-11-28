import Post from "../types/post";
import { useNavigate } from "react-router-dom";
import { appRouter } from "../router/appRouter";
import axios from "axios";
import { useEffect, useState } from "react";

const PostListPage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);

  const getList = () => {
    //const result = axios.get("https://jsonplaceholder.typicode.com/posts");
    //result.then((res) => {
    //console.log(res.data);
    //});
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => console.log("an error occured:", error));
  };
  useEffect(() => {
    getList();
  }, []);
  const handleHomeButton = () => {
    //window.location.href = appRouter.HOME_PAGE; this ist vanila javascript, this has same result same next line! but we use there useNavigate!
    navigate(appRouter.HOME_PAGE, {
      replace: true,
    }); //this way is better
  };
  return (
    <div>
      <h2>Post List</h2>
      <button onClick={handleHomeButton}>Go To Home</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>Post Id:</strong>
            {post.id}
            <br />
            <strong>Post Titile:</strong>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostListPage;
