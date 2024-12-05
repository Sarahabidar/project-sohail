import { useNavigate } from "react-router-dom";
import { appRouter } from "../router/appRouter";
import usePostCRUD from "../hooks/usePostCRUD";
import { useState } from "react";

enum SortOrder {
  Ascending = "ascending",
  Descending = "descending",
}

export default function PostListPage() {
  const navigate = useNavigate();
  const { data, error, deletePost } = usePostCRUD();
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.Ascending);

  const handleHomeButton = () => {
    navigate(appRouter.HOME_PAGE, {
      replace: true,
    });
  };

  function handleSort() {
    if (data) {
      // const sortedPosts =
      //   sortOrder === SortOrder.Ascending
      //     ? [...data].sort((a, b) => b.id - a.id)
      //     : [...data].sort((a, b) => a.id - b.id);
      setSortOrder((prev) =>
        prev === SortOrder.Ascending
          ? SortOrder.Descending
          : SortOrder.Ascending
      );
    }
  }
  const handleDeletePost = async (postId: number) => {
    try {
      await deletePost(postId);
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  if (error) return <p>An error occurred: {error.message}</p>; 

  return (
    <div>
      <h2>Post List</h2>
      <button onClick={handleHomeButton}>GO to Home</button>
      <button onClick={handleSort}>
        {sortOrder === SortOrder.Ascending ? "Descending" : "Ascending"}
      </button>
      <ul>
        {data &&
          data?.map((m) => (
            <li key={m.id}>
              <strong>Post Id:</strong> {m.id}
              <br />
              <strong>Post Title:</strong> {m.title}
              <button onClick={() => navigate(appRouter.POST_LIST_ITEM + m.id)}>
                Learn more
              </button>
              <button onClick={() => handleDeletePost(m.id)}>Delete</button>
            </li>
          ))}
      </ul>
      <p>Current Sort Order: {sortOrder}</p>
    </div>
  );
}
