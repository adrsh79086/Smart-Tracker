import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// GET All Products
export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/products`);

  return response.data;
};

// GET Product By ID
export const getUserById = async (id: number) => {
  const response = await axios.get(`${API_URL}/products/${id}`);

  return response.data;
};

// ADD Product
export const addUser = async (product: any) => {
  const response = await axios.post(
    `${API_URL}/products/add`,
    product
  );

  return response.data;
};

// DELETE Product
export const deleteUser = async (id: number) => {
  const response = await axios.delete(
    `${API_URL}/products/${id}`
  );

  return response.data;
};

// UPDATE Product
export const updateUser = async (
  id: number,
  product: any
) => {
  const response = await axios.put(
    `${API_URL}/products/${id}`,
    product
  );

  return response.data;
};