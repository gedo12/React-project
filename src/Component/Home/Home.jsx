import React from 'react'
import img from '../../Asseist/img/messi-world-cup.jpg'


export default function Home() {
  return (
    <>
    <div className='home d-flex justify-content-center align-items-center'>
  <img src={img} className='w-25 rounded-circle' alt="" />
  <h1 className='text-light'>START FRAMEWORK</h1>
  <div className='d-flex justify-content-center align-items-center mb-3'>
      <div className='after-h me-3'></div>
    <i class="  fa-solid fa-star  text-light"></i>
      <div className='before-h ms-3 '></div>
    </div>
    <div>
      <p className='text-light'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
</div>
    </>
  )
}
