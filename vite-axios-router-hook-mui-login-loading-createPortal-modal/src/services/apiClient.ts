import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});
apiClient.interceptors.request.use((request) => {
  const username = localStorage.getItem("username");
  if (!username) window.location.href = "/loginpage";
  return request;
});
export default apiClient;
