import React from 'react'
import { ReactComponent as Close } from '../assets/close.svg'

import { Link, useLocation } from 'react-router-dom'



const MobileNav = ({ toggleNav }) => {
    return (
        <div className="MobileNav">
            <div className="closeButton">
                <Close 
                    width={25} 
                    height={25} 
                    fill="#FFFFFF"
                    onClick={() => toggleNav(false)}
                />
            </div>
            <ul className="navLinksWrapper">
                <Link 
                    to="/portfolio"
                    onClick={() => toggleNav(false)}
                >
                    portfolio
                </Link>
                <Link 
                    to="/skills"
                    onClick={() => toggleNav(false)}
                >
                    skills
                </Link>
                <Link 
                    to="/contact"
                    onClick={() => toggleNav(false)}
                >
                    contact
                </Link>
                <Link 
                    to="/bio"
                    onClick={() => toggleNav(false)}
                >
                    bio
                </Link>               
            </ul>
        </div>
    )
}


export default MobileNav