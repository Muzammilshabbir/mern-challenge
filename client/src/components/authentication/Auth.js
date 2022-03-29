import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

export default function Auth() {

    const token = localStorage.getItem('_token')

    console.log('token', token)
    const navigate = useNavigate();

    React.useEffect(() => {
        if (token) {
            navigate('/dashboard', { replace: true })

        }
        // if (token && token !== 'undefined'){
        //     navigate('/confirm-pin', { replace: true })            
        // }    
    }, [navigate, token])

    return (
        <div>
            <Outlet />
        </div>
    )
}
