import { configureStore } from "@reduxjs/toolkit";
import breweriesReducer from "../Features/BrewerySlice";
import barReducer from "../Features/BarSlice";

export default configureStore({
  reducer: {
    breweries: breweriesReducer,
    bars: barReducer,
  },
});
