import React, {useState} from 'react'
import Projects from './Projects'
import projectDatas from '../data'

export default function All() {
    const showAll = projectDatas.map((projectData)=>{
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
    })

    const showJavascript = projectDatas.map((projectData)=>{ 
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

    const showJavascriptPractices = projectDatas.map((projectData)=>{ 
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

    const showReact = projectDatas.map((projectData)=>{ 
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

    const showHtmlProjects = projectDatas.map((projectData)=>{ 
        if (projectData.type === "html"){
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

    const showHtmlPractices = projectDatas.map((projectData)=>{ 
        if (projectData.type === "html practice"){
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

    const showJsApiProjects = projectDatas.map((projectData)=>{ 
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

    const showReactApiProjects = projectDatas.map((projectData)=>{ 
        if (projectData.type === "react api"){
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

    const [showDisplay, setShowDisplay] = useState(showAll)


    return (
        <div className="content-container">
            <div className="project-container">
                {showDisplay}
            </div>
        </div>
    )
}



{/* <div className="option-container">
<select className='select-container'>
    <option onClick={()=>{setShowDisplay(showAll)}}>All</option>
    <option onClick={()=>{setShowDisplay(showHtmlProjects)}}>HTML Projects</option>
    <option onClick={()=>{setShowDisplay(showHtmlPractices)}}>HTML/Css Practices</option>
    <option onClick={()=>{setShowDisplay(showJsApiProjects)}}>Javascript API</option>
    <option onClick={()=>{setShowDisplay(showJavascriptPractices)}}>Javascript Practices</option>
    <option onClick={()=>{setShowDisplay(showJavascript)}}>Javascript Projects</option>
    <option onClick={()=>{setShowDisplay(showReactApiProjects)}}>React API</option>
    <option onClick={()=>{setShowDisplay(showReactPractices)}}>React Practices</option>
    <option onClick={()=>{setShowDisplay(showReact)}}>React Projects</option>
</select>
</div> */}