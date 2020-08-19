import React from 'react'

import MobileNav from './mobileNav'
import { Link, useLocation } from 'react-router-dom'
import { ReactComponent as Menu } from '../assets/open-menu.svg'



const Nav = () => {
    const location = useLocation()
    const [ mobileNavOpen, toggleMobileNav ] = React.useState(false)

    console.log(location)

    return(
        <React.Fragment>
            {
                mobileNavOpen ?
                <MobileNav toggleNav={toggleMobileNav} />
                :
                null
            }
            <div className="Nav desktopNav">
                <ul className="desktop">
                    <Link to="/portfolio">portfolio</Link>
                    |
                    <Link to="/skills">skills</Link>
                    |
                    <Link to="/contact">contact</Link>
                    |
                    <Link to="/bio">bio</Link>
                </ul>
               <div className="burgerMenu">
                   <Menu 
                    width={25} 
                    height={25} 
                    fill="#FFFFFF" 
                    onClick={() => toggleMobileNav(true)}
                    />
               </div>
            </div>


        </React.Fragment>

    )
}

export default Nav