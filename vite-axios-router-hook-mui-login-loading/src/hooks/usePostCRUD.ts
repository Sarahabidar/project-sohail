import Post from "../types/post";
import ErrorType from "../types/errorType";
import apiClient from "../services/apiClient";
import { useEffect, useState } from "react";

const usePostCRUD = () => {
  const [data, setData] = useState<Post[]>();
  const [error, setError] = useState<ErrorType>();

  const getPostList = async () => {
    await apiClient
      .get<Post[]>("posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => setError(error));
  };
  /*const deletePost = async (postId: number) => {
    try {
      await apiClient.delete(`posts/${postId}`);
      setData((prevData) => prevData?.filter((post) => post.id !== postId));
    } catch (error) {
      setError(error);
    }
  };*/
  const deletePost = async (postId: number) => {
    await apiClient
      .delete(`posts/${postId}`)
      .then(() => {
        setData((prev) => prev?.filter((post) => post.id !== postId));
      })
      .catch((error) => {
        setError(error);
      });
  };

  const createPost = async (newPost: { id: number; title: string }) => {
    await apiClient
      .post<Post>("posts", newPost)
      .then((response) => {
        setData((prev) => (prev ? [...prev, newPost] : [newPost]));
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    getPostList();
  }, []);
  return { data, error, deletePost, createPost };
};
export default usePostCRUD;
