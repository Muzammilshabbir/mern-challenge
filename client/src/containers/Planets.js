import {useEffect} from 'react'
import Table from '../components/Table'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPlanets } from '../store/planets/planetSlice'


export default function Planets() {
  const dispatch = useDispatch()

  const planets = useSelector(state => state.planets.planets)

  useEffect(() => {
    planets.length < 1 && dispatch(fetchPlanets())
  },[dispatch,planets.length])


  const tableHeader = (  
    <tr>
        <th>Name</th>
        <th>Rotation Period</th>
        <th>Orbital Period</th>
        <th>Diameter</th>
        <th>Climate</th>
        <th>Gravity</th>
        <th>Population</th>
        <th>Surface Water</th>
        <th>Terrain</th>
    </tr>
    )  

  return (
    // <h1>dsad</h1>
    <Table planets={planets} tableHeader={tableHeader}/>
  )
}
