import React from 'react'

export default function Footer() {
  return <>
  <div className='prev-footer  '>
  <div className="container p-4">
    <div className="row ">
        <div className="col-md-4 text-center">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
        </div>
        <div className="col-md-4">
        <h3 className='text-center'>AROUND THE WEB</h3>
        <ul className='cont-icon list-unstyled '>
            <li><a className='icon' href=""><i class="fa-brands fa-facebook"></i></a></li>
            <li><a  className='icon'href=""><i class="fa-brands fa-twitter"></i></a></li>
            <li><a  className='icon'href=""><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a className='icon' href=""><i class="fa-solid fa-globe"></i></a></li>
        </ul>
        </div>
        <div className="col-md-4 text-center">
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
    </div>
  </div>
  </div>
  <footer className='finalFooter'>
    <div className='text-center text-light'>
        <p className='p-2 m-0'>Copyright © Your Website 2021</p>
    </div>
  </footer>
 
  </>
}
