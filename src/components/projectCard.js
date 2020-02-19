import React from 'react'


const Card = ({ project }) => {


    
    return(
        <div className="Card"> 
                {!project.image ? 
                <div className="spinnerContainer">LOADING</div>
                :
            <div style={{backgroundColor: `${project.fillColor}`}}className="imgContainer">
                <img className=""src={require(`../assets/images/${project.image}.png`)}/>
            </div>
                }
            <div className="detailContainer">
                <h2>{project.title}</h2>
                <p>{project.comment}</p>
                <h4>{project.tech}</h4>
                <div className="containsLinks">
                    <a href={project.siteLink}>Go to Site</a>
                    <a href={project.githubLink}>Github</a>
                </div>
            </div>
        </div>
    )
}



export default Card