import React from 'react'
import Projects from './Projects'
import projectDatas from '../data'

export default function Content() {
    const showAll = projectDatas.map((projectData)=>{
        return (
            <Projects 
                key={projectData.id}
                img={projectData.img}
                name={projectData.name}
                description={projectData.description}
                live={projectData.live}
                repo={projectData.repo}
            />
        )
    })

    const showJavascript = projectDatas.map((projectData)=>{ 
        if (projectData.type === "javascript"){
            return (
                <Projects 
                    key={projectData.id}
                    img={projectData.img}
                    name={projectData.name}
                    description={projectData.description}
                />
            )
        }
    })

    const showJavascriptPractices = projectDatas.map((projectData)=>{ 
        if (projectData.type === "javascript practice"){
            return (
                <Projects 
                    key={projectData.id}
                    img={projectData.img}
                    name={projectData.name}
                    description={projectData.description}
                />
            )
        }
    })

    const showReact = projectDatas.map((projectData)=>{ 
        if (projectData.type === "react"){
            return (
                <Projects 
                    key={projectData.id}
                    img={projectData.img}
                    name={projectData.name}
                    description={projectData.description}
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
                />
            )
        }
    })

    const showHtmlProjects = projectDatas.map((projectData)=>{ 
        if (projectData.type === "html"){
            return (
                <Projects 
                    key={projectData.id}
                    img={projectData.img}
                    name={projectData.name}
                    description={projectData.description}
                />
            )
        }
    })

    const showHtmlPractices = projectDatas.map((projectData)=>{ 
        if (projectData.type === "html practice"){
            return (
                <Projects 
                    key={projectData.id}
                    img={projectData.img}
                    name={projectData.name}
                    description={projectData.description}
                />
            )
        }
    })

    const showJsApiProjects = projectDatas.map((projectData)=>{ 
        if (projectData.type === "javascript api"){
            return (
                <Projects 
                    key={projectData.id}
                    img={projectData.img}
                    name={projectData.name}
                    description={projectData.description}
                />
            )
        }
    })

    const showReactApiProjects = projectDatas.map((projectData)=>{ 
        if (projectData.type === "react api"){
            return (
                <Projects 
                    key={projectData.id}
                    img={projectData.img}
                    name={projectData.name}
                    description={projectData.description}
                />
            )
        }
    })


    const [showDisplay, setShowDisplay] = React.useState(showAll)


    return (
        <div className="content-container">
            <div className="option-container">
                <select>
                    <option onClick={()=>{setShowDisplay(showAll)}}>All</option>
                    <option onClick={()=>{setShowDisplay(showJsApiProjects)}}>Javascript API</option>
                    <option onClick={()=>{setShowDisplay(showJavascript)}}>Javascript Projects</option>
                    <option onClick={()=>{setShowDisplay(showJavascriptPractices)}}>Javascript Practices</option>
                    <option onClick={()=>{setShowDisplay(showReactApiProjects)}}>React API</option>
                    <option onClick={()=>{setShowDisplay(showReact)}}>React Projects</option>
                    <option onClick={()=>{setShowDisplay(showReactPractices)}}>React Practices</option>
                    <option onClick={()=>{setShowDisplay(showHtmlProjects)}}>HTML Projects</option>
                    <option onClick={()=>{setShowDisplay(showHtmlPractices)}}>HTML/Css Practices</option>
                </select>
            </div>
            <div className="project-container">
                {showDisplay}
            </div>
        </div>
    )
}
