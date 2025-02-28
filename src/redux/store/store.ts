import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import productReducer from '@/redux/slices/productSlice';
import userReducer from '@/redux/slices/userSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer
  },
});

// Types for use in the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
