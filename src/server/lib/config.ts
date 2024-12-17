import { openDB } from 'idb';
import { MODELS } from '../model';

const DB_NAME = 'MyDatabase';
const DB_VERSION = 1;

export const initializeDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db: { objectStoreNames: { contains: (arg0: string) => any; }; createObjectStore: (arg0: string, arg1: IDBObjectStoreParameters) => void; }) {
      MODELS.forEach(({ name, options }:{name:string,options:IDBObjectStoreParameters}) => {
        if (!db.objectStoreNames.contains(name)) {
          db.createObjectStore(name, options);
        }
      });
    },
  });
};

export const getDB = async () => {
  return initializeDB();
};

