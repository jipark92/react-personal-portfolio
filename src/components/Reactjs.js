import React, { useState } from 'react'
import projectDatas from '../data'
import Projects from './Projects'

export default function Reactjs() {

    const pageItems = document.querySelectorAll('.projects')

    const [pageNumber, setPageNumber] = useState(0)

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

    const pageDown = () => {
        const pageItems = document.querySelectorAll('.projects')
        if (pageNumber === 0 ){
            pageItems[4].scrollIntoView()
            setPageNumber(1)
        } else if (pageNumber === 1) {
            pageItems[8].scrollIntoView()
            setPageNumber(2)
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
        } 
    }

    const all = () => {
        pageItems[0].scrollIntoView()
        setShowReact(showAllReact)
        setPageNumber(0)
    }

    const practices = () =>{ 
        pageItems[0].scrollIntoView()
        setShowReact(showReactPractices)
        setPageNumber(0)
    }

    const projects = () => {
        pageItems[0].scrollIntoView()
        setShowReact(showReactProjects)
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
                    <button onClick={all}>Show All React</button>
                    <button onClick={practices}>React Practices</button>
                    <button onClick={projects}>React Projects</button>
                </div>
            </div>
            <div className="project-container">
                {showReact}
            </div>
            <div className='up-down-container'>
                <button onClick={pageUp}>&#8679;</button>
                <p className='page-number'>{colorPageNumber()}</p>
                <button onClick={pageDown}>&#8681;</button>
            </div>
        </div>
    )
}