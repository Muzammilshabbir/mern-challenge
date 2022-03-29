import React from 'react'
import style from "./dashboard.module.css"
import Card from './Card'
import planetImg from '../assets/planet.jpg'
import starsh from '../assets/starsh.jpg'
import veh from '../assets/veh.png'

export default function Dashboard() {

  const categories = [
    {
      title: 'Starships',
      path: '/starships',
      img: planetImg
    },
    {
      title: 'Planets',
      path: '/planets',
      img: starsh
    },
    {
      title: 'Vehicles',
      path: '/vehicles',
      img: veh
    }
  ]

  return (
    <>
      <div className={style.row}>
        <Card categories={categories} />
      </div>
    </>
  )
}
