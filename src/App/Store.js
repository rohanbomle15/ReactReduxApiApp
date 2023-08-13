import { configureStore } from "@reduxjs/toolkit";
import breweriesReducer from "../Features/BrewerySlice";
import brewPubReducer from "../Features/BrewPubSlice";

export default configureStore({
  reducer: {
    breweries: breweriesReducer,
    bars: brewPubReducer,
  },
});
