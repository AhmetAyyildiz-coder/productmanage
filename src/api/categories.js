import axios from "axios";

const baseUrl = "http://localhost:3001/categories";

export const getCategories = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const addCategory = async (newCategory) => {
  const response = await axios.post(baseUrl, newCategory);
  return response.data;
};

export const updateCategory = async (categoryId, updatedCategory) => {
  const response = await axios.put(`${baseUrl}/${categoryId}`, updatedCategory);
  return response.data;
};

export const deleteCategory = async (categoryId) => {
  const response = await axios.delete(`${baseUrl}/${categoryId}`);
  return response.data;
};
