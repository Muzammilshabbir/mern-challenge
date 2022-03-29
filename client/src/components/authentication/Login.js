import { useState } from 'react'
import style from './login.module.css'
import { useNavigate } from 'react-router-dom'
import API from '../../services/api'
import Button from '../Button'

export default function Login() {
  const api = new API()
  const navigate = useNavigate();

  const [user, setUser] = useState({ email: "", password: "" })

  const handleSubmit = async(event) => {

    event.preventDefault()
    const { data } = await api.post('/login', user)

    localStorage.setItem("_token", data.token)

    navigate('/dashboard')
  }
  return (
    <div className={style.loginContainer}>
      <div className={style.loginWrapper}>
        <div className={style.formWrapper}>
          <div className={style.loginCard}>
            <div className={style.formInner}>
              <h1>Log-in</h1><br />

              <div className={style.fieldWrap}>

                <input type="text" name="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
              </div>
              <div className={style.fieldWrap}>

                <input type="password" name="pass" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
              </div>

              <Button handleSubmit={handleSubmit} value="Login"/>         
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
