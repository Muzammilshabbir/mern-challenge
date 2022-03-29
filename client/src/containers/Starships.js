import {useEffect} from 'react'
import Table from '../components/Table'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStarships} from '../store/starships/starshipSlice'

export default function Starships() {
    const dispatch = useDispatch()

    const starships = useSelector(state=>state.starships.starships)
    
    useEffect(()=>{
        starships.length < 1 && dispatch(fetchStarships())
    },[dispatch,starships.length])


    const tableHeader = (  
        <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Class</th>
            <th>Crew</th>
            <th>Capacity</th>
            <th>MGLT</th>
            <th>Passengers</th>
            <th>Length</th>
            <th>Rating</th>
            <th>Consumabels</th>
            <th>Cost</th>
        </tr>
        )   
    return (
        <Table starships={starships} tableHeader={tableHeader}/>
    )
}
