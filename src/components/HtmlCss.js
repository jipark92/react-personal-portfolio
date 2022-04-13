import React, {useEffect, useState} from 'react'
import Projects from './Projects'
import projectDatas from '../data'


export default function HtmlCss() {
    const [pageNumber, setPageNumber] = useState(0)

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


    
    const pageDown = () => {
        const pageItems = document.querySelectorAll('.projects')
        if (pageNumber === 0 ){
            pageItems[3].scrollIntoView()
            setPageNumber(1)
        } else if (pageNumber === 1) {
            pageItems[6].scrollIntoView()
            setPageNumber(2)
        } else if (pageNumber === 2) {
            pageItems[9].scrollIntoView()
            setPageNumber(3)
        } else if (pageNumber === 3) {
            pageItems[12].scrollIntoView()
            setPageNumber(4)
        } 
    }
    const pageUp = () => {
        const pageItems = document.querySelectorAll('.projects')
        if (pageNumber === 1) {
            pageItems[0].scrollIntoView()
            setPageNumber(0)
        } else if (pageNumber === 2){
            pageItems[3].scrollIntoView()
            setPageNumber(1)
        } else if (pageNumber === 3){
            pageItems[6].scrollIntoView()
            setPageNumber(2)
        } else if (pageNumber === 4){
            pageItems[9].scrollIntoView()
            setPageNumber(3)
        }
    }

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
            <div className='up-down-container'>
                <button onClick={pageUp}>&#8679;</button>
                <p className='page-number'>{pageNumber}</p>
                <button onClick={pageDown}>&#8681;</button>
            </div>
        </div>
    )
}
