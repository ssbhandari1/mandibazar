import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getThunk } from '../thunk';

interface FetchResponse {
  [key: string]: any; // Allows dynamic keys like "products", "users"
}

interface FetchPayload {
  endpoint: string;
}

interface GenericState {
  loading: boolean;
  error: string | null;
  data: FetchResponse[]; // Stores multiple API responses dynamically
}

// Initial state
const initialState: GenericState = {
  loading: false,
  error: null,
  data: [],
};



// Generic Slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getThunk.fulfilled, (state, action: PayloadAction<any, string, { arg: FetchPayload }>) => {
        console.log("genericSlice",{payload : action})
        state.loading = false;
        state.data = action.payload; // ✅ Store data under the endpoint key
      })
      .addCase(getThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default userSlice.reducer;
