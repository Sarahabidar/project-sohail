import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});
apiClient.interceptors.request.use((request) => {
  const username = localStorage.getItem("username");
  if (!username) window.location.href = "/loginPage";
  return request;
});
export default apiClient;

/*we can use just hook in component, becouse of them we don't use useNavigate und we use windose.location..*/
