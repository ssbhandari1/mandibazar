
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { handleError } from '../../utils/services/httpClient';
interface FetchResponse {
	[key: string]: any;
}
interface FetchPayload {
  endpoint: string;
}

interface MutationPayload {
	endpoint: string;
	payload: Record<string, any>;
}


// Dynamic Thunk for fetching data
export const getThunk = createAsyncThunk<FetchResponse, FetchPayload>(
  'generic/fetchData',
  async ({ endpoint }) => {
    const response = await fetch(endpoint);
    console.log("getThunk@@@",response)
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${endpoint}`);
    }
    return response.json();
  }
);




export const postThunk = createAsyncThunk<
	FetchResponse,
	MutationPayload
>('data/postData', async ({ endpoint, payload }) => {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    // handleError(response.status);
  }
  return response.json();
});