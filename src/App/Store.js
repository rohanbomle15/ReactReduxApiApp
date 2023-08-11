import { configureStore } from '@reduxjs/toolkit'
import breweriesReducer from '../Features/BrewerySlice'

export default configureStore({
  reducer: {
    breweries: breweriesReducer,
  },
})