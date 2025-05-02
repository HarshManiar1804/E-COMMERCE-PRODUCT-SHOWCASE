import axios from "axios";
const BASE_URL = "https://dummyjson.com";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const api = {
  products: {
    getAll: async (limit: number = 12, skip: number = 0) => {
      const response = await axiosInstance.get(
        `/products?limit=${limit}&skip=${skip}`
      );
      return response.data;
    },
    getCategories: async () => {
      const response = await axiosInstance.get("/products/categories");
      return response.data;
    },
    getByCategory: async (category: string) => {
      const response = await axiosInstance.get(
        `/products/category/${category}`
      );
      return response.data;
    },
    search: async (query: string) => {
      const response = await axiosInstance.get(`/products/search?q=${query}`);
      return response.data;
    },
  },
};
