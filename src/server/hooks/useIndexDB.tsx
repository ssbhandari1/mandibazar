import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addData, getData, updateData, deleteData } from '../lib/db.config';

export const useIndexedDB = <T extends Record<string, any>>(storeName: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  console.log(process.env.NEXT_PUBLIC_DBTYPE,'DBTYPE')

  const addItem = async (data: Omit<T, 'id'>): Promise<void> => {
    try {
      setLoading(true);
      const itemWithId = { ...data, id: uuidv4() }; // Automatically generate a unique ID
      await addData(storeName, itemWithId);
    } catch (err: any) {
      setError(err.message || 'Failed to add item');
    } finally {
      setLoading(false);
    }
  };

  const getItem = async (key: string): Promise<T | null> => {
    try {
      setLoading(true);
      return await getData<T>(storeName, key);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch item');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateItem = async (data: T): Promise<void> => {
    try {
      setLoading(true);
      await updateData(storeName, data);
    } catch (err: any) {
      setError(err.message || 'Failed to update item');
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (key: string): Promise<void> => {
    try {
      setLoading(true);
      await deleteData(storeName, key);
    } catch (err: any) {
      setError(err.message || 'Failed to delete item');
    } finally {
      setLoading(false);
    }
  };

  return {
    addItem,
    getItem,
    updateItem,
    deleteItem,
    loading,
    error,
  };
};
