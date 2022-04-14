import React from 'react'
import { Link } from 'react-router-dom'

export default function Heading() {
    return (
        <header className="title-container">
            <nav>
            <h1>Programming Languages</h1>
                <ul>
                    <Link to='/'>
                        <li>ALL</li>
                    </Link>
                    <Link to='/htmlcss'>
                        <li>Html/Css</li>
                    </Link>
                    <Link to='/javascript'>
                        <li>Javascript</li>
                    </Link>
                    <Link to='/react'>
                        <li>Reactjs</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}