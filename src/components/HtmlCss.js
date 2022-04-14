import React, {useState} from 'react'
import Projects from './Projects'
import projectDatas from '../data'

export default function HtmlCss() {

    const pageItems = document.querySelectorAll('.projects')

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
            pageItems[4].scrollIntoView()
            setPageNumber(1)
        } else if (pageNumber === 1) {
            pageItems[8].scrollIntoView()
            setPageNumber(2)
        } else if (pageNumber === 2) {
            pageItems[12].scrollIntoView()
            setPageNumber(3)
        } else if (pageNumber === 3) {
            pageItems[12].scrollIntoView()
        } 
    }
    const pageUp = () => {
        const pageItems = document.querySelectorAll('.projects')
        if (pageNumber === 1) {
            pageItems[0].scrollIntoView()
            setPageNumber(0)
        } else if (pageNumber === 2){
            pageItems[4].scrollIntoView()
            setPageNumber(1)
        } else if (pageNumber === 3){
            pageItems[8].scrollIntoView()
            setPageNumber(2)
        } 
    }

    const all = () => {
        pageItems[0].scrollIntoView()
        setShowHtmlCss(showAllHtmlCss)
        setPageNumber(0)
    }

    const practices = () =>{ 
        pageItems[0].scrollIntoView()
        setShowHtmlCss(showHtmlCssPractices)
        setPageNumber(0)
    }

    const projects = () => {
        pageItems[0].scrollIntoView()
        setShowHtmlCss(showHtmlCssProjects)
        setPageNumber(0)
    }

    const colorPageNumber = () => {
        if (pageNumber === 0 ){
            return <p Style="color:rgb(15, 255, 175)">{pageNumber}</p>
        } else {
            return <p>{pageNumber}</p>
        }
    }

    return (
        <div className="content-container">
            <div className='filters-container'>
                <h3 className='filter-text'>Filters:</h3>
                <div className='buttons-container'>
                    <button onClick={all}>Show All HTML/CSS</button>
                    <button onClick={practices}>HTML/CSS Practices</button>
                    <button onClick={projects}>HTML/CSS Projects</button>
                </div>
            </div>
            <div className="project-container">
                {showHtmlCss}
            </div>
            <div className='up-down-container'>
                <button onClick={pageUp}>&#8679;</button>
                <p className='page-number'>{colorPageNumber()}</p>
                <button onClick={pageDown}>&#8681;</button>
            </div>
        </div>
    )
}