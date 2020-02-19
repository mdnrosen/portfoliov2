import React from 'react'
import { Link, useLocation } from 'react-router-dom'



const Nav = () => {
    const location = useLocation()


    return(
        <div className="Nav">
            <ul>
                <Link to="/portfolio">portfolio</Link>
                |
                <Link to="/skills">skills</Link>
                |
                <Link to="/contact">contact</Link>
                |
                <Link to="/bio">bio</Link>
            </ul>
        </div>
    )
}

export default Nav