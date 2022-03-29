import style from './table.module.css';

export default function Table(props) {

    let tableData;
    if(props?.starships?.length > 0) {
        tableData = props.starships.map((starship) => {
            return (
                <tr>
                    <td>{starship.name}</td>
                    <td>{starship.model}</td>
                    <td>{starship.starship_class}</td>
                    <td>{starship.crew}</td>
                    <td>{starship.cargo_capacity}</td>
                    <td>{starship.MGLT}</td>
                    <td>{starship.passengers}</td>
                    <td>{starship.length}</td>
                    <td>{starship.hyperdrive_rating}</td>
                    <td>{starship.consumables}</td>
                    <td>{starship.cost_in_credits}</td>
                </tr>
            )
    
        })
    }
    if(props?.planets?.length > 0) {
        tableData = props.planets.map((planet) => {
            return (
                <tr>
                    <td>{planet.name}</td>
                    <td>{planet.rotation_period}</td>
                    <td>{planet.orbital_period}</td>
                    <td>{planet.diameter}</td>
                    <td>{planet.climate}</td>
                    <td>{planet.gravity}</td>
                    <td>{planet.population}</td>
                    <td>{planet.surface_water}</td>
                    <td>{planet.terrain}</td>
                </tr>
            )
    
        })
    }
    if(props?.vehicles?.length > 0) {
        tableData = props.vehicles.map((vehicle) => {
            return (
                <tr>
                    <td>{vehicle.name}</td>
                    <td>{vehicle.model}</td>
                    <td>{vehicle.vehicle_class}</td>
                    <td>{vehicle.manufacturer}</td>
                    <td>{vehicle.cost_in_credits}</td>
                    <td>{vehicle.length}</td>
                    <td>{vehicle.crew}</td>
                    <td>{vehicle.passengers}</td>
                    <td>{vehicle.max_atmosphering_speed}</td>
                    <td>{vehicle.consumables}</td>
                    <td>{vehicle.cargo_capacity}</td>
                </tr>
            )
    
        })
    }

    return (
        <table className={style.table}>
            {props?.tableHeader}
            {tableData}

        </table>
    )
}
