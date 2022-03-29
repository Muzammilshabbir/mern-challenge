import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '../.././services/api'

const api = new API(true)

// import type { RootState } from '../../app/store'
const initialState = {
    planets: [],
    // status: 'idle',
    // error: null,
  }

export const fetchPlanets = createAsyncThunk('planets', async () => {
    const {data} = await api.getAll('planets')
    return data.results
})

const planetSlice = createSlice({
    name: 'planets',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [fetchPlanets.fulfilled]: (state, action) => {
            state.planets= action.payload
            // return action.payload
        },
    },
})

export default planetSlice.reducer

export const planets = (state) => state.planets