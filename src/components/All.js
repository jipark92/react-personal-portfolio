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

    const [pageNumber, setPageNumber] = useState(0)
    
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
            setPageNumber(5)
        } else if (pageNumber === 5) {
            pageItems[24].scrollIntoView()
            setPageNumber(6)
        } else if (pageNumber === 6) {
            pageItems[28].scrollIntoView()
            setPageNumber(7)
        } else if (pageNumber === 7) {
            pageItems[32].scrollIntoView()
            setPageNumber(8)
        } else if (pageNumber === 8) {
            pageItems[36].scrollIntoView()
            setPageNumber(9)
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
        } else if (pageNumber === 5){
            pageItems[16].scrollIntoView()
            setPageNumber(4)
        } else if (pageNumber === 6){
            pageItems[20].scrollIntoView()
            setPageNumber(5)
        } else if (pageNumber === 7){
            pageItems[24].scrollIntoView()
            setPageNumber(6)
        } else if (pageNumber === 8){
            pageItems[28].scrollIntoView()
            setPageNumber(7)
        } else if (pageNumber === 9){
            pageItems[32].scrollIntoView()
            setPageNumber(8)
        }
    }

    const colorPageNumber = () => {
        if (pageNumber === 9) {
            return <p Style="color:red">{pageNumber}</p>
        } else if (pageNumber === 0 ){
            return <p Style="color:rgb(15, 255, 175)">{pageNumber}</p>
        } else {
            return <p>{pageNumber}</p>
        }
    }

    return (
        <div className="content-container">
            <div className="project-container">
                {showAll}
            </div>
            <div className='up-down-container'>
                <button onClick={pageUp}>&#8679;</button>
                <div className='page-number'>
                    {colorPageNumber()}
                </div>
                <button onClick={pageDown}>&#8681;</button>
            </div>
        </div>
    )
}