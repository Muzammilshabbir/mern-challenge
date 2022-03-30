import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
}

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setLoader: (state, action) => {
            state.loading = action.payload
            return state;
        }
    }
})

export const loaderState = state => state.common.loading
export const { setLoader } = commonSlice.actions

export default commonSlice.reducer


