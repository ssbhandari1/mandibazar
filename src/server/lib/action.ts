import { getDB } from './config';

export const addData = async <T>(storeName: string, item: T) => {
  const db = await getDB();
  const tx = db.transaction(storeName, 'readwrite');
  await tx.store.add(item);
  await tx.done;
};

export const getData = async <T>(storeName: string, key: any): Promise<T | undefined> => {
  const db = await getDB();
  return db.transaction(storeName).store.get(key);
};

export const updateData = async <T>(storeName: string, item: T) => {
  const db = await getDB();
  const tx = db.transaction(storeName, 'readwrite');
  await tx.store.put(item);
  await tx.done;
};

export const deleteData = async (storeName: string, key: any) => {
  const db = await getDB();
  const tx = db.transaction(storeName, 'readwrite');
  await tx.store.delete(key);
  await tx.done;
};
