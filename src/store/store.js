import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reducers/filterReducer";
import journeyReducer from "./reducers/journeyReducer";

export const store = configureStore({
  reducer: {
    journey: journeyReducer,
    filters: filterReducer,
  },
});
