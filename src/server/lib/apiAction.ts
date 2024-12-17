import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

export const addData = async <T>(storeName: string, item: T) => {
  const response = await axios.post(`${API_BASE_URL}/${storeName}`, item);
  return response.data;
};

export const getData = async <T>(storeName: string, key: string): Promise<T | undefined> => {
  const response = await axios.get(`${API_BASE_URL}/${storeName}/${key}`);
  return response.data;
};

export const updateData = async <T>(storeName: string, item: T) => {
  const response = await axios.put(`${API_BASE_URL}/${storeName}/${item['id']}`, item);
  return response.data;
};

export const deleteData = async (storeName: string, key: string) => {
  const response = await axios.delete(`${API_BASE_URL}/${storeName}/${key}`);
  return response.data;
};
