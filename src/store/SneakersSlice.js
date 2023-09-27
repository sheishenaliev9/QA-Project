import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const URL = "http://localhost:9090";

export const getAllSneakers = createAsyncThunk(
  "getAllSneakers",
  async (state, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${URL}/sneakers`);
      return data;
    } catch (error) {
      console.log(error);
      rejectWithValue();
    }
  }
);

const defaultState = {
  sneakers: [],
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
    }
  },
});


export default sneakersSlice.reducer;
