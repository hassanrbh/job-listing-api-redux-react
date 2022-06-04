import { configureStore } from "@reduxjs/toolkit";
import jobslistingReducer from "../features/jobsListing/jobslistingSlice";

const store = configureStore({
    reducer: {
        jobsListing: jobslistingReducer,
    }
})

export default store;