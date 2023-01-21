import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Card from '../components/card'
import Carousel from '../components/carousel'
import { useEffect, useState } from 'react'
export default function Home() {
    const [foodCat, setFoodCat] = useState([])
    const [foodItem, setFoodItem] = useState([])
    const [search, setSearch] = useState("")
    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData",
            {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                }
            })
        response = await response.json();
        setFoodItem(response[0])
        setFoodCat(response[1]);
    }

    useEffect(() => {
        loadData()
    }, [])


    return (
        <div>
            <div><Navbar /></div>
            <div id="carouselExampleControls" className="carousel slide w-100 " data-ride="carousel" style={{ "objectFit": "contain !important" }}>
                <div className="carousel-inner" id='carousel'>
                    <div className='carousel-caption' style={{ "zIndex": "10" }}>
                        <div className="d-flex justify-content-center">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange ={(e)=>{setSearch(e.target.value)}}/>
                            {/* <button className="btn bg-success " type="submit">Search</button> */}
                        </div>
                    </div>
                    <div className="carousel-item active text-center">
                        <img className=" img-fluid centre-align d-block h-50 w-100" src="https://source.unsplash.com/random/900x700/?chai" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 " src="https://source.unsplash.com/random/1000x00/?vada_pav" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://source.unsplash.com/random/900x700/?tomato" alt="Third slide" />
                    </div>
                </div>
                <button className="carousel-control-prev" data-bs-target="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" data-bs-target="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </button>
            </div>
            <div className="container">
                {
                    foodCat !== []
                        ? foodCat.map((data) => {
                            return (
                                <div className='row mb-3'>
                                    <div key={data._id} className="fs-3 m-3">{data.CategoryName}</div>
                                    <hr />
                                    {foodItem !== []
                                        ? foodItem.filter((item) => (item.CategoryName === data.CategoryName )&& (item.name.toLowerCase().includes(search.toLocaleLowerCase()))).map((filterItems) => {
                                            return (
                                                <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                                                    <Card foodItem = {filterItems}
                                                        options={filterItems.options[0]}
                                                    />
                                                </div>
                                            )
                                        })
                                        : <div>No data found</div>
                                    }
                                </div>
                                //   <div key={data._id} className="fs-3 m-3">{data.CategoryName}</div>
                            )
                        }) : ""
                }
            </div>
            <div><Footer /></div>
        </div>
    )
}
