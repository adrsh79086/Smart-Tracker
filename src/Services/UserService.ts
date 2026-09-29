import axios from "axios";

const API_URL = "http://localhost:3000/products";

// GET Products
export const getUsers = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

// ADD Product
export const addUser = async (product: any) => {
  const response = await axios.post(`${API_URL}/add`, product);

  return response.data;
};

// DELETE Product
export const deleteUser = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`);

  return response.data;
};

// UPDATE Product
export const updateUser = async (
  id: number,
  product: any
) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    product
  );

  return response.data;
};