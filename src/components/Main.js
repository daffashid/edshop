import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import woman from "./images/wonder.png"
import hulk from "./images/hulk.png"
import thor from "./images/thor.png"
import aqua from "./images/aquaman.png"
import flash from "./images/flash.png"
import heim from "./images/heimdall.png"


const Mainn = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                <div className="container-lg">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" to={`/`}>Home</Link>
                            </li>
                            
                            <li className="nav-item mx-3">
                                <Link to={`/register`} className="nav-link active" href="#">Sign Up</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link to={`/login`} className="btn btn-primary px-4" href="#">Sign In</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container-lg bawah-nav">
            <div className="container-lg pt-4 ">
        <div className="row">
          <div className="">
            <div className="row">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mt-3">
                <li className="breadcrumb-item"><a href="#" className="active text-muted">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Product</li>
              </ol>
            </nav>
          </div>
          <div className="row">
            <div className="col-6 ">
            <h6 className="mt-3">Heroes</h6>
            </div>
        
          </div>
          </div>
          
        </div>
      </div>

      <div className="container-lg pb-4 ">
        <div className="row">
          <div className="col-2  py-4">
            <div className="accordion accordion-flush" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Categories
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                      <label className="form-check-label" for="defaultCheck1">
                        Heroes
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck2"></input>
                      <label className="form-check-label" for="defaultCheck2">
                        Villain
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Brand
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                      <label className="form-check-label" for="defaultCheck1">
                        DC
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck2"></input>
                      <label className="form-check-label" for="defaultCheck2">
                        Marvel
                      </label>
                    </div> 
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Prices
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                      <label className="form-check-label" for="defaultCheck1">
                        Highest
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck2"></input>
                      <label className="form-check-label" for="defaultCheck2">
                        Lowest
                      </label>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        
          <div className="col-10 ">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 py-4">
          <div className="col-lg-4">
            <div className="card shadow-sm zoom roundbor">
            <div className="products-thumbnail">
            <div className="products-image" style={{ backgroundImage: `url(${woman})` }}>
                </div>
                </div>
              <div className="card-body">
                <p className="card-text">PUNK!</p>
                <h5>WONDER WOMAN</h5>
                <p className="card-text">US$15,00</p>
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-color roundbor" data-bs-toggle="modal" data-bs-target="#tnc" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart4" viewBox="0 0 22 22">
                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card shadow-sm zoom roundbor">
            <div className="products-thumbnail">
            <div className="products-image" style={{ backgroundImage: `url(${hulk})` }}>
                </div>
                </div>
              <div className="card-body">
                <p className="card-text">PUNK!</p>
                <h5>HULK</h5>
                <p className="card-text">US$15,00</p>
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-color roundbor" data-bs-toggle="modal" data-bs-target="#tna" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart4" viewBox="0 0 22 22">
                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card shadow-sm zoom roundbor">
            <div className="products-thumbnail">
            <div className="products-image" id ="thor" style={{ backgroundImage: `url(${thor})` }}>
                </div>
                </div>
              <div className="card-body">
                <p className="card-text">PUNK!</p>
                <h5>THOR</h5>
                <p className="card-text">US$15,00</p>
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-color roundbor" data-bs-toggle="modal" data-bs-target="#tnb" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart4" viewBox="0 0 22 22">
                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card shadow-sm zoom roundbor">
            <div className="products-thumbnail">
            <div className="products-image" style={{ backgroundImage: `url(${aqua})` }}>
                </div>
                </div>
              <div className="card-body">
                <p className="card-text">PUNK!</p>
                <h5>AQUAMAN</h5>
                <p className="card-text">US$15,00</p>
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-color roundbor" data-bs-toggle="modal" data-bs-target="#tnd" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart4" viewBox="0 0 22 22">
                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card shadow-sm zoom roundbor">
            <div className="products-thumbnail">
            <div className="products-image" style={{ backgroundImage: `url(${flash})` }}>
                </div>
                </div>
              <div className="card-body">
                <p className="card-text">PUNK!</p>
                <h5>FLASH</h5>
                <p className="card-text">US$15,00</p>
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-color roundbor" data-bs-toggle="modal" data-bs-target="#tne" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart4" viewBox="0 0 22 22">
                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card shadow-sm zoom roundbor">
            <div className="products-thumbnail">
            <div className="products-image" style={{ backgroundImage: `url(${heim})` }}>
                </div>
                </div>
              <div className="card-body">
                <p className="card-text">PUNK!</p>
                <h5>HEIMDALL</h5>
                <p className="card-text">US$15,00</p>
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-color roundbor" data-bs-toggle="modal" data-bs-target="#tnf" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart4" viewBox="0 0 22 22">
                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>

          </div>
          </div>
        
          

          </div>
          </div>

          {/* Modal */}
          {/* WW */}
          <div className="modal modal-backdrop-bg fade" id="tnc">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                <h4>WONDER WOMAN</h4>
                </div>
                <div className="modal-body">
                    
                <img src={woman} className="imgmodal"></img>
                <img src={woman} className="imgmodal"></img>
                <img src={woman} className="imgmodal"></img>
                <img src={woman} className="imgmodal"></img>
                </div>
                    </div>
                    </div>
                </div>
                {/* WW */}

                 {/* HULK */}
          <div className="modal modal-backdrop-bg fade" id="tna">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                <h4>HULK</h4>
                </div>
                <div className="modal-body">
                    
                <img src={hulk} className="imgmodal"></img>
                <img src={hulk} className="imgmodal"></img>
                <img src={hulk} className="imgmodal"></img>
                <img src={hulk} className="imgmodal"></img>
                </div>
                    </div>
                    </div>
                </div>
                {/* HULK */}

                 {/* THOR */}
          <div className="modal modal-backdrop-bg fade" id="tnb">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                <h4>THOR</h4>
                </div>
                <div className="modal-body">
                    
                <img src={thor} className="imgmodal"></img>
                <img src={thor} className="imgmodal"></img>
                <img src={thor} className="imgmodal"></img>
                <img src={thor} className="imgmodal"></img>
                </div>
                    </div>
                    </div>
                </div>
                {/* THOR */}

                {/* AQUA */}
          <div className="modal modal-backdrop-bg fade" id="tnd">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                <h4>AQUAMAN</h4>
                </div>
                <div className="modal-body">
                <img src={aqua} className="imgmodal"></img>
                <img src={aqua} className="imgmodal"></img>
                <img src={aqua} className="imgmodal"></img>
                <img src={aqua} className="imgmodal"></img>
                </div>
                    </div>
                    </div>
                </div>
                {/* AQUA */}

                 {/* FLASH */}
          <div className="modal modal-backdrop-bg fade" id="tne">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                <h4>FLASH</h4>
                </div>
                <div className="modal-body">
                <img src={flash} className="imgmodal"></img>
                <img src={flash} className="imgmodal"></img>
                <img src={flash} className="imgmodal"></img>
                <img src={flash} className="imgmodal"></img>
                </div>
                    </div>
                    </div>
                </div>
                {/* FLASH */}

                 {/* HEIMDALL  */}
          <div className="modal modal-backdrop-bg fade" id="tnf">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-header">
                <h4>HEIMDALL</h4>
                </div>
                <div className="modal-body">  
                <img src={heim} className="imgmodal"></img>
                <img src={heim} className="imgmodal"></img>
                <img src={heim} className="imgmodal"></img>
                <img src={heim} className="imgmodal"></img>
                </div>
                    </div>
                    </div>
                </div>
                {/* HEIMDALL */}
          {/* Modal */}

</div>
            <footer>
                <div className="container-lg">
                    <div className="row">
                        <div className="col-lg-6 ms-auto align-self-end">
                            <div className="row">
                                <div className="col-lg-12 text-end">
                                    <p>Follow us on</p>
                                    <a href="">
                                        <img src="images/ig.png" alt="" />
                                    </a>
                                    <a href="">
                                        <img src="images/fb.png" alt="" />
                                    </a>
                                    <a href="">
                                        <img src="images/twitter.png" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 text-end">
                                    <p className="text-muted mb-5 pt-4 pb-2">
                                        &copy; Kunko | Kunko
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Mainn
