import { configureStore } from '@reduxjs/toolkit'
import starshipSlice from './starships/starshipSlice'
import vehicleSlice from './vehicles/vehicleSlice'
import planetSlice from './planets/planetSlice'
// import commonReducer from './commonSlice'

export const store = configureStore({
    reducer: {
        starships: starshipSlice,
        vehicles: vehicleSlice,
        planets: planetSlice,
        // common: commonReducer
    },
})
