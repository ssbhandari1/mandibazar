
import { addData as addIndexedDBData, getData as getIndexedDBData, updateData as updateIndexedDBData, deleteData as deleteIndexedDBData } from './action';
import { addData as addAPIData, getData as getAPIData, updateData as updateAPIData, deleteData as deleteAPIData } from './apiActions';

const DBTYPE = process.env.NEXT_PUBLIC_DBTYPE || 'indexdb';

const dbActions = DBTYPE === 'api'
  ? { addData: addAPIData, getData: getAPIData, updateData: updateAPIData, deleteData: deleteAPIData }
  : { addData: addIndexedDBData, getData: getIndexedDBData, updateData: updateIndexedDBData, deleteData: deleteIndexedDBData };

export const { addData, getData, updateData, deleteData } = dbActions;

