import React, {useState} from 'react'
import Projects from './Projects'
import projectDatas from '../data'

export default function All(props) {
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
    const [pageNumber, setPageNumber] = useState(0)

    //
    const pageDown = () => {
        const pageItems = document.querySelectorAll('.projects')
        if (pageNumber === 0 ){
            pageItems[3].scrollIntoView()
            setPageNumber((prevPageNumber)=>prevPageNumber + 1)
        } else if (pageNumber === 1 ){
            pageItems[6].scrollIntoView()
            setPageNumber((prevPageNumber)=>prevPageNumber + 1)
        } else if (pageNumber === 2 ){
            pageItems[9].scrollIntoView()
            setPageNumber((prevPageNumber)=>prevPageNumber + 1)
        } else if (pageNumber === 3 ){
            pageItems[12].scrollIntoView()
            setPageNumber((prevPageNumber)=>prevPageNumber + 1)
        } else if (pageNumber === 4 ){
            pageItems[15].scrollIntoView()
            setPageNumber((prevPageNumber)=>prevPageNumber + 1)
        } else if (pageNumber === 5 ){
            pageItems[18].scrollIntoView()
            setPageNumber((prevPageNumber)=>prevPageNumber + 1)
        } else if (pageNumber === 6 ){
            pageItems[21].scrollIntoView()
            setPageNumber((prevPageNumber)=>prevPageNumber + 1)
        } else if (pageNumber === 7 ){
            pageItems[24].scrollIntoView()
            setPageNumber((prevPageNumber)=>prevPageNumber + 1)
        } else if (pageNumber === 8 ){
            pageItems[27].scrollIntoView()
            setPageNumber((prevPageNumber)=>prevPageNumber + 1)
        } else if (pageNumber === 9 ){
            pageItems[30].scrollIntoView()
            setPageNumber((prevPageNumber)=>prevPageNumber + 1)
        } else if (pageNumber === 10 ){
            pageItems[33].scrollIntoView()
            setPageNumber((prevPageNumber)=>prevPageNumber + 1)
        } else if (pageNumber === 11 ){
            pageItems[36].scrollIntoView()
            setPageNumber((prevPageNumber)=>prevPageNumber + 1)
        } else if (pageNumber === 12 ){
            pageItems[39].scrollIntoView()
        }
    }
    const pageUp = () => {
        const pageItems = document.querySelectorAll('.projects')
        if (pageNumber === 12 ){
            pageItems[36].scrollIntoView()
            setPageNumber((prevPageNumber)=>prevPageNumber - 1)
        } else if (pageNumber === 11) {
            pageItems[33].scrollIntoView()
            setPageNumber((prevPageNumber)=>prevPageNumber - 1)
        } else if (pageNumber === 10) {
            pageItems[30].scrollIntoView()
            setPageNumber((prevPageNumber)=>prevPageNumber - 1)
        } else if (pageNumber === 9) {
            pageItems[27].scrollIntoView()
            setPageNumber((prevPageNumber)=>prevPageNumber - 1)
        } else if (pageNumber === 8) {
            pageItems[24].scrollIntoView()
            setPageNumber((prevPageNumber)=>prevPageNumber - 1)
        } else if (pageNumber === 7) {
            pageItems[21].scrollIntoView()
            setPageNumber((prevPageNumber)=>prevPageNumber - 1)
        } else if (pageNumber === 6) {
            pageItems[18].scrollIntoView()
            setPageNumber((prevPageNumber)=>prevPageNumber - 1)
        } else if (pageNumber === 5) {
            pageItems[15].scrollIntoView()
            setPageNumber((prevPageNumber)=>prevPageNumber - 1)
        } else if (pageNumber === 4) {
            pageItems[12].scrollIntoView()
            setPageNumber((prevPageNumber)=>prevPageNumber - 1)
        } else if (pageNumber === 3) {
            pageItems[9].scrollIntoView()
            setPageNumber((prevPageNumber)=>prevPageNumber - 1)
        } else if (pageNumber === 2) {
            pageItems[6].scrollIntoView()
            setPageNumber((prevPageNumber)=>prevPageNumber - 1)
        } else if (pageNumber === 1) {
            pageItems[3].scrollIntoView()
            setPageNumber((prevPageNumber)=>prevPageNumber - 1)
        } else if (pageNumber === 0) {
            pageItems[0].scrollIntoView()
        }
    }

    return (
        <div className="content-container">
            <div className="project-container">
                {showDisplay}
            </div>
            <div className='up-down-container'>
                <button onClick={pageUp}>&#8679;</button>
                <p className='page-number'>{pageNumber}</p>
                <button onClick={pageDown}>&#8681;</button>
            </div>
        </div>
    )
}