import React from 'react'
import './Header.css'
import logo from '../../assets/images/logo.png'
import NavItem, { NavItemDropdown } from '../../components/NavItem/NavItem'
import { Link } from 'react-router-dom'

import NavItemData from '../../Data/NavItemData'
import NavItemLink from '../../components/NavItemLink/NavItemLink'




const Header = () => {


    const link = NavItemData.map(link => {
        return  <NavItemLink key={link.id} title={link.title} />
        
    })

     
    return (
        <>
            <div className="navbar navbar-expand-md  navbar-dark main-navbar">
                <div className="container">
                    <Link to="/#" className="navbar-brand">
                        <img src={logo} alt='' />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mainmenu">
                        <ul className="navbar-nav nav ms-auto space-item">

                            <NavItem>
                            
                                {link}

                            </NavItem>

                            {/* <NavItem>
                                <Link to="/#" className="nav-link">Browse</Link>
                            </NavItem> */}

                            <NavItemDropdown>

                                {/* <Link to="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Details</Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="/#" className="dropdown-item">Learn Bootstrap</Link></li>
                                    <li><Link to="/#" className="dropdown-item">Where to go next</Link></li>
                                </ul> */}
                            </NavItemDropdown>

                            {/* <NavItem>
                                <Link to="/#" className="nav-link">Streams</Link>
                            </NavItem>

                            <NavItem>
                                <Link to="./profile" className="nav-link">Profile</Link>
                            </NavItem> */}
                        </ul>


                    </div>
                </div>
            </div>

        </>
    )

    
}

export default Header