import axios from "axios";

const getUsersApi = () => {
  const url = `${import.meta.env.VITE_BACKEND_URL}/users`;
  return axios.get(url);
};

const createUserApi = (data: { name: string; email: string }) => {
  const url = `${import.meta.env.VITE_BACKEND_URL}/users`;
  return axios.post(url, data);
};

export { getUsersApi, createUserApi };
