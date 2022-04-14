import React, {useState} from 'react'
import projectDatas from '../data'
import Projects from './Projects'

export default function JavaScript() {

    const pageItems = document.querySelectorAll('.projects')

    const [pageNumber, setPageNumber] = useState(0)

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
            pageItems[16].scrollIntoView()
            setPageNumber(4)
        } else if (pageNumber === 4) {
            pageItems[20].scrollIntoView()
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
        } else if (pageNumber === 4){
            pageItems[12].scrollIntoView()
            setPageNumber(3)
        } 
    }

    const all = () => {
        pageItems[0].scrollIntoView()
        setShowJavaScript(showAllJavaScript)
        setPageNumber(0)
    }

    const practices = () =>{ 
        pageItems[0].scrollIntoView()
        setShowJavaScript(showJavaScriptPratcies)
        setPageNumber(0)
    }

    const api = () =>{ 
        pageItems[0].scrollIntoView()
        setShowJavaScript(showJavaScriptApi)
        setPageNumber(0)
    }

    const projects = () => {
        pageItems[0].scrollIntoView()
        setShowJavaScript(showJavaScriptProjects)
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
                    <button onClick={all}>All Javascript</button>
                    <button onClick={practices}>Javascript Practices</button>
                    <button onClick={api}>Javascript API</button>
                    <button onClick={projects}>Javascript Projects</button>
                </div>
            </div>
            <div className="project-container">
                {showJavaScript}
            </div>
            <div className='up-down-container'>
                <button onClick={pageUp}>&#8679;</button>
                <p className='page-number'>{colorPageNumber()}</p>
                <button onClick={pageDown}>&#8681;</button>
            </div>
        </div>
    )
}