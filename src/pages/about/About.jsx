import React from 'react'
import { Outlet,useNavigate } from 'react-router-dom'
import "./About.scss"

const About = () => {
  const navigate=useNavigate()

  return (
    <div className='about'>
      <h2>About</h2>
      <p>Angora Cat is among the most popular purebred cat breeds in the world. Angora Cat is a natural and pure cat breed produced in Turkey. Considered one of the national treasures of its country, the Angora Cat first attracted the world's attention during the Crusades.</p>
      <Outlet/>
      <button onClick={()=>navigate("/about/more")}>MORE</button>
    </div>
  )
}

export default About