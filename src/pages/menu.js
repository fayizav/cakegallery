import React from 'react'
import { MenuList } from "../helpers/menulist"
import MenuItem from "../components/menuitem"
import "../styles/menu.css"

function menu() {
    return (
        <div className='menu'>
            <h1 className='menuTitle'>Our Menu</h1>
            <div className='menuList'>{MenuList.map((menuitem, key) => {
                return <div><MenuItem key={key} image={menuitem.image} name={menuitem.name} price={menuitem.price} /></div >
            })}</div>

        </div>
    )
}

export default menu
