import React from 'react'
import data from '../assets/portfolio.js'

import Card from './projectCard'


import ItchyFeet from '../assets/images/itchyFeetLogo.png'
import PlayerConnect from '../assets/images/playerConnectLogo.png'




class Portfolio extends React.Component{
    constructor(){
        super()

        this.state = {
            projects: data.projects,
            project: data.projects[0]
        }
    }

    arrowNext = () => {
        let newIndex = this.state.project.index+1
        console.log(newIndex)
        this.setState({
            project: data.projects[newIndex]
        })
    }
    arrowPrevious = () => {
        let newIndex = this.state.project.index-1
        console.log(newIndex)
        this.setState({
            project: data.projects[newIndex]
        })
    }


    render(){
        const {projects, project} = this.state
        return(
            <div className="Portfolio"> 
                <button className="button" disabled={project.index === 0} onClick={this.arrowPrevious}>
                    <i className="fas fa-chevron-left"></i>    
                </button>
                
                <Card project={project}/>
                       
                <button className="button" disabled={project.index === projects.length -1} onClick={this.arrowNext}>
                    <i className="fas fa-chevron-right"></i>    
                </button>


            </div>
        )
    }
}


export default Portfolio