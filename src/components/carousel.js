import React from 'react'

export default function Carousel() {
  return (
    <div id="carouselExampleControls" className="carousel slide w-100 " data-ride="carousel" style ={{"objectFit":"contain !important"}}>
  <div className="carousel-inner" id='carousel'>
    <div className='carousel-caption' style={{"zIndex":"10"}}>
    <form className="form-inline">
    <input className="form-control mr-sm-2 d-inline " type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn bg-success my-2 my-sm-3" type="submit">Search</button>
  </form>
    </div>
    <div className="carousel-item active text-center">
      <img className=" img-fluid centre-align d-block h-50 w-100" src="https://source.unsplash.com/random/900x700/?chai" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 " src="https://source.unsplash.com/random/1000x00/?vada_pav" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://source.unsplash.com/random/900x700/?tomato" alt="Third slide"/>
    </div>
  </div>
  <button className="carousel-control-prev"  data-bs-target="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" data-bs-target="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div>
  )
}
