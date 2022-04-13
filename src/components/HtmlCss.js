import React, {useState} from 'react'
import Projects from './Projects'
import projectDatas from '../data'


export default function HtmlCss() {

    const showAllHtmlCss = projectDatas.map((projectData)=>{
        if (projectData.type ==="html" || projectData.type === "html practice"){
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

    const showHtmlCssPractices = projectDatas.map((projectData)=>{
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

    const showHtmlCssProjects = projectDatas.map((projectData)=>{
        if (projectData.type ==="html"){
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

    const [showHtmlCss, setShowHtmlCss] = useState(showAllHtmlCss)

    return (
        <div className="content-container">
            <h3>Filters:</h3>
            <div className='buttons-container'>
                <button onClick={()=>{setShowHtmlCss(showAllHtmlCss)}}>Show All HTML/CSS</button>
                <button onClick={()=>{setShowHtmlCss(showHtmlCssPractices)}}>HTML/CSS Practices</button>
                <button onClick={()=>{setShowHtmlCss(showHtmlCssProjects)}}>HTML/CSS Projects</button>
            </div>
            <div className="project-container">
                {showHtmlCss}
            </div>
        </div>
    )
}
