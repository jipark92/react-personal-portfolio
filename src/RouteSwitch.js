import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Heading from './components/Heading'
import All from './components/All'
import HtmlCss from './components/HtmlCss'
import JavasSript from './components/JavaScript'
import Reactjs from './components/Reactjs'

export default function RouteSwitch() {

    return (
        <BrowserRouter>
            <Heading/>
            <Routes>
                <Route path='/' element={<All/>}/>
                <Route path='/htmlcss' element={<HtmlCss/>}/>
                <Route path='/javascript' element={<JavasSript/>}/>
                <Route path='/react' element={<Reactjs/>}/>
            </Routes>
        </BrowserRouter>
    )
}
