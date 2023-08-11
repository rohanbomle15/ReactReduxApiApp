import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getBreweries = createAsyncThunk('breweries/getBreweries', async () => {
  const response = await axios.get('https://api.openbrewerydb.org/v1/breweries')
  return response.data
})

export const brewerySlice = createSlice({
  name: 'breweries',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBreweries.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })

    builder.addCase(getBreweries.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.data = action.payload
        state.loading = 'idle'
      }
    })

    builder.addCase(getBreweries.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })
  },
})

export default brewerySlice.reducer