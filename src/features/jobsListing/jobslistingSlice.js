import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState = {
    city: "Select Your City",
    jobs: [],
}

const JobsListingSlice = createSlice({
    name: "JobsListing",
    initialState,
    reducers: {
        addJob: {
            reducer: (state, action) => {
                state.jobs.push(action.payload.value);
            },
            prepare: (value) => {
                const id = nanoid();
                return {
                    payload: {
                        id,
                        value,
                    }
                }
            }
        },
        removeJob: (state, action) => {
            let index = state.jobs.indexOf(action.data);
            if (index === -1) {
                state.jobs.splice(index,1);
            }
        },
        addLocation: {
            reducer: (state, action) => {
                return {
                    jobs: action.payload.jobs,
                    city: action.payload.city
                }
            },
            prepare: (data) => {
                const [ city, jobs ] = data;
                return {
                    payload: {
                        jobs,
                        city,
                    }
                }
            }
        },
    }    
})

export default JobsListingSlice.reducer;
export const { addLocation , addJob} = JobsListingSlice.actions;