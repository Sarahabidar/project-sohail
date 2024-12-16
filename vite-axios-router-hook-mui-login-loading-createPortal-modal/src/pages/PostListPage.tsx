import { lazy, Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import { appRouter } from "../router/appRouter";
import usePostCRUD from "../hooks/usePostCRUD";
//import { nanoid } from "nanoid";
import AlertComponents from "../components/AlertComponents";
import { createPortal } from "react-dom";

const PostListPage = () => {
  const navigate = useNavigate();
  const { data, error, deletePost, createPost } = usePostCRUD();
  const [newPost, setNewPost] = useState({ title: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const generateNewId = () => {
    if (data && data.length > 0) {
      return data[data.length - 1].id + 1;
    }
    return 1;
  };

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
      setIsLoading(true);
      const newPostWithId = { id: generateNewId(), title: newPost.title };
      setTimeout(async () => {
        await createPost(newPostWithId);
        setNewPost({ title: "" }); // Reset the form
        setOpenModal(false);
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };
  const MyModal = lazy(() => import("../components/module/CustomeModal"));

  if (error) return <p>An error occurred: {error.message}</p>;

  return (
    <div>
      <button onClick={() => setOpenModal(true)}>Open Modal</button>
      <Suspense fallback={<h1>please wait</h1>}>
        <MyModal
          open={openModal}
          onSubmit={handleCreatePost}
          onCancel={() => {
            setOpenModal(false);
            console.log("Modal closed");
          }}
        >
          <div>
            <h3>Create New Post</h3>
            <input
              type="text"
              placeholder="Post Title"
              value={newPost.title}
              onChange={(e) => setNewPost({ title: e.target.value })}
              disabled={isLoading}
            />
          </div>
        </MyModal>
      </Suspense>

      {createPortal(
        <AlertComponents />,
        document.getElementById("using-create-portal") as HTMLElement
      )}
      <h2>Post List</h2>
      <button onClick={handleHomeButton}>Go To Home</button>

      {isLoading && <p>Loading...</p>}
      <ul>
        {data?.map((m) => (
          <li key={m.id}>
            <strong>Post Id:</strong>
            {m.id}
            <br />
            <strong>Post Title:</strong>
            {m.title}
            <button onClick={() => handleDeletePost(m.id)} disabled={isLoading}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostListPage;
