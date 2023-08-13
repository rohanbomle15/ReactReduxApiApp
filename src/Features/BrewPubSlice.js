import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBrewPubs = createAsyncThunk("breweries/getBrewPubs", async () => {
  const response = await axios.get(
    "https://api.openbrewerydb.org/v1/breweries?by_type=brewpub"
  );
  return response.data;
});

export const brewPubSlice = createSlice({
  name: "brewPubs",
  initialState: {
    data: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBrewPubs.pending, (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });

    builder.addCase(getBrewPubs.fulfilled, (state, action) => {
      if (state.loading === "pending") {
        state.data = action.payload;
        state.loading = "idle";
      }
    });

    builder.addCase(getBrewPubs.rejected, (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = "Something went wrong!";
      }
    });
  },
});

export default brewPubSlice.reducer;
