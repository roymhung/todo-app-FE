import axios from "axios";

const getUsersApi = () => {
  const url = `${import.meta.env.VITE_BACKEND_URL}/users`;
  return axios.get(url);
};

const createUserApi = (data: { name: string; email: string }) => {
  const url = `${import.meta.env.VITE_BACKEND_URL}/users`;
  return axios.post(url, data);
};

const updateUserApi = (id: number, name: string, email: string) => {
  const url = `${import.meta.env.VITE_BACKEND_URL}/users/${id}`;
  return axios.put(url, { id, name, email });
};

export { getUsersApi, createUserApi, updateUserApi };
