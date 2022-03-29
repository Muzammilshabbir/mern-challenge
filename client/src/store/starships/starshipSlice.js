import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '../.././services/api'


const api = new API(true)
const initialState = {
    starships: [],
    // status: 'idle',
    // error: null,
  }

export const fetchStarships = createAsyncThunk('starships', async () => {
    const {data} = await api.getAll('starships')
    console.log('data',data)
    return data.results
})

const starshipSlice = createSlice({
    name: 'starships',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [fetchStarships.fulfilled]: (state, action) => {
            state.starships= action.payload
            // return action.payload
        },
    },
})

export default starshipSlice.reducer

export const starships = (state) => state.starships