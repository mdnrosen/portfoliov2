import React from 'react'
import skillsList from '../assets/skills.json'



const Skills = () => {
    if (!skillsList) return(
        <div className="spinner"></div>
    )
    
    return(
        <div className="Skills">
            <div className="skillCardWrapper">
                {skillsList.map((skill, i) => 
                    <div key={i} className="skillCard">
                        <div className="skillTitle">
                            <i className={`icon ${skill.icon}`}></i>
                            <p className="name">{skill.name}</p>
                        </div>
                        <p className="skillDetail">
                            {skill.description}
                        </p>
                    </div>
                
                )}
            </div>
        </div>
    )
}

export default Skills