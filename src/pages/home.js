import React from 'react'

import { Link } from "react-router-dom"
import BannerImage from "../assets/cake2.jpg"
import "../styles/home.css"

function home() {
    return (
        <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className='headerContainer' >
                <h1>The Cake Gallery</h1>
                <p>CAKE TO FIT ANY TASTE</p>
                <Link to="/menu">
                    <button>ORDER NOW</button>
                </Link>
            </div>

        </div >
    )
}

export default home
