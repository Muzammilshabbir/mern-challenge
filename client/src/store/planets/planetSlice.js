import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import API from '../.././services/api'

const api = new API(true)

const initialState = {
    planets: [],
    // status: 'idle',
    // error: null,
}

export const fetchPlanets = createAsyncThunk('planets', async () => {
    const { data } = await api.getAll('planets')
    return data.results
})

const planetSlice = createSlice({
    name: 'planets',
    initialState: initialState,
    reducers: {},
    extraReducers: {

        [fetchPlanets.pending]: (state, action) => {

            console.log('pending', action)
        },

        [fetchPlanets.fulfilled]: (state, action) => {
            state.planets = action.payload
        },
    },
})

export default planetSlice.reducer

export const selectplanets = createSelector((state) => state.planets)