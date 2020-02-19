import React from 'react'
import { Link } from 'react-router-dom'


function Bio(){
    return(
        <div className="Bio">
            <h3>I'm <span className="highlight">Miles</span>.</h3>
            <h4>I'm a graduate of General Assembly where I started coding in January 2019.</h4>
            <h4>Since then I've become a full time, full stack developer.</h4>
            <h4>If you'd like to get in touch head to the <Link className="linkFromBio"to="/contact">contact</Link> page.</h4>

        </div>
    )
}


export default Bio