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
            setPageNumber(6)
        } else if (pageNumber === 6) {
            pageItems[21].scrollIntoView()
            setPageNumber(7)
        } else if (pageNumber === 7) {
            pageItems[24].scrollIntoView()
            setPageNumber(8)
        } else if (pageNumber === 8) {
            pageItems[27].scrollIntoView()
            setPageNumber(9)
        } else if (pageNumber === 9) {
            pageItems[30].scrollIntoView()
            setPageNumber(10)
        } else if (pageNumber === 10) {
            pageItems[33].scrollIntoView()
            setPageNumber(11)
        } else if (pageNumber === 11) {
            pageItems[36].scrollIntoView()
            setPageNumber(12)
        } else if (pageNumber === 12) {
            pageItems[39].scrollIntoView()
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
        } else if (pageNumber === 5){
            pageItems[12].scrollIntoView()
            setPageNumber(4)
        } else if (pageNumber === 6){
            pageItems[15].scrollIntoView()
            setPageNumber(5)
        } else if (pageNumber === 7){
            pageItems[18].scrollIntoView()
            setPageNumber(6)
        } else if (pageNumber === 8){
            pageItems[21].scrollIntoView()
            setPageNumber(7)
        } else if (pageNumber === 9){
            pageItems[24].scrollIntoView()
            setPageNumber(8)
        } else if (pageNumber === 10){
            pageItems[27].scrollIntoView()
            setPageNumber(9)
        } else if (pageNumber === 11){
            pageItems[30].scrollIntoView()
            setPageNumber(10)
        } else if (pageNumber === 12){
            pageItems[33].scrollIntoView()
            setPageNumber(11)
        } else if (pageNumber === 13){
            pageItems[36].scrollIntoView()
            setPageNumber(12)
        }
    }

    return (
        <div className="content-container">
            <div className="project-container">
                {showAll}
            </div>
            <div className='up-down-container'>
                <button onClick={pageUp}>&#8679;</button>
                <p className='page-number'>{pageNumber}</p>
                <button onClick={pageDown}>&#8681;</button>
            </div>
        </div>
    )
}