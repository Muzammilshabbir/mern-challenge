import style from './card.module.css';
import veh from '../assets/veh.png'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function Card({ categories }) {
    return (
        categories.map((category) => (
            <div className={style.card}>
                <div className={style.imgContainer}>
                    <img src={category.img} alt="categoryimage"/>
                    <Link to={category.path}><Button value={category.title} /></Link>
                </div>
            </div>
        )
        )
    )
}
