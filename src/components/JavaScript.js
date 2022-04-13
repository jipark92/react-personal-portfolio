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
        } else if (pageNumber === 4) {
            pageItems[15].scrollIntoView()
            setPageNumber(5)
        } else if (pageNumber === 5) {
            pageItems[18].scrollIntoView()
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
        } else if (pageNumber === 5) {
            pageItems[12].scrollIntoView()
            setPageNumber(4)
        } else if (pageNumber === 6) {
            pageItems[18].scrollIntoView()
            setPageNumber(5)
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

    return (
        <div className="content-container">
            <h3>Filters:</h3>
            <div className='buttons-container'>
                <button onClick={all}>All Javascript</button>
                <button onClick={practices}>Javascript Practices</button>
                <button onClick={api}>Javascript API</button>
                <button onClick={projects}>Javascript Projects</button>
            </div>
            <div className="project-container">
                {showJavaScript}
            </div>
            <div className='up-down-container'>
                <button onClick={pageUp}>&#8679;</button>
                <p className='page-number'>{pageNumber}</p>
                <button onClick={pageDown}>&#8681;</button>
            </div>
        </div>
    )
}