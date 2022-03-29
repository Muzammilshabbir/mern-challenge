import {useEffect} from 'react'
import Table from '../components/Table'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVehicles} from '../store/vehicles/vehicleSlice'

export default function Vehicles() {
    const dispatch = useDispatch()

    const vehicles = useSelector(state=>state.vehicles.vehicles)

    useEffect(()=>{
        vehicles.length < 1 &&  dispatch(fetchVehicles())
    },[dispatch,vehicles.length])

    const tableHeader = (  
        <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Class</th>
            <th>Manufacturer</th>
            <th>Cost in credits</th>
            <th>Length</th>
            <th>Crew</th>
            <th>Passengers</th>
            <th>Max Atmosphering Speed</th>
            <th>Consumabels</th>
            <th>Cargo Capacity</th>
        </tr>
        )   
    return (
        // <h1>dsada</h1>
        <Table vehicles={vehicles} tableHeader={tableHeader}/>
    )
}
