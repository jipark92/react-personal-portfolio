import React, {useState} from 'react'
import projectDatas from '../data'
import Projects from './Projects'

export default function JavaScript() {

    const showAllJavaScript = projectDatas.map((projectData)=>{
        if (projectData.type === "javascript" || projectData.type === "javascript practice" || projectData.type === "javascript api"){
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

    const showJavaScriptPratcies = projectDatas.map((projectData)=>{
        if (projectData.type === "javascript practice"){
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

    const showJavaScriptApi = projectDatas.map((projectData)=>{
        if (projectData.type === "javascript api"){
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

    const showJavaScriptProjects = projectDatas.map((projectData)=>{
        if (projectData.type === "javascript"){
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

    const [showJavaScript, setShowJavaScript] = useState(showAllJavaScript)

    return (
        <div className="content-container">
            <h3>Filters:</h3>
            <div className='buttons-container'>
                <button onClick={()=>{setShowJavaScript(showAllJavaScript)}}>All Javascript</button>
                <button onClick={()=>{setShowJavaScript(showJavaScriptPratcies)}}>Javascript Practices</button>
                <button onClick={()=>{setShowJavaScript(showJavaScriptApi)}}>Javascript API</button>
                <button onClick={()=>{setShowJavaScript(showJavaScriptProjects)}}>Javascript Projects</button>
            </div>
            <div className="project-container">
                {showJavaScript}
            </div>
        </div>
    )
}