import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '../.././services/api'

const api  = new API(true);
// import type { RootState } from '../../app/store'
const initialState = {
    vehicles: [],
    // status: 'idle',
    // error: null,
  }

export const fetchVehicles = createAsyncThunk('vehicles', async (values) => {
    const {data} = await api.getAll('vehicles')
    console.log('res', data)
    return data.results
})

const vehicleSlice = createSlice({
    name: 'vehicles',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [fetchVehicles.fulfilled]: (state, action) => {
            state.vehicles= action.payload
            // return action.payload
        },
    },
})

export default vehicleSlice.reducer

export const vehicles = (state) => state.vehicles