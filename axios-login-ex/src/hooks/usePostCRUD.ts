import PostType from "../types/postType";
import ErrorType from "../types/errorType";
import apiClient from "../services/apiClient";
import { useEffect, useState } from "react";

const usePostCRUD = () => {
  const [data, setData] = useState<PostType[]>();
  const [error, setError] = useState<ErrorType>();
  const getPostList = async () => {
    await apiClient
      .get<PostType[]>("posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => setError(error));
  };
  useEffect(() => {
    getPostList();
  }, []);
  return { data, error };
};
export default usePostCRUD;
