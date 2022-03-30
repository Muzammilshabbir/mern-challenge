import React from 'react'
import style from "./navbar.module.css";
import { Link, useNavigate } from "react-router-dom"
import API from '../services/api'
export default function Navbar() {

    const navigate = useNavigate()
    const api = new API();
    const handleLogout = async () => {

        try {
            await api.post('logout')
            localStorage.clear();
            navigate('/')

        } catch (err) {
            alert(err.message)
        }

    }

    return (
        <div className={style.nav}>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li style={{ float: 'right' }}><Link to="/logout" onClick={handleLogout}>Logout</Link></li>
            </ul>
        </div>
    )
}
