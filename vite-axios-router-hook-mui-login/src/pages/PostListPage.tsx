import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { appRouter } from "../router/appRouter";
import usePostCRUD from "../hooks/usePostCRUD";
import { nanoid } from "nanoid";

const PostListPage = () => {
  const navigate = useNavigate();
  const { data, error, deletePost, createPost } = usePostCRUD();
  const [newPost, setNewPost] = useState({ title: "" });

  const generateNewId = () => {
    if (data && data.length > 0) {
      // Hier wird die höchste ID + 1 als neue ID gesetzt
      return Math.max(...data.map((post) => post.id)) + 1;
    }
    return 1; // Wenn keine Posts vorhanden sind, beginnt die ID bei 1
  };

  /*const [posts, setPosts] = useState<Post[]>([]);
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
  --------------------------------------------------------------------------------------------*/

  const handleHomeButton = () => {
    //window.location.href = appRouter.HOME_PAGE; this ist vanila javascript, this has same result same next line! but we use there useNavigate!
    navigate(appRouter.HOME_PAGE, {
      replace: true,
    }); //this way is better
  };
  const handleDeletePost = async (postId: number) => {
    try {
      await deletePost(postId);
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  const handleCreatePost = async () => {
    try {
      if (!newPost.title) {
        alert("Please provide a title.");
        return;
      }
      const newPostWithId = { id: generateNewId(), title: newPost.title };
      await createPost(newPostWithId);
      setNewPost({ title: "" }); // Reset the form
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  if (error) return <p>An error occurred: {error.message}</p>;

  return (
    <div>
      <h2>Post List</h2>
      <button onClick={handleHomeButton}>Go To Home</button>
      <div>
        <h3>Create New Post</h3>
        <input
          type="text"
          placeholder="Post Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ title: e.target.value })}
        />
        <button onClick={handleCreatePost}>Add Post</button>
      </div>
      <ul>
        {data?.map((m) => (
          <li key={m.id}>
            <strong>Post Id:</strong>
            {m.id}
            <br />
            <strong>Post Title:</strong>
            {m.title}
            <button onClick={() => handleDeletePost(m.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostListPage;
