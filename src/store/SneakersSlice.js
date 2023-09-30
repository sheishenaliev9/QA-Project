import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const URL = "http://localhost:9090";

export const getAllSneakers = createAsyncThunk(
  "getAllSneakers",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${URL}/sneakers`);
      return data;
    } catch (error) {
      console.log(error);
      rejectWithValue();
    }
  }
);

export const getCartItems = createAsyncThunk(
  "getCartItems",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${URL}/cart`);
      return data;
    } catch (error) {
      console.log(error);
      rejectWithValue();
    }
  }
);

export const getSneaker = createAsyncThunk(
  "getSneaker",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${URL}/sneakers/${id}`);
      return data;
    } catch (error) {
      console.log(error);
      rejectWithValue();
    }
  }
);

export const addToCart = createAsyncThunk(
  "addToCart",
  async (item, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${URL}/cart`, item);
      dispatch(getCartItems());
      return data;
    } catch (error) {
      console.log(error);
      rejectWithValue();
    }
  }
);

export const DeleteFromCart = createAsyncThunk(
  "DeleteFromCart",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      await axios.delete(`${URL}/cart/${id}`);
      dispatch(getAllSneakers());
    } catch (error) {
      console.log(error);
      rejectWithValue();
    }
  }
);

export const PurchaseCart = createAsyncThunk(
  "PurchaseCart",
  async (arg, { dispatch }) => {
    try {
      const { data } = await axios.put(`${URL}/cart`, arg);
      dispatch(getCartItems());
      return data;
    } catch (error) {
      console.log(error);
    }
  }
)

const defaultState = {
  sneakers: [],
  sneaker: {},
  cart: [],
};

export const sneakersSlice = createSlice({
  name: "sneakers",
  initialState: defaultState,
  reducers: {},
  extraReducers: {
    [getAllSneakers.fulfilled]: (state, action) => {
      state.sneakers = action.payload;
    },
    [getAllSneakers.rejected]: () => {
      toast.error("Error");
    },

    [getSneaker.fulfilled]: (state, action) => {
      state.sneaker = action.payload;
    },

    [getCartItems.fulfilled]: (state, action) => {
      state.cart = action.payload;
    },

    [PurchaseCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
    } 
  },
});

export default sneakersSlice.reducer;
