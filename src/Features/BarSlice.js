import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBars = createAsyncThunk("breweries/getBars", async () => {
  const response = await axios.get(
    "https://api.openbrewerydb.org/v1/breweries?by_type=brewpub"
  );
  return response.data;
});

export const barSlice = createSlice({
  name: "bars",
  initialState: {
    data: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBars.pending, (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });

    builder.addCase(getBars.fulfilled, (state, action) => {
      if (state.loading === "pending") {
        state.data = action.payload;
        state.loading = "idle";
      }
    });

    builder.addCase(getBars.rejected, (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = "Something went wrong!";
      }
    });
  },
});

export default barSlice.reducer;
