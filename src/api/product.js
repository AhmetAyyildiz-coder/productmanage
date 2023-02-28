import axios from "axios";

export const getProducts = async () => {
  try {
    const response = await axios.get("http://localhost:3001/products");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get("http://localhost:3001/categories");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
