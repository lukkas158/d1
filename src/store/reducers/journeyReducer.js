import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/api";

const initialState = {
  value: [],
  status: "idle",
};

export const fetchJourneys = createAsyncThunk(
  "journey/fetchJourneys",
  async (filter = null) => {
    let url = "journey/";
    // In case that filter is zero,
    // It must not append the value to the url
    if (filter) {
      url += filter;
    }
    const response = await api.get(url);

    return response.data;
  }
);

export const journeySlice = createSlice({
  name: "journey",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchJourneys.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJourneys.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      });
  },
});

export const selectJourneys = (state) => state.journey.value;

export default journeySlice.reducer;
