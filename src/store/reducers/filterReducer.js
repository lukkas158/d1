import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/api";

const initialState = {
  selected: 0,
  value: [],
  status: "idle",
};

export const fetchFilters = createAsyncThunk("filter/fetchFilter", async () => {
  const response = await api.get("/filter");
  return response.data;
});

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSelected(state, action) {
      state.selected = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchFilters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      });
  },
});

export const { setSelected } = filterSlice.actions;

export const selectFilters = (state) => ({
  filters: state.filters.value,
  selected: state.filters.selected,
});

export default filterSlice.reducer;
