import React, { useState } from "react"
import Logo from "../assets/cakelogo.png"
import { Link } from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/navbar.css"
function Navbar() {
    const [openLinks, setOpenLinks] = useState(false)
    // const toggleNavbar = () => {
    //     setOpenLinks(!openLinks)
    // }


    return (
        <div className='navbar'>
            <div className='leftside' >
                <img src={Logo} />

            </div>
            <div className='rightside'>
                <Link to="/" className="link">Home</Link>
                <Link to="/menu" className="link">Menu</Link>
                <Link to="/about" className="link">About</Link>
                <Link to="/contact" className="link">Contact</Link>

            </div>
        </div >
    )
}

export default Navbar

