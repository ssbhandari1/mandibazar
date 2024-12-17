import { STORES } from "./store";

export interface UserModel {
  id: string;
  name: string;
  email: string;
}

export const userModelSchema = {
  name: STORES.USER_STORE,
  options: { keyPath: 'id' } as IDBObjectStoreParameters,
};

