import React from 'react'
import FruitsShop from './FruitsShop'
import Featurs from './Featurs'

function Shop(){
  return (
    <>
   <div className="container-fluid page-header py-5">
  <h1 className="text-center text-white display-6">Shop</h1>
  <ol className="breadcrumb justify-content-center mb-0">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item"><a href="#">Pages</a></li>
    <li className="breadcrumb-item active text-white">Shop</li>
  </ol>
</div>


   <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-fullscreen">
    <div className="modal-content rounded-0">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Search by keyword</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body d-flex align-items-center">
        <div className="input-group w-75 mx-auto d-flex">
          <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
          <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search" /></span>
        </div>
      </div>
    </div>
  </div>
</div>

    <FruitsShop/>
    </>
  )

}

export default Shop