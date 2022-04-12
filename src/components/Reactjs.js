import React, { useState } from 'react'
import projectDatas from '../data'
import Projects from './Projects'

export default function Reactjs() {

    const showAllReact = projectDatas.map((projectData)=>{
        if (projectData.type === "react practice" || projectData.type === "react" || projectData.type === "react api"){
            return (
                <Projects 
                    key={projectData.id}
                    img={projectData.img}
                    name={projectData.name}
                    description={projectData.description}
                    type={projectData.type}
                    live={projectData.live}
                    repo={projectData.repo}
                />
            )
        }
    })

    const showReactPractices = projectDatas.map((projectData)=>{
        if (projectData.type === "react practice"){
            return (
                <Projects 
                    key={projectData.id}
                    img={projectData.img}
                    name={projectData.name}
                    description={projectData.description}
                    type={projectData.type}
                    live={projectData.live}
                    repo={projectData.repo}
                />
            )
        }
    })

    const showReactProjects = projectDatas.map((projectData)=>{
        if (projectData.type === "react"){
            return (
                <Projects 
                    key={projectData.id}
                    img={projectData.img}
                    name={projectData.name}
                    description={projectData.description}
                    type={projectData.type}
                    live={projectData.live}
                    repo={projectData.repo}
                />
            )
        }
    })

    const [showReact, setShowReact] = useState(showAllReact)

    return (
        <div className="content-container">
            <div className='buttons-container'>
                <p>Filters: </p>
                <button onClick={()=>{setShowReact(showAllReact)}}>Show All React</button>
                <button onClick={()=>{setShowReact(showReactPractices)}}>React Practices</button>
                <button onClick={()=>{setShowReact(showReactProjects)}}>React Projects</button>
            </div>
            <div className="project-container">
                {showReact}
            </div>
        </div>
    )
}
