import React from "react"

export default function ProjectScroll() {
    const [pageNumber, setPageNumber] = React.useState(0)

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
}
