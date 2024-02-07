import React from 'react'
import img1 from '../../Asseist/img/ef3e62c8a5720cb147c7322ef5128d7f.jpg'
import img2 from '../../Asseist/img/ميسي-5.jpg'
import img3 from '../../Asseist/img/b95b5be480c5bb3e4b0e6eebfb66f885.jpg'
export default function Portfolio() {
  return <>
  <div className='portfolio text-center '>
    <h1 className='text-center'>PORTFOLIO COMPONENT</h1>
    <div className='d-flex justify-content-center aline-item-center'>
        <div  className='afterHcontact me-3'></div>
    <i class="fa-solid fa-star"></i>
      <div className='beforeHcontact ms-3 '></div>
        </div>
    <div className="container">
      <div className="row g-4">
      <div className="col-md-4">
          <div className='image '  data-bs-toggle= "modal" data-bs-target = "#imageExample">
          <img src={img1} className='w-100' alt="" />
          <div className='modal fade' id='imageExample' tobIndex = "-1"  aria-hidden = "true">
            <div className='modal-dialog'>
              <div className="modal-content">
                <div className="modal-body d-flex justify-content-center align-items-center">
                 
                  <img src= {img1}  alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className='layer-img'>
          <i class=" fa-solid fa-plus fa-5x text-light"></i>
          </div>
          </div>
        </div>





        <div className="col-md-4">
          <div className='image '  data-bs-toggle= "modal" data-bs-target = "#imageExample1">
          <img src={img2} className='w-100' alt="" />
          <div className='modal fade' id='imageExample1' tobIndex = "-1"  aria-hidden = "true">
            <div className='modal-dialog'>
              <div className="modal-content">
                <div className="modal-body d-flex justify-content-center align-items-center">
                 
                  <img src= {img2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className='layer-img'>
          <i class=" fa-solid fa-plus fa-5x text-light"></i>
          </div>
          </div>
        </div>





        <div className="col-md-4">
          <div className='image '  data-bs-toggle= "modal" data-bs-target = "#imageExample2">
          <img src={img3} className='w-100' alt="" />
          <div className='modal fade' id='imageExample2' tobIndex = "-1"  aria-hidden = "true">
            <div className='modal-dialog'>
              <div className="modal-content">
                <div className="modal-body d-flex justify-content-center align-items-center">
                  {/* <button type='button' className='btn-close' data-bs-dismiss = "modal" aria-label='close'></button> */}
                  <img src= {img3} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className='layer-img'>
          <i class=" fa-solid fa-plus fa-5x text-light"></i>
          </div>
          </div>
        </div>




        <div className="col-md-4">
          <div className='image '  data-bs-toggle= "modal" data-bs-target = "#imageExample">
          <img src={img1} className='w-100' alt="" />
          <div className='modal fade' id='imageExample' tobIndex = "-1"  aria-hidden = "true">
            <div className='modal-dialog'>
              <div className="modal-content">
                <div className="modal-body d-flex justify-content-center align-items-center">
                 
                  <img src= {img1} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className='layer-img'>
          <i class=" fa-solid fa-plus fa-5x text-light"></i>
          </div>
          </div>
        </div>




        <div className="col-md-4">
          <div className='image '  data-bs-toggle= "modal" data-bs-target = "#imageExample1">
          <img src={img2} className='w-100' alt="" />
          <div className='modal fade' id='imageExample1' tobIndex = "-1"  aria-hidden = "true">
            <div className='modal-dialog'>
              <div className="modal-content">
                <div className="modal-body d-flex justify-content-center align-items-center">
                  
                  <img src= {img2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className='layer-img'>
          <i class=" fa-solid fa-plus fa-5x text-light"></i>
          </div>
          </div>
        </div>




        <div className="col-md-4">
          <div className='image '  data-bs-toggle= "modal" data-bs-target = "#imageExample2">
          <img src={img3} className='w-100' alt="" />
          <div className='modal fade' id='imageExample2' tobIndex = "-1"  aria-hidden = "true">
            <div className='modal-dialog'>
              <div className="modal-content">
                <div className="modal-body d-flex justify-content-center align-items-center">
                
                  <img src= {img3} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className='layer-img'>
          <i class=" fa-solid fa-plus fa-5x text-light"></i>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
}
